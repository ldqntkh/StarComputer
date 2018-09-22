<div class="">
    <h2> <?php _e('Custom sale pricing follow schedule','woocommerce-sale-date'); ?> </h2>
    <p class="form-field">
    <?php 
        // get post meta of product
        $post_id = $product_object->id;
        $_custom_sale_monday = get_post_meta($post_id, '_custom_sale_monday',true) == 'on' ? true : false;
        $_custom_sale_tuesday = get_post_meta($post_id, '_custom_sale_tuesday', true) == 'on' ? true : false;
        $_custom_sale_wednesday = get_post_meta($post_id, '_custom_sale_wednesday', true) == 'on' ? true : false;
        $_custom_sale_thursday = get_post_meta($post_id, '_custom_sale_thursday', true) == 'on' ? true : false;
        $_custom_sale_fridays = get_post_meta($post_id, '_custom_sale_fridays', true) == 'on' ? true : false;
        $_custom_sale_saturday = get_post_meta($post_id, '_custom_sale_saturday', true) == 'on' ? true : false;
        $_custom_sale_sunday = get_post_meta($post_id, '_custom_sale_sunday', true) == 'on' ? true : false;
        $_custom_sale_all_week = get_post_meta($post_id, '_custom_sale_all_week', true) == 'on' ? true : false;

        $_custom_sale_start_time = get_post_meta($post_id, '_custom_sale_start_time', true);
        $_custom_sale_start_time = empty($_custom_sale_start_time) ? 0 : $_custom_sale_start_time;
        $_custom_sale_end_time = get_post_meta($post_id, '_custom_sale_end_time', true);
        $_custom_sale_end_time = empty($_custom_sale_end_time) ? 0 : $_custom_sale_end_time;
    ?>
        <label> <?php _e('Day of week:','woocommerce-sale-date') ?> </label>
        <input type="checkbox" name="_custom_sale_monday" id="_custom_sale_monday" <?php if ($_custom_sale_monday) echo 'checked'; ?> /> <?php _e('Monday', 'woocommerce-sale-date'); ?> &nbsp;
        <input type="checkbox" name="_custom_sale_tuesday" id="_custom_sale_tuesday" <?php if ($_custom_sale_tuesday) echo 'checked'; ?> /> <?php _e('Tuesday', 'woocommerce-sale-date'); ?> &nbsp;
        <input type="checkbox" name="_custom_sale_wednesday" id="_custom_sale_wednesday" <?php if ($_custom_sale_wednesday) echo 'checked'; ?> /> <?php _e('Wednesday', 'woocommerce-sale-date'); ?> &nbsp;
        <input type="checkbox" name="_custom_sale_thursday" id="_custom_sale_thursday" <?php if ($_custom_sale_thursday) echo 'checked'; ?> /> <?php _e('Thursday', 'woocommerce-sale-date'); ?> &nbsp;
        <input type="checkbox" name="_custom_sale_fridays" id="_custom_sale_fridays" <?php if ($_custom_sale_fridays) echo 'checked'; ?> /> <?php _e('Fridays', 'woocommerce-sale-date'); ?> &nbsp;
        <input type="checkbox" name="_custom_sale_saturday" id="_custom_sale_saturday" <?php if ($_custom_sale_saturday) echo 'checked'; ?> /> <?php _e('Saturday', 'woocommerce-sale-date'); ?> &nbsp;
        <input type="checkbox" name="_custom_sale_sunday" id="_custom_sale_sunday" <?php if ($_custom_sale_sunday) echo 'checked'; ?> /> <?php _e('Sunday', 'woocommerce-sale-date'); ?> &nbsp;
        <input type="checkbox" name="_custom_sale_all_week" id="_custom_sale_all_week" <?php if ($_custom_sale_all_week) echo 'checked'; ?> /> <?php _e('All', 'woocommerce-sale-date'); ?>
    </p>

    <p class="form-field">
        <label> <?php _e('Start time (hour):','woocommerce-sale-date') ?> </label>
        <input type="number" min='0' max='24' name="_custom_sale_start_time" id="_custom_sale_start_time" value="<?php echo $_custom_sale_start_time; ?>"/>
    </p>

    <p class="form-field">
        <label> <?php _e('End time (hour):','woocommerce-sale-date') ?> </label>
        <input type="number" min='0' max='24' name="_custom_sale_end_time" id="_custom_sale_end_time" value="<?php echo $_custom_sale_end_time; ?>"/>
    </p>
</div>