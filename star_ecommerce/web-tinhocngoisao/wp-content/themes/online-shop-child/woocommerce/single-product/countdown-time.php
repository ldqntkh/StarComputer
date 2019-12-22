<?php
    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
    }
    global $product;
    $productMgr = new ProductManager();
?>
    <div id="woocommerce-product-sale-date" data-sale-time="<?php echo $productMgr->getDiscountTimeRemaining($product->get_id()); ?>">
        <h4><?php echo __('Thời gian khuyến mãi còn lại'); ?></h4>
        <i class="fa fa-clock-o"></i>
        <div></div>
    </div>
