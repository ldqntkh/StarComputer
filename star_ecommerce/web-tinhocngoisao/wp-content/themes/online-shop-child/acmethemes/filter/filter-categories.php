<div class="filters refine-show-main">
<?php 

    /**
     * mac dinh la co price voi rating
     */

    $attributes = wc_get_attribute_taxonomies();
?>
    <div class="category-attributes hide-mobile">
    <div class="wrapper clearfix list-filters">
    <?php 
        if (!empty($attributes)) {
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

<?php 
    // custom filter for mobile
?>
<div class="filters-mobile hide-pc">
    <div class="title-filter">
        <h3 id="short-products">
            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
            <span>Sắp xếp</span>
        </h3>
        <h3 id="filter-product-attr">
            <i class="fa fa-filter" aria-hidden="true"></i>
            <span>Bộ lọc</span>
        </h3>
        <h3 id="categories">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </h3>
    </div>
    <div id="popup-short-product">
        <div class="popup-modal">
            <div class="popup-short-product">
            <?php 
                // custom short filter
                echo '<h2>Sắp xếp theo</h2>';
                echo '<i class="fa fa-close" id="close-popup-short" data-close="popup-short-product"></i>';
                require_once online_shop_file_directory('acmethemes/filter/short/short-mobile.php');
            ?>
            </div>
        </div>
    </div>
    <div id="popup-categories">
        <div class="popup-modal">
            <div class="popup-categories">
            <div id="header-attr">
                <h2>Danh mục sản phẩm</h2>
            </div>
            <?php 
                echo '<i class="fa fa-close" id="close-popup-category" data-close="popup-categories"></i>';
                // custom category
                echo '<div class="categories">';
                require_once online_shop_file_directory('acmethemes/filter/category/list-categories-mobile.php');
                echo "</div>";
            ?>
            </div>
        </div>
    </div>
    <div id="popup-filter-product-attr">
        <div class="popup-modal">
            <div class="popup-product-attr">
            <div id="header-attr">
                <h2>Lọc sản phẩm</h2>
            </div>
            <?php 
                echo '<i class="fa fa-close" id="close-popup-attr" data-close="popup-filter-product-attr"></i>';
                // custom category
                echo '<div class="filter-products-attr">';
                require_once online_shop_file_directory('acmethemes/filter/attribute/filter-product-attr-mobile.php');
                echo "</div>";
            ?>
            </div>
        </div>
    </div>
</div>