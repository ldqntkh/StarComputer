<div class="pr-menu">
    <div class="panel-background"></div>
    <div class="panel-menu">
        <div class="header">
            <div class="site-logo">
                <?php
                if ( 1 == $online_shop_display_site_logo  ):
                    if ( function_exists( 'the_custom_logo' ) ) :
                        the_custom_logo();
                    endif;
                endif;
                ?>
            </div>
        </div>
        
        <div class="body-list-menu-items">
        <?php 
            // render my account
            $user = wp_get_current_user();
            echo '<ul class="menu-lv1">';
            if ($user->exists()) :?>
                    <li id="menu-account">
                        <span class='display-name'>Xin chào <?php echo $user->display_name; ?></span>
                        <span class="slicknav_arrow" id="menu-account">+</span>
                        <ul class="menu-lv2">
                        <?php foreach ( wc_get_account_menu_items() as $endpoint => $label ) : ?>
                            <li class="<?php echo wc_get_account_menu_item_classes( $endpoint ); ?>">
                                <a href="<?php echo esc_url( wc_get_account_endpoint_url( $endpoint ) ); ?>"><?php echo esc_html( $label ); ?></a>
                            </li>
                        <?php endforeach; ?>
                        </ul>
                    </li>
            <?php else :
                echo '<li class="login-account"><a href="'. wc_get_page_permalink( 'myaccount' ). '"> <strong>Đăng nhập</strong> <br/>Để nhận nhiều ưu đãi từ chúng tôi</a></li>';
            endif;
            echo '</ul>';
        ?>
        <?php
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
            echo '<ul class="menu-lv1">';
            foreach ($all_categories as $cat) {
                if($cat->category_parent == 0) {
                    $category_id = $cat->term_id;       
                    echo '<li id="li_'. $category_id .'"><a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a>';

                    $args2 = array(
                            'taxonomy'     => $taxonomy,
                            'child_of'     => 0,
                            'parent'       => $category_id,
                            'orderby'      => $orderby,
                            'show_count'   => $show_count,
                            'pad_counts'   => $pad_counts,
                            'hierarchical' => $hierarchical,
                            'title_li'     => $title,
                            'hide_empty'   => $empty
                    );
                    $sub_cats = get_categories( $args2 );
                    if($sub_cats) {
                        echo '<span class="slicknav_arrow" id="li_'. $category_id .'">+</span>';
                        echo '<ul class="menu-lv2">';
                        foreach($sub_cats as $sub_category) {
                            echo '<li><a href="'. get_term_link($sub_category->slug, 'product_cat') .'">'. $sub_category->name .'</a>';
                        }
                        echo '</ul>';
                    }
                    echo '</li>';
                }       
            }
            echo '</ul>';
            ?>
        </div>
        <div class="footer">
            
        </div>
    </div>
</div>