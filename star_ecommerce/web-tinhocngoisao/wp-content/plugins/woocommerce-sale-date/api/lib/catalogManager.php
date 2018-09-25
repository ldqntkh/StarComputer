<?php 

class CatalogManager {

    public function getProductsSaleTimeByCategory ($cat_id, $post_per_page, $block_time, $custom_query = []) {
        $query_args = array(
            'post_type'             => 'product',
            'post_status'           => 'publish',
            'ignore_sticky_posts'   => 1
        );
        if ((int)$cat_id > -1) {
            $query_args['terms'] = $cat_id;
        }
        
        
        $query = wp_parse_args( $query_args, $custom_query );

        $loop = new WP_Query( $query );
        $arrProducts = array();
        $productMgr = new ProductManager();
        while ( $loop->have_posts() ) : $loop->the_post(); 
            global $product;
            if($product->is_on_sale()) {
                $arrPt['sale_end_time'] = $productMgr->getDiscountTimeRemaining($product->get_id());
                // xử lý vụ sale cho ngày hôm sau
                $arrPt = array(
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
        return $arrProducts;
    }
}

?>