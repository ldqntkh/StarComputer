<?php 
    $category = get_queried_object();
    if ( isset( $category->term_id ) ) {
        $cat_id = $category->term_id;
    } else {
        $cat_id = null;
    }

    
    if (!is_numeric($cat_id)) {
        $cat_id = 0;
    }

    $all_categories = wp_get_nav_menu_items('special-menu');
    
    echo '<ul class="sub-menu special-sub-menu-mobile">';
    if ($cat_id !== 0) {
        foreach ($all_categories as $cat) {
            if ((int)$cat->object_id === $cat_id) {
                $cat_id = $cat->ID;
                break;
            }
        }
    }
    foreach ($all_categories as $cat) {
        if ($cat->post_status === 'publish' && (int)$cat->menu_item_parent === $cat_id ) {
            echo '<li>';
            echo '<a href="' . $cat->url . '">' . $cat->title . '</a>';
            echo '</li>';
        }  
    }
    echo '</ul>';
?>