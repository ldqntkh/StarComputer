<?php
    add_action( 'admin_init', 'custom_preferences_cache_init' );

    function custom_preferences_cache_init() {
        register_setting( 'custom_preferences_cache_options', 'custom_preferences_cache_options' );
        add_settings_section( 'custom_preferences_cache', 'Cache config', 'configuration_section_cache', 'custom_preferences_cache' );
        add_settings_field( 'clearcache', 'Clear custom cache', 'clear_custom_cache', 'custom_preferences_cache', 'custom_preferences_cache' );
    }

    function clear_custom_cache() { 
        if (isset($_POST['clearcache'])) {
            if ( function_exists('clear_custom_cache') ) {
                $files = glob( get_stylesheet_directory() .'/acmethemes/custom-cache/*'); // get all file names
                foreach($files as $file){ // iterate files
                if(is_file($file))
                    unlink($file); // delete file
                }
                $msg = 'Xóa thành công!';
            }
        }
    ?>
        <form action="" method="post">
            <input type="hidden" value="clear-cache" name='clearcache' id='clearcache' />
            <?php wp_nonce_field(); ?>
            <button type="submit">Clear</button>
            <?php 
                if (isset($_POST['clearcache']) && isset($msg)) { 
                    echo '<strong>'.$msg.'</strong>';
                }
            ?>
        </form>
    <?php }

    

    function configuration_section_cache() {
        echo '<p>These configuration of caches.</p>';
    }