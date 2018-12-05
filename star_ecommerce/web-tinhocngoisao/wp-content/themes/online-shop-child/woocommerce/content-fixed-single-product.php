<?php 

defined( 'ABSPATH' ) || exit;
global $product;
?>
<?php if ( !empty( $product->get_stock_quantity() ) && $product->get_stock_quantity() > 0 ) : ?>
    <div class="fixed-product-detail hide">
        <div class="wrapper">
    <?php
        $image = wp_get_attachment_image_src( get_post_thumbnail_id( $product->ID ), 'single-post-thumbnail' );
    ?>
        <img src="<?php echo $image[0] ?>" />
        <div class="product-detail">
    <?php
        the_title( '<h3 class="product_title entry-title">', '</h3>' );
        woocommerce_template_single_rating();
        woocommerce_template_single_price();
    ?>
            <div class="tab-wrapper">
                <ul>
                    <li class="product-detail-tab active" data-content="detail"><span>Thông tin chi tiết</span></li>
                    <li class="product-config-detail-tab" data-content="config-detail"><span>Cấu hình chi tiết</span></li>
                    <li class="product-warranty-tab" data-content="warranty"><span>Bảo hành</span></li>
                    <li class="product-comment-tab" data-content="comment"><span>Bình luận</span></li>
                </ul>
            </div>
        </div>
        <div class="add-to-cart-form">
            <?php  woocommerce_template_single_add_to_cart(); ?>
        </div>
        </div>
    </div>
<?php endif; ?>