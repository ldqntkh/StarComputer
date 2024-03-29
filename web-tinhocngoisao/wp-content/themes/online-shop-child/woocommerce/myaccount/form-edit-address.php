<?php
/**
 * Edit address form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-edit-address.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

$page_title = ( 'billing' === $load_address ) ? __( 'Billing address', 'woocommerce' ) : __( 'Shipping address', 'woocommerce' );

do_action( 'woocommerce_before_edit_account_address_form' );
$otherAddr = get_user_meta( wp_get_current_user()->ID, 'wc_multiple_shipping_addresses', true );
?>
<p><a class="add-new-address" href="#">Thêm địa chỉ mới.</a></p>
<?php if ( !empty( $otherAddr ) ): ?>
<div class="list-address">
	<?php foreach ( $otherAddr as $idx => $address ): ?>
	<?php $isAddressDefault = $address['shipping_address_is_default'] === 'true'; ?>
	<div class="address-item <?php $isAddressDefault ? 'active' : ''; ?>">
		<div class="address-content">
			<p class="address-name">
				<span class="address-name-title"><?php echo $address['shipping_last_name']; ?></span>
				<?php if ( $isAddressDefault ): ?>
					<span class="default">Mặc định</span>
				<?php endif; ?>
				<span class="address-action">
					<a href="#" class="update-address">Chỉnh sửa</a>
					<?php if ( !$isAddressDefault ): ?>
						<a href="#" class="remove-address">Xóa</a>
					<?php endif;?>
				</span>

			</p>
			<p>
				<?php
					do_action( 'display_address_info', array(
															'address' => $address['shipping_address_1'],
															'address2'=> $address['shipping_address_2'],
															'city'    => $address['shipping_city'],
															'state'   => $address['shipping_state'])
														);
				?>
			</p>
			<p><span>Điện thoại:</span> <?php echo $address['shipping_phone']; ?></p>
		</div>
		<div class="address-hidden-field">
			<input type="hidden" name="shipping_last_name[]" value="<?php echo $address['shipping_last_name']; ?>" />
			<input type="hidden" name="shipping_phone[]" value="<?php echo $address['shipping_phone']; ?>" />
			<input type="hidden" name="shipping_state[]" value="<?php echo $address['shipping_state']; ?>" />
			<input type="hidden" name="shipping_city[]" value="<?php echo $address['shipping_city']; ?>" />
			<input type="hidden" name="shipping_address_2[]" value="<?php echo $address['shipping_address_2']; ?>" />
			<input type="hidden" name="shipping_address_1[]" value="<?php echo $address['shipping_address_1']; ?>" />
			<input type="hidden" name="shipping_address_is_default[]" value="<?php echo $address['shipping_address_is_default']; ?>" />
			<input type="hidden" name="shipping_address_is_selected[]" value="false" />
		</div>
	</div>
	<?php endforeach; ?>
</div>
<?php endif; ?>
<form method="post" class="form-shipping-address">
	<div class="shipping_address_hidden"></div>
	<input type="hidden" name="shipping_account_address_action" value="save" />
</form>
<div class="address-form new-address hidden">
	<form method="post">
		<h2>Tạo địa chỉ mới</h2>
		<div id="addresses">
			<div class="shipping_address address_block">
				<div class="input-form">
					<label for="fullname">Họ tên:</label>
					<input type="text" placeholder="Tài khoản" value="" name="shipping_last_name[]" id="fullname" class="required-field" required>
				</div>
				<div class="input-form">
					<label for="phone">Số điện thoại:</label>
					<input type="text" placeholder="Số điện thoại" value="" name="shipping_phone[]" id="phone" class="required-field">
				</div>
				<div class="input-form">
					<label for="city">Tỉnh / Thành phố:</label>
					<select id="city" name="shipping_state[]" class="required-field city-field">
						<option value=''>Chọn thành phố</option>
						<?php do_action( 'load_tinh_thanhpho' ); ?>
					</select>
				</div>
				<div class="input-form">
					<label for="district">Quận / Huyện</label>
					<select id="district" name="shipping_city[]" class="required-field district-field">
						<option value=''>Chọn quận/huyện</option>
					</select>
				</div>
				<div class="input-form">
					<label for="ward">Phường / xã</label>
					<select id="ward" name="shipping_address_2[]" class="required-field">
						<option value=''>Chọn phường xã</option>
					</select>
				</div>
				<div class="input-form">
					<label for="address">Địa chỉ:</label>
					<textarea type="text" placeholder="Địa chỉ" value="" name="shipping_address_1[]" id="address" class="required-field"></textarea>
				</div>
				<div class="input-form">
					<input type="checkbox" name="address_is_default" class="choose_default_address" /><span>Sử dụng làm địa chỉ mặc định</span>
					<input type="hidden" name="shipping_address_is_default[]" value="" />
					<input type="hidden" name="shipping_address_is_selected[]" value="true" />
					<input type="hidden" name="shipping_account_address_action" value="save" />
				</div>
				<div class="group-button">
					<button class="save-new-address" type="button">Cập nhật</button>
				</div>
				
			</div>
			
		</div>
	</form>
</div>
<div class="address-form update-address-form hidden">
	<form method="post">
		<h2>Cập nhật địa chỉ</h2>
		<div id="addresses">
			<div class="shipping_address address_block">
				<div class="input-form">
					<label for="fullname">Họ tên:</label>
					<input type="text" placeholder="Tài khoản" value="" id="fullname" class="required-field" required>
				</div>
				<div class="input-form">
					<label for="phone">Số điện thoại:</label>
					<input type="text" placeholder="Số điện thoại" value="" id="phone" class="required-field">
				</div>
				<div class="input-form">
					<label for="city">Tỉnh / Thành phố:</label>
					<select id="city" class="required-field city-field">
						<option value=''>Chọn thành phố</option>
						<?php do_action( 'load_tinh_thanhpho' ); ?>
					</select>
				</div>
				<div class="input-form">
					<label for="district">Quận / Huyện</label>
					<select id="district" class="required-field district-field">
						<option value=''>Chọn quận/huyện</option>
					</select>
				</div>
				<div class="input-form">
					<label for="ward">Phường / xã</label>
					<select id="ward" class="required-field">
						<option value=''>Chọn phường xã</option>
					</select>
				</div>
				<div class="input-form">
					<label for="address">Địa chỉ:</label>
					<textarea type="text" placeholder="Địa chỉ" value="" id="address" class="required-field"></textarea>
				</div>
				<div class="input-form">
					<input type="checkbox" class="choose_default_address" /><span>Sử dụng làm địa chỉ mặc định</span>
				</div>
			</div>
		</div>
		<div class="group-button">
			<input type="hidden" name="shipping_account_address_action" value="update" />
			<button class="save-new-address" type="button">Cập nhật</button>
			<a href="#" class="cancel cancel-update-address">Hủy</a>
		</div>
	</form>
</div>
<div class="remove-address-popup hidden">
	<form method="post" class="remove-address-form hidden">
		<div class="shipping_address_hidden_field"></div>
		<input type="hidden" name="shipping_account_address_action" value="delete" />
	</form>
</div>

<?php do_action( 'woocommerce_after_edit_account_address_form' ); ?>
