<?php
/**
 * Setting global variables for all theme options saved values
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_set_global' ) ) :

    function online_shop_set_global() {
        /*Getting saved values start*/
        $online_shop_saved_theme_options = online_shop_get_theme_options();
        $GLOBALS['online_shop_customizer_all_values'] = $online_shop_saved_theme_options;
        /*Getting saved values end*/
    }
endif;
add_action( 'online_shop_action_before_head', 'online_shop_set_global', 0 );

/**
 * Doctype Declaration
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_doctype' ) ) :
    function online_shop_doctype() {
        ?>
        <!DOCTYPE html>
        <html <?php language_attributes(); ?> xmlns="http://www.w3.org/1999/html">
    <?php
    }
endif;
add_action( 'online_shop_action_before_head', 'online_shop_doctype', 10 );

/**
 * Code inside head tage but before wp_head funtion
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_before_wp_head' ) ) :

    function online_shop_before_wp_head() {
        ?>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="<?php echo esc_url('http://gmpg.org/xfn/11')?>">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php
    }
endif;
add_action( 'online_shop_action_before_wp_head', 'online_shop_before_wp_head', 10 );

/**
 * Add body class
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_body_class' ) ) :

    function online_shop_body_class( $online_shop_body_classes ) {
        global $online_shop_customizer_all_values;
        if ( 'no-image' == $online_shop_customizer_all_values['online-shop-blog-archive-layout'] ) {
            $online_shop_body_classes[] = 'blog-no-image';
        }

	    if( 1 == $online_shop_customizer_all_values['online-shop-enable-sticky-sidebar'] ){
		    $online_shop_body_classes[] = 'at-sticky-sidebar';
	    }
	    $online_shop_header_logo_menu_display_position = $online_shop_customizer_all_values['online-shop-header-logo-ads-display-position'];
	    $online_shop_body_classes[] = esc_attr( $online_shop_header_logo_menu_display_position );

        $online_shop_body_classes[] = online_shop_sidebar_selection();

        /*feature section*/
	    $online_shop_enable_special_menu = $online_shop_customizer_all_values['online-shop-enable-special-menu'];
	    $online_shop_feature_enable_special_menu = $online_shop_customizer_all_values['online-shop-feature-enable-special-menu'];
	    $online_shop_feature_content_options = $online_shop_customizer_all_values['online-shop-feature-content-options'];
	    $online_shop_feature_right_content_options = $online_shop_customizer_all_values['online-shop-feature-right-content-options'];
	    if( is_front_page() &&
            !is_home() &&
            ('disable' != $online_shop_feature_content_options || 'disable' != $online_shop_feature_right_content_options ) &&
            1 == $online_shop_enable_special_menu &&
            1 == $online_shop_feature_enable_special_menu
        ){
		    $online_shop_body_classes[] = 'online-shop-feature-special-menu';
	    }

        return $online_shop_body_classes;
    }
endif;
add_action( 'body_class', 'online_shop_body_class', 10, 1);

/**
 * Page start
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_page_start' ) ) :

    function online_shop_page_start() {
        ?>
        <div id="page" class="hfeed site">
    <?php
    }
endif;
add_action( 'online_shop_action_before', 'online_shop_page_start', 15 );

/**
 * Skip to content
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_skip_to_content' ) ) :

    function online_shop_skip_to_content() {
        ?>
        <a class="skip-link screen-reader-text" href="#content" title="link"><?php esc_html_e( 'Skip to content', 'online-shop' ); ?></a>
    <?php
    }
endif;
add_action( 'online_shop_action_before_header', 'online_shop_skip_to_content', 10 );

/**
 * Main header
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_header' ) ) :

    function online_shop_header() {
        global $online_shop_customizer_all_values;
	    $online_shop_header_media_position = $online_shop_customizer_all_values['online-shop-header-media-position'];
	    if( 'very-top' == $online_shop_header_media_position ){
		    online_shop_header_markup();
	    }

	    $online_shop_enable_header_top = $online_shop_customizer_all_values['online-shop-enable-header-top'];
	    $online_shop_top_right_button_title = $online_shop_customizer_all_values['online-shop-top-right-button-title'];
	    $online_shop_top_right_button_link = get_site_url(null, 'my-account');
        $headerPromotions = get_option( 'custom_header_options' );
        ?>
        <header id="masthead" class="site-header">
            <?php
            if( 1 == $online_shop_enable_header_top ){
	            $online_shop_header_top_basic_info_display_selection = $online_shop_customizer_all_values['online-shop-header-top-basic-info-display-selection'];
	            $online_shop_header_top_menu_display_selection = $online_shop_customizer_all_values['online-shop-header-top-menu-display-selection'];
	            $online_shop_header_top_social_display_selection = $online_shop_customizer_all_values['online-shop-header-top-social-display-selection'];
                $online_shop_top_right_button_options = $online_shop_customizer_all_values['online-shop-top-right-button-options'];
                $headerPromotionsNotActive = [];
                ?>
                <?php
                    if ( !empty( $headerPromotions ) && count($headerPromotions) > 0 ) :
                ?>
                    <div class="top-header-promotion featured-slider hide-mobile" data-autoplay="1" data-autoplayspeed="5000">
                        <?php
                            foreach ( $headerPromotions as  $headerPromotion ) :
                                $backgroundColor = $headerPromotion['background_color'];
                                if ( empty( $headerPromotion['image'] ) || empty( $backgroundColor ) || empty( $headerPromotion['url'] ) ) {
                                    array_push( $headerPromotionsNotActive, $headerPromotion);
                                    continue;
                                }
                        ?>
                            <a href="<?php echo $headerPromotion['url']; ?>">
                                <div class="promotion-banner" style="background-image:url('<?php echo $headerPromotion['image'] ?>'),linear-gradient(to right, <?php echo $backgroundColor; ?> 40%, <?php echo $backgroundColor; ?> 50%, <?php echo $backgroundColor; ?> 60%)"></div>
                            </a>
                            <?php endforeach; ?>
                    </div>
                <?php
                    endif;
                ?>

                <div class="top-header-wrapper clearfix hide-mobile <?php echo empty( $headerPromotions ) || count( $headerPromotionsNotActive ) === 4 ? 'header-promo-not-active' : '' ?>">
                    <div class="wrapper">
                        <div class="header-left">
				            <?php
                            if( 'left' == $online_shop_header_top_basic_info_display_selection ){
	                            do_action('online_shop_action_basic_info');
                            }
				            if( 'left' == $online_shop_header_top_menu_display_selection ){
					            do_action('online_shop_action_top_menu');
				            }
				            if( 'left' == $online_shop_header_top_social_display_selection ){
					            do_action('online_shop_action_social_links');
				            }
				            ?>
                        </div>
                        <div class="header-right">
                            <?php
	                        if( 'right' == $online_shop_header_top_basic_info_display_selection ){
		                        do_action('online_shop_action_basic_info');
	                        }
	                        if( 'right' == $online_shop_header_top_menu_display_selection ){
		                        do_action('online_shop_action_top_menu');
	                        }
	                        if( 'right' == $online_shop_header_top_social_display_selection ){
		                        do_action('online_shop_action_social_links');
	                        }
                            if( 'disable' != $online_shop_top_right_button_options ){
	                            $online_shop_top_right_button_title = !empty( $online_shop_top_right_button_title )? $online_shop_top_right_button_title : '';
	                            if( 'widget' == $online_shop_top_right_button_options ){
		                            ?>
                                    <div class="icon-box hide-mobile">
                                        <a id="at-modal-open" class="my-account at-modal" href="<?php echo $online_shop_top_right_button_link;?>">
				                            <?php echo esc_html( $online_shop_top_right_button_title );?>
                                        </a>
                                    </div>
		                            <?php
	                            }
	                            else{
		                            ?>
                                    <div class="icon-box">
                                        <a class="my-account" href="<?php echo $online_shop_top_right_button_link;?>">
				                            <?php echo esc_html( $online_shop_top_right_button_title );?>
                                        </a>
                                    </div>
		                            <?php
	                            }
                            }
	                        ?>
                        </div><!--.header-right-->
                    </div><!-- .top-header-container -->
                </div><!-- .top-header-wrapper -->
                <?php
            }
            ?>
            <div class="header-wrapper clearfix hide-mobile">
                <div class="wrapper">
	                <?php
	                if( 'above-logo' == $online_shop_header_media_position ){
		                online_shop_header_markup();
	                }
	                $online_shop_display_site_logo = $online_shop_customizer_all_values['online-shop-display-site-logo'];
	                $online_shop_display_site_title = $online_shop_customizer_all_values['online-shop-display-site-title'];
	                $online_shop_display_site_tagline = $online_shop_customizer_all_values['online-shop-display-site-tagline'];
	                if( 1== $online_shop_display_site_logo || 1 == $online_shop_display_site_title || 1 == $online_shop_display_site_tagline ):
		                ?>
                        <div class="site-logo">
			                <?php
			                if ( 1 == $online_shop_display_site_logo  ):
				                if ( function_exists( 'the_custom_logo' ) ) :
					                the_custom_logo();
				                endif;
			                endif;
			                if ( 1 == $online_shop_display_site_title || 1 == $online_shop_display_site_tagline ){
			                    echo "<div class='site-title-tagline'>";
				                if ( 1 == $online_shop_display_site_title  ):
					                if ( is_front_page() && is_home() ) : ?>
                                        <h1 class="site-title">
                                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
                                        </h1>
					                <?php else : ?>
                                        <p class="site-title">
                                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
                                        </p>
						                <?php
					                endif;
				                endif;
				                if ( 1 == $online_shop_display_site_tagline ):
					                $description = get_bloginfo( 'description', 'display' );
					                if ( $description || is_customize_preview() ) : ?>
                                        <p class="site-description"><?php echo esc_html( $description ); ?></p>
					                <?php endif;
				                endif;
				                echo "</div>";
                            }
			                ?>
                        </div><!--site-logo-->
		                <?php
	                endif;
	                $online_shop_header_logo_menu_display_position = $online_shop_customizer_all_values['online-shop-header-logo-ads-display-position'];
	                if( 'center-logo-below-ads' == $online_shop_header_logo_menu_display_position ){
	                    echo "<div class='center-wrapper'>";
                    }
                    else{
	                    echo "<div class='center-wrapper-mx-width'>";
                    }
	                $online_shop_enable_cart_icon = $online_shop_customizer_all_values['online-shop-enable-cart-icon'];
	                $online_shop_enable_wishlist_icon = $online_shop_customizer_all_values['online-shop-enable-wishlist-icon'];

	                if ( online_shop_is_woocommerce_active() && ( $online_shop_enable_cart_icon || $online_shop_enable_wishlist_icon )) : ?>
                        <div class="cart-section">
			                <?php
                            
			                if( $online_shop_enable_cart_icon ){
                                ?>
                            <div class="wc-cart-wrapper">
                                <div class="wc-cart-icon-wrapper">
                                    <a class="at-wc-icon cart-icon" href="<?php echo esc_url( wc_get_cart_url() ); ?>">
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <span class="cart-value cart-customlocation"> 
                                            <?php 
                                                if ( WC()->cart )
                                                    echo wp_kses_data( WC()->cart->get_cart_contents_count() );
                                            ?>
                                        </span>
                                    </a>
                                </div>
                                <div class="wc-cart-widget-wrapper">
					                <?php the_widget( 'WC_Widget_Cart', '' ); ?>
                                </div>
                            </div>
                            <?php
			                }
			                ?>
                        </div> <!-- .cart-section -->
	                <?php endif; ?>
                    <div class="header-ads-adv-search float-right">
		                <?php
		                if( is_active_sidebar( 'online-shop-header' ) ) :
			                dynamic_sidebar( 'online-shop-header' );
		                endif;
		                ?>
                    </div>
                    <?php
                    echo "</div>";/*.center-wrapper*/
                    ?>
                </div><!--.wrapper-->
                <div class="clearfix"></div>
                <div class="navigation-wrapper">
	                <?php
	                if( 'above-menu' == $online_shop_header_media_position ){
		                online_shop_header_markup();
	                }
	                $online_shop_nav_class ='';
	                $online_shop_feature_enable_special_menu = $online_shop_customizer_all_values['online-shop-feature-enable-special-menu'];

	                if( 1 != $online_shop_feature_enable_special_menu && 1 == $online_shop_customizer_all_values['online-shop-enable-sticky-menu'] ) {
		                $online_shop_nav_class = ' online-shop-enable-sticky-menu ';
	                }
	                $online_shop_enable_special_menu = $online_shop_customizer_all_values['online-shop-enable-special-menu'];
	                if( 1 == $online_shop_enable_special_menu ) {
		                $online_shop_nav_class .= ' online-shop-enable-special-menu ';
	                }
	                ?>
                    <nav id="site-navigation" class="main-navigation <?php echo esc_attr( $online_shop_nav_class );?> clearfix">
                        <div class="header-main-menu wrapper clearfix">
                            <?php
                            if( 1 == $online_shop_enable_special_menu ){
	                            $online_shop_special_menu_text = $online_shop_customizer_all_values['online-shop-special-menu-text'];
                                ?>
                                <ul class="menu special-menu-wrapper">
                                    <li class="menu-item menu-item-has-children">
                                        <a href="javascript:void(0)" class="special-menu">
                                            <i class="fa fa-navicon toggle"></i><?php echo esc_html( $online_shop_special_menu_text ); ?>
                                        </a>
			                            <?php
			                            if ( has_nav_menu( 'special-menu' ) ) {
                                            echo '<ul id="menu-special-menu" class="sub-menu special-sub-menu">';

                                            $special_menus_html = get_cache_by_key('special_menus_html');
                                            
                                            if ($special_menus_html && strlen($special_menus_html) > 0) {
                                                echo $special_menus_html;
                                            } else {
                                                $special_menus_html = '';
                                                $special_menus = wp_get_nav_menu_items('special-menu-new');
                                                
                                                foreach($special_menus as $menu_item) {
                                                    if ($menu_item->post_status === 'publish' && $menu_item->menu_item_parent === '0') {
                                                        $slug = $menu_item->url;
                                                        if (strlen($slug) && $slug[strlen($slug) - 1] === '/') $slug = substr($slug, 0, strlen($slug) - 1);
                                                        $slug = explode('/', $slug);
                                                        $slug = $slug[count($slug)- 1];
                                                        $cat = get_term_by( 'slug', $slug, 'product_cat' );
                                                        $icon_url = '';
                                                        $background_url = '';
                                                        if ($cat) {
                                                            $icon_url = get_field('menu_icon', $cat);
                                                            $background_url = get_field('background_menu', $cat);

                                                            if (strlen($icon_url) > 0) {
                                                                $icon_url = '<span style="background: url('. $icon_url .'); background-size: cover;"></span>';
                                                            }

                                                            if (strlen($background_url) > 0) {
                                                                $background_url = 'style="background: url('. $background_url .') no-repeat; background-size: 300px 300px; background-position: bottom right; background-color: white;"';
                                                            }
                                                        }
                                                        
                                                        $special_menus_html .= '<li id="menu-item-' . $menu_item->ID . '" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-' . $menu_item->ID . '">'
                                                                .'<i class="fa fa-angle-right angle-down"></i>'.
                                                                '<a href="' . $menu_item->url . '">'
                                                                    . $icon_url
                                                                    . $menu_item->title 
                                                                . '</a>';
                                                        $special_menus_html .= '<div class="sub-menus" ' .$background_url.  '>';
                                                            $special_menus_html .= '<section class="sub-menu-lv1">';
                                                            foreach($special_menus as $menu_item_lv1) {
                                                                if ($menu_item_lv1->post_status === 'publish' && $menu_item_lv1->menu_item_parent == $menu_item->ID) {
                                                                    // $special_menus_html .= '<section id="menu-item-' . $menu_item_lv1->ID . '" >'
                                                                    //         .'<a href="' . $menu_item_lv1->url . '">' . $menu_item_lv1->title . '</a>';
                                                                    // $special_menus_html .= '<section class="sub-menu-lv2">';
                                                                    //     foreach($special_menus as $menu_item_lv2) {
                                                                    //         if ($menu_item_lv2->post_status === 'publish' && $menu_item_lv2->menu_item_parent == $menu_item_lv1->ID) {
                                                                    //             $special_menus_html .= '<a href="' . $menu_item_lv2->url . '">' . $menu_item_lv2->title . '</a>';
                                                                    //         }
                                                                    //     }
                                                                    // $special_menus_html .= '</section>';

                                                                    //$special_menus_html .= '<section id="menu-item-' . $menu_item_lv1->ID . '" >';
                                                                    
                                                                    if ( !empty( $menu_item_lv1->title ) ) {
                                                                        $posts = get_posts(
                                                                            array(
                                                                                'name'      => $menu_item_lv1->title,
                                                                                'post_status' => array('publish', 'pending', 'draft', 'auto-draft', 'future', 'private', 'inherit', 'trash')  
                                                                            )
                                                                        );
                                                                        if ( $posts )
                                                                        {
                                                                            $special_menus_html .= get_post_field('post_content', $posts[0]->ID);
                                                                        }
                                                                        break;
                                                                    }

                                                                    //$special_menus_html .= '</section>';
                                                                }
                                                            }
                                                            $special_menus_html .= '</section>';
                                                        $special_menus_html .= '</div>';
                                                        $special_menus_html .= '</li>';
                                                    }
                                                }

                                                set_cache_by_key('special_menus_html', $special_menus_html);
                                                echo $special_menus_html;
                                            }
                                            
                                            echo '</ul>';
			                            }
			                            ?>
                                        <div class="responsive-special-sub-menu clearfix"></div>
                                    </li>
                                </ul>
                                <?php
                                //echo '<pre>',print_r(json_encode(wp_get_nav_menu_items('special-menu')),1),'</pre>';
                            }/*special menu*/
                            ?>
                            <div class="acmethemes-nav">
	                            <?php
	                            wp_nav_menu(array('theme_location' => 'primary','container' => false));

	                            $online_shop_menu_right_text = $online_shop_customizer_all_values['online-shop-menu-right-text'];
	                            $online_shop_menu_right_highlight_text = $online_shop_customizer_all_values['online-shop-menu-right-highlight-text'];
	                            $online_shop_menu_right_text_link = $online_shop_customizer_all_values['online-shop-menu-right-text-link'];
	                            $online_shop_menu_right_link_new_tab = $online_shop_customizer_all_values['online-shop-menu-right-link-new-tab'];
	                            if( !empty( $online_shop_menu_right_text ) ){
		                            ?>
                                    <div class="at-menu-right-wrapper">
			                            <?php
			                            if( !empty( $online_shop_menu_right_text_link ) ){
			                            ?>
                                        <a class="cart-icon" href="<?php echo esc_url( $online_shop_menu_right_text_link ); ?>" target="<?php echo ($online_shop_menu_right_link_new_tab==1? '_blank':'')?>">
				                            <?php
				                            }
				                            if( !empty( $online_shop_menu_right_highlight_text ) ){
					                            ?>
                                                <span class="menu-right-highlight-text">
                                                    <?php echo esc_html( $online_shop_menu_right_highlight_text );?>
                                                </span>
					                            <?php
				                            }
				                            ?>
                                            <span class="menu-right-text">
                                                <?php echo esc_html( $online_shop_menu_right_text );?>
                                            </span>
				                            <?php
				                            if( !empty( $online_shop_menu_right_text_link ) ){
				                            ?>
                                        </a>
		                            <?php
		                            }
		                            ?>
                                    </div><!--.at-menu-right-wrapper-->
		                            <?php
	                            }
	                            ?>
                            </div>
                        </div>
                    </nav>
                    <?php
                    if( 'below-menu' == $online_shop_header_media_position ){
	                    online_shop_header_markup();
                    }
                    ?>
                    <!-- #site-navigation -->
                </div>
                <!-- .header-container -->
            </div>
            <!-- header-wrapper-->

            <!-- implement header mobile -->
            <?php 
                require_once online_shop_file_directory('acmethemes/customizer/header-mobile/header-mobile.php');
            ?>
        </header>
        <!-- #masthead -->
    <?php
    }
endif;
add_action( 'online_shop_action_header', 'online_shop_header', 10 );

/**
 * Before main content
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_before_content' ) ) :

    function online_shop_before_content() {
	    global $online_shop_customizer_all_values;
	    ?>
        <div class="content-wrapper clearfix">
            <?php 
                $show_breadcrumb = false;
                if (is_woocommerce() && !is_product()) {
                    // customize filter
                    $show_breadcrumb = true;
                    require_once online_shop_file_directory('acmethemes/filter/filter.php');
                }
            ?>
            <div id="content" class="wrapper site-content">
        <?php
        if( !$show_breadcrumb && 'disable' != $online_shop_customizer_all_values['online-shop-breadcrumb-options'] && !is_front_page()){
            online_shop_breadcrumbs();
        }
    }
endif;
add_action( 'online_shop_action_after_header', 'online_shop_before_content', 10 );