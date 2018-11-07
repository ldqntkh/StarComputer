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
            <ul class="menu-lv1 session-1">
                <li>
                    <i class="fa fa-home"></i>
                    <a href="<?php echo home_url(); ?>">Trang chủ</a>
                </li>
                <li>
                    <i class="fa fa-bars"></i>
                    <a href="<?php echo home_url( '/danh-sach-mat-hang/' ); ?>">Danh sách mặt hàng</a>
                </li>
                <li>
                    <i class="fa fa-user-circle-o"></i>
                    <a href="<?php echo home_url( '/my-account/' ); ?>">Quản lý tài khoản</a>
                </li>
                <!-- <li>
                    <i class="fa fa-bell"></i>
                    <a href="<?php echo wc_get_page_permalink( 'home' ); ?>">Thông báo</a>
                </li> -->
            </ul>
            <ul class="menu-lv1 session-1">
                <li>
                    <i class="fa fa-wrench"></i>
                    <a href="<?php echo home_url('/build-pc/'); ?>">Xây dựng cấu hình</a>
                </li>
                <li>
                    <i class="fa fa-eye"></i>
                    <a href="<?php echo wc_get_page_permalink( 'home' ); ?>">Sản phẩm đã xem</a>
                </li>
                <li>
                    <i class="fa fa-shopping-cart"></i>
                    <a href="<?php echo home_url('/cart/'); ?>">Giỏ hàng</a>
                </li>
                <li>
                    <i class="fa fa-truck"></i>
                    <a href="<?php echo home_url('/my-account/orders/'); ?>">Kiểm tra đơn hàng</a>
                </li>
            </ul>
            <ul class="menu-lv1 session-1">
                <li>
                    <i class="fa fa-weixin"></i>
                    <a href="<?php echo wc_get_page_permalink( 'home' ); ?>">Tư vấn mua hàng</a>
                </li>
                <li>
                    <i class="fa fa-phone"></i>
                    <a href="<?php echo wc_get_page_permalink( 'home' ); ?>">Hot line</a>
                </li>
                <li>
                    <i class="fa fa-building"></i>
                    <a href="<?php echo wc_get_page_permalink( 'my-account' ); ?>">Hệ thống showroom</a>
                </li>
            </ul>

        <!-- <?php 
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
        ?> -->
        <!-- <?php
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
            ?> -->
        </div>
        <div class="footer">
            <span>
                <?php if( isset( $online_shop_customizer_all_values['online-shop-footer-copyright'] ) ): ?>
                    <?php echo wp_kses_post( $online_shop_customizer_all_values['online-shop-footer-copyright'] ); ?>
                <?php endif; ?>
            </span>
        </div>
    </div>
</div>