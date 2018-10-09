<?php 
    $orderby = 'name';
    $order = 'asc';
    $hide_empty = true ;
    $cat_args = array(
        'orderby'    => $orderby,
        'order'      => $order,
        'hide_empty' => $hide_empty,
        'parent' => $category_id
    );
    $cat_name = "Danh mục sản phẩm";
    $cat_desc = "";
    $cat_product_count = 0;
    if( $term = get_term_by( 'id', $category_id, 'product_cat' ) ){
        $cat_name = $term->name;
        $cat_desc = $term->description;
        $cat_product_count = $term->count;
    }

    $product_categories = get_terms( 'product_cat', $cat_args );
    echo '<div class="wrapper clearfix">';
    echo '<h2 class="category-title">' . $cat_name . ' ('.$cat_product_count.')</h2>';
    echo '<h4 class="category-desc">' . $cat_desc . '</h4>';
    if( !empty($product_categories) ){
        echo '<div class="lst-categories">';
        foreach ($product_categories as $key => $category) {?>
            <a href="<?php echo get_category_link($category); ?>" class="category-item">
                <?php echo $category->name ?>
            </a>
        <?php }
        echo "</div>";
    }
    echo "</div>";

    // include filter attributes
    require_once online_shop_file_directory('acmethemes/filter/filter-categories.php');

?>