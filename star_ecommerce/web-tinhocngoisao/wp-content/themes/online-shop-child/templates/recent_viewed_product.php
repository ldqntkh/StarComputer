<?php 
/*
    Template Name: Recent Viewed Products
*/
    get_header();
    $viewed_products = ! empty( $_COOKIE['woocommerce_recently_viewed'] ) ? (array) explode( '|', wp_unslash( $_COOKIE['woocommerce_recently_viewed'] ) ) : array(); // @codingStandardsIgnoreLine
    $viewed_products = array_reverse( array_filter( array_map( 'absint', $viewed_products ) ) );

    if ( empty( $viewed_products ) ) {
        return;
    }

    ob_start();

    $query_args = array(
        'posts_per_page' => -1,
        'no_found_rows'  => 1,
        'post_status'    => 'publish',
        'post_type'      => 'product',
        'post__in'       => $viewed_products,
        'orderby'        => 'post__in',
    );

    if ( 'yes' === get_option( 'woocommerce_hide_out_of_stock_items' ) ) {
        $query_args['tax_query'] = array(
            array(
                'taxonomy' => 'product_visibility',
                'field'    => 'name',
                'terms'    => 'outofstock',
                'operator' => 'NOT IN',
            ),
        ); // WPCS: slow query ok.
    }

    $r = new WP_Query( apply_filters( 'woocommerce_recently_viewed_products_widget_query_args', $query_args ) );

    if ( $r->have_posts() ) {

        echo wp_kses_post( apply_filters( 'woocommerce_before_widget_product_list', '<ul class="products columns-4 custom-plp-page">' ) );

        $template_args = array(
            'widget_id' => $args['widget_id'],
        );

        while ( $r->have_posts() ) {
            $r->the_post();
            wc_get_template( 'content-widget-product.php', $template_args );
        }

        echo wp_kses_post( apply_filters( 'woocommerce_after_widget_product_list', '</ul>' ) );

    } else {
        echo '<span class="error">Bạn chưa xem qua sản phẩm nào</span>';
    }

    wp_reset_postdata();

    $content = ob_get_clean();

    echo $content; 
?>

<?php
    get_footer();
?>