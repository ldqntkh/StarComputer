<?php
/**
 * Grouped product add to cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/add-to-cart/grouped.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product, $post;

do_action( 'woocommerce_before_add_to_cart_form' );
$grouped_products = json_decode(str_replace("\\", "", $grouped_products_data));
?>
<?php if ( $grouped_products ): ?>
<form class="cart grouped_form" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>
	<table cellspacing="0" class="woocommerce-grouped-product-list group_table">
		<tbody>
			<?php
			$quantites_required      = false;
			$previous_post           = $post;
			$grouped_product_columns = apply_filters( 'woocommerce_grouped_product_columns', array(
				'label',
			), $product );
			?>

			<tr class="woocommerce-grouped-product-list__quantity_label"><?php _e('Quantity'); ?></tr>
			<?php
			foreach ( $grouped_products as $grouped_product ) {
				$grouped_product_child = wc_get_product( $grouped_product->productId );
				
				$post_object        = get_post( $grouped_product_child->get_id() );
				$quantites_required = $quantites_required || ( $grouped_product_child->is_purchasable() && ! $grouped_product_child->has_options() );
				$post               = $post_object; // WPCS: override ok.

				if ( $grouped_product_child->is_on_sale() ) {
					$price = $grouped_product_child->get_sale_price();
				} else {
					$price =  $grouped_product_child->get_regular_price();
				}
				setup_postdata( $post );

				echo '<tr id="product-' . esc_attr( $grouped_product_child->get_id() ) . '" class="woocommerce-grouped-product-list-item ' . esc_attr( implode( ' ', wc_get_product_class( '', $grouped_product_child->get_id() ) ) ) . '">';

				printf('<td><img src="%s" /></td>', wp_get_attachment_url($grouped_product_child->get_image_id()));
				// Output columns for each product.
				foreach ( $grouped_product_columns as $column_id ) {
					do_action( 'woocommerce_grouped_product_list_before_' . $column_id, $grouped_product_child );

					switch ( $column_id ) {
						case 'label':
							$value  = '<label for="product-' . esc_attr( $grouped_product_child->get_id() ) . '">';
							$value .= $grouped_product_child->is_visible() ? '<a href="' . esc_url( apply_filters( 'woocommerce_grouped_product_list_link', $grouped_product_child->get_permalink(), $grouped_product_child->get_id() ) ) . '">' . $grouped_product_child->get_name() . '</a>' : $grouped_product_child->get_name();
							$value .= '</label>';
							$value .= '<div class="woocommerce-grouped-product-list-item__price">';
							$value .= $grouped_product_child->get_price_html() . wc_get_stock_html( $grouped_product_child );
							$value .= '</div>';
							$value .= "<input type='hidden' class='price-product' value='" . $price . "'/>";
							if ( !empty( $grouped_product_child->get_stock_quantity() ) && $grouped_product_child->get_stock_quantity() > 0 ) {
								ob_start();

								if ( ! $grouped_product_child->is_purchasable() || $grouped_product_child->has_options() || ! $grouped_product_child->is_in_stock() ) {
									woocommerce_template_loop_add_to_cart();
								} elseif ( $grouped_product_child->is_sold_individually() ) {
									echo '<input type="checkbox" name="' . esc_attr( 'quantity[' . $grouped_product_child->get_id() . ']' ) . '" value="1" class="wc-grouped-product-add-to-cart-checkbox" />';
								} else {
									do_action( 'woocommerce_before_add_to_cart_quantity' );
	
									woocommerce_quantity_input( array(
										'input_name'  => 'quantity[' . $grouped_product_child->get_id() . ']',
										'input_value' => $grouped_product->quantity, // WPCS: CSRF ok, input var okay, sanitization ok.
										'min_value'   => apply_filters( 'woocommerce_quantity_input_min', 0, $grouped_product_child ),
										'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $grouped_product_child->get_max_purchase_quantity(), $grouped_product_child ),
									) );
	
									do_action( 'woocommerce_after_add_to_cart_quantity' );
								}
								
								$value .= ob_get_clean();
							} else {
								$value .= "<div class='woocommerce-grouped-product-list-item__message'><p>" . __('Sản phẩm đã hết hàng') . "</p></div>";
							}
							break;
						default:
							$value = '';
							break;
					}

					echo '<td class="woocommerce-grouped-product-list-item__' . esc_attr( $column_id ) . '">' . apply_filters( 'woocommerce_grouped_product_list_column_' . $column_id, $value, $grouped_product_child ) . '</td>'; // WPCS: XSS ok.

					do_action( 'woocommerce_grouped_product_list_after_' . $column_id, $grouped_product_child );
				}

				echo '</tr>';
			}
			$post = $previous_post; // WPCS: override ok.
			setup_postdata( $post );
			?>
		</tbody>
	</table>

	<input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" />

	<?php if ( $quantites_required ) : ?>

		<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

		<button type="submit" class="single_add_to_cart_button button alt"><?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>

		<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>

	<?php endif; ?>
</form>
<?php endif; ?>
<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>
