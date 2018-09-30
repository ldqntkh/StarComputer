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

if ( ! class_exists( 'WC_Employee_Discounts', false ) ) :
    /**
     * WC_Employee_Discounts Class.
     */
    class WC_Employee_Discounts {

        public function on_loaded() {
            add_action( 'woocommerce_order_status_completed', array( $this, 'insert_info_discount_to_employee' ) );
        }

        public static function get_product_custom_attribute( $product, $key ) {
            $result = array_shift( wc_get_product_terms( $product->id, 'pa_' . $key, array( 'fields' => 'names' ) ) ); 
            return $result;
        }

        public static function calculate_employee_discount($product) {
            $result = 0.0;
            $employee_discount = floatval( self::get_product_custom_attribute( $product, 'employeediscount' ) );
            $employee_fixed_price_discount = floatval( self::get_product_custom_attribute( $product, 'employeefixedpricediscount' ) );
            $regular_price = floatval( $product->get_price() );
            $base_price = floatval( self::get_product_custom_attribute( $product, 'baseprice' ) );

            if ($regular_price > $base_price) {
                $result = ( ($regular_price - $base_price) * $employee_discount ) / 100;
            } else {
                $result = $employee_fixed_price_discount;
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
            $order_date       = date('Y-m-d');
            $order            = wc_get_order( $order_id );
            $customer_id      = $order->get_customer_id();
            $history_discount = get_user_meta( $customer_id, 'history_discount', true );
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

                    if ($discount <= 0) {
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
                    update_user_meta( $customer_id, 'history_discount', json_encode( $result ) );
                }
            }
        }
    }
endif;

$wc_employee_discounts = new WC_Employee_Discounts();
add_action('wp_loaded', array($wc_employee_discounts, 'on_loaded'));