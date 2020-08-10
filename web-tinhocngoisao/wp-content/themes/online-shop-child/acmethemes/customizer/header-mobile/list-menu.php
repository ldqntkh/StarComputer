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
            <?php 
                $mobile_menus = wp_get_nav_menu_items('menu_mobile');
                foreach( $mobile_menus as &$item ) {
                    $menu_icon = get_field('menu_icon', $item);
                    $is_menu_account = get_field('is_menu_account', $item);
                
                    if (!$is_menu_account) : ?>
                        <li>
                            <img src="<?php echo $menu_icon ?>" alt="" />
                            <a href="<?php echo $item->url; ?>"><?php echo $item->title ?></a>
                        </li>
                    <?php else : 
                        $user = wp_get_current_user();
                        ?>
                        <li id="<?php if ( $user->exists() )  echo "lst-action-account";?>">
                            <img src="<?php echo $menu_icon ?>" alt="" />
                            <a href="<?php if ( $user->exists() )  echo "#"; else  echo $item->url ?>">
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
                    <?php endif;
                }
            ?>
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