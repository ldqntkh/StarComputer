<?php
/**
 * Single Product Price
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/price.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

?>
<p class="price"><?php echo $product->get_price_html(); ?></p>

<?php if ( class_exists( 'WC_Admin_Extra_Profile', false ) && class_exists( 'WC_Employee_Discounts', false ) ) { ?>
	<?php $employee_discount = WC_Employee_Discounts::calculate_employee_discount($product); ?>
	<?php if ( WC_Admin_Extra_Profile::is_staff() && $employee_discount > 0 ) { ?>
		<p class="employeeDiscount">
			<?php
				echo __( 'Chiết khấu', 'employee-discounts' ) . '&nbsp;' . WC_Employee_Discounts::get_price_discount_html( $employee_discount );
			?>
		</p>
	<?php } ?>
<?php } ?>