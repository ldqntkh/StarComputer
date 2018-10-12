<?php
/**
 * Plugin Name:       WooCommerce Sale date manager
 * Description:       WooCommerce Sale date manager
 * Version:           1.0.0
 * Author:            Anthony Le
 * Text Domain:       woocommerce-sale-date
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
define( 'SALE_DATE_DIR', plugin_dir_path( __FILE__ ) );
define( 'SALE_DATE_URL', plugin_dir_url( __FILE__ ) );

class WC_Meta_box_sale_date {
    
    public function init() {
        global $product_object;
        // render template
        include SALE_DATE_DIR . '/views/schedule-sale-price.php';
    }

    public function save_custom_sale_date($post_id) {
        // coding here
        $product = wc_get_product( $post_id );
        $_custom_sale_monday = $_POST['_custom_sale_monday'];
        $_custom_sale_tuesday = $_POST['_custom_sale_tuesday'];
        $_custom_sale_wednesday = $_POST['_custom_sale_wednesday'];
        $_custom_sale_thursday = $_POST['_custom_sale_thursday'];
        $_custom_sale_fridays = $_POST['_custom_sale_fridays'];
        $_custom_sale_saturday = $_POST['_custom_sale_saturday'];
        $_custom_sale_sunday = $_POST['_custom_sale_sunday'];
        $_custom_sale_all_week = $_POST['_custom_sale_all_week'];

        $_custom_sale_start_time = sanitize_text_field($_POST['_custom_sale_start_time']);
        $_custom_sale_end_time = sanitize_text_field($_POST['_custom_sale_end_time']);

        $product->update_meta_data( '_custom_sale_monday', empty($_custom_sale_monday) ? '' : $_custom_sale_monday );
        $product->update_meta_data( '_custom_sale_tuesday', empty($_custom_sale_tuesday) ? '' : $_custom_sale_tuesday );
        $product->update_meta_data( '_custom_sale_wednesday', empty($_custom_sale_wednesday) ? '' : $_custom_sale_wednesday );
        $product->update_meta_data( '_custom_sale_thursday', empty($_custom_sale_thursday) ? '' : $_custom_sale_thursday );
        $product->update_meta_data( '_custom_sale_fridays', empty($_custom_sale_fridays) ? '' : $_custom_sale_fridays );
        $product->update_meta_data( '_custom_sale_saturday', empty($_custom_sale_saturday) ? '' : $_custom_sale_saturday );
        $product->update_meta_data( '_custom_sale_sunday', empty($_custom_sale_sunday) ? '' : $_custom_sale_sunday );
        $product->update_meta_data( '_custom_sale_all_week', empty($_custom_sale_all_week) ? '' : $_custom_sale_all_week );
        $product->update_meta_data( '_custom_sale_start_time', empty($_custom_sale_start_time) ? '0' : $_custom_sale_start_time );
        $product->update_meta_data( '_custom_sale_end_time', empty($_custom_sale_end_time) ? '0' : $_custom_sale_end_time );

        $product->save();
    }
}
/**
 * check if WooCommerce activated
 */
function woocommerce_is_active() {
	return class_exists( 'WooCommerce' ) ? true : false;
}
//if ( woocommerce_is_active() ) :
    add_action( 'woocommerce_product_options_pricing' , array(new WC_Meta_box_sale_date(), 'init') );
    // save custom fields
    add_action( 'woocommerce_process_product_meta' , array(new WC_Meta_box_sale_date(), 'save_custom_sale_date') );

    // register widget
    include SALE_DATE_DIR . '/widget/homepage-widget/homepage.php';

    // register api
    include SALE_DATE_DIR . '/api/function.php';

    // init widget
    //add_action('widgets_init', 'wg_sale_homepage_init');
    
//endif;