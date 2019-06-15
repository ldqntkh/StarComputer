<?php

include plugin_dir_path( __FILE__ ) . '/lib/categoryHelper.php';

if (!function_exists('getListCategorySpecial')) :
    function getListCategorySpecial(WP_REST_Request $request) {
        if ( has_nav_menu( 'special-menu' ) ) {
            $special_menus = wp_get_nav_menu_items('special-menu');
            $ID = isset($_GET[ 'cat_id' ]) ? esc_attr( $_GET[ 'cat_id' ] ) : "0";
            return array(
                "status" => "OK",
                "errMsg" => "",
                "data" => findListMenuAttributes($special_menus)
            );
        }
        return array(
            "status" => "FAIL",
            "errMsg" => "Cannot find mennu",
            "data" => null
        ); 
    }
endif;

