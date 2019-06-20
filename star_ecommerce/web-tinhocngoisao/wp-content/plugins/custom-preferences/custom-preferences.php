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

    define( 'CUSTOM_PREFERECE_VALUE_ID', 
        array(
            "custom_preferences_global" => "Global",
            'custom_preferences_zalo' => "Zalo",
            'custom_preferences_facebook' => 'Facebook'
        )
    );

    define( 'CUSTOM_PREFERECE_DIR', plugin_dir_path( __FILE__ ) );

    include CUSTOM_PREFERECE_DIR . '/global/custom-preference-global.php';
    include CUSTOM_PREFERECE_DIR . '/zalo/custom-preference-zalo.php';
    include CUSTOM_PREFERECE_DIR . '/facebook/custom-preference-facebook.php';

    add_action( 'admin_menu', 'custom_preferences_menu' );

    function custom_preferences_menu() {
        add_options_page( 'Custom Preferences', 'Custom Preferences', 'manage_options', 'custom-preferences', 'custom_preferences_options' );
    }

    function custom_preferences_options() {
        if ( !current_user_can( 'manage_options' ) )  {
            wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
        }
        render_select_box_tab();

        // render global preferece
        echo '<div id="custom_preferences_global" class="custom_preferences_tab wrap" style="display:none">';
        echo '<form action="options.php" method="post">';
        settings_fields( 'custom_preferences_options' );
        do_settings_sections( 'custom_preferences' );
        echo '<input name="Submit" type="submit" value="' . __( 'Save Changes' ) . '" />';
        echo '</form></div>';

        // init zalo
        echo '<div id="custom_preferences_zalo" class="custom_preferences_tab wrap" style="display:none">';
        echo '<form action="options.php" method="post">';
        settings_fields( 'custom_preferences_zalo_options' );
        do_settings_sections( 'custom_preferences_zalo' );
        echo '<input name="Submit" type="submit" value="' . __( 'Save Changes' ) . '" />';
        echo '</form></div>';

        // init facebook
        echo '<div id="custom_preferences_facebook" class="custom_preferences_tab wrap" style="display:none">';
        echo '<form action="options.php" method="post">';
        settings_fields( 'custom_preferences_facebook_options' );
        do_settings_sections( 'custom_preferences_facebook' );
        echo '<input name="Submit" type="submit" value="' . __( 'Save Changes' ) . '" />';
        echo '</form></div>';
    }

    

    function render_select_box_tab() {
    ?>
        <p>
            <label for="custom_preference_id">Chọn nhóm cấu hình:</label>
            <select id="custom_preference_id">
                <?php 
                    foreach( CUSTOM_PREFERECE_VALUE_ID as $key=>$value)
                    {
                        echo '<option value="' . $key . '">' .$value. '</option>';
                    }
                ?>
            </select>
        </p>
        <!-- wait on -->
        <script>
            const CUSTOM_PREFERENCE_TAB = 'CUSTOM_PREFERENCE_TAB';
            $(document).on('change', '#custom_preference_id', function(e) {
                $('.custom_preferences_tab').attr('style',  'display:none');
                $('#' + e.target.value).removeAttr('style');
                sessionStorage.setItem(CUSTOM_PREFERENCE_TAB, e.target.value);
            });
            
            $( document ).ready(function() {
                var item = sessionStorage.getItem(CUSTOM_PREFERENCE_TAB);
                if (item && item !== "") {
                    $('#custom_preference_id').val(item);
                }
                $('#custom_preference_id').trigger('change');
            });
        </script>
<?php
    }
?>