
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
                dynamic_sidebar( 'online-shop-sidebar' );
                echo "</div>";
            ?>
            </div>
        </div>
    </div>
</div>