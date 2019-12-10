<?php 
    // get post meta of product
    $post_id = $product_object->id;
    $_custom_base_price = get_post_meta( $post_id, '_custom_base_price', true );
    $_custom_base_price = empty( $_custom_base_price ) ? 0 : $_custom_base_price;
    $_custom_employee_percent_discount = get_post_meta( $post_id, '_custom_employee_percent_discount', true );
    $_custom_employee_percent_discount = empty( $_custom_employee_percent_discount ) ? 0 : $_custom_employee_percent_discount;
    $_custom_employee_fixed_price_discount = get_post_meta( $post_id, '_custom_employee_fixed_price_discount', true );
    $_custom_employee_fixed_price_discount = empty( $_custom_employee_fixed_price_discount ) ? 0 : $_custom_employee_fixed_price_discount;
?>
<div class="">
    <h2> <?php _e( 'Thiết lập chiết khấu dành cho nhân viên', 'employee-discounts' ); ?> </h2>

    <p class="form-field">
        <label> <?php _e( 'Giá gốc:', 'employee-discounts' ) ?> </label>
        <input type="number" min='0' name="_custom_base_price" id="_custom_base_price" value="<?php echo $_custom_base_price; ?>"/>
    </p>

    <p class="form-field">
        <label> <?php _e( 'Chiết khấu (%):', 'employee-discounts' ) ?> </label>
        <input type="number" step="any" min='0' name="_custom_employee_percent_discount" id="_custom_employee_percent_discount" value="<?php echo $_custom_employee_percent_discount; ?>"/>
    </p>

    <p class="form-field">
        <label> <?php _e( 'Chiết khấu cố định (VNĐ):', 'employee-discounts' ) ?> </label>
        <input type="number" min='0' name="_custom_employee_fixed_price_discount" id="_custom_employee_fixed_price_discount" value="<?php echo $_custom_employee_fixed_price_discount; ?>"/>
    </p>
</div>