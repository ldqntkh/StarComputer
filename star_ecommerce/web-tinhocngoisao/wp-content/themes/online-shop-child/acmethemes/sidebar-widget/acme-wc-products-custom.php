<?php
/**
 * Custom display list product
 *
 * @package Acme Themes
 * @subpackage Online Shop
 * @since 1.0.0
 */
if ( ! class_exists( 'Online_Shop_Wc_Products_Custom' ) ) {
    /**
     * Class for adding widget
     *
     * @package Acme Themes
     * @subpackage Online_Shop_Wc_Products_Custom
     * @since 1.0.0
     */
    class Online_Shop_Wc_Products_Custom extends WP_Widget {

        /*defaults values for fields*/
        private $thumb;

        private $defaults = array(
			'online_shop_widget_title' => '',
			'online_shop_widget_description' => '',
			'online_shop_widget_class' => '',
			'online_shop_widget_icon_class' => '',
	        'wc_advanced_option' => 'recent',
            'online_shop_wc_product_cat' => -1,
            'online_shop_wc_product_tag' => -1,
            'post_number' => 4,
	        'wc_cat_display_option' => 'disable',
	        'orderby' => 'date',
            'order' => 'DESC',
            'widget_display_type' => 1,
            'widget_display_data' => array(
                "display_type_1" => array(
                    "data_type_1_image_url" => "",
                    "data_type_1_link_redirect" => ""
                ),
                "display_type_2" => array(
                    "data_type_2_special_product_id" => ""
                ),
                "display_type_3" => array(
                    "data_type_3_special_content_url" => "",
                    "data_type_3_special_content_url_image" => "",
                    "data_type_3_special_content_title" => "",
                    "data_type_3_special_content_desc" => "",
                    "data_type_3_special_title" => "",
                    "data_type_3_special_url" => "",
                    "data_type_3_special_product_id_1" => "",
                    "data_type_3_special_product_id_2" => "",
                    "data_type_3_special_product_id_3" => "",
                    "data_type_3_special_product_id_4" => ""
                ),
                "display_type_4" => array(
                    "data_type_4_special_content_url" => "",
                    "data_type_4_special_content_url_image" => "",
                    "data_type_4_special_content_title" => "",
                    "data_type_4_special_content_desc" => "",
                    "data_type_4_special_title" => "",
                    "data_type_4_special_url" => "",
                    "data_type_4_special_product_id_1" => "",
                    "data_type_4_special_product_id_2" => "",
                    "data_type_4_special_product_id_3" => "",
                    "data_type_4_special_product_id_4" => ""
                ),
            )
        );

        function __construct() {
            parent::__construct(
            /*Base ID of your widget*/
                'online_shop_wc_products_custom',
                /*Widget name will appear in UI*/
                esc_html__('AT WooCommerce Products Custom', 'online-shop'),
                /*Widget description*/
                array( 'description' => esc_html__( 'Show WooCommerce Products and category with advanced options', 'online-shop' ), )
            );
        }
        /*Widget Backend*/
        public function form( $instance ) {
            $instance = wp_parse_args( (array) $instance, $this->defaults);
			$online_shop_widget_title = esc_attr( $instance['online_shop_widget_title'] );
			$online_shop_widget_description = esc_attr( $instance['online_shop_widget_description'] );
			$online_shop_widget_class = esc_attr( $instance['online_shop_widget_class'] );
			$online_shop_widget_icon_class = esc_attr( $instance['online_shop_widget_icon_class'] );
	        $wc_advanced_option = esc_attr( $instance[ 'wc_advanced_option' ] );
	        $online_shop_wc_product_cat = esc_attr( $instance['online_shop_wc_product_cat'] );
	        $online_shop_wc_product_tag = esc_attr( $instance['online_shop_wc_product_tag'] );
	        $post_number = absint( $instance[ 'post_number' ] );
            $widget_display_type = esc_attr( $instance[ 'widget_display_type' ] );
	        $orderby = esc_attr( $instance[ 'orderby' ] );
            $order = esc_attr( $instance[ 'order' ] );
            
            // parse json data display type
            $widget_display_data = gettype($instance[ 'widget_display_data' ]) == "array" ? $instance[ 'widget_display_data' ] : json_decode($instance[ 'widget_display_data' ]);

	        $choices = online_shop_get_image_sizes_options();
	        ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_title' ) ); ?>">
                    <?php esc_html_e( 'Title', 'online-shop' ); ?>
                </label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'online_shop_widget_title' ) ); ?>" type="text" value="<?php echo $online_shop_widget_title; ?>" />
            </p>

			<p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_description' ) ); ?>">
                    <?php esc_html_e( 'Description', 'online-shop' ); ?>
                </label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_description' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'online_shop_widget_description' ) ); ?>" type="text" value="<?php echo $online_shop_widget_description; ?>" />
            </p>
			<p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_class' ) ); ?>">
                    <?php esc_html_e( 'Custom class', 'online-shop' ); ?>
                </label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_class' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'online_shop_widget_class' ) ); ?>" type="text" value="<?php echo $online_shop_widget_class; ?>" />
			</p>
			<p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_icon_class' ) ); ?>">
                    <?php esc_html_e( 'Custom icon class', 'online-shop' ); ?>
                </label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_icon_class' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'online_shop_widget_icon_class' ) ); ?>" type="text" value="<?php echo $online_shop_widget_icon_class; ?>" />
            </p>

            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'wc_advanced_option' ) ); ?>"><?php esc_html_e( 'Show', 'online-shop' ); ?></label>
                <select class="widefat at-wc-advanced-option" id="<?php echo esc_attr( $this->get_field_id( 'wc_advanced_option' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'wc_advanced_option' ) ); ?>" >
			        <?php
			        $wc_advanced_options = online_shop_wc_advanced_options();
			        foreach ( $wc_advanced_options as $key => $value ){
				        ?>
                        <option value="<?php echo esc_attr( $key )?>" <?php selected( $key, $wc_advanced_option ); ?>><?php echo esc_attr( $value );?></option>
				        <?php
			        }
			        ?>
                </select>
            </p>
            <p class="wc-product-cat wc-select">
                <label for="<?php echo esc_attr( $this->get_field_id('online_shop_wc_product_cat') ); ?>">
                    <?php esc_html_e('Select Category', 'online-shop'); ?>
                </label>
                <?php
                $online_shop_dropown_cat = array(
                    'show_option_none'   => false,
                    'orderby'            => 'name',
                    'order'              => 'asc',
                    'show_count'         => 1,
                    'hide_empty'         => 1,
                    'echo'               => 1,
                    'selected'           => $online_shop_wc_product_cat,
                    'hierarchical'       => 1,
                    'name'               => $this->get_field_name('online_shop_wc_product_cat'),
                    'id'                 => $this->get_field_name('online_shop_wc_product_cat'),
                    'class'              => 'widefat',
                    'taxonomy'           => 'product_cat',
                    'hide_if_empty'      => false
                );
                wp_dropdown_categories( $online_shop_dropown_cat );
                ?>
            </p>
            <p class="wc-product-tag wc-select">
                <label for="<?php echo esc_attr( $this->get_field_id('online_shop_wc_product_tag') ); ?>">
			        <?php esc_html_e('Select Tag', 'online-shop'); ?>
                </label>
		        <?php
		        $online_shop_dropown_cat = array(
			        'show_option_none'   => false,
			        'orderby'            => 'name',
			        'order'              => 'asc',
			        'show_count'         => 1,
			        'hide_empty'         => 1,
			        'echo'               => 1,
			        'selected'           => $online_shop_wc_product_tag,
			        'hierarchical'       => 1,
			        'name'               => $this->get_field_name('online_shop_wc_product_tag'),
			        'id'                 => $this->get_field_name('online_shop_wc_product_tag'),
			        'class'              => 'widefat',
			        'taxonomy'           => 'product_tag',
			        'hide_if_empty'      => false
		        );
		        wp_dropdown_categories( $online_shop_dropown_cat );
		        ?>
            </p>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'post_number' ) ); ?>">
			        <?php esc_html_e( 'Number of posts to show', 'online-shop' ); ?>
                </label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'post_number' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'post_number' ) ); ?>" type="number" value="<?php echo $post_number; ?>" />
            </p>
            
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'orderby' ) ); ?>">
			        <?php esc_html_e( 'Order by', 'online-shop' ); ?>
                </label>
                <select class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'orderby' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'orderby' ) ); ?>" >
			        <?php
			        $online_shop_wc_product_orderby = online_shop_wc_product_orderby();
			        foreach ( $online_shop_wc_product_orderby as $key => $value ){
				        ?>
                        <option value="<?php echo esc_attr( $key )?>" <?php selected( $key, $orderby ); ?>><?php echo esc_attr( $value );?></option>
				        <?php
			        }
			        ?>
                </select>
            </p>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'order' ) ); ?>">
			        <?php esc_html_e( 'Order by', 'online-shop' ); ?>
                </label>
                <select class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'order' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'order' ) ); ?>" >
			        <?php
			        $online_shop_post_order = online_shop_post_order();
			        foreach ( $online_shop_post_order as $key => $value ){
				        ?>
                        <option value="<?php echo esc_attr( $key )?>" <?php selected( $key, $order ); ?>><?php echo esc_attr( $value );?></option>
				        <?php
			        }
			        ?>
                </select>
            </p>
            <p>
                <small><?php esc_html_e( 'Note: Some of the features only work in "Home main content area" due to minimum width in other areas.' ,'online-shop'); ?></small>
            </p>
            <hr /><!--view all display type-->
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'widget_display_type' ) ); ?>">
			        <?php esc_html_e( 'Widget display type', 'online-shop' ); ?>
                </label>
                <?php $idSelectDisplayType = $this->get_field_id( 'widget_display_type' ); ?>
                <select class="widefat" id="<?php echo esc_attr( $idSelectDisplayType ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'widget_display_type' ) ); ?>" >
                    <option value="1" 
                    <?php 
                        if ($widget_display_type == "1") echo("selected"); 
                        else echo("");  
                    ?> >Type 1</option>
                    <option value="2" 
                    <?php 
                        if ($widget_display_type == "2") echo("selected"); 
                        else echo("");  
                    ?> >Type 2</option>
                    <option value="3" 
                    <?php 
                        if ($widget_display_type == "3") echo("selected"); 
                        else echo("");  
                    ?> >Type 3</option>
                    <option value="4" 
                    <?php 
                        if ($widget_display_type == "4") echo("selected"); 
                        else echo("");  
                    ?> >Type 4</option>
                </select>
            </p>
            <!-- custom fields for display type -->
            <section>
                <div class="tab-display <?php echo esc_attr( $idSelectDisplayType ); ?>" id="<?php echo esc_attr( $idSelectDisplayType ); ?>-1">
                    <?php $widget_display_data_type_1 = $widget_display_data->display_type_1; ?>
                    <p>
                        <h4><?php esc_html_e( 'Custom to show a url with large image', 'online-shop' ); ?></h4>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_1_image_url' ) ); ?>">
                            <?php esc_html_e( 'Large url image display', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_1_image_url' ) ); ?>" 
                            name="<?php echo esc_attr( $this->get_field_name( 'data_type_1_image_url' ) ); ?>" type="text" 
                            value="<?php echo $widget_display_data_type_1->data_type_1_image_url; ?>" />
                    </p>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_1_link_redirect' ) ); ?>">
                            <?php esc_html_e( 'Url redirect', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_1_link_redirect' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_1_link_redirect' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_1->data_type_1_link_redirect; ?>" />
                    </p>
                    <hr/>
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/display_type_1.png'; ?>" style="width:100%" />
                </div>

                <div class="tab-display <?php echo esc_attr( $idSelectDisplayType ); ?>" id="<?php echo esc_attr( $idSelectDisplayType ); ?>-2" >
                    <?php $widget_display_data_type_2 = $widget_display_data->display_type_2; ?>
                    <p>
                        <h4><?php esc_html_e( 'Custom to show a special product', 'online-shop' ); ?></h4>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_2_special_product_id' ) ); ?>">
                            <?php esc_html_e( 'Special product id', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_2_special_product_id' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_2_special_product_id' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_2->data_type_2_special_product_id; ?>" />
                    </p>
                    
                    <hr/>
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/display_type_2.png'; ?>" style="width:100%" />
                </div>

                <div class="tab-display <?php echo esc_attr( $idSelectDisplayType ); ?>" id="<?php echo esc_attr( $idSelectDisplayType ); ?>-3">
                    <?php $widget_display_data_type_3 = $widget_display_data->display_type_3; ?>
                    <p>
                        <h4><?php esc_html_e( 'Custom to show a special content image', 'online-shop' ); ?></h4>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_url' ) ); ?>">
                            <?php esc_html_e( 'Special content url', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_url' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_content_url' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_content_url; ?>" />
                    </p>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_url_image' ) ); ?>">
                            <?php esc_html_e( 'Special content url image', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_url_image' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_content_url_image' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_content_url_image; ?>" />
                    </p>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_title' ) ); ?>">
                            <?php esc_html_e( 'Special content title', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_title' ) ); ?>" 
                                    name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_content_title' ) ); ?>" type="text" 
                                    value="<?php echo $widget_display_data_type_3->data_type_3_special_content_title; ?>" />
                    </p>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_desc' ) ); ?>">
                            <?php esc_html_e( 'Special content description', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_content_desc' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_content_desc' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_content_desc; ?>" />
                    </p>
                    <hr/>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_title' ) ); ?>">
                            <?php esc_html_e( 'Special title', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_title' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_title' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_title; ?>" />
                    </p>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_url' ) ); ?>">
                            <?php esc_html_e( 'Special category url', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_url' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_url' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_url; ?>" />
                    </p>

                    <hr/>
                    <p>
                        <h4><?php esc_html_e( 'Custom to show special list product', 'online-shop' ); ?></h4>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_1' ) ); ?>">
                            <?php esc_html_e( 'Special product id 1', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_1' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_product_id_1' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_product_id_1; ?>" />
                    </p>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_2' ) ); ?>">
                            <?php esc_html_e( 'Special product id 2', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_2' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_product_id_2' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_product_id_2; ?>" />
                    </p>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_3' ) ); ?>">
                            <?php esc_html_e( 'Special product id 3', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_3' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_product_id_3' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_product_id_3; ?>" />
                    </p>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_4' ) ); ?>">
                            <?php esc_html_e( 'Special product id 4', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_3_special_product_id_4' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_3_special_product_id_4' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_3->data_type_3_special_product_id_4; ?>" />
                    </p>
                    <hr/>
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/display_type_3.png'; ?>" style="width:100%" />
                </div>

                <div class="tab-display <?php echo esc_attr( $idSelectDisplayType ); ?>" id="<?php echo esc_attr( $idSelectDisplayType ); ?>-4">
                    <?php $widget_display_data_type_4 = $widget_display_data->display_type_4; ?>
                    <p>
                        <h4><?php esc_html_e( 'Custom to show a special content image', 'online-shop' ); ?></h4>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_url' ) ); ?>">
                            <?php esc_html_e( 'Special content url', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_url' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_content_url' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_content_url; ?>" />
                    </p>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_url_image' ) ); ?>">
                            <?php esc_html_e( 'Special content url image', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_url_image' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_content_url_image' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_content_url_image; ?>" />
                    </p>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_title' ) ); ?>">
                            <?php esc_html_e( 'Special content title', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_title' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_content_title' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_content_title; ?>" />
                    </p>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_desc' ) ); ?>">
                            <?php esc_html_e( 'Special content description', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_content_desc' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_content_desc' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_content_desc; ?>" />
                    </p>
                    <hr/>

                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_title' ) ); ?>">
                            <?php esc_html_e( 'Special title', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_title' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_title' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_title; ?>" />
                    </p>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_url' ) ); ?>">
                            <?php esc_html_e( 'Special category url', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_url' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_url' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_url; ?>" />
                    </p>
                    <hr/>

                    <p>
                        <h4><?php esc_html_e( 'Custom to show special list product', 'online-shop' ); ?></h4>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_1' ) ); ?>">
                            <?php esc_html_e( 'Special product id 1', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_1' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_product_id_1' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_product_id_1; ?>" />
                    </p>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_2' ) ); ?>">
                            <?php esc_html_e( 'Special product id 2', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_2' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_product_id_2' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_product_id_2; ?>" />
                    </p>
                    <p>
                        <h4><?php esc_html_e( 'Custom to show special list product', 'online-shop' ); ?></h4>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_3' ) ); ?>">
                            <?php esc_html_e( 'Special product id 3', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_3' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_product_id_3' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_product_id_3; ?>" />
                    </p>
                    <p>
                        <label for="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_4' ) ); ?>">
                            <?php esc_html_e( 'Special product id 4', 'online-shop' ); ?>
                        </label>
                        <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'data_type_4_special_product_id_4' ) ); ?>" 
                                name="<?php echo esc_attr( $this->get_field_name( 'data_type_4_special_product_id_4' ) ); ?>" type="text" 
                                value="<?php echo $widget_display_data_type_4->data_type_4_special_product_id_4; ?>" />
                    </p>
                    <hr/>
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/display_type_4.png'; ?>" style="width:100%" />
                </div>
            </section>
            <!-- wait on -->
            <script>
                $(document).on('change', '#<?php echo esc_attr( $idSelectDisplayType ); ?>', function(e) {
                    $('.<?php echo esc_attr( $idSelectDisplayType ); ?>').attr('style',  'display:none');
                    $('.widget-content #<?php echo esc_attr( $idSelectDisplayType ); ?>-' + e.target.value).attr('style',  'display:block');
                });
                $('#<?php echo esc_attr( $idSelectDisplayType ); ?>').trigger('change');
            </script>
            <?php
        }

        /**
         * Function to Updating widget replacing old instances with new
         *
         * @access public
         * @since 1.0.0
         *
         * @param array $new_instance new arrays value
         * @param array $old_instance old arrays value
         * @return array
         *
         */
        public function update( $new_instance, $old_instance ) {
            $instance = array();
			$instance[ 'online_shop_widget_title' ] = ( isset( $new_instance['online_shop_widget_title'] ) ) ? sanitize_text_field( $new_instance['online_shop_widget_title'] ) : '';
			$instance[ 'online_shop_widget_description' ] = ( isset( $new_instance['online_shop_widget_description'] ) ) ? sanitize_text_field( $new_instance['online_shop_widget_description'] ) : '';
			$instance[ 'online_shop_widget_class' ] = ( isset( $new_instance['online_shop_widget_class'] ) ) ? sanitize_text_field( $new_instance['online_shop_widget_class'] ) : '';
			$instance[ 'online_shop_widget_icon_class' ] = ( isset( $new_instance['online_shop_widget_icon_class'] ) ) ? sanitize_text_field( $new_instance['online_shop_widget_icon_class'] ) : '';

	        $wc_advanced_options = online_shop_wc_advanced_options();
	        $instance[ 'wc_advanced_option' ] = online_shop_sanitize_choice_options( $new_instance[ 'wc_advanced_option' ], $wc_advanced_options, 'recent' );


	        $instance[ 'online_shop_wc_product_cat' ] = ( isset( $new_instance['online_shop_wc_product_cat'] ) ) ? absint( $new_instance['online_shop_wc_product_cat'] ) : '';
	        $instance[ 'online_shop_wc_product_tag' ] = ( isset( $new_instance['online_shop_wc_product_tag'] ) ) ? absint( $new_instance['online_shop_wc_product_tag'] ) : '';
	        $instance[ 'post_number' ] = absint( $new_instance[ 'post_number' ] );

	        $wc_cat_display_options = online_shop_wc_cat_display_options();
	        $instance[ 'wc_cat_display_option' ] = online_shop_sanitize_choice_options( $new_instance[ 'wc_cat_display_option' ], $wc_cat_display_options, 'disable' );

	        $online_shop_wc_product_orderby = online_shop_wc_product_orderby();
	        $instance[ 'orderby' ] = online_shop_sanitize_choice_options( $new_instance[ 'orderby' ], $online_shop_wc_product_orderby, 'date' );

	        $online_shop_post_order = online_shop_post_order();
            $instance[ 'order' ] = online_shop_sanitize_choice_options( $new_instance[ 'order' ], $online_shop_post_order, 'DESC' );
            
            $instance[ 'widget_display_type' ] = ( isset( $new_instance['widget_display_type'] ) ) ? absint( $new_instance['widget_display_type'] ) : 1;
            $widget_display_data = array(
                "display_type_1" => array(
                    "data_type_1_image_url" => ( isset( $new_instance['data_type_1_image_url'] ) ) ? sanitize_text_field( $new_instance['data_type_1_image_url'] ) : '',
                    "data_type_1_link_redirect" => ( isset( $new_instance['data_type_1_link_redirect'] ) ) ? sanitize_text_field( $new_instance['data_type_1_link_redirect'] ) : ''
                ),
                "display_type_2" => array(
                    "data_type_2_special_product_id" => ( isset( $new_instance['data_type_2_special_product_id'] ) ) ? sanitize_text_field( $new_instance['data_type_2_special_product_id'] ) : ''
                ),
                "display_type_3" => array(
                    "data_type_3_special_content_url" => ( isset( $new_instance['data_type_3_special_content_url'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_content_url'] ) : '',
                    "data_type_3_special_content_url_image" => ( isset( $new_instance['data_type_3_special_content_url_image'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_content_url_image'] ) : '',
                    "data_type_3_special_content_title" => ( isset( $new_instance['data_type_3_special_content_title'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_content_title'] ) : '',
                    "data_type_3_special_content_desc" => ( isset( $new_instance['data_type_3_special_content_desc'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_content_desc'] ) : '',
                    "data_type_3_special_title" => ( isset( $new_instance['data_type_3_special_title'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_title'] ) : '',
                    "data_type_3_special_url" => ( isset( $new_instance['data_type_3_special_url'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_url'] ) : '',
                    "data_type_3_special_product_id_1" => ( isset( $new_instance['data_type_3_special_product_id_1'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_product_id_1'] ) : '',
                    "data_type_3_special_product_id_2" => ( isset( $new_instance['data_type_3_special_product_id_2'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_product_id_2'] ) : '',
                    "data_type_3_special_product_id_3" => ( isset( $new_instance['data_type_3_special_product_id_3'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_product_id_3'] ) : '',
                    "data_type_3_special_product_id_4" => ( isset( $new_instance['data_type_3_special_product_id_4'] ) ) ? sanitize_text_field( $new_instance['data_type_3_special_product_id_4'] ) : ''
                ),
                "display_type_4" => array(
                    "data_type_4_special_content_url" => ( isset( $new_instance['data_type_4_special_content_url'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_content_url'] ) : '',
                    "data_type_4_special_content_url_image" => ( isset( $new_instance['data_type_4_special_content_url_image'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_content_url_image'] ) : '',
                    "data_type_4_special_content_title" => ( isset( $new_instance['data_type_4_special_content_title'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_content_title'] ) : '',
                    "data_type_4_special_content_desc" => ( isset( $new_instance['data_type_4_special_content_desc'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_content_desc'] ) : '',
                    "data_type_4_special_title" => ( isset( $new_instance['data_type_4_special_title'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_title'] ) : '',
                    "data_type_4_special_url" => ( isset( $new_instance['data_type_4_special_url'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_url'] ) : '',
                    "data_type_4_special_product_id_1" => ( isset( $new_instance['data_type_4_special_product_id_1'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_product_id_1'] ) : '',
                    "data_type_4_special_product_id_2" => ( isset( $new_instance['data_type_4_special_product_id_2'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_product_id_2'] ) : '',
                    "data_type_4_special_product_id_3" => ( isset( $new_instance['data_type_4_special_product_id_3'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_product_id_3'] ) : '',
                    "data_type_4_special_product_id_4" => ( isset( $new_instance['data_type_4_special_product_id_4'] ) ) ? sanitize_text_field( $new_instance['data_type_4_special_product_id_4'] ) : ''
                )
            );
            $instance[ 'widget_display_data' ] = json_encode($widget_display_data);
            
            return $instance;
        }

        function single_product_archive_thumbnail_size(){
            return $this->thumb;
        }

        /**
         * Function to Creating widget front-end. This is where the action happens
         *
         * @access public
         * @since 1.0.0
         *
         * @param array $args widget setting
         * @param array $instance saved values
         * @return void
         *
         */
        public function widget($args, $instance) {
            $instance = wp_parse_args( (array) $instance, $this->defaults);
	        $wc_advanced_option = esc_attr( $instance[ 'wc_advanced_option' ] );
	        $online_shop_wc_product_cat = esc_attr( $instance['online_shop_wc_product_cat'] );
	        $online_shop_wc_product_tag = esc_attr( $instance['online_shop_wc_product_tag'] );
	        $online_shop_widget_title = !empty( $instance['online_shop_widget_title'] ) ? esc_attr( $instance['online_shop_widget_title'] ) : '';
			$online_shop_widget_title = apply_filters( 'widget_title', $online_shop_widget_title, $instance, $this->id_base );
			$online_shop_widget_description = !empty( $instance['online_shop_widget_description'] ) ? esc_attr( $instance['online_shop_widget_description'] ) : '';
			$online_shop_widget_class = !empty( $instance['online_shop_widget_class'] ) ? esc_attr( $instance['online_shop_widget_class'] ) : '';
			$online_shop_widget_icon_class = !empty( $instance['online_shop_widget_icon_class'] ) ? esc_attr( $instance['online_shop_widget_icon_class'] ) : '';
	        $post_number = absint( $instance[ 'post_number' ] );
	        $orderby = esc_attr( $instance[ 'orderby' ] );
            $order = esc_attr( $instance[ 'order' ] );
            $widget_display_type = esc_attr( $instance[ 'widget_display_type' ] );
            $widget_display_datas = gettype($instance[ 'widget_display_data' ]) == "array" ? $instance[ 'widget_display_data' ] : json_decode($instance[ 'widget_display_data' ]);
            switch ($widget_display_type) {
                case 1:
                    $widget_display_data = $widget_display_datas->display_type_1;
                    break;
                case 2:
                    $widget_display_data = $widget_display_datas->display_type_2;
                    break;
                case 3:
                    $widget_display_data = $widget_display_datas->display_type_3;
                    break;
                default:
                    $widget_display_data = $widget_display_datas->display_type_4;
            }
            // render element to use in page with react
            echo $args['before_widget'];
            ?>

            <?php
            echo $args['after_widget'];
            echo "<div class='clearfix'></div>";
            ?>
            <script>
                if (typeof product_widget_custom === 'undefined') {
                    var product_widget_custom = [];
                }
                product_widget_custom["<?php echo $args['widget_id']; ?>"] = {
                    "title" : "<?php echo $online_shop_widget_title; ?>",
                    "product_cat" : <?php echo $online_shop_wc_product_cat; ?>,
                    "product_tag" : <?php echo $online_shop_wc_product_tag; ?>,
                    "description" : "<?php echo $online_shop_widget_description; ?>",
                    "widget_class" : "<?php echo $online_shop_widget_class; ?>",
                    "icon_class" : "<?php echo $online_shop_widget_icon_class; ?>",
                    "post_number" : <?php echo $post_number; ?>,
                    "orderby" : "<?php echo $orderby; ?>",
                    "order" : "<?php echo $order; ?>",
                    "display_option" : <?php echo $widget_display_type; ?>,
                    "display_data" : <?php echo json_encode($widget_display_data) ?>,
                    "advanced_option" :"<?php echo $wc_advanced_option; ?>"
                };
            </script>
            <?php
        }
    } // Class Online_Shop_Wc_Products ends here
}