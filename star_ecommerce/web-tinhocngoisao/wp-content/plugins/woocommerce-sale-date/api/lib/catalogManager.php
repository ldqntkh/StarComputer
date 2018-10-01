<?php 

class CatalogManager {

    public function getProductsSaleTimeByCategory ($cat_id, $post_per_page, $block_time, $end_block_time, $custom_query = []) {
        $query_args = array(
            'post_type'             => 'product',
            'post_status'           => 'publish',
        );
        if ($cat_id > -1) {
            $query_args["tax_query"] = array( array(
                'taxonomy'   => 'product_cat',
                'field'      => 'term_id',
                'terms'      => array( $cat_id ),
            ) );
        }
        
        $query = wp_parse_args( $query_args, $custom_query );

        $loop = new WP_Query( $query );
        $arrProducts = array();
        $productMgr = new ProductManager();
        $current_hour = new DateTime("now", new DateTimeZone('Asia/Bangkok'));
        $current_hour = $current_hour->format('H');
        while ( $loop->have_posts() ) : $loop->the_post(); 
            global $product;
            
            if (!$product->manage_stock) continue;

            if ($block_time > $end_block_time) {
                if ($current_hour >= $block_time && $current_hour <= 24) $end_block_time = 24;
                else {
                    if ($current_hour < $block_time && $current_hour < 24) {
                        $current_hour += 24;
                        $end_block_time += 24;
                    }
                }
            }
            if ($block_time <= $current_hour && $current_hour < $end_block_time) {
                if($product->is_on_sale()) {
                    $arrPt['sale_end_time'] = $productMgr->getDiscountTimeRemaining($product->get_id());
                    // xử lý vụ sale cho ngày hôm sau
                    $arrPt = array(
                        'id' => $product->id,
                        'name' => $product->name,
                        'link' => get_permalink( $product->product_id),
                        'regular_price' => number_format((float)$product->regular_price, 0, '.', ','),
                        'sale_price' => number_format((float)$product->sale_price, 0, '.', ','),
                        'image' => wp_get_attachment_image_src( $product->image_id, 'medium', true )[0],
                        'average_rating' => $product->average_rating,
                        'review_count' => $product->review_count
                    );
                    //if ($product->manage_stock) {
                        $arrPt['manage_stock'] = true;
                        $arrPt['stock_quantity'] = $product->stock_quantity;
                        $arrPt['stock_status'] = $product->stock_status;
                    //}
                    //if ($cat_id > -1) 
                    
                    array_push($arrProducts, $arrPt);
                }
            } else {
                $arrPt['sale_end_time'] = $productMgr->getDiscountTimeRemaining($product->get_id());
                // xử lý vụ sale cho ngày hôm sau
                $arrPt = array(
                    'id' => $product->id,
                    'name' => $product->name,
                    'link' => get_permalink( $product->product_id),
                    'regular_price' => number_format((float)$product->regular_price, 0, '.', ','),
                    'sale_price' => number_format((float)$product->sale_price, 0, '.', ','),
                    'image' => wp_get_attachment_image_src( $product->image_id, 'medium', true )[0],
                    'average_rating' => $product->average_rating,
                    'review_count' => $product->review_count
                );
                if ($product->manage_stock) {
                    $arrPt['manage_stock'] = true;
                    $arrPt['stock_quantity'] = $product->stock_quantity;
                    $arrPt['stock_status'] = $product->stock_status;
                }
                array_push($arrProducts, $arrPt);
            }
            if (count($arrProducts) >= $post_per_page) break;
        endwhile;
        wp_reset_query();
        wp_reset_postdata();
        return $arrProducts;
    }
}

?>