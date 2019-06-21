<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked wc_print_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class(); ?>>
	<?php
		$facebookOptions = get_option( 'custom_preferences_facebook_options' );
		$fbEnable = !empty( $facebookOptions ) && !empty( $facebookOptions['facebook_enable'] );
		$fbLayout = $facebookOptions[ 'facebook_layout' ];
		$fbButtonSize = $facebookOptions[ 'facebook_button_size' ];
	?>
	<?php if ( $fbEnable ) : ?>
		<div class="fb-share-button" data-href="http://beta.tinhocngoisao.com" data-layout="<?php echo $fbLayout; ?>" data-size="<?php echo $fbButtonSize; ?>"><a target="_blank" class="fb-xfbml-parse-ignore"><?php echo __( 'Share', 'online-shop' ); ?></a></div>
	<?php endif; ?>
	<?php
		/**
		 * Hook: woocommerce_before_single_product_summary.
		 *
		 * @hooked woocommerce_show_product_sale_flash - 10
		 * @hooked woocommerce_show_product_images - 20
		 */
		do_action( 'woocommerce_before_single_product_summary' );
	?>

	<div class="summary entry-summary">
		<?php
			/**
			 * Hook: woocommerce_single_product_summary.
			 *
			 * @hooked woocommerce_template_single_title - 5
			 * @hooked woocommerce_template_single_rating - 10
			 * @hooked woocommerce_template_single_price - 10
			 * @hooked woocommerce_template_single_excerpt - 20
			 * @hooked woocommerce_template_single_add_to_cart - 30
			 * @hooked woocommerce_template_single_meta - 40
			 * @hooked woocommerce_template_single_sharing - 50
			 * @hooked WC_Structured_Data::generate_product_data() - 60
			 */
			do_action( 'woocommerce_single_product_summary_center' );
		?>
		<div class="summary entry-summary-left-column">
			<?php
				do_action( 'woocommerce_single_product_summary_left' );
			?>
		</div>

		<div class="summary entry-summary-right-column">
			<?php
				do_action( 'woocommerce_single_product_summary_right' );
			?>
		</div>

		<div class="summary entry-summary-center-footer">
			<?php do_action( 'woocommerce_single_product_summary_center_footer' ); ?>
		</div>
	</div>

	<?php
		/**
		 * Hook: woocommerce_after_single_product_summary.
		 *
		 * @hooked woocommerce_output_product_data_tabs - 10
		 * @hooked woocommerce_upsell_display - 15
		 * @hooked woocommerce_output_related_products - 20
		 */
		do_action( 'woocommerce_after_single_product_summary' );
	?>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>
