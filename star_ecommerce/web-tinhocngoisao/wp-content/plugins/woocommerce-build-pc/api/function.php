<?php 

/**
 * request param
 * custom_type : string
 * ex: wp-json/rest_api/v1/get_products_by_custom_type?custom_type=type
 */
/**
 * product return 
 *  - id
 *  - link
 *  - name
 *  - sku
 *  - regular-price
 *  - sale-price
 *  - image
 *  - attributes (n)
 *      - name
 *      - value
 *          - id
 *          - name
 *          - slug
 */
function get_products_by_custom_type(WP_REST_Request $request) {

    $custom_type = isset($_GET['custom_type']) ? $_GET['custom_type'] : false;

    if ($custom_type == false) {
        return array(
            "success" => false,
            "errMsg" => "Can not find param",
            "data" => null 
        );
    } else {
        $query_args = array(
            'post_type'             => 'product',
            'post_status'           => 'publish',
            'meta_key'              => '_buildpc-type',
            'meta_value'            => $custom_type,
        );
        $loop = new WP_Query( $query_args );
        $arrProducts = [];
        while ( $loop->have_posts() ) : $loop->the_post(); 
            global $product;
            if ($product->manage_stock && $product->stock_quantity != null && $product->stock_status) {
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

                $arrPt['attributes'] = get_product_attributes( $product );
                $arrPt['manage_stock'] = true;
                $arrPt['stock_quantity'] = $product->stock_quantity;
                if ($product->get_type() === 'variable') {
                    $productsChildId = $product->get_visible_children();
                    if ( count( $productsChildId ) > 0 ) {
                        $arrPt['product_childs'] = [];
                        foreach( $productsChildId as $productChildId ) {
                            $productChild = wc_get_product( $productChildId );
                            $arrPtChild = array(
                                'id' => $productChild->get_id(),
                                'name' => $productChild->name,
                                'link' => get_permalink( $productChild->get_id()),
                                'regular_price' => $productChild->get_regular_price(),
                                'sale_price' => $productChild->get_sale_price(),
                                'image' => wp_get_attachment_image_src( $productChild->image_id, 'medium', true )[0],
                                'average_rating' => $productChild->average_rating,
                                'review_count' => $productChild->review_count,
                                'stock_quantity' =>  $productChild->stock_quantity,
                                'attributes' => get_product_child_attribute_name( $productChildId, array_keys( $productChild->get_attributes() )[0] )
                            );
                            array_push( $arrPt['product_childs'], $arrPtChild );
                        }
                    }
                }
                array_push($arrProducts, $arrPt);
            }
        endwhile;
        return array(
            "success" => true,
            "errMsg" => "",
            "data" => $arrProducts 
        );
    }
}

function get_product_child_attribute_name( $productId, $attributeName ) {
    $meta = get_post_meta($productId, 'attribute_'. $attributeName, true);
    $term = get_term_by('slug', $meta, $attributeName);
    return $term;
}

function get_product_attributes( $product ) {
    $product_attributes = $product->get_attributes();
    $attributes = [];

    if (count($product_attributes)) {
        foreach($product_attributes as $product_attribute) {
            $get_terms_args = array( 'hide_empty' => '1' );
            $terms = get_terms( $product_attribute['name'], $get_terms_args );
            $index = 0;

            foreach($terms as $term) {
                $options = $product_attribute->get_options();
                $options = ! empty( $options ) ? $options : array();
                if (wc_selected( $term->term_id, $options ) === "") {
                    unset($terms[$index]);
                }
                $index++;
            }
            if (count($terms)) {
                $arrAttr = array(
                    "name" => $product_attribute['name'],
                    "values" => $terms
                );
                array_push( $attributes, $arrAttr);
            }
        }
    }
    return $attributes;
}
// insert multiple products to cart
/**
 * ex: wp-json/rest_api/v1/insert_multiple_products_to_cart?product_data_add_to_cart=<product_id>_<quantity>,<product_id>_<quantity>....
 */
// có lỗi khi nó là product variation
function insert_multiple_products_to_cart(WP_REST_Request $request) {
    try {
        $product_data_add_to_cart = explode( ',', $_REQUEST['product_data_add_to_cart'] );
        $count       = count( $product_data_add_to_cart );
        $number      = 0;
        foreach ( $product_data_add_to_cart as $product_data ) {

            // control product quantity
            $data = explode('_', $product_data);
            $product_id = $data[0];
            $_quantity = count($data) === 2 ? $data[1] : 1;
            $product_id        = apply_filters( 'woocommerce_add_to_cart_product_id', absint( $product_id ) );
            $was_added_to_cart = false;
            $adding_to_cart    = wc_get_product( $product_id );
        
            if ( ! $adding_to_cart ) {
                continue;
            }
        
            $add_to_cart_handler = apply_filters( 'woocommerce_add_to_cart_handler', $adding_to_cart->product_type, $adding_to_cart );
        
            /*
            * Sorry.. if you want non-simple products, you're on your own.
            *
            * Related: WooCommerce has set the following methods as private:
            * WC_Form_Handler::add_to_cart_handler_variable(),
            * WC_Form_Handler::add_to_cart_handler_grouped(),
            * WC_Form_Handler::add_to_cart_handler_simple()
            *
            * Why you gotta be like that WooCommerce?
            */
            if ( 'simple' !== $add_to_cart_handler ) {
                continue;
            }
        
            // For now, quantity applies to all products.. This could be changed easily enough, but I didn't need this feature.
            $quantity          = apply_filters( 'woocommerce_stock_amount', $_quantity );
            $passed_validation = apply_filters( 'woocommerce_add_to_cart_validation', true, $product_id, $quantity );

            if ( $passed_validation && false !== WC()->cart->add_to_cart( $product_id, $quantity ) ) {
                wc_add_to_cart_message( array( $product_id => $quantity ), true );
            }

            if ( ++$number === $count ) {
                // Ok, final item, let's send it back to woocommerce's add_to_cart_action method for handling.
                return array(
                    "success" => true,
                    "erMsg" => ""
                );
            }
        }
    } catch(Exception $e) {
        return array(
            "success" => false,
            "erMsg" => $e
        );
    }
}

// register api get_products_primetime_price
add_action( 'rest_api_init', function () {
    register_rest_route( 'rest_api/v1', '/get_products_by_custom_type', array(
        'methods' => 'GET',
        'callback' => 'get_products_by_custom_type',
    ) );

    register_rest_route( 'rest_api/v1', '/insert_multiple_products_to_cart', array(
        'methods' => 'GET',
        'callback' => 'insert_multiple_products_to_cart',
    ) );
} );

?>