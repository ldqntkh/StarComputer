<?php
define ( 'THEME_PATH', get_stylesheet_directory() );
define( 'THEME_PATH_URI',  get_stylesheet_directory_uri());

// add_action( 'wp_enqueue_scripts', 'martfury_child_enqueue_scripts', 20 );
// function martfury_child_enqueue_scripts() {
// 	wp_enqueue_style( 'martfury-child-style', get_stylesheet_uri() );
// 	if ( is_rtl() ) {
// 		wp_enqueue_style( 'martfury-rtl', get_template_directory_uri() . '/rtl.css', array(), '20180105' );
// 	}
// }

include_once (THEME_PATH . '/inc/api/account/my-address.php');
include_once (THEME_PATH . '/inc/register-style.php');
include_once (THEME_PATH . '/inc/custom-mobile-menu.php');


