<?php 

    $orderby = 'name';
    $order = 'asc';
    $hide_empty = true ;
    $cat_args = array(
        'orderby'    => $orderby,
        'order'      => $order,
        'hide_empty' => $hide_empty,
        'parent' => 0
    );

    $product_categories = get_terms( 'product_cat', $cat_args );
    
    if( !empty($product_categories) ){
        echo '<div class="wrapper clearfix">';
        echo '<h2 class="category-title">Danh mục sản phẩm</h2>';
        echo '<div class="lst-categories">';
        foreach ($product_categories as $key => $category) {
            if ($category->name === "Uncategorized") {
                continue;
            }
        ?>
            <a href="<?php echo get_category_link($category); ?>" class="category-item">
                <?php echo $category->name ?>
            </a>
        <?php }
        echo "</div>";
        echo "</div>";
    }

?>