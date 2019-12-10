<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! apply_filters( 'woocommerce_order_item_visible', true, $item ) ) {
	return;
}
?>
<tr>
	<td style="width: 20px; text-align:center;border: .5px solid;padding: 2.5px;"><?php echo $index; ?></td>
	<td style="width: 80px; text-align:center;border: .5px solid;padding: 2.5px;"><?php echo $product->get_sku(); ?></td>
	<td style="border: .5px solid;padding: 2.5px;"><?php echo $item->get_name(); ?></td>
	<td style="width: 100px; text-align:center;border: .5px solid;padding: 2.5px;"><?php echo wc_price($product->get_price()); ?></td>
	<td style="width: 20px; text-align:center;border: .5px solid;padding: 2.5px;"><?php echo $item->get_quantity(); ?></td>
	<td style="width: 100px; text-align:center;border: .5px solid;padding: 2.5px;">
		<?php echo $order->get_formatted_line_subtotal( $item ); ?>
	</td>
</tr>
