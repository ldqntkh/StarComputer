<?php
/**
 * Plugin Name:       WooCommerce build PC manager
 * Description:       WooCommerce build PC manager
 * Version:           1.0.0
 * Author:            Anthony Le
 * Text Domain:       woocommerce-buildpc
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
define( 'BUILD_PC_DIR', plugin_dir_path( __FILE__ ) );
define( 'BUILD_PC_URL', plugin_dir_url( __FILE__ ) );

class Build_PC_Manager {
    public function init_tab_label() {
        global $product_object;
        include BUILD_PC_DIR . '/views/build-pc-tab-label.php';
    }

    public function init_tab_data() {
        global $product_object;
        // this data will uses to display in storefront
        $product_types = array(
            array(
                "name" => __('Choose a product type', 'woocommerce-buildpc'),
                "value" => "",
                "require" => false
            ),
            array(
                "name" => __('CPU', 'woocommerce-buildpc'),
                "value" => "cpu",
                "require" => true
            ),
            array(
                "name" => __('Main', 'woocommerce-buildpc'),
                "value" => "main",
                "require" => true
            ),
            array(
                "name" => __('RAM', 'woocommerce-buildpc'),
                "value" => "ram",
                "require" => true
            ),
            array(
                "name" => __('SSD', 'woocommerce-buildpc'),
                "value" => "ssd",
                "require" => false,
                "link" => "hdd"
            ),
            array(
                "name" => __('HDD', 'woocommerce-buildpc'),
                "value" => "hdd",
                "require" => false,
                "link" => "ssd"
            ),
            array(
                "name" => __('Optane', 'woocommerce-buildpc'),
                "value" => "optane",
                "require" => false
            ),
            array(
                "name" => __('VGA', 'woocommerce-buildpc'),
                "value" => "vga",
                "require" => false
            ),
            array(
                "name" => __('Power', 'woocommerce-buildpc'),
                "value" => "power",
                "require" => true
            ),
            array(
                "name" => __('Case', 'woocommerce-buildpc'),
                "value" => "case",
                "require" => false
            ),
            array(
                "name" => __('Radiator', 'woocommerce-buildpc'),
                "value" => "radiator",
                "require" => true
            ),
            array(
                "name" => __('Screen', 'woocommerce-buildpc'),
                "value" => "screen",
                "require" => false
            ),
            array(
                "name" => __('Keyboard', 'woocommerce-buildpc'),
                "value" => "keyboard",
                "require" => false
            ),
            array(
                "name" => __('Mouse', 'woocommerce-buildpc'),
                "value" => "mouse",
                "require" => false
            ),
            array(
                "name" => __('Headphone', 'woocommerce-buildpc'),
                "value" => "headphone",
                "require" => false
            ),
            array(
                "name" => __('Soundcase', 'woocommerce-buildpc'),
                "value" => "soundcase",
                "require" => false
            ),
        );
        include BUILD_PC_DIR . '/views/build-pc-tab-data.php';
    }

    public function save_buildpc_data($post_id) {
        try {
            $product = wc_get_product( $post_id );
            //die;
            if (isset( $_POST['buildpc-type'] )) {
                $product->update_meta_data( '_buildpc-type', $_POST['buildpc-type'] );
            }
            if ( isset( $_POST['buildpc-ids'] ) ) { // not use
                $buildpcs = array();
                $ids     = $_POST['buildpc-ids'];

                if ( ! empty( $ids ) ) {
                    foreach ( $ids as $id ) {
                        if ( $id && $id > 0 ) {
                            $buildpcs[] = $id;
                        }
                    }

                    $product->update_meta_data( '_linked_buildpc_ids', empty($buildpcs) ? [] : $buildpcs );
                } 
            }
            $product->save();
        } catch(Exception $e) {
            var_dump($e);
            die;
        }
        
    }
}

// woocommerce_product_write_panel_tabs
add_action( 'woocommerce_product_write_panel_tabs' , array(new Build_PC_Manager(), 'init_tab_label') );
add_action( 'woocommerce_product_data_panels' , array(new Build_PC_Manager(), 'init_tab_data') );

// save custom fields
add_action( 'woocommerce_process_product_meta' , array(new Build_PC_Manager(), 'save_buildpc_data') );

// register api
include BUILD_PC_DIR . '/api/function.php';