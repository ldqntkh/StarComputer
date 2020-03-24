<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// HOOK creaet admin menu
add_action( 'admin_menu', 'star_brand_menu', 20 );
function star_brand_menu() {
    add_options_page( 'Trả góp', 'Trả góp', 'manage_options', 'star_brands', 'setting_star_brands' );
}

function setting_star_brands() {
    if ( isset( $_GET['type'] ) && $_GET['type'] == 'edit' ) {
        $brand_id = $_GET['brand_id'];

        if ( empty( $brand_id ) ) {
            wp_redirect( admin_url( 'admin.php?page=star_brands' ) );
        } else {
            $objBrand = new StarBrand();

            $brand = $objBrand->getBrandByid( $brand_id );

            if ( $brand == null ) wp_redirect( admin_url( 'admin.php?page=star_brands' ) );
            else include_once BRAND_PLUGIN_DIR . '/includes/views/admin/edit-brand.php';
        }
    }
    else include_once BRAND_PLUGIN_DIR . '/includes/views/admin/manage-brands.php';
}
