<?php
add_action( 'wp_enqueue_scripts', 'martfury_child_enqueue_scripts', 20 );
function martfury_child_enqueue_scripts() {
	wp_enqueue_style( 'martfury-child-style', get_stylesheet_uri() );
	if ( is_rtl() ) {
		wp_enqueue_style( 'martfury-rtl', get_template_directory_uri() . '/rtl.css', array(), '20180105' );
	}
}


if( !function_exists('thns_scripts') ) {
	function thns_scripts() {
		wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri(). '/assets/css/custom-style.css', array(), '1.0.0' );
	}
	add_action( 'wp_enqueue_scripts', 'thns_scripts' );
}

add_action( 'wp_footer', function() {
    wp_enqueue_script('buildpc_script', get_stylesheet_directory_uri() . '/assets/js/bundle.js', array('jquery'), '1.0.0');
});

