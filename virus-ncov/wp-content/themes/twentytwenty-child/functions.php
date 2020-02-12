<?php

add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_style( 'bootstrap-style', get_stylesheet_directory_uri(). '/assets/css/bootstrap.css', array(), '1.2.3' );
    wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri(). '/assets/css/custom-style.css', array(), '1.2.3' );

} );

add_action( 'wp_footer', function() {
    wp_enqueue_script('ncov_script', get_stylesheet_directory_uri() . '/assets/js/bundle.js', array('jquery'), '1.1.2');
});