<?php
/**
 * content and content wrapper end
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_after_content' ) ) :

    function online_shop_after_content() {
      ?>
        </div><!-- #content -->
        </div><!-- content-wrapper-->
    <?php
    }
endif;
add_action( 'online_shop_action_after_content', 'online_shop_after_content', 10 );

/**
 * Footer content
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_footer' ) ) :

    function online_shop_footer() {

        global $online_shop_customizer_all_values;

        ?>
        <div class="clearfix"></div>
        <footer id="colophon" class="site-footer">
            <div class="footer-wrapper">
                <?php
                if( is_active_sidebar( 'full-width-top-footer' ) ) :
                    echo "<div class='wrapper full-width-top-footer'>";
	                dynamic_sidebar( 'full-width-top-footer' );
	                echo "</div>";
                endif;
                ?>
                <div class="footer-email">
                    <div class="wrapper">
                    <?php 
                        if(
                            is_active_sidebar('footer-top-col-one') ||
                            is_active_sidebar('footer-top-col-two')
                        )
                        {
                            ?>
                            <div id="footer-top">
                                <div class="footer-columns clearfix">
                                    <?php
                                        $footer_top_col = 'footer-sidebar';
                                    ?>
                                    <div class="footer-sidebar <?php echo esc_attr($footer_top_col); ?>">
                                        <?php dynamic_sidebar('footer-top-col-two'); ?>
                                    </div>
                                </div>
                            </div><!-- #foter-top -->
                            <?php
                        }    
                    ?>
                    </div>
                </div>
                <div class="top-bottom wrapper">
                    <?php
                    if(
                        is_active_sidebar('footer-bottom-col-one') ||
                        is_active_sidebar('footer-bottom-col-two') ||
                        is_active_sidebar('footer-bottom-col-three') ||
                        is_active_sidebar('footer-bottom-col-four')
                    )
                    {
                        ?>
                        <div id="footer-bottom">
                            <div class="footer-columns clearfix">
                                <?php
			                    $footer_bottom_col = 'footer-sidebar custom-footer-siderbar';
			                    if (is_active_sidebar('footer-bottom-col-one')) : ?>
                                    <div class="footer-sidebar <?php echo esc_attr($footer_bottom_col); ?>">
					                    <?php dynamic_sidebar('footer-bottom-col-one'); ?>
                                    </div>
			                    <?php endif;
			                    if (is_active_sidebar('footer-bottom-col-two')) : ?>
                                    <div class="footer-sidebar <?php echo esc_attr($footer_bottom_col); ?>">
					                    <?php dynamic_sidebar('footer-bottom-col-two'); ?>
                                    </div>
                                <?php else : ?>
                                    <div class="footer-sidebar footer-bottom-category <?php echo esc_attr($footer_bottom_col); ?>">
                                        <div class="at-title-action-wrapper clearfix"><h3 class="widget-title">Danh mục</h3></div>
                                        <?php $terms = get_terms( array(
                                        'taxonomy'   => 'product_cat',
                                        'hide_empty' => true,
                                        'parent'     => 0,
                                        'orderby'    => 'id',
                                        'order'      => 'DESC',
                                        'number'     => 5
                                        ) );
                                        if (  ! empty( $terms ) && ! is_wp_error( $terms ) ) : ?>
                                            <?php foreach ( $terms as $cat ) : ?>
                                                <a href="<?php echo get_term_link( $cat->term_id ); ?>"><p><?php echo esc_attr( $cat->name ); ?></p></a>
                                            <?php endforeach; ?>
                                        <?php endif; ?>
                                    </div>
                                <?php endif;
                                if (is_active_sidebar('footer-bottom-col-three')) : ?>
                                    <div class="footer-sidebar <?php echo esc_attr($footer_bottom_col); ?>">
                                        <?php dynamic_sidebar('footer-bottom-col-three'); ?>
                                    </div>
                                <?php endif;
                                if (is_active_sidebar('footer-bottom-col-four')) : ?>
                                    <div class="footer-sidebar <?php echo esc_attr($footer_bottom_col); ?>">
                                        <?php dynamic_sidebar('footer-bottom-col-four'); ?>
                                    </div>
                                <?php endif;
                                ?>
                            </div>
                        </div>
                        <?php
                    }
	                ?>
                    <div class="clearfix"></div>
                </div><!-- top-bottom-->
                <?php 
                if( is_active_sidebar( 'full-width-bottom-footer' ) ) :
                    echo '<div id="full-width-bottom-footer">';
                    echo "<div class='wrapper full-width-bottom-footer'>";
                    dynamic_sidebar( 'full-width-bottom-footer' );
                    echo "</div>";
                    echo "</div>";
                endif;
                if( is_active_sidebar( 'full-width-bottom-footer-two' ) ) :
                    echo '<div id="full-width-bottom-footer-two">';
                    dynamic_sidebar( 'full-width-bottom-footer-two' );
                    echo "</div>";
                endif;
                ?>
                <div class="footer-copyright">
                    <div class="wrapper">
	                    <?php
	                    if( is_active_sidebar( 'footer-bottom-left-area' ) ) :
                            ?>
                            <div class="site-info-left">
                                <?php
                                dynamic_sidebar( 'footer-bottom-left-area' );
                                ?>
                            </div>
                        <?php
	                    endif;
	                    ?>
                        <div class="site-info">
                            <span>
		                        <?php if( isset( $online_shop_customizer_all_values['online-shop-footer-copyright'] ) ): ?>
			                        <?php echo wp_kses_post( $online_shop_customizer_all_values['online-shop-footer-copyright'] ); ?>
		                        <?php endif; ?>
                            </span>
                        </div><!-- .site-info -->
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div><!-- footer-wrapper-->
        </footer><!-- #colophon -->
    <?php
    }
endif;
add_action( 'online_shop_action_footer', 'online_shop_footer', 10 );

/**
 * Page end
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_shop_page_end' ) ) :

    function online_shop_page_end() {
	    global $online_shop_customizer_all_values;
	    $online_shop_top_right_button_options = $online_shop_customizer_all_values['online-shop-top-right-button-options'];
	    $online_shop_popup_widget_title = $online_shop_customizer_all_values['online-shop-popup-widget-title'];

	    if( 'widget' == $online_shop_top_right_button_options ){
		    ?>
            <!-- Modal -->
            <div id="at-widget-modal" class="modal fade">
                <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content" id="at-widget-modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
						    <?php
						    if( !empty( $online_shop_popup_widget_title ) ){
							    ?>
                                <h4 class="modal-title"><?php echo esc_html( $online_shop_popup_widget_title ); ?></h4>
							    <?php
						    }
						    ?>
                        </div>
                        <?php
                        if( is_active_sidebar( 'popup-widget-area' ) ) :
                            echo "<div class='modal-body'>";
	                        dynamic_sidebar( 'popup-widget-area' );
	                        echo "</div>";
                        endif;
                        ?>
                    </div><!--.modal-content-->
                </div>
            </div><!--#at-shortcode-bootstrap-modal-->
		    <?php
	    }
        ?>
        </div><!-- #page -->
    <?php
    }
endif;
add_action( 'online_shop_action_after', 'online_shop_page_end', 10 );

add_action( 'wp_footer', function(){
    wp_enqueue_script('buildpc_script', get_stylesheet_directory_uri() . '/assets/js/bundle.js');
    if ( !empty( get_option( 'custom_preferences_options' )['render_footer_script'] ) ) :
        echo '<script>'.get_option( 'custom_preferences_options' )['render_footer_script'].'</script>';
    endif;
} );