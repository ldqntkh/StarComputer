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

			<div class="woocommerce-thankyou-order-received-summary-wrapper">
				<div>
					<h3>Thống kê:</h3>
					<p>Hóa đơn số: <span><?php echo $order->get_order_number(); ?></span></p>
					<p>Ngày: <span><?php echo wc_format_datetime( $order->get_date_created() ); ?></span></p>
					<p>Phương thức thanh toán: <span><?php echo $order->get_payment_method_title(); ?></span></p>
					<p>Tổng hóa đơn: <span><?php echo $order->get_formatted_order_total(); ?></span></p>
				</div>
				<div>
					<h3>Địa chỉ giao hàng:</h3>
					<p><?php echo $order->get_shipping_address_1() . ', ' . $order->get_shipping_city() ; ?></p>
				</div>
			</div>

			<div class="woocommerce-thankyou-order-received-product-title">
				<div class="product-title__column-one">
					<h4><strong>Danh sách sản phẩm</strong></h4>
				</div>
				<div class="product-title__column-two">
					<h4>Số lượng</h4>
				</div>
				<div class="product-title__column_three">
					<h4>Giá</h4>
				</div>
			</div>
		<?php
			foreach ( $order->get_items() as $orderItem ):
			$product = $orderItem->get_product();
		?>
			<div class="woocommerce-thankyou-order-received-product-wrapper">
				<div class="product-wrapper__column-one">
					<?php echo $product->get_image('medium'); ?>
				</div>
				<div class="product-wrapper__column-two">
					<span><?php echo $orderItem->get_name(); ?></span>
				</div>
				<div class="product-wrapper__column-three">
					<span><?php echo $orderItem->get_quantity(); ?></span>
				</div>
				<div class="product-wrapper__column-four">
					<span><?php echo wc_price( $orderItem->get_total() ); ?></span>
				</div>
			</div>
		<?php endforeach; ?>
			<div class="woocommerce-thankyou-order-received-order-summary">
				<div style="width:45%"></div>
				<div class="order-summary-column-one">
					<p>Tổng tiền (chưa bao gồm những phí khác):</p>
					<p>Giá vận chuyển:</p>
					<p>Giá thuế:</p>
					<p>Tổng hóa đơn:</p>
				</div>
				<div class="order-summary-column-two">
					<p><?php echo wc_price( $order->get_subtotal() ); ?></p>
					<p><?php echo wc_price( $order->get_shipping_total() ); ?></p>
					<p><?php echo wc_price( $order->get_total_tax() ); ?></p>
					<p><?php echo $order->get_formatted_order_total(); ?></p>
				</div>
			</div>

		<?php endif; ?>

	<?php else : ?>
		<p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters( 'woocommerce_thankyou_order_received_text', __( 'Cám ơn. Vui lòng xem lại hóa đơn của bạn đã thanh toán', 'woocommerce' ), null ); ?></p>

	<?php endif; ?>

</div>
