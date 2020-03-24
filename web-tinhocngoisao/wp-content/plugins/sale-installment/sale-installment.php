<?php 
/**
 * Plugin Name:       Tính phí trả góp
 * Description:       Hỗ trợ tính phí trả góp và tư vấn khách hàng
 * Version:           1.0.0
 * Author:            Anthony Le
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

define( 'BRAND_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BRAND_PLUGIN_NAME', 'star_brand' );

include_once BRAND_PLUGIN_DIR . '/includes/models/class-brands.php';
include_once BRAND_PLUGIN_DIR . '/includes/function.php';

include_once BRAND_PLUGIN_DIR . '/includes/main-page.php';

add_action('admin_enqueue_scripts', 'star_brands_scripts');
function star_brands_scripts(){
    wp_enqueue_style('star_brand_css', plugins_url('assets/css/star-brands.css',__FILE__), true);
    wp_enqueue_script('star_brand_script', plugins_url('assets/js/star-app.js',__FILE__), array('jquery'));
}



// create table
register_activation_hook( __FILE__, 'create_brand_database_table' );
function create_brand_database_table( ) {

    global $table_prefix, $wpdb, $wnm_db_version;

    $tb_installment    = $table_prefix . 'installment';
    
    if( $wpdb->get_var( "show tables like '$tb_installment'" ) != $tb_installment ) 
    {
        try {
            $sql = array();

        
            $sql[] = 'CREATE TABLE ' .$tb_installment. ' (
                                `id` int(11) NOT NULL AUTO_INCREMENT,
                                `brand_name` varchar(100) NOT NULL,
                                `brand_status` int(1) DEFAULT 0,
                                `brand_img` int(10),
                                `brand_index` int(10) DEFAULT 0,
                                PRIMARY KEY (`id`)
                            );';
    
            require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
            
            dbDelta($sql);
            add_option("wnm_db_version", $wnm_db_version);
        } catch ( Exception $e ) {
            var_dump( $e->getMessage() );
        }

    }
}