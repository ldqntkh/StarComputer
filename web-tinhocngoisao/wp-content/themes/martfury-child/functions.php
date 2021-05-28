<?php
define ( 'THEME_PATH', get_stylesheet_directory() );
define( 'THEME_PATH_URI',  get_stylesheet_directory_uri());
define ( 'THEME_VERSION', '1.0.0.2' );
// add_action( 'wp_enqueue_scripts', 'martfury_child_enqueue_scripts', 20 );
// function martfury_child_enqueue_scripts() {
// 	wp_enqueue_style( 'martfury-child-style', get_stylesheet_uri() );
// 	if ( is_rtl() ) {
// 		wp_enqueue_style( 'martfury-rtl', get_template_directory_uri() . '/rtl.css', array(), '20180105' );
// 	}
// }

// cache file

if ( !function_exists('get_cache_by_key') ) {
    
    function get_cache_by_key( $key , $filename = 'json-cache.txt') {
        // return null;
        $cache_file_path = get_transient( $filename );
        // if ( file_exists ( $cache_file_path )  ) {
            $json = json_decode($cache_file_path,TRUE);
            if (isset($json)) {
                if (isset($json[$key])) {
                    return $json[$key];
                } else return null;
            }
        // }
        
        return null;
    }
}

if ( !function_exists('set_cache_by_key') ) {
    function set_cache_by_key ($key, $content, $filename = 'json-cache.txt') {
        // $cache_file_path = plugin_dir_path( __FILE__ ) . '/custom-cache/' .$filename;
        // $json[$key] = $content;
        // file_put_contents($cache_file_path, json_encode($json));
    }
}

add_action( 'after_setup_theme', function() {
    register_nav_menus( array(
        'special-menu' => esc_html__( 'Special Menu ( Display Beside Primary Menu)', 'online-shop' ),
    ) );
} );


add_action( 'wp_footer', function(){
    if ( !empty( get_option( 'custom_preferences_options' )['render_chatbox'] ) ) :
        echo get_option( 'custom_preferences_options' )['render_chatbox'];
    endif;
    if ( !empty( get_option( 'custom_preferences_options' )['render_footer_script'] ) ) :
        echo get_option( 'custom_preferences_options' )['render_footer_script'];
    endif;

    // render function zalo
    if ( !empty( get_option( 'custom_preferences_zalo_options' )['zalo_enable'] ) && get_option( 'custom_preferences_zalo_options' )['zalo_enable'] === "true" ) :
        if ( !empty( get_option( 'custom_preferences_zalo_options' )['zalo_script_url'] ) && get_option( 'custom_preferences_zalo_options' )['zalo_script_url'] !== "" ) :
            echo '<script src="'. get_option( 'custom_preferences_zalo_options' )['zalo_script_url'] .'"></script>';
        endif;
    endif;
}, 100 );

add_action( 'wp_footer', function() {
    wp_enqueue_script('buildpc_script', get_stylesheet_directory_uri() . '/assets/js/bundle.js', array('jquery'), THEME_VERSION);
});

include_once (THEME_PATH . '/inc/api/functions.php');
include_once (THEME_PATH . '/inc/register-style.php');
include_once (THEME_PATH . '/inc/custom-mobile-menu.php');
include_once (THEME_PATH . '/inc/post-component/post-shortcode.php');


include_once (THEME_PATH . '/inc/filter/search-order.php');
include_once (THEME_PATH . '/inc/print_order/print_order.php');

//webhook
include_once (THEME_PATH . '/inc/webhooks/new-order.php');

add_action( 'woocommerce_product_meta_start', 'woocommerce_template_loop_period', 10 );
if ( ! function_exists( 'woocommerce_template_loop_period' ) ) {

	/**
	 * Show the product title in the product loop. By default this is an H2.
	 */
	function woocommerce_template_loop_period($post_post_excerpt) {
		$period = get_post_meta( get_the_id(), 'warranty_period', true );
		if (!empty($period)) {
			echo '<p class="warranty_period">Bảo hành: <strong>'. $period .'</strong> tháng</p><hr />';
		}
	}
}
add_filter( 'woocommerce_get_return_url', function($return_url) {
    return $return_url .= '?order_page=thank_you';
}, 10, 1 );