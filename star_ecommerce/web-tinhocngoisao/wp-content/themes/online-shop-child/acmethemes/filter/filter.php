

<?php 
    /**
     * customizer filter page shop
     */
    $category = get_queried_object();
    $category_id = $category->term_id;
    if ( empty($category_id) ) $category_id = -1;

?>

<div class="custom-shop-filter">
    <?php 
        if( 'disable' != $online_shop_customizer_all_values['online-shop-breadcrumb-options'] && !is_front_page()){
            echo '<div class="wrapper clearfix">';
            online_shop_breadcrumbs();
            echo "</div>";
        }
    ?>
</div>

<?php 
    // show active filter
    // require_once online_shop_file_directory('acmethemes/filter/active-filter.php');
    // $activeFilter = new Layered_Nav_Filters_Actived();
    // $activeFilter->renderActiveFilter();

    // include filter attributes
    require_once online_shop_file_directory('acmethemes/filter/filter-categories.php');
?>