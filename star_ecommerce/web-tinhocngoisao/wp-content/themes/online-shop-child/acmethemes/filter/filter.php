

<?php 
    /**
     * customizer filter page shop
     */
    $category = get_queried_object();
    $category_id = $category->term_id;

    if ( !empty($category_id) ) {
        $term = get_term_by( 'id', $category_id, 'product_cat' );
        $termBackgroundImage = get_field( 'background_image_header', $term );
        $termBackgroundColor = get_field( 'background_color', $term );
    }

?>

<div class="custom-shop-filter">
    <?php 
        if( 'disable' != $online_shop_customizer_all_values['online-shop-breadcrumb-options'] && !is_front_page()){
            echo '<div class="wrapper clearfix">';
            online_shop_breadcrumbs();
            echo "</div>";
        }

        if (empty($category_id)) {
            // show all categories product
            require_once online_shop_file_directory('acmethemes/filter/categories.php');
        } else {
            require_once online_shop_file_directory('acmethemes/filter/sub-filter-categories.php');
        }
    ?>
</div>

<?php 
    // show active filter
    require_once online_shop_file_directory('acmethemes/filter/active-filter.php');
    $activeFilter = new Layered_Nav_Filters_Actived();
    $activeFilter->renderActiveFilter();
?>