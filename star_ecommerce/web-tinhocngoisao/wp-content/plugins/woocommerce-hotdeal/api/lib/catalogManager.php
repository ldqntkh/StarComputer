<?php 

class CatalogManager {

    public function getProductsSaleTimeByCategory ($cat_slug, $post_per_page, $custom_query = []) {

        $current_time = new DateTime("now", new DateTimeZone('Asia/Bangkok'));
        $current_time = $current_time->format('Y-m-d');
        
        $cache_result = get_cache_by_key('getProductsSaleTimeByCategory'.$cat_slug.$post_per_page);
        if ($cache_result) {
            $cache_time = $cache_result['time'];
            if ($cache_time) {
                $date_1 = strtotime('2019-10-18');
                $date_2 = strtotime($current_time);
                $datediff = $date_2 - $date_1;
                $day = round($datediff / (60 * 60 * 24));
                if ($day < 1) {
                    return $cache_result['data'];
                }
            }
        }

        $query_args = array(
            'post_type'             => 'product',
            'post_status'           => 'publish',
            'meta_query'            => array(
                array(
                    'value'         => '0',
                    'compare'       => '>',
                    'type'          => 'NUMERIC'
                )
            )
        );
        
        if ($cat_slug != '') {
            $category = get_term_by( 'slug', $cat_slug, 'product_cat' );
            $cat_id = $category->term_id;
            $query_args["tax_query"] = array( array(
                'taxonomy'   => 'product_cat',
                'field'      => 'term_id',
                'terms'      => array( $cat_id )
            ) );
        }
        
        $query = wp_parse_args( $query_args, $custom_query );

        $loop = new WP_Query( $query );
        $arrProducts = array();
        $productMgr = new ProductManager();
        
        $regular_price = 0;
        $sale_price = 0;
        while ( $loop->have_posts() ) : $loop->the_post(); 
            global $product;
            if($product->is_on_sale()) {
                // xử lý vụ sale cho ngày hôm sau
                if ($product->manage_stock && $product->stock_quantity != null) {
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
                        'regular_price' => number_format((float)$regular_price, 0, '.', ','),
                        'sale_price' => number_format((float)$sale_price, 0, '.', ','),
                        'image' => wp_get_attachment_image_src( $product->image_id, 'medium', true )[0],
                        'average_rating' => $product->average_rating,
                        'review_count' => $product->review_count
                    );
                
                    $arrPt['manage_stock'] = true;
                    $arrPt['stock_quantity'] = $product->stock_quantity;
                    $arrPt['stock_status'] = $product->stock_status;
                    $arrPt['sale_end_time'] = $productMgr->getDiscountTimeRemaining($product->get_id());
                    $period = get_post_meta( $product->get_id(), 'warranty_period', true );
                    // if (empty($period)) {
                    //     $period = 36;
                    // }
                    $arrPt['period'] = $period;
                    array_push($arrProducts, $arrPt);
                }
            }
            if (count($arrProducts) >= $post_per_page) break;
        endwhile;
        wp_reset_query();
        set_cache_by_key('getProductsSaleTimeByCategory'.$cat_slug.$post_per_page, array("time" => $current_time, "data" => $arrProducts));
        return $arrProducts;
    }
}

?>