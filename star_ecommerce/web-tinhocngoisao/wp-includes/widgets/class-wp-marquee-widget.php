<?php
/**
 * Widget API: WP_Marquee_Widget class
 *
 * @package WordPress
 * @subpackage Widgets
 * @since 1.0.0
 */
defined( 'ABSPATH' ) || exit;

class WP_Marquee_Widget extends WP_Widget {
    /**
	 * Sets up a new Navigation Menu widget instance.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$widget_ops = array(
            'classname' => 'marquee-widget',
			'description' => __( 'Add multiple descriptions in your page.' )
		);
		parent::__construct( 'marquee_widget', __('Marquee Widget'), $widget_ops );
    }
    
    public function form($instance) {
        $template = '';
        global $wp_customize;
        // support 5 items
        $arr_marquee = array(
            array(
                'title_1' => isset( $instance['title_1'] ) ? $instance['title_1'] : '',
                'url_1' => isset( $instance['url_1'] ) ? $instance['url_1'] : '',
                'desc' => 'Marquee 1'
            ),
            array(
                'title_2' => isset( $instance['title_2'] ) ? $instance['title_2'] : '',
                'url_2' => isset( $instance['url_2'] ) ? $instance['url_2'] : '',
                'desc' => 'Marquee 2'
            ),
            array(
                'title_3' => isset( $instance['title_3'] ) ? $instance['title_3'] : '',
                'url_3' => isset( $instance['url_3'] ) ? $instance['url_3'] : '',
                'desc' => 'Marquee 3'
            ),
            array(
                'title_4' => isset( $instance['title_4'] ) ? $instance['title_4'] : '',
                'url_4' => isset( $instance['url_4'] ) ? $instance['url_4'] : '',
                'desc' => 'Marquee 4'
            ),
            array(
                'title_5' => isset( $instance['title_5'] ) ? $instance['title_5'] : '',
                'url_5' => isset( $instance['url_5'] ) ? $instance['url_5'] : '',
                'desc' => 'Marquee 5'
            )
        );

        // If no menus exists, direct the user to go and create some.
        
		$template .=  '<div class="nav-menu-widget-form-controls ">';

        foreach ( $arr_marquee as $item ) :
            $template .= '<fieldset style="border: .5px solid; margin-bottom: 5px; padding : 3px;">';
            $template .= '<legend>' .esc_attr( $item[array_keys($item)[2]] ). '</legend>';
            $template .= '<p>';
            $template .= '<label for="' .$this->get_field_id( array_keys($item)[0] ).'">Title:</label>';
            $template .= '<input type="text" class="widefat" id="' .$this->get_field_id( array_keys($item)[0] ). '" name="' .$this->get_field_name( array_keys($item)[0] ). '" value="'. esc_attr( $item[array_keys($item)[0]] ) .'"/>';
            $template .= '</p><p>';
            $template .= '<label for="' .$this->get_field_id( array_keys($item)[1] ).'">Url:</label>';
            $template .= '<input type="text" class="widefat" id="' .$this->get_field_id( array_keys($item)[1] ). '" name="' .$this->get_field_name( array_keys($item)[1] ). '" value="'. esc_attr( $item[array_keys($item)[1]] ) .'"/>';
            $template .= '</p>';
            $template .= '</fieldset>';
        endforeach; 
		$template .= '</div>';
        echo $template;
    }

    public function update( $new_instance, $old_instance ) {
        $instance = [];

        // 01
        for($i = 1; $i <= 5; $i++) {
            $instance['title_'. $i] = isset( $new_instance['title_'.$i] ) ? $new_instance['title_'.$i] : '';
            $instance['url_' .$i] = isset( $new_instance['url_'.$i] ) ? $new_instance['url_'.$i] : '';
        }
        

        return $instance;
    }

    public function widget( $args, $instance ) { 
        var_dump($instance);
    }
}

