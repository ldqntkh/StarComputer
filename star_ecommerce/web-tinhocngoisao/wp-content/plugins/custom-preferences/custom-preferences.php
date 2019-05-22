<?php
    /**
     * Plugin Name:       Custom Preferences
     * Description:       Custom Preferences contais some configure information
     * Version:           1.0.0
     * Author:            Phat Le
     */

    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }

    add_action( 'admin_menu', 'custom_preferences_menu' );

    function custom_preferences_menu() {
        add_options_page( 'Custom Preferences', 'Custom Preferences', 'manage_options', 'custom-preferences', 'custom_preferences_options' );
    }

    function custom_preferences_options() {
        if ( !current_user_can( 'manage_options' ) )  {
            wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
        }

        echo '<div class="wrap">';
        echo '<form action="options.php" method="post">';
        settings_fields( 'custom_preferences_options' );
        do_settings_sections( 'custom_preferences' );
        echo '<input name="Submit" type="submit" value="' . __( 'Save Changes' ) . '" />';
        echo '</form></div>';
    }

    add_action( 'admin_init', 'custom_preferences_init' );

    function custom_preferences_init() {
        register_setting( 'custom_preferences_options', 'custom_preferences_options' );
        add_settings_section( 'configuration_main', 'Configuration Settings', 'configuration_section_title', 'custom_preferences' );
        add_settings_field( 'fb_appId', 'Facebook App ID', 'fb_app_id_section', 'custom_preferences', 'configuration_main' );
        add_settings_field( 'render_chatbox', 'Render Chat Box By Script', 'render_chatbox_section', 'custom_preferences', 'configuration_main' );
        add_settings_field( 'google_map_key', 'Google map key', 'google_map_key_section', 'custom_preferences', 'configuration_main' );
        add_settings_field( 'list_address_store', 'Danh sách địa chỉ showroom', 'list_address_store_section', 'custom_preferences', 'configuration_main' );
        add_settings_field( 'list_product_type', 'Cấu hình buildPC', 'list_product_type_section', 'custom_preferences', 'configuration_main' );
    }

    function fb_app_id_section() {
        $facebookAppID = get_option( 'custom_preferences_options' )['fb_appId'];
        echo "<input type='text' id='fb_app_id' name='custom_preferences_options[fb_appId]' size='40' value='{$facebookAppID}' />";
    }

    function render_chatbox_section() {
        $renderChatbox = get_option( 'custom_preferences_options' )['render_chatbox'];
        echo "<textarea name='custom_preferences_options[render_chatbox]' cols='60' rows='10'>{$renderChatbox}</textarea>";
    }

    function google_map_key_section() {
        $google_map_key = get_option( 'custom_preferences_options' )['google_map_key'];
        echo "<input type='text' id='google_map_key' name='custom_preferences_options[google_map_key]' size='40' value='{$google_map_key}' />";
    }

    function list_address_store_section() {
        $list_address_store = get_option( 'custom_preferences_options' )['list_address_store'];
        echo "<textarea name='custom_preferences_options[list_address_store]' cols='60' rows='10'>{$list_address_store}</textarea>";
    }

    function list_product_type_section() {
        $list_product_type = get_option( 'custom_preferences_options' )['list_product_type'];
        echo "<textarea name='custom_preferences_options[list_product_type]' cols='60' rows='10'>{$list_product_type}</textarea>";
    }

    function configuration_section_title() {
        echo '<p>These configuration is used in storefront.</p>';
    }
?>