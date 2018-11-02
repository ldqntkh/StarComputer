<?php

    function wg_sale_homepage_init() {
        //if ( woocommerce_is_active() ) :
            require_once SALE_DATE_DIR . '/widget/homepage-widget/home-wc-primetime-price-shock-widget.php';
            require_once SALE_DATE_DIR . '/widget/homepage-widget/home-show-product-sale.php';

            register_widget( 'ShowListProductSale' );
            register_widget( 'Primetime_Price_Shock' );
        //endif;
    }

    // init widget
    add_action('widgets_init', 'wg_sale_homepage_init');

?>