<?php
/**
 * Custom display list product
 *
 * @package Acme Themes
 * @subpackage Online Shop
 * @since 1.0.0
 */
if ( ! class_exists( 'Online_Shop_Wc_Coin_Chart' ) ) {
    /**
     * Class for adding widget
     *
     * @package Acme Themes
     * @subpackage Online_Shop_Wc_Coin_Chart
     * @since 1.0.0
     */
    class Online_Shop_Wc_Coin_Chart extends WP_Widget {

        /*defaults values for fields*/
        private $defaults = array(
			'online_shop_widget_title' => ''
        );

        function __construct() {
            parent::__construct(
            /*Base ID of your widget*/
                'online_shop_wc_coin_chart',
                /*Widget name will appear in UI*/
                esc_html__('AT WooCommerce Coin chart', 'online-shop'),
                /*Widget description*/
                array( 'description' => esc_html__( 'Show Coin chart in home page', 'online-shop' ), )
            );
        }

        public function form( $instance ) {
            $instance = wp_parse_args( (array) $instance, $this->defaults);
			$online_shop_widget_title = esc_attr( $instance['online_shop_widget_title'] );
            
	        ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_title' ) ); ?>">
                    <?php esc_html_e( 'Title', 'online-shop' ); ?>
                </label>
                <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'online_shop_widget_title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'online_shop_widget_title' ) ); ?>" type="text" value="<?php echo $online_shop_widget_title; ?>" />
            </p>
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
			
            return $instance;
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
            // render element to use in page with react
            echo $args['before_widget'];
            ?>
                <div class="coin-chart">
                <iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1b5fb&symbol=BITSTAMP%3ABTCUSD&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&details=1&studies=MACD%40tv-basicstudies&hideideas=1&theme=Light&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.ccn.com&utm_medium=widget&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD"
                    width="100%" height="100%" frameborder="0" style="border:0; max-height: 650px" allowfullscreen=""></iframe>
                </div>
            <?php
            echo $args['after_widget'];
            echo "<div class='clearfix'></div>";
            
        }
    } // Class Online_Shop_Wc_Coin_Chart ends here
}