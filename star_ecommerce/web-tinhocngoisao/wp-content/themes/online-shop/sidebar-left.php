<?php
/**
 * The left sidebar containing the main widget area.
 */
if ( ! is_active_sidebar( 'online-shop-sidebar' ) ) {
    return;
}
$sidebar_layout = online_shop_sidebar_selection();
if( $sidebar_layout == "left-sidebar" ) : ?>
    <div id="secondary-left" class="widget-area sidebar secondary-sidebar float-right" role="complementary">
        <div id="sidebar-section-top" class="widget-area sidebar clearfix">
            <?php dynamic_sidebar( 'online-shop-sidebar' ); ?>
        </div>
        <div class="pr-sidebar-mobile">
            <div class="side-header" id="side-header">
                <h2 class="sidebar-title">Bộ lọc sản phẩm</h2>
                <i class="fa fa-navicon toggle"></i>
            </div>
            <div class="widget-area sidebar clearfix sidebar-custom-mobile">
                <?php woocommerce_catalog_ordering(); ?>
                <?php dynamic_sidebar( 'online-shop-sidebar' ); ?>
            </div>
        </div>
        
    </div>
<?php endif;