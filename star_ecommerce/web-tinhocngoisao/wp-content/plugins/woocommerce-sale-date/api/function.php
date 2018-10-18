<?php
include SALE_DATE_DIR . '/api/lib/productManager.php';
include SALE_DATE_DIR . '/api/lib/catalogManager.php';
/**
 * request params
 * type: string
 * post_type: string
 * response: string
 * block_time: number
 * post_per_page: number
 * cat_id: number
 * ex: wp-json/rest_api/v1/primetime_pricing?type=json&post_type=reactjs&response=json&cat_id=75&block_time=8&end_block_time&post_per_page=1
 */
function get_products_primetime_price(WP_REST_Request $request) {
    
    $type           = isset($_GET['type']) ? $_GET['type'] : die;
    $post_type      = isset($_GET['post_type']) ? $_GET['post_type'] : die;
    $response       = isset($_GET['response']) ? $_GET['response'] : die;
    // $block_time     = isset($_GET['block_time']) && is_numeric($_GET['block_time']) ? (int)$_GET['block_time'] : die;
    // $end_block_time = isset($_GET['end_block_time']) && is_numeric($_GET['end_block_time']) ? (int)$_GET['end_block_time'] : die;
    $cat_id         = isset($_GET['cat_id']) && is_numeric($_GET['cat_id']) ? (int)$_GET['cat_id'] : die;
    $post_per_page  = isset($_GET['post_per_page']) && is_numeric($_GET['post_per_page']) ? (int)$_GET['post_per_page'] : die;

    $results = (new CatalogManager())->getProductsSaleTimeByCategory($cat_id, $post_per_page);
    return $results;
}
// register api get_products_primetime_price
add_action( 'rest_api_init', function () {
    register_rest_route( 'rest_api/v1', '/primetime_pricing', array(
        'methods' => 'GET',
        'callback' => 'get_products_primetime_price',
    ) );
} );



?>