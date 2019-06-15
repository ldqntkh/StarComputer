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
                    <a href="<?php echo home_url( '/danh-sach-mat-hang/' ); ?>" id="url-list-categories">Danh sách mặt hàng</a>
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
                    <a href="<?php echo home_url( '/san-pham-da-xem/' ); ?>">Sản phẩm đã xem</a>
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
                    <a href="tel:19000243">Hot line</a>
                </li>
                <li>
                    <i class="fa fa-building"></i>
                    <a href="<?php echo home_url( '/show-rooms/' ); ?>">Hệ thống showroom</a>
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