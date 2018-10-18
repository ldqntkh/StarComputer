<div class="filters refine-show-main">
<?php 

    /**
     * mac dinh la co price voi rating
     */

    $attributes = wc_get_attribute_taxonomies();
?>
    <div class="category-attributes">
    <div class="wrapper clearfix">
    <?php 
        if (!empty($attributes)) {
            $filter_html = '';
            require_once online_shop_file_directory('acmethemes/filter/attribute/filter-attr.php');
            $_FilterWidget = null;
            
            foreach($attributes as $attribute) {
                $_FilterWidget = new WC_Widget_Layered_Custom();
                $_FilterWidget->renderFilter($attribute);
                $_FilterWidget = null;
            }
        }

    ?>
    <?php 
        require_once online_shop_file_directory('acmethemes/filter/filter-ratting.php'); 
        $rating_Filter = new Rating_Filter();
        $rating_Filter->renderRattingFilter();
    ?>
    </div>

    <div class="wrapper clearfix filter-price">
    <?php if (!empty(the_widget( 'WC_Widget_Price_Filter'))) {?>
        <div class="filter-color">
            <?php 
                // price
                the_widget( 'WC_Widget_Price_Filter');
            ?>
        </div>
    <?php } ?>
    </div>

    </div>
</div>