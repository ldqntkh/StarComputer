<?php
/**
 * Description tab
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/description.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post;

$heading = esc_html( apply_filters( 'woocommerce_product_description_heading', __( 'Description', 'woocommerce' ) ) );

?>
<div class="description-wrapper">
    <?php if ( $heading ) : ?>
        <h2><?php echo $heading; ?></h2>
    <?php endif; ?>
    <div class="tab-wrapper">
        <ul>
            <li id="product-detail-tab" data-content="detail" class="active"><span><?php echo __( 'Thông tin chi tiết', 'woocommerce' ); ?></span></li>
            <li id="product-config-detail-tab" data-content="config-detail"><span><?php echo __( 'Cấu hình chi tiết', 'woocommerce' ); ?></span></li>
            <li id="product-warranty-tab" data-content="warranty"><span><?php echo __( 'Bảo hành', 'woocommerce' ); ?></span></li>
            <li id="product-comment-tab" data-content="comment"><span><?php echo __( 'Bình luận', 'woocommerce' ); ?></span></li>
        </ul>
    </div>
    <div class="tab-content-wrapper">
        <div id="detail-content" class="tab-content active">
            <div class="tab-detail-content">
            <?php the_content(); ?>
            </div>
        </div>

        <div id="config-detail-content" class="tab-content inactive">
            <div class="tab-detail-content">
            <?php
                if (get_field('product_configured_detail')) {
                    echo get_field('product_configured_detail');
                }
            ?>
            </div>
        </div>

        <div id="warranty-content" class="tab-content inactive">
            <div class="tab-detail-content">
            <?php
                if (get_field('product_warranty')) {
                    echo get_field('product_warranty');
                }
            ?>
            </div>
        </div>

        <div id="comment-content" class="tab-content inactive">
            <div class="tab-detail-content">
            <?php comments_template(); ?>
            </div>
        </div>
    </div>
</div>