<?php
    /**
     * Plugin Name:       Custom Mobile
     * Description:       Custom Mobile Options
     * Version:           1.0.0
     * Author:            Phat Le
     */
    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    add_action( 'admin_menu', 'custom_mobile_menu' );

    function custom_mobile_menu() {
        add_options_page( 'Custom Mobile', 'Custom Mobile', 'manage_options', 'custom-mobile', 'custom_mobile_options' );
    }

    function custom_mobile_options() {
        if ( !current_user_can( 'manage_options' ) )  {
            wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
        }

        echo '<div class="wrap">';
        echo '<form action="options.php" method="post">';
        settings_fields( 'custom_mobile_options' );
        do_settings_sections( 'custom_mobile' );
        echo '<input name="Submit" type="submit" value="' . __( 'Save Changes' ) . '" />';
        echo '</form></div>';
    }

    add_action( 'admin_init', 'custom_mobile_init' );

    function custom_mobile_init() {
        register_setting( 'custom_mobile_options', 'custom_mobile_options' );
        add_settings_section( 'configuration_main', 'First Section', 'mobile_first_section_title', 'custom_mobile' );
        add_settings_field( 'demo_configure', 'Demo Configure', 'demo_custom_mobile_option', 'custom_mobile', 'configuration_main', array( 'section' => 'section_1', 'type' => 'text' ) );
    }

    function demo_custom_mobile_option() {
        $demoOption = get_option( 'custom_mobile_options' ) ? get_option( 'custom_mobile_options' )['demo_configure'] : '';
        echo "<input type='text' id='demo_configure' name='custom_mobile_options[demo_configure]' size='40' value='{$demoOption}' />";
    }

    function mobile_first_section_title() {
        echo '<h2>First Section</h2>';
    }
?>
