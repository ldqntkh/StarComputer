<?php

class ProductManager {
    public function getDiscountTimeRemaining($product_id) {
        $_custom_sale_end_time = get_post_meta($product_id, '_custom_sale_end_time', true);
        return $_custom_sale_end_time;
    }
}

?>