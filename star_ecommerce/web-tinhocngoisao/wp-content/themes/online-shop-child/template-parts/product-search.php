<div class="advance-product-search">
	<form role="search" method="get" class="woocommerce-product-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<?php
		global $online_shop_search_placeholder;
        $terms = get_terms( array(
            'taxonomy'   => 'product_cat',
            'hide_empty' => true,
            'parent'     => 0,
            'orderby'    => 'id',
            'order'      => 'DESC'
        ) );

        $special_menus = wp_get_nav_menu_items('special-menu');

		if (  ! empty( $special_menus ) && ! is_wp_error( $special_menus ) ) : ?>
			<?php $current = ( isset( $_GET['product_category'] ) ) ? absint( $_GET['product_category'] ) : '' ; ?>
            <select class="select_products" name="product_category">
                <option value=""><?php esc_html_e( 'Tất cả danh mục', 'online-shop' ); ?></option>
                <?php foreach ( $special_menus as $cat ) : ?>
                    <?php 
                        if ($cat->post_status === 'publish' && $cat->menu_item_parent === '0') :
                    ?>
                    <option value="<?php echo esc_attr( $cat->ID ); ?>" <?php selected( $current, $cat->ID ); ?> ><?php echo esc_attr( $cat->title ); ?></option>
                    <?php endif; ?>
                <?php endforeach; ?>
            </select>
		<?php endif; ?>
        <input type="search" id="woocommerce-product-search-field-<?php echo isset( $index ) ? absint( $index ) : 0; ?>" class="search-field" placeholder="<?php echo esc_attr( $online_shop_search_placeholder ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
        <button class="fa fa-search searchsubmit" type="submit"></button>
        <input type="hidden" name="post_type" value="product" />
    </form><!-- .woocommerce-product-search -->
</div><!-- .advance-product-search -->