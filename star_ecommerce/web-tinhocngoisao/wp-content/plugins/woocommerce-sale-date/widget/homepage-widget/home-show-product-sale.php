<?php
/**
 * Display primetime price shock
 *
 * @package Acme Themes
 * @subpackage Online Shop
 * @since 1.0.0
 * text domain: home-page-widget
 */

if ( ! class_exists( 'ShowListProductSale' ) ) {

    class ShowListProductSale extends WP_Widget {

        function __construct() {
            parent::__construct(
            /*Base ID of your widget*/
                'show_list_product_sale',
                /*Widget name will appear in UI*/
                esc_html__('Show list product is sale in primetime on mobile', 'home-page-widget'),
                /*Widget description*/
                array( 'description' => esc_html__( 'Show list product is sale in primetime on mobile', 'home-page-widget' ), )
            );
        }
        
        public function widget($args, $instance) {
        ?>
            <div class="primetime-price-mobile">
                <h2 class="widget-title"><?php _e('Hot deal', 'home-page-widget'); ?></h2>
                <div id="dv-primetime-price-mobile">
                    
                </div>
            </div>
        <?php }
    }
}

?>