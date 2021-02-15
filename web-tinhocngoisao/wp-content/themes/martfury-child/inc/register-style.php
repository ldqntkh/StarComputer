<?php

if( !function_exists('thns_scripts') ) {
	function thns_scripts() {
		wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri(). '/assets/css/custom-style.css', array(), '1.0.0' );
	}
	add_action( 'wp_enqueue_scripts', 'thns_scripts' );
}

add_action( 'wp_footer', function() {
    wp_enqueue_script('buildpc_script', get_stylesheet_directory_uri() . '/assets/js/bundle.js', array('jquery'), '1.0.0');
	wp_enqueue_script('app_script', get_stylesheet_directory_uri() . '/assets/js/app.js', array('jquery'), '1.0.0');
});