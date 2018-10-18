<div class="advance-product-search">
	<form role="search" method="get" class="woocommerce-product-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
        <div class="input-group clearfix">
            <input type="search" id="woocommerce-product-search-field-<?php echo isset( $index ) ? absint( $index ) : 0; ?>" 
                class="form-control search-field" placeholder="Tìm sản phẩm" aria-label="Tìm sản phẩm" value="<?php echo get_search_query(); ?>" name="s" />
            <div class="input-group-append">
                <button class="fa fa-search searchsubmit" type="submit"></button>
            </div>
        </div>
        <input type="hidden" name="post_type" value="product" />
    </form><!-- .woocommerce-product-search -->
</div><!-- .advance-product-search -->