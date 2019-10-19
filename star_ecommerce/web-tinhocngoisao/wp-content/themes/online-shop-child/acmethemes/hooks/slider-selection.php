<?php
/**
 * Display default slider
 *
 * @since Online Shop 1.0.0
 *
 * @param int $post_id
 * @return void
 *
 */
if ( !function_exists('online_shop_default_featured') ) :
    function online_shop_default_featured(){
        ?>
        <div class="acme-col-2" style="background-image: url('<?php echo esc_url( get_template_directory_uri()."/assets/img/default-image.jpg" ); ?>')">

        </div>
        <div class="acme-col-2" style="background-image: url('<?php echo esc_url( get_template_directory_uri()."/assets/img/default-image.jpg" ); ?>')">

        </div>
        <div class="clearfix"></div>
        <div class="acme-col-3" style="background-image: url('<?php echo esc_url( get_template_directory_uri()."/assets/img/default-image.jpg" ); ?>')">

        </div>
        <div class="acme-col-3" style="background-image: url('<?php echo esc_url( get_template_directory_uri()."/assets/img/default-image.jpg" ); ?>')">

        </div>
        <div class="acme-col-3" style="background-image: url('<?php echo esc_url( get_template_directory_uri()."/assets/img/default-image.jpg" ); ?>')">

        </div>
        <?php
    }
endif;

/**
 * Display related posts from same category
 *
 * @since Online Shop 1.0.0
 *
 * @param int $post_id
 * @return void
 *
 */
if ( !function_exists('online_shop_feature_slider') ) :
    function online_shop_feature_slider() {
	    global $online_shop_customizer_all_values;
	    $online_shop_feature_content_options = $online_shop_customizer_all_values['online-shop-feature-content-options'];
	    $online_shop_feature_right_content_options = $online_shop_customizer_all_values['online-shop-feature-right-content-options'];
	    $online_shop_fs_image_display_options = $online_shop_customizer_all_values['online-shop-fs-image-display-options'];
	    $slider_full = '';
	    if( 'disable' == $online_shop_feature_right_content_options ){
	        $slider_full = 'full-width';
        }
	    if( 'disable' == $online_shop_feature_content_options ){
		    $slider_full = 'full-width-right';
		}
		$online_shop_feature_slider_autoplay_speed = isset($online_shop_customizer_all_values['online-shop-feature-auto-speed']) && $online_shop_customizer_all_values['online-shop-feature-auto-speed'] > 0 ? absint($online_shop_customizer_all_values['online-shop-feature-auto-speed']) : 3000;
	    ?>
        <div class="clearfix"></div>
        <div class="wrapper">
            <div class="slider-feature-wrap <?php echo esc_attr( $slider_full ); ?> clearfix <?php echo esc_attr( $online_shop_fs_image_display_options );?>">
	            <?php
	            if( is_active_sidebar( 'online-shop-before-feature' ) ) :
		            ?>
                    <div class="online-shop-before-feature">
			            <?php dynamic_sidebar( 'online-shop-before-feature' ); ?>
                    </div>
		            <?php
	            endif;
		        if( is_active_sidebar( 'online-shop-left-feature' ) ) :
				?>
                    <div class="slider-section">
				        <?php
				        $online_shop_feature_slider_display_arrow = $online_shop_customizer_all_values['online-shop-feature-slider-display-arrow'];
				        $online_shop_feature_slider_enable_autoplay = $online_shop_customizer_all_values['online-shop-feature-slider-enable-autoplay'];
				        if( 1 ==$online_shop_feature_slider_display_arrow ){
					        echo "<span class='at-action-wrapper hide-mobile'>";
					        echo '<i class="prev fa fa-angle-left"></i><i class="next fa fa-angle-right"></i>';
					        echo "</span>";/*.at-action-wrapper*/
						}
				        ?>
                        <div class="featured-slider at-feature-section"
                             data-autoplay="<?php echo esc_attr( $online_shop_feature_slider_enable_autoplay );?>"
                             data-arrows="<?php echo esc_attr( $online_shop_feature_slider_display_arrow );?>"
                             data-autospeed="<?php echo $online_shop_feature_slider_autoplay_speed; ?>"
                        >
							<?php dynamic_sidebar( 'online-shop-left-feature' ); ?>
                        </div>
                    </div>
				<?php endif;?>
				<div class="slider-section-right">
					<?php if( is_active_sidebar( 'online-shop-right-feature' ) ) : ?>
						<?php dynamic_sidebar( 'online-shop-right-feature' ); ?>
					<?php endif;?>
				</div>

				<?php if ( is_active_sidebar( 'online-shop-under-feature' ) ): ?>
					<div class="beside-slider">
						<div class="fs-right-slider" data-autoplay="1" data-autospeed="<?php echo ($online_shop_feature_slider_autoplay_speed - 1000); ?>">
							<?php
								dynamic_sidebar( 'online-shop-under-feature' );
							?>
						</div>
					</div>
				<?php endif; ?>
            </div><!--slider-feature-wrap-->
        </div>
        <div class="clearfix"></div>
        <?php
    }
endif;
add_action( 'online_shop_action_feature_slider', 'online_shop_feature_slider', 0 );
?>