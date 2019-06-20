<?php
    add_action( 'admin_init', 'custom_preferences_facebook_init' );
    define( 'facebookOptions', get_option( 'custom_preferences_facebook_options' ) );

    function custom_preferences_facebook_init() {
        register_setting( 'custom_preferences_facebook_options', 'custom_preferences_facebook_options' );
        add_settings_section( 'configuration_facebook', __( 'Configuration Settings for Facebook', 'online-shop' ), 'configuration_section_facebook', 'custom_preferences_facebook' );
        // enable facebook functions
        add_settings_field( 'facebook_enable', __( 'Enable Facebook', 'online-shop' ), 'facebook_enable_section', 'custom_preferences_facebook', 'configuration_facebook' );

        add_settings_field( 'facebook_layout', __( 'Layout', 'online-shop' ), 'facebook_layout_section', 'custom_preferences_facebook', 'configuration_facebook' );

        add_settings_field( '' );
        // add_settings_field( 'zalo_appId', 'Zalo App ID', 'zalo_app_id_section', 'custom_preferences_zalo', 'configuration_zalo' );

        // add_settings_field( 'zalo_script_url', 'Zalo script url', 'zalo_app_script_url_section', 'custom_preferences_zalo', 'configuration_zalo' );

        // add_settings_field( 'zalo_script_callback', 'Zalo script callback name', 'zalo_app_script_callback_section', 'custom_preferences_zalo', 'configuration_zalo' );

        // add_settings_field( 'zalo_script_callback_func', 'Zalo script callback function', 'zalo_app_script_callback_function_section', 'custom_preferences_zalo', 'configuration_zalo' );

        // add_settings_field( 'zalo_script_layout', 'Zalo layout', 'zalo_app_layout_section', 'custom_preferences_zalo', 'configuration_zalo' );

        // add_settings_field( 'zalo_button_color', 'Zalo button color', 'zalo_button_section', 'custom_preferences_zalo', 'configuration_zalo' );
    }

    function configuration_section_facebook() {
        echo '<p>' . __( 'These configuration for function share Facebook.', 'online-shop' ) . '</p>';
    }

    function facebook_enable_section() {
        $facebookEnable = isset(get_option( 'custom_preferences_facebook_options' )['facebook_enable']) ? get_option( 'custom_preferences_facebook_options' )['facebook_enable'] : false;
        $checked = '';
        if ($facebookEnable) $checked="checked";
        echo "<input type='checkbox' id='facebook_enable' name='custom_preferences_facebook_options[facebook_enable]' value='true' {$checked}/>";
    }

    function facebook_layout_section() {
        $layout = isset( facebookOptions['facebook_layout'] ) ? facebookOptions['facebook_layout'] : 'button_count';
        ?>
            <select id="facebook_layout" name="custom_preferences_facebook[facebook_layout]">
                <option value="box_count" <?php if ($layout == "box_count") echo "selected"; ?>>Box count</option>
                <option value="button_count" <?php if ($layout == "button_count") echo "selected"; ?>>Button count</option>
                <option value="button" <?php if ($layout == "button") echo "selected"; ?>>Button</option>
            </select>
        <?php
    }
?>