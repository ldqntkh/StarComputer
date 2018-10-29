<?php 

defined( 'ABSPATH' ) || exit;
global $product;
?>
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
    </div>
    <div class="add-to-cart-form">
        <?php  woocommerce_template_single_add_to_cart(); ?>
    </div>
    </div>
</div>