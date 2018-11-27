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

    // xử lý việc edit 
    if (isset($_GET['building_data'])) {
        $edit_building_data = [];
        $product_data_buildpc = json_decode(urldecode(base64_decode($_GET['building_data'])));
        foreach($product_data_buildpc as $key=>$item) {
            $product = wc_get_product(intval($item->product_id));
            if ( empty( $product ) ) {
                continue;
            }
        
            if ($product->get_type() === 'variable') {
                $regular_price = $product->get_variation_regular_price();
                $sale_price = $product->get_variation_sale_price();
            } else {
                $regular_price = $product->get_regular_price();
                $sale_price = $product->get_sale_price();
            }
            $arrPt = array(
                'id' => $product->id,
                'name' => $product->name,
                'link' => get_permalink( $product->product_id),
                'regular_price' => $regular_price,
                'sale_price' => $sale_price,
                'image' => wp_get_attachment_image_src( $product->image_id, 'medium', true )[0],
                'average_rating' => $product->average_rating,
                'review_count' => $product->review_count
            );
            
            $attributes = $product->get_attributes();
            if (count($attributes)) {
                $arrPt['attributes'] = [];
                foreach($attributes as $attribute) {
                    $get_terms_args = array( 'hide_empty' => '1' );
                    $terms = get_terms( $attribute['name'], $get_terms_args );
                    
                    $index = 0;
                    foreach($terms as $term) {
                        $options = $attribute->get_options();
                        $options = ! empty( $options ) ? $options : array();
                        if (wc_selected( $term->term_id, $options ) === "") {
                            unset($terms[$index]);
                            //var_dump($terms);
                        }
                        $index++;
                    }
                    if (count($terms)) {
                        $arrAttr = array(
                            "name" => $attribute['name'],
                            "values" => $terms
                        );
                        array_push($arrPt['attributes'], $arrAttr);
                    }
                }
            }
            $arrPt['manage_stock'] = true;
            $arrPt['stock_quantity'] = $product->stock_quantity;
            $edit_building_data[$key] = array(
                "product" => $arrPt,
                "quantity" => $item->quantity
            );
        }
    }
?>
    <script>
        var product_types = <?php echo json_encode($product_types); ?>;
        <?php if($edit_building_data !== null) : ?>
         var edit_building_data = <?php echo json_encode($edit_building_data); ?>;
        <?php endif; ?>
        <?php if ( !empty( get_option( 'custom_preferences_options' )['fb_appId'] ) ) : ?>
            var facebookAppId = <?php echo get_option( 'custom_preferences_options' )['fb_appId']; ?>;
        <?php endif; ?>
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