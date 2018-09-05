<?php
/**
 * Thankyou page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/thankyou.php.
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
 * @version     3.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div class="woocommerce-order">

	<?php if ( $order ) : ?>

		<?php if ( $order->has_status( 'failed' ) ) : ?>

			<p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed"><?php _e( 'Unfortunately your order cannot be processed as the originating bank/merchant has declined your transaction. Please attempt your purchase again.', 'woocommerce' ); ?></p>

			<p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed-actions">
				<a href="<?php echo esc_url( $order->get_checkout_payment_url() ); ?>" class="button pay"><?php _e( 'Pay', 'woocommerce' ) ?></a>
				<?php if ( is_user_logged_in() ) : ?>
					<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="button pay"><?php _e( 'My account', 'woocommerce' ); ?></a>
				<?php endif; ?>
			</p>

		<?php else : ?>

			<p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters( 'woocommerce_thankyou_order_received_text', __( 'Cám ơn. Vui lòng xem lại hóa đơn của bạn đã thanh toán', 'woocommerce' ), $order ); ?></p>

			<ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">

				<li class="woocommerce-order-overview__order order">
					<?php _e( 'Số hóa đơn:', 'woocommerce' ); ?>
					<strong><?php echo $order->get_order_number(); ?></strong>
				</li>

				<li class="woocommerce-order-overview__date date">
					<?php _e( 'Ngày:', 'woocommerce' ); ?>
					<strong><?php echo wc_format_datetime( $order->get_date_created() ); ?></strong>
				</li>

				<?php if ( is_user_logged_in() && $order->get_user_id() === get_current_user_id() && $order->get_billing_email() ) : ?>
					<li class="woocommerce-order-overview__email email">
						<?php _e( 'Email:', 'woocommerce' ); ?>
						<strong><?php echo $order->get_billing_email(); ?></strong>
					</li>
				<?php endif; ?>

				<li class="woocommerce-order-overview__total total">
					<?php _e( 'Tổng cộng:', 'woocommerce' ); ?>
					<strong><?php echo $order->get_formatted_order_total(); ?></strong>
				</li>

				<?php if ( $order->get_payment_method_title() ) : ?>
					<li class="woocommerce-order-overview__payment-method method">
						<?php _e( 'Phương thức thanh toán:', 'woocommerce' ); ?>
						<strong><?php echo wp_kses_post( $order->get_payment_method_title() ); ?></strong>
					</li>
				<?php endif; ?>

			</ul>

		<?php endif; ?>

		<?php do_action( 'woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id() ); ?>
		<?php do_action( 'woocommerce_thankyou', $order->get_id() ); ?>

	<?php else : ?>
		<h1 style="text-align: center;">Thank you for your order</h1>
		<div class="" style="border: 1px solid black;background-color:#f8f8f8;display: inline-flex;flex-direction: row;width:100%;">
			<div style="width: 50%;flex-direction: column;padding: 10px;border-right: 1px solid black;">
				<p style="font-weight: bold;text-transform: uppercase;">Summary:</p>
				<p>Order #: <span>12345678</span></p>
				<p>Order Date: <span>March 30, 2017</span></p>
				<p style="matgin-bottom:0;">Order Total: <span>$14.07</span></p>
			</div>
			<div style="width: 50%;flex-direction: column;padding: 10px;">
				<p style="font-weight: bold;text-transform: uppercase;">Shipping address</p>
				<p>Miss Bean Official</p>
				<p>123 Sreet Ave</p>
				<p style="margin-bottom:0;">Boston, MA 02110</p>
			</div>
		</div>

		<div style="display: inline-flex;flex-direction: row;width: 100%;background-color:#f8f8f8;margin-top:10px;padding: 20px 10px;">
			<div class="column-one" style="flex-direction: column;width:85%;">
				<h3 style="font-weight: bold;text-transform: uppercase;margin:0;">Items shipped</h1>
			</div>
			<div class="column-two" style="flex-direction: column;width:5%">
				<h4 style="margin:0;">QTY</h4>
			</div>
			<div style="flex-direction: column;width:10%;text-align:right;">
				<h5 style="text-transform: uppercase;margin:0;">Price</h5>
			</div>
		</div>
		<div class="product-wrapper" style="display: inline-flex;flex-direction: row;width: 100%;padding: 20px 10px;border-bottom: 2px solid #f8f8f8;">
			<div class="column-one" style="flex-direction: column;width:20%;">
				<img src="http://localhost:9999/softwares/starComputer/star_ecommerce/web-tinhocngoisao/wp-content/uploads/2017/12/converse-2483523_640-300x300.jpg"
					alt="Product Image" width="200" height="200" style="vertical-align:middle;">
			</div>
			<div class="column-two" style="flex-direction: column;width: 65%;padding-left:20px;padding-top:5em;">
				<span>Nylabone Advanced Oral Care Dog Finger Brush, 2-pack</span>
			</div>
			<div class="column-three" style="flex-direction: column;width:5%;padding-top:5em;">
				<span>1</span>
			</div>
			<div class="column-four" style="flex-direction: column;width:10%;text-align:right;padding-top:5em;color:red;">
				<span>$3.59</span>
			</div>
		</div>
		<div class="product-wrapper" style="display: inline-flex;flex-direction: row;width: 100%;padding: 20px 10px;border-bottom: 2px solid #f8f8f8;">
			<div class="column-one" style="flex-direction: column;width:20%;">
				<img src="http://localhost:9999/softwares/starComputer/star_ecommerce/web-tinhocngoisao/wp-content/uploads/2017/12/converse-2483523_640-300x300.jpg"
					alt="Product Image" width="200" height="200" style="vertical-align:middle;">
			</div>
			<div class="column-two" style="flex-direction: column;width: 65%;padding-left:20px;padding-top:5em;">
				<span>Nylabone Advanced Oral Care Dog Finger Brush, 2-pack</span>
			</div>
			<div class="column-three" style="flex-direction: column;width:5%;padding-top:5em;">
				<span>1</span>
			</div>
			<div class="column-four" style="flex-direction: column;width:10%;text-align:right;padding-top:5em;color:red;">
				<span>$3.59</span>
			</div>
		</div>
		<div class="order-summary" style="display: inline-flex;flex-direction: row;width: 100%;">
			<div style="flex-direction: column;width:75%"></div>
			<div class="order-summary-column-1" style="flex-direction: column;width:15%;">
				<p>Subtotal (2 items):</p>
				<p>Flat-Rate Shipping:</p>
				<p>Estimated Tax:</p>
				<p>Order Total:</p>
			</div>
			<div class="order-summary-column-2" style="flex-direction: column;width:10%;text-align:right;">
				<p>$8.58</p>
				<p>$4.95</p>
				<p>$0.54</p>
				<p style="color:red;">$14.07</p>
			</div>
		</div>
		<p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters( 'woocommerce_thankyou_order_received_text', __( 'Cám ơn. Vui lòng xem lại hóa đơn của bạn đã thanh toán', 'woocommerce' ), null ); ?></p>

	<?php endif; ?>

</div>
