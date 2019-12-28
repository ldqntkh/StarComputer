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
                    <a href="<?php echo home_url(); ?>"><?php echo __( 'Home', 'online-shop' ) ?></a>
                </li>
                <li>
                    <i class="fa fa-bars"></i>
                    <a href="<?php echo home_url( '/danh-sach-mat-hang/' ); ?>" id="url-list-categories"><?php echo __( 'Product list', 'online-shop' ) ?></a>
                </li>
                <?php $user = wp_get_current_user();?>
                <li id="<?php if ( $user->exists() )  echo "lst-action-account";?>">
                    <i class="fa fa-user-circle-o"></i>
                    <a href="<?php if ( $user->exists() )  echo "#"; else  echo home_url( '/my-account/' ); ?>">
                        <?php if ( $user->exists() )  {
                                printf( __( 'Hello %1$s', 'online-shop' ), $user->display_name );
                                echo '<span class="slicknav_arrow" id="menu-account">+</span>';
                            }
                            else  {
                                echo __( 'Manage your account', 'online-shop' );
                            }?>
                    </a>
                    <?php 
                        if ($user->exists()) :?>
                            <ul class="menu-lv2">
                                <?php foreach ( wc_get_account_menu_items() as $endpoint => $label ) : 
                                    if ($endpoint == "dashboard" || $endpoint == "downloads") continue;
                                ?>
                                    <li class="<?php echo wc_get_account_menu_item_classes( $endpoint ); ?>">
                                        <a href="<?php echo esc_url( wc_get_account_endpoint_url( $endpoint ) ); ?>"><?php echo esc_html( $label ); ?></a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                       <?php endif;
                    ?> 
                </li>
                <!-- <li>
                    <i class="fa fa-bell"></i>
                    <a href="<?php echo wc_get_page_permalink( 'home' ); ?>">Thông báo</a>
                </li> -->
            </ul>
            <ul class="menu-lv1 session-1">
                <li>
                    <i class="fa fa-wrench"></i>
                    <a href="<?php echo home_url('/build-pc/'); ?>"><?php echo __( 'Build configuration', 'online-shop' ); ?></a>
                </li>
                <li>
                    <i class="fa fa-eye"></i>
                    <a target="_blank" href="https://icafe.tinhocngoisao.com/"><?php echo __( 'Lắp đặt phòng net', 'starcomputer' ); ?></a>
                </li>
                <li>
                    <i class="fa fa-shopping-cart"></i>
                    <a href="<?php echo home_url('/cart/'); ?>"><?php echo __( 'Cart', 'online-shop' ); ?></a>
                </li>
                <li>
                    <i class="fa fa-truck"></i>
                    <a href="<?php echo home_url('/my-account/orders/'); ?>"><?php echo __( 'View your order', 'online-shop' ); ?></a>
                </li>
            </ul>
            <ul class="menu-lv1 session-1">
                <li>
                    <i class="fa fa-weixin"></i>
                    <a href="<?php echo wc_get_page_permalink( 'home' ); ?>"><?php echo __( 'Shopping advice', 'online-shop' ); ?></a>
                </li>
                <li>
                    <i class="fa fa-phone"></i>
                    <a href="tel:19000243"><?php echo __( 'Hot line', 'online-shop' ); ?></a>
                </li>
                <li>
                    <i class="fa fa-building"></i>
                    <a href="<?php echo home_url( '/show-rooms/' ); ?>"><?php echo __( 'Showroom system', 'online-shop' ); ?></a>
                </li>
            </ul>
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