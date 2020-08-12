<?php 

/*
    Template Name: Custom checkout page
*/

    $checkout_step = 2; // with 1 is login
    require_once( 'checkout/lib/checkout-address-form.php' );

    if (isset($_GET['delete-address']) && !empty($_GET['delete-address'])) {
       delete_address();
    }

    if ( isset( $_POST['shipping_account_address_action'] ) ) {
        // die;
        save_shipping_addresses();
    }

    $checkout_step = WC()->session->get('checkoutstep');
    if (empty( $checkout_step )) $checkout_step = 2;
    
    // if ( ! is_user_logged_in() ) {
    //     $checkout_step = 1;
    // } else
    if (isset($_GET['type']) && ($_GET['type']==='login' || $_GET['type']==='register' )) {
        $currentUser = wp_get_current_user();
        if ($currentUser->ID === 0) {
            $checkout_step = 1;
        } else  {
            $checkout_step = WC()->session->get('checkoutstep');
        }
    }
    else if ( WC()->session->__isset( 'checkoutstep' ) && ! isset( $wp->query_vars['order-received'] ) ) {
        $checkout_step = WC()->session->get('checkoutstep');
    } else if ( isset( $wp->query_vars['order-received'] ) ) {
        WC()->session->__unset( 'checkoutstep' );
        $checkout_step = 4;
    }
    include_once( 'checkout/checkout-head.php' );
    include_once( 'checkout/checkout-body.php' );
    get_footer();

?>