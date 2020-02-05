<?php
    $headerPromotionsNotActive = [];
    if ( !empty( $headerPromotions ) && count( $headerPromotions ) > 0 ) :
?>
    <div class="header-promo-texts hide-desktop featured-slider" data-autoplay="1" data-autospeed="5000">
        <?php foreach ($headerPromotions as $headerPromotion) : ?>
            <?php if ( !empty( $headerPromotion['text'] ) ) : ?>
                <div><span><?php echo $headerPromotion['text']; ?></span></div>
            <?php else: ?>
                <?php array_push( $headerPromotionsNotActive, $headerPromotion ); ?>
            <?php endif; ?>
        <?php endforeach;?>
    </div>
<?php endif; ?>

<div class="header-freezing hide-desktop <?php echo empty( $headerPromotions ) || count( $headerPromotionsNotActive ) === count( $headerPromotions ) ? 'header-promo-text-not-active' : ''; ?>">
    <i class="fa fa-navicon toggle" id="toggle-menu"></i>

<?php 

    // render search form
    require_once online_shop_file_directory('acmethemes/customizer/header-mobile/search-product.php');

    // render cart and wishlist
    require_once online_shop_file_directory('acmethemes/customizer/header-mobile/mini-cart.php');

    // render list menu items
    require_once online_shop_file_directory('acmethemes/customizer/header-mobile/list-menu.php');
?>
</div>