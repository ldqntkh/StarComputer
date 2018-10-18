<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
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
 * @version     2.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

wc_print_notices();

do_action( 'woocommerce_before_checkout_form', $checkout );

// If checkout registration is disabled and not logged in, the user cannot checkout
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'woocommerce' ) );
	return;
}

?>

<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">

	<?php if ( $checkout->get_checkout_fields() ) : ?>

		<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

		<div class="col2-set" id="customer_details">
			<div class="progress-checkout">
				<div class="row bs-wizard">
                    <div class="bs-wizard-step bs-wizard-step-1">
                        <div class="text-center bs-wizard-stepnum">
                            <span>Đặt hàng</span>
                        </div>
                        <div class="progress">
							<div class="progress-bar-right"></div>
							<span class="bs-wizard-dot">1</span>
						</div>
                    </div>

                    <div class="bs-wizard-step bs-wizard-step-2 active">
                        <div class="text-center bs-wizard-stepnum">
                            <span class="hidden-xs">Địa Chỉ Giao Hàng</span>
                        </div>
                        <div class="progress">
							<div class="progress-bar-left"></div>
							<div class="progress-bar-right"></div>
							<span class="bs-wizard-dot">2</span>
						</div>
                    </div>

                    <div class="bs-wizard-step bs-wizard-step-3 disabled">
                        <div class="text-center bs-wizard-stepnum">
                            <span class="hidden-xs">Thanh Toán &amp; Đặt Mua</span>
                        </div>
                        <div class="progress">
							<div class="progress-bar-left"></div>
							<span class="bs-wizard-dot">3</span>
						</div>
                    </div>

                </div>
			</div>
			<div class="address-billing-and-shipping">
				<div class="col-1">
					<?php do_action( 'woocommerce_checkout_billing' ); ?>
				</div>

				<div class="col-2">
					<?php do_action( 'woocommerce_checkout_shipping' ); ?>
				</div>
			</div>
			<div class="progress-payment">
				<div class="shipping-method">
					<h2>Hình thức giao hàng</h2>
					<?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) :
						do_action( 'woocommerce_review_order_before_shipping' );
						wc_cart_totals_shipping_html();
						do_action( 'woocommerce_review_order_after_shipping' );
					endif; ?>
				</div>
				<?php do_action( 'woocommerce_checkout_payment_review' ); ?>
			</div>
		</div>

		<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

	<?php endif; ?>

	<div class="order-review-pr">
		<div class="order-review-details">
			<div id="checkout-address"></div>
			<h3 id="order_review_heading"><?php _e( 'Đơn hàng của bạn', 'woocommerce' ); ?></h3>

			<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

			<div id="order_review" class="woocommerce-checkout-review-order">
				<?php do_action( 'woocommerce_checkout_order_review' ); ?>
			</div>

			<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>

			<?php do_action( 'woocommerce_review_order_before_submit' ); ?>

			<?php echo apply_filters( 'woocommerce_order_button_html', '<button type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="' . esc_attr( 'Tiếp tục' ) . '" data-value="' . esc_attr( 'Tiếp tục' ) . '">' . esc_html( 'Tiếp tục' ) . '</button>' ); // @codingStandardsIgnoreLine ?>

			<?php do_action( 'woocommerce_review_order_after_submit' ); ?>
		</div>
	</div>

</form>
	<!-- <button type="button" class="continue-place-order">Tiếp tục thanh toán</button> -->
<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
