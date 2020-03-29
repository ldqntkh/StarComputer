<?php
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( class_exists( 'CDN_Enabler' ) ) {
    function check_valid_cdn() {
        $options = CDN_Enabler::get_options();
        if ( !empty( $options['url'] ) ) {
            return $options['url'];
        }
        return false;
    }
}

include plugin_dir_path( __FILE__ ) . '/categories/categoryMgr.php';
include plugin_dir_path( __FILE__ ) . '/products/productMgr.php';

define( 'ROOT_ROUTE', 'rest_api/v1' );
// register api route
add_action( 'rest_api_init', function () {
    register_rest_route( 'rest_api/v1', '/get_products_by_categoryid', array(
        'methods' => 'GET',
        'callback' => 'get_products_by_categoryid',
    ) );
    register_rest_route( 'rest_api/v1', '/get_products_by_productids', array(
        'methods' => 'GET',
        'callback' => 'get_products_by_productids',
    ) );
    register_rest_route( 'rest_api/v1', '/get_special_menus', array(
        'methods' => 'GET',
        'callback' => 'getListCategorySpecial',
    ) );
    register_rest_route( 'rest_api/v1', '/get_products_sales', array(
        'methods' => 'GET',
        'callback' => 'get_products_sales',
    ) );
} );