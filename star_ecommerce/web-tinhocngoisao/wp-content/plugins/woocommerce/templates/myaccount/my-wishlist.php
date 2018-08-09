	
<?php 
/**
 * My Wishlist page
 *
 *
 * @see     
 * @author  QuangLe
 * @package WooCommerce/Templates
 * @version 2.6.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

wc_print_notices();

/**
 * My Account navigation.
 * @since 2.6.0
 */
?>
<?php
	// render wishlist shortcode
	echo do_shortcode('[yith_wcwl_wishlist]');
?>