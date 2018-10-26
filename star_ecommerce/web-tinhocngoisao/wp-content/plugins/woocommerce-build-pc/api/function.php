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
// register api get_products_primetime_price
add_action( 'rest_api_init', function () {
    register_rest_route( 'rest_api/v1', '/get_products_by_custom_type', array(
        'methods' => 'GET',
        'callback' => 'get_products_by_custom_type',
    ) );
} );

?>