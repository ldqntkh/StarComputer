<?php 

/*
    Template Name: Custom checkout page
*/

    $step = 2; // login form
    $otherAddr = get_user_meta( wp_get_current_user()->ID, 'wc_multiple_shipping_addresses', true );
    $addressSelected = [];
    if ( isset( $_GET['step'] ) && $_GET['step'] === 'shipping' ) {
        WC()->session->set( 'checkoutstep', 2 );
    }

    // if ( ! is_user_logged_in() ) {
    //     $step = 1;
    // } else 
    if ( WC()->session->__isset( 'checkoutstep' ) && ! isset( $wp->query_vars['order-received'] ) ) {
        $step = WC()->session->get('checkoutstep');
    } else if ( isset( $wp->query_vars['order-received'] ) ) {

        WC()->session->__unset( 'checkoutstep' );
        $step = 4;
    }
    include_once( 'checkout/checkout-head.php' );
    include_once( 'checkout/checkout-body.php' );
    get_footer();

?>