<?php
/**
 * get_products_by_categoryid?advanced_option=recent&product_cat=15&product_tag=1652&post_number=10&start_number=0&orderby=date&order=DESC&get_slug=1
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
        $get_slug = $_GET[ 'get_slug' ] ? absint( $_GET[ 'get_slug' ] ) : 0;

        $current_time = new DateTime("now", new DateTimeZone('Asia/Bangkok'));
        $current_time = $current_time->format('Y-m-d');
        $filenamecache = 'get_products_by_categoryid-'.$wc_advanced_option.$online_shop_wc_product_cat.$online_shop_wc_product_tag.$post_number.$start_page.$orderby.$order.$get_slug.'.txt';
        // $cache_result = get_cache_by_key('get_products_by_categoryid', $filenamecache);
        $cache_result = null;
        if ($cache_result) {
            $cache_time = $cache_result['time'];
            if ($cache_time) {
                $date_1 = strtotime($cache_time);
                $date_2 = strtotime($current_time);
                $datediff = $date_2 - $date_1;
                $day = round($datediff / (60 * 60 * 24));
                if ($day < 1) {
                    $result = array(
                        "status" => "OK",
                        "errMsg" => "",
                        "data" => $cache_result['data']
                    );
                    return $result;
                }
            }
        }

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
            'offset'         => ($start_page - 1) * $post_number,
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
                array_push($products, getProductInfo($product, $get_slug));
            endwhile;
            $result = array(
                "status" => "OK",
                "errMsg" => "",
                "data" => $products
            );
            wp_reset_postdata();
            // set_cache_by_key('get_products_by_categoryid'
            //                     , array("time" => $current_time, "data" => $products),
            //                     $filenamecache);
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

            $key = implode("-",$productIds);

            $current_time = new DateTime("now", new DateTimeZone('Asia/Bangkok'));
            $current_time = $current_time->format('Y-m-d');
            
            //$cache_result = get_cache_by_key('get_products_by_productids', 'get_products_by_productids-'.$key.'.txt');
            $cache_result = null;
            if ($cache_result) {
                $cache_time = $cache_result['time'];
                if ($cache_time) {
                    $date_1 = strtotime($cache_time);
                    $date_2 = strtotime($current_time);
                    $datediff = $date_2 - $date_1;
                    $day = round($datediff / (60 * 60 * 24));
                    if ($day < 1) {
                        $result = array(
                            "status" => "OK",
                            "errMsg" => "",
                            "data" => $cache_result['data']
                        );
                        return $result;
                    }
                }
            }

            foreach ($productIds as $productId) {
                if (!empty($productId)){
                    $product = wc_get_product( $productId );
                    if (!$product) {
                        continue;
                    }
                    array_push($products, getProductInfo($product, 0));
                }
            }
            $result = array(
                "status" => "OK",
                "errMsg" => "",
                "data" => $products
            );
            wp_reset_postdata();
            // set_cache_by_key('get_products_by_productids'
            //                     , array("time" => $current_time, "data" => $products),
            //                     'get_products_by_productids-'.$key.'.txt');
            return $result;
        }
    }
endif;

if (!function_exists('getProductInfo')) :
    function getProductInfo($product, $get_slug, $image_type = 'medium') {
        if ($product->get_type() === 'variable') {
            $regular_price = $product->get_variation_regular_price();
            $sale_price = $product->get_variation_sale_price();
        } else {
            $regular_price = $product->get_regular_price();
            $sale_price = $product->get_sale_price();
        }

        $image_link = wp_get_attachment_image_src( get_post_thumbnail_id( $product->get_id() ), $image_type, true )[0];
        if ( function_exists( 'check_valid_cdn' ) ) {
            
            $valid_cdn =  check_valid_cdn();

            if ( $valid_cdn ) {
                $image_link = str_replace( get_home_url(), $valid_cdn, $image_link );
            }
        }
        
        $arrPt = array(
            'id' => $product->get_id(),
            'name' => $product->get_name(),
            'link' => get_permalink( $product->get_id()),
            'regular_price' => number_format((float)$regular_price, 0, '.', ','),
            'sale_price' => number_format((float)$sale_price, 0, '.', ','),
            'image' => $image_link,
            'average_rating' => $product->get_average_rating(),
            'review_count' => $product->get_review_count()
        );

        $arrPt['manage_stock'] = $product->get_manage_stock();
        $arrPt['stock_quantity'] = $product->get_stock_quantity();
        $arrPt['stock_status'] = $product->get_stock_status();
        // $arrPt['sale_end_time'] = $productMgr->getDiscountTimeRemaining($product->get_id());
        $period = get_post_meta( $product->get_id(), 'warranty_period', true );
        // if (empty($period)) {
        //     $period = 36;
        // }
        $arrPt['period'] = $period;
        if ($get_slug == 1) {
            $terms = get_the_terms( $product->get_id(), 'product_cat' );
            $slugs = [];
            if (count($terms) > 0) {
                foreach($terms as $item) {
                    array_push($slugs, $item->slug);
                }
            }
            $arrPt['slugs'] = $slugs;
        }
        
        return $arrPt;
    }
endif;

if ( !function_exists( 'get_products_sales' ) ) {
    function get_products_sales( WP_REST_Request $request ) {
        
        $post_number = absint( $_GET[ 'post_number' ] );
        $post_number = 100;
        $start_page = $_GET[ 'start_page' ] ? absint( $_GET[ 'start_page' ] ) : 0;

        $orderby = esc_attr( $_GET[ 'orderby' ] );
        $order = esc_attr( $_GET[ 'order' ] );
        $get_slug = $_GET[ 'get_slug' ] ? absint( $_GET[ 'get_slug' ] ) : 0;

        $current_time = new DateTime("now", new DateTimeZone('Asia/Bangkok'));
        $current_time = $current_time->format('Y-m-d');
        $filenamecache = 'get_products_sales-'.$post_number.$start_page.$orderby.$order.$get_slug.'.txt';
        $cache_result = get_cache_by_key('get_products_sales', $filenamecache);
        
        if ($cache_result) {
            $cache_time = $cache_result['time'];
            if ($cache_time) {
                // $date_1 = strtotime($cache_time);
                // $date_2 = strtotime($current_time);
                // $datediff = $date_2 - $date_1;
                // $day = round($datediff / (60 * 60 * 24));
                // if ($day < 1) {
                //     $result = array(
                //         "status" => "OK",
                //         "errMsg" => "",
                //         "data" => $cache_result['data']
                //     );
                //     return $result;
                // }

                $result = array(
                    "status" => "OK",
                    "errMsg" => "",
                    "data" => $cache_result['data']
                );
                return $result;
            }
        }

        return array(
            "status" => "FAIL",
            "errMsg" => "Products not found",
            "data" => null
        );
    }
}

if ( !function_exists( 'update_product_info' ) ) {
    function update_product_info( WP_REST_Request $request ) {
        $alias = $request->get_param( 'id' );
        $parameters = $request->get_json_params();
        $qty = $parameters['qty'];
        $price = $parameters['price'];
        $existed_product = get_post_meta( $alias );
        
        $qty_key = '_stock';
        $price_key = '_price';
        $regular_price_key = '_regular_price';
        $sale_price_key = '_sale_price';

        $response = array(
            'status' => true,
            'message'=> 'Update success'
        );

        if ( empty( $existed_product ) ) {
            return wp_send_json(
                array(
                    'status' => false,
                    'message' => 'Can not find any product with alias: ' . $alias
                )
            );
        }

        if ( isset($qty) && $qty >= 0 ) {
            $updated_qty = update_post_meta( $alias, $qty_key, $qty );
            if (!$updated_qty ) {
                $response[] = array(
                    'status' => false,
                    'message'=> 'Can not update qty in web api: '. $qty 
                );
            } else {
                $response[] = array(
                    'status' => true,
                    'message'=> 'Update qty success'
                );
            }
        }
        
        if ( !empty( $price ) ) {
            // get giá sale và giá gốc
            $sale_price = get_post_meta( $alias, $sale_price_key, true );
            if ( $sale_price && $sale_price > 0 ) {
                if( $price <= $sale_price ) {
                    $updated_sale_price = update_post_meta( $alias, $sale_price_key, $price );
                    // $updated_regular_price = update_post_meta( $alias, $regular_price_key, $price );
                    $updated_price = update_post_meta( $alias, $price_key, $price );
                } else {
                    $updated_price = update_post_meta( $alias, $regular_price_key, $price );
                    $updated_price = update_post_meta( $alias, $price_key, $sale_price );
                }
            } else {
                $updated_regular_price = update_post_meta( $alias, $regular_price_key, $price );
                $updated_price = update_post_meta( $alias, $price_key, $price );
            }
            // hiện tại chỉ update giá bán gốc
            // $updated_price = update_post_meta( $alias, $regular_price_key, $price );
            if ( !$updated_price ) {
                $response[] = array(
                    'status' => false,
                    'message'=> 'Can not update price in web api: ' . $price
                );
             }else {
                $response[] = array(
                    'status' => true,
                    'message'=> 'Update price success'
                );
            }
        }
        return wp_send_json($response);
    }
}