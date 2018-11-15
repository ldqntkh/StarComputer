<?php 
/*
Template Name: Danh sách ngành hàng
*/

    get_header();

    $taxonomy     = 'product_cat';
    $orderby      = 'name';  
    $show_count   = 0;      // 1 for yes, 0 for no
    $pad_counts   = 0;      // 1 for yes, 0 for no
    $hierarchical = 1;      // 1 for yes, 0 for no  
    $title        = '';  
    $empty        = 0;

    $args = array(
        'taxonomy'     => $taxonomy,
        'orderby'      => $orderby,
        'show_count'   => $show_count,
        'pad_counts'   => $pad_counts,
        'hierarchical' => $hierarchical,
        'title_li'     => $title,
        'hide_empty'   => $empty
    );
    $all_categories = get_categories( $args );
    echo '<div class="list-categories">';
    foreach ($all_categories as $cat) {
        if($cat->category_parent == 0) {
            $category_id = $cat->term_id;
            
            $term_id = absint($category_id);
            $term_link = get_term_link( $term_id, $taxonomy );
            $term = get_term( $term_id, $taxonomy );
            $thumbnail_id = get_term_meta( $term_id, 'thumbnail_id', true);
            if ( !empty( $thumbnail_id ) ) {
                $image_url = wp_get_attachment_image_src($thumbnail_id, 'full');
            }
            else{
                $image_url[0] =  get_template_directory_uri() . '/assets/img/default-image.jpg';
            }
    ?>
            <div id="li_<?php echo $category_id; ?>" class="category-item">
                <a href="<?php echo get_term_link($cat->slug, 'product_cat'); ?>">
                    <img src="<?php echo esc_url( $image_url[0] );?>"/>
                    <span>
                        <?php echo $cat->name; ?>
                    </span>
                </a>
            </div>
    <?php    
            // $args2 = array(
            //         'taxonomy'     => $taxonomy,
            //         'child_of'     => 0,
            //         'parent'       => $category_id,
            //         'orderby'      => $orderby,
            //         'show_count'   => $show_count,
            //         'pad_counts'   => $pad_counts,
            //         'hierarchical' => $hierarchical,
            //         'title_li'     => $title,
            //         'hide_empty'   => $empty
            // );
            // $sub_cats = get_categories( $args2 );
            // if($sub_cats) {
            //     echo '<span class="slicknav_arrow" id="li_'. $category_id .'">+</span>';
            //     echo '<ul class="menu-lv2">';
            //     foreach($sub_cats as $sub_category) {
            //         echo '<li><a href="'. get_term_link($sub_category->slug, 'product_cat') .'">'. $sub_category->name .'</a>';
            //     }
            //     echo '</ul>';
            // }
        }       
    }
    echo '</div>';

    get_footer();

?>