<?php
/**
 * get_products_by_categoryid?advanced_option=recent&product_cat=15&product_tag=1652&post_number=10&start_number=0&orderby=date&order=DESC
 */
if (!function_exists('get_products_by_categoryid')) :
    function get_products_by_categoryid(WP_REST_Request $request) {
        $wc_advanced_option = esc_attr( $_GET[ 'advanced_option' ] );
        $online_shop_wc_product_cat = esc_attr( $_GET['product_cat'] );
        $online_shop_wc_product_tag = esc_attr( $_GET['product_tag'] );
        
        $post_number = absint( $_GET[ 'post_number' ] );
        $start_page = $_GET[ 'start_page' ] ? absint( $_GET[ 'start_page' ] ) : 0;
        $post_number = absint( $_GET[ 'post_number' ] );
        $orderby = esc_attr( $_GET[ 'orderby' ] );
        $order = esc_attr( $_GET[ 'order' ] );

        $product_visibility_term_ids = wc_get_product_visibility_term_ids();

        /**
         * Filter the arguments for the Recent Posts widget.
         *
         * @since 1.0.0
         *
         * @see WP_Query
         *
         */
        $query_args = array(
            'posts_per_page' => $post_number,
            'offset'         => $start_page * $post_number,
            'post_status'    => 'publish',
            'post_type'      => 'product',
            'no_found_rows'  => 1,
            'order'          => $order,
            'meta_query'     => array(),
            'tax_query'      => array(
                'relation' => 'AND',
            ),
        );

        switch ( $wc_advanced_option ) {

            case 'featured' :
                if( !empty( $product_visibility_term_ids['featured'] )){
                    $query_args['tax_query'][] = array(
                        'taxonomy' => 'product_visibility',
                        'field'    => 'term_taxonomy_id',
                        'terms'    => $product_visibility_term_ids['featured'],
                    );
                }

                break;

            case 'onsale' :
                $product_ids_on_sale    = wc_get_product_ids_on_sale();
                if( !empty( $product_ids_on_sale ) ){
                    $query_args['post__in'] = $product_ids_on_sale;
                }
                break;

            case 'cat' :
                if( !empty( $online_shop_wc_product_cat )){
                    $query_args['tax_query'][] = array(
                        'taxonomy' => 'product_cat',
                        'field'    => 'term_id',
                        'terms'    => $online_shop_wc_product_cat,
                    );
                }

                break;

            case 'tag' :
                print_r( $online_shop_wc_product_tag );
                if( !empty( $online_shop_wc_product_tag )){
                    $query_args['tax_query'][] = array(
                        'taxonomy' => 'product_tag',
                        'field'    => 'term_id',
                        'terms'    => $online_shop_wc_product_tag,
                    );
                }

                break;
        }

        switch ( $orderby ) {

            case 'price' :
                $query_args['meta_key'] = '_price';
                $query_args['orderby']  = 'meta_value_num';
                break;

            case 'sales' :
                $query_args['meta_key'] = 'total_sales';
                $query_args['orderby']  = 'meta_value_num';
                break;

            case 'ID' :
            case 'author' :
            case 'title' :
            case 'date' :
            case 'modified' :
            case 'rand' :
            case 'comment_count' :
            case 'menu_order' :
                $query_args['orderby']  = $orderby;
                break;

            default :
                $query_args['orderby']  = 'date';
        }

        $online_shop_featured_query = new WP_Query( $query_args );
        if ($online_shop_featured_query->have_posts()) :
            $products = array();
            while ( $online_shop_featured_query->have_posts() ) : $online_shop_featured_query->the_post();
                // Do Stuff
                global $product;
                array_push($products, getProductInfo($product));
            endwhile;
            $result = array(
                "status" => "OK",
                "errMsg" => "",
                "data" => $products
            );
            wp_reset_postdata();
            return $result;
        endif;
        
        return array(
            "status" => "FAIL",
            "errMsg" => "Products not found",
            "data" => null
        );
    }
endif;

/**
 * get_products_by_productids?productids=1,2,3,4
 */
if (!function_exists('get_products_by_productids')) :
    function get_products_by_productids(WP_REST_Request $request) {
        $productIds = esc_attr( $_GET[ 'productids' ] );
        if (!$productIds || strlen($productIds) == 0) {
            return array(
                "status" => "FAIL",
                "errMsg" => "Products not found",
                "data" => null
            );
        } else {
            $products = array();
            $productIds = explode(',', $productIds);
            foreach ($productIds as $productId) {
                if (!empty($productId)){
                    $product = wc_get_product( $productId, 'large' );
                    array_push($products, getProductInfo($product));
                }
            }
            $result = array(
                "status" => "OK",
                "errMsg" => "",
                "data" => $products
            );
            wp_reset_postdata();
            return $result;
        }
    }
endif;

if (!function_exists('getProductInfo')) :
    function getProductInfo($product, $image_type = 'medium') {
        if ($product->get_type() === 'variable') {
            $regular_price = $product->get_variation_regular_price();
            $sale_price = $product->get_variation_sale_price();
        } else {
            $regular_price = $product->get_regular_price();
            $sale_price = $product->get_sale_price();
        }
        $arrPt = array(
            'id' => $product->get_id(),
            'name' => $product->get_name(),
            'link' => get_permalink( $product->get_id()),
            'regular_price' => number_format((float)$regular_price, 0, '.', ','),
            'sale_price' => number_format((float)$sale_price, 0, '.', ','),
            'image' => wp_get_attachment_image_src( get_post_thumbnail_id( $product->get_id() ), $image_type, true )[0],
            'average_rating' => $product->get_average_rating(),
            'review_count' => $product->get_review_count()
        );

        $arrPt['manage_stock'] = $product->get_manage_stock();
        $arrPt['stock_quantity'] = $product->get_stock_quantity();
        $arrPt['stock_status'] = $product->get_stock_status();
        // $arrPt['sale_end_time'] = $productMgr->getDiscountTimeRemaining($product->get_id());
        $period = get_post_meta( $product->get_id(), 'warranty_period', true );
        if (empty($period)) {
            $period = 36;
        }
        $arrPt['period'] = $period;

        return $arrPt;
    }
endif;