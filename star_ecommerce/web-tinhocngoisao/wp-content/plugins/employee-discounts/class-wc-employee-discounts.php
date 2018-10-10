<?php

/**
 * Plugin Name: WC_Employee_Discounts
 * Plugin URI: https://web-tinhocngoisao.com/
 * Description: Calculating and store employee discounts.
 * Version: 1.0
 * Author: Khai Truong
 * Author URI: https://web-tinhocngoisao.com/
 * License: GPL
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

define( 'EMPLOYEE_DISCOUNTS_DIR', plugin_dir_path( __FILE__ ) );
define( 'EMPLOYEE_DISCOUNTS_URL', plugin_dir_url( __FILE__ ) );

if ( ! class_exists( 'WC_Employee_Discounts', false ) ) :
    /**
     * WC_Employee_Discounts Class.
     */
    class WC_Employee_Discounts {

        public function on_loaded() {
            add_action( 'woocommerce_order_status_completed', array( $this, 'insert_info_discount_to_employee' ), 20 );
            add_action( 'woocommerce_product_options_pricing', array( $this, 'load_templete_employee_discount' ), 20 );
            add_action( 'woocommerce_process_product_meta' , array( $this, 'save_custom_employee_discount' ), 20 );
        }

        public static function get_product_custom_attribute( $product, $key ) {
            $result = get_post_meta( $product->id, $key, true );
            return $result;
        }

        public static function calculate_employee_discount( $product ) {
            $result = 0.0;
            $price = 0.0;

            if( $product->is_on_sale() ) {
                $price = $product->get_sale_price();
            } else {
                $price = $product->get_regular_price();
            }

            $price = floatval( $price );

            $_custom_base_price = self::get_product_custom_attribute( $product, '_custom_base_price' );
            $_custom_base_price = floatval( empty( $_custom_base_price ) ? 0 : $_custom_base_price );

            $_custom_employee_percent_discount = self::get_product_custom_attribute( $product, '_custom_employee_percent_discount' );
            $_custom_employee_percent_discount = floatval( empty( $_custom_employee_percent_discount ) ? 0 : $_custom_employee_percent_discount );

            $_custom_employee_fixed_price_discount = self::get_product_custom_attribute( $product, '_custom_employee_fixed_price_discount' );
            $_custom_employee_fixed_price_discount = floatval( empty( $_custom_employee_fixed_price_discount ) ? 0 : $_custom_employee_fixed_price_discount );

            if ( $price > $_custom_base_price ) {
                $result = ( ( $price - $_custom_base_price ) * $_custom_employee_percent_discount ) / 100;
            } else {
                $result = $_custom_employee_fixed_price_discount;
            }
            return $result;
        }

        public static function get_price_discount_html( $price ) {
            return wc_price( $price, $args = array() );
        }

        public function insert_info_discount_to_employee( $order_id ) {
            if ( ! $order_id ) {
                return;
            }

            $total_discount   = 0;
            $order_date       = date( 'Y-m-d' );
            $order            = wc_get_order( $order_id );
            $customer_id      = $order->get_customer_id();
            $history_discount = get_user_meta( $customer_id, '_history_discount', true );
            $discounts         = array();
            if ( empty( $history_discount ) ) {
                $result = array();
            } else {
                $result = json_decode( $history_discount, true );
            }

            if ( $customer_id > 0 && WC_Admin_Extra_Profile::is_staff( $customer_id ) && 'shop_order_refund' !== $order->get_type() ) {

                // The loop to get the order items which are WC_Order_Item_Product objects since WC 3+
                foreach( $order->get_items() as $item_id => $item_product ) {
                    //Get the product ID
                    $product_id = $item_product->get_product_id();
                    //Get the WC_Product object
                    $product = $item_product->get_product();
                    $discount = self::calculate_employee_discount( $product );

                    if ( $discount <= 0 ) {
                        continue;
                    }

                    $total_discount = $total_discount + $discount;
                    $discounts[$product_id] = $discount;

                }

                if ( $total_discount > 0 ) {
                    $result[$order_date][$order_id] = array(
                        'discounts' => $discounts,
                        'totalDiscount' => $total_discount
                    );
                    update_user_meta( $customer_id, '_history_discount', json_encode( $result ) );
                }
            }
        }

        public function load_templete_employee_discount() {
            global $product_object;
            include EMPLOYEE_DISCOUNTS_DIR . '/views/employee-discounts.php';
        }

        public function save_custom_employee_discount( $post_id ) {
            $product = wc_get_product( $post_id );

            $_custom_base_price = $_POST[ '_custom_base_price' ];
            $_custom_base_price = empty( $_custom_base_price ) ? '' : $_custom_base_price;

            $_custom_employee_percent_discount = $_POST[ '_custom_employee_percent_discount' ];
            $_custom_employee_percent_discount = empty( $_custom_employee_percent_discount ) ? '' : $_custom_employee_percent_discount;

            $_custom_employee_fixed_price_discount = $_POST[ '_custom_employee_fixed_price_discount' ];
            $_custom_employee_fixed_price_discount = empty( $_custom_employee_fixed_price_discount ) ? '' : $_custom_employee_fixed_price_discount;

            $product->update_meta_data( '_custom_base_price',  $_custom_base_price );
            $product->update_meta_data( '_custom_employee_percent_discount',  $_custom_employee_percent_discount );
            $product->update_meta_data( '_custom_employee_fixed_price_discount',  $_custom_employee_fixed_price_discount );
            $product->save();
        }
    }
endif;

$wc_employee_discounts = new WC_Employee_Discounts();
add_action( 'wp_loaded', array( $wc_employee_discounts, 'on_loaded' ));