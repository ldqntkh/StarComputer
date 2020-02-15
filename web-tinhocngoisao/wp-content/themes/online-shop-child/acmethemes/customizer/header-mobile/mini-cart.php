<div class="cart-section">
    <?php
    if( $online_shop_enable_cart_icon ){
        ?>
    <div class="wc-cart-wrapper">
        <div class="wc-cart-icon-wrapper">
            <a class="at-wc-icon cart-icon" href="<?php echo esc_url( wc_get_cart_url() ); ?>">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span class="cart-value cart-customlocation"> <?php echo wp_kses_data( WC()->cart->get_cart_contents_count() );?></span>
            </a>
        </div>
        <div class="wc-cart-widget-wrapper">
            <?php the_widget( 'WC_Widget_Cart', '' ); ?>
        </div>
    </div>
    <?php
    }
    ?>
</div> <!-- .cart-section -->