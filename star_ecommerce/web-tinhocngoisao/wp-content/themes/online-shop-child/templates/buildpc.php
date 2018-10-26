<?php 

/*
    Template Name: Build PC
*/
    get_header();

    $product_types = array(
        array(
            "name" => __('Main', 'woocommerce-buildpc'),
            "value" => "main",
            "require-by" => null,
            "require" => true,
            "link" => null
        ),
        array(
            "name" => __('CPU', 'woocommerce-buildpc'),
            "value" => "cpu",
            "require-by" => "main",
            "require-field" => "socket",
            "require" => true,
            "link" => null
        ),
        array(
            "name" => __('RAM', 'woocommerce-buildpc'),
            "value" => "ram",
            "require-by" => "main",
            "require-field" => "ram",
            "require" => true,
            "link" => null
        ),
        array(
            "name" => __('SSD', 'woocommerce-buildpc'),
            "value" => "ssd",
            "require-by" => "main",
            "require-field" => "sata",
            "require" => false,
            "link" => "hdd"
        ),
        array(
            "name" => __('HDD', 'woocommerce-buildpc'),
            "value" => "hdd",
            "require" => false,
            "link"  => "ssd",
            "require-by" => null,
        ),
        array(
            "name" => __('Optane', 'woocommerce-buildpc'),
            "value" => "optane",
            "require" => false,
            "require-by" => "main",
            "link"  => null
        ),
        array(
            "name" => __('VGA', 'woocommerce-buildpc'),
            "value" => "vga",
            "require" => false,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Power', 'woocommerce-buildpc'),
            "value" => "power",
            "require" => true,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Case', 'woocommerce-buildpc'),
            "value" => "case",
            "require" => true,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Radiator', 'woocommerce-buildpc'),
            "value" => "radiator",
            "require" => false,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Screen', 'woocommerce-buildpc'),
            "value" => "screen",
            "require" => false,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Keyboard', 'woocommerce-buildpc'),
            "value" => "keyboard",
            "require" => false,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Mouse', 'woocommerce-buildpc'),
            "value" => "mouse",
            "require" => false,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Headphone', 'woocommerce-buildpc'),
            "value" => "headphone",
            "require" => false,
            "require-by" => null,
            "link"  => null
        ),
        array(
            "name" => __('Soundcase', 'woocommerce-buildpc'),
            "value" => "soundcase",
            "require" => false,
            "require-by" => null,
            "link"  => null
        ),
    );
?>
    <script>
        var product_types = <?php echo json_encode($product_types); ?>
    </script>
    <div class="wrapper">
        <div id="build-pc-function"></div>
    </div>
<?php
    add_action( 'wp_footer', function(){
        wp_enqueue_script('buildpc_script', get_stylesheet_directory_uri() . '/assets/js/build-pc.js');
    } );
    get_footer();
?>