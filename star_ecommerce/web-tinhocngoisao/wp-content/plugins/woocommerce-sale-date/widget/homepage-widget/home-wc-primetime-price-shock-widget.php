<?php
/**
 * Display primetime price shock
 *
 * @package Acme Themes
 * @subpackage Online Shop
 * @since 1.0.0
 * text domain: home-page-widget
 */

define ('BLOCK_TITLE', 'block_title');
define ('BLOCK_TIME_01', 'block_time_01');
define ('BLOCK_CATEGORIES_01', 'block_categories_01');

define ('BLOCK_TIME_02', 'block_time_02');
define ('BLOCK_CATEGORIES_02', 'block_categories_02');

define ('BLOCK_TIME_03', 'block_time_03');
define ('BLOCK_CATEGORIES_03', 'block_categories_03');

define ('BLOCK_TIME_04', 'block_time_04');
define ('BLOCK_CATEGORIES_04', 'block_categories_04');

define ('BLOCK_TIME_05', 'block_time_05');
define ('BLOCK_CATEGORIES_05', 'block_categories_05');

if ( ! class_exists( 'Primetime_Price_Shock' ) ) {

    class Primetime_Price_Shock extends WP_Widget {

        function __construct() {
            parent::__construct(
            /*Base ID of your widget*/
                'primetime_price_shock',
                /*Widget name will appear in UI*/
                esc_html__('Show product is sale in primetime', 'home-page-widget'),
                /*Widget description*/
                array( 'description' => esc_html__( 'Show product is sale in primetime', 'home-page-widget' ), )
            );

            $this->register_header_admin_css();
            $this->register_footer_admin_script();
            $this->register_header_client_css();
            $this->register_footer_client_script();
        }
    
        public function form($instance) {
            _e('<i>We will use fixed times to display products.<br/>
                        For example, the first interval starts at 8 hours, the second interval starts at 12 hours. We will display the data for the first time from 8am to 11am, the second time from 12am to 7am the following day.</i>', 'home-page-widget');
        
            $block_title = isset( $instance[ BLOCK_TITLE ] ) ? $instance[ BLOCK_TITLE ] : '';
            $block_time_01 = isset( $instance[ BLOCK_TIME_01 ] ) ? $instance[ BLOCK_TIME_01 ] : 0;
            // it will be parse to json in function render checkbox
            $block_categories_01 = isset( $instance[ BLOCK_CATEGORIES_01 ] ) ? $instance[ BLOCK_CATEGORIES_01 ] : '';

            $block_time_02 = isset( $instance[ BLOCK_TIME_02 ] ) ? $instance[ BLOCK_TIME_02 ] : 0;
            $block_categories_02 = isset( $instance[ BLOCK_CATEGORIES_02 ] ) ? $instance[ BLOCK_CATEGORIES_02 ] : '';

            $block_time_03 = isset( $instance[ BLOCK_TIME_03 ] ) ? $instance[ BLOCK_TIME_03 ] : 0;
            $block_categories_03 = isset( $instance[ BLOCK_CATEGORIES_03 ] ) ? $instance[ BLOCK_CATEGORIES_03 ] : '';

            $block_time_04 = isset( $instance[ BLOCK_TIME_04 ] ) ? $instance[ BLOCK_TIME_04 ] : 0;
            $block_categories_04 = isset( $instance[ BLOCK_CATEGORIES_04 ] ) ? $instance[ BLOCK_CATEGORIES_04 ] : '';

            $block_time_05 = isset( $instance[ BLOCK_TIME_05 ] ) ? $instance[ BLOCK_TIME_05 ] : 0;
            $block_categories_05 = isset( $instance[ BLOCK_CATEGORIES_05 ] ) ? $instance[ BLOCK_CATEGORIES_05 ] : '';
        ?>
            <p>
                <label for="<?php echo $this->get_field_id( BLOCK_TITLE ) ?>"> <?php _e('Block title', 'home-page-widget'); ?> </label>
                <input type="text" class="widefat" id="<?php echo $this->get_field_id( BLOCK_TITLE ) ?>" 
                    name="<?php echo $this->get_field_name( BLOCK_TITLE ) ?>" 
                    value="<?php echo $block_title; ?>"/>
            </p>
            <!-- Block 01 -->
            <fieldset class="fs-block-time">
                <span class="show-more"></span>
                <legend> <?php _e('Block 01','home-page-widget') ?> </legend>
                <p>
                    <label for="<?php echo $this->get_field_id( BLOCK_TIME_01 ) ?>"> <?php _e('Block time 01:', 'home-page-widget'); ?> </label>
                    <input type="number" min="0" max="24" class="widefat" id="<?php echo $this->get_field_id( BLOCK_TIME_01 ) ?>" 
                        name="<?php echo $this->get_field_name( BLOCK_TIME_01 ) ?>" 
                        value="<?php echo $block_time_01 ?>"/>
                </p>
                <p class="wc-product-cat wc-select">
                    <label>
                        <?php esc_html_e('Select Category', 'home-page-widget'); ?>
                    </label>
                    <?php
                        $list_cat_01 = array(
                            'show_option_none'   => false,
                            'orderby'            => 'name',
                            'order'              => 'asc',
                            'show_count'         => 1,
                            'hide_empty'         => 1,
                            'echo'               => 1,
                            'selected'           => 1,
                            'hierarchical'       => 1,
                            'name'               => $this->get_field_name( BLOCK_CATEGORIES_01 ),
                            'id'                 => $this->get_field_name( BLOCK_CATEGORIES_01 ),
                            'class'              => 'widefat',
                            'taxonomy'           => 'product_cat',
                            'hide_if_empty'      => false,
                            'slug_id'            => 'block_01_',
                            'cat_json'           => $block_categories_01
                        );
                        $this->wp_checkbox_categories( $list_cat_01 );
                    ?>
                </p>
            </fieldset>

            <!-- Block 02 -->
            <fieldset class="fs-block-time">
                <span class="show-more"></span>
                <legend> <?php _e('Block 02','home-page-widget') ?> </legend>
                <p>
                    <label for="<?php echo $this->get_field_id( BLOCK_TIME_02 ) ?>"> <?php _e('Block time 02:', 'home-page-widget'); ?> </label>
                    <input type="number" min="0" max="24" class="widefat" id="<?php echo $this->get_field_id( BLOCK_TIME_02 ) ?>" 
                        name="<?php echo $this->get_field_name( BLOCK_TIME_02 ) ?>" 
                        value="<?php echo $block_time_02 ?>"/>
                </p>
                <p class="wc-product-cat wc-select">
                    <label>
                        <?php esc_html_e('Select Category', 'home-page-widget'); ?>
                    </label>
                    <?php
                        $list_cat_02 = array(
                            'show_option_none'   => false,
                            'orderby'            => 'name',
                            'order'              => 'asc',
                            'show_count'         => 1,
                            'hide_empty'         => 1,
                            'echo'               => 1,
                            'selected'           => 1,
                            'hierarchical'       => 1,
                            'name'               => $this->get_field_name( BLOCK_CATEGORIES_02 ),
                            'id'                 => $this->get_field_name( BLOCK_CATEGORIES_02 ),
                            'class'              => 'widefat',
                            'taxonomy'           => 'product_cat',
                            'hide_if_empty'      => false,
                            'slug_id'            => 'block_02_',
                            'cat_json'           => $block_categories_02
                        );
                        $this->wp_checkbox_categories( $list_cat_02 );
                    ?>
                </p>
            </fieldset>

            <!-- Block 03 -->
            <fieldset class="fs-block-time">
                <span class="show-more"></span>
                <legend> <?php _e('Block 03','home-page-widget') ?> </legend>
                <p>
                    <label for="<?php echo $this->get_field_id( BLOCK_TIME_03 ) ?>"> <?php _e('Block time 03:', 'home-page-widget'); ?> </label>
                    <input type="number" min="0" max="24" class="widefat" id="<?php echo $this->get_field_id( BLOCK_TIME_03 ) ?>" 
                        name="<?php echo $this->get_field_name( BLOCK_TIME_03 ) ?>" 
                        value="<?php echo $block_time_03 ?>"/>
                </p>
                <p class="wc-product-cat wc-select">
                    <label>
                        <?php esc_html_e('Select Category', 'home-page-widget'); ?>
                    </label>
                    <?php
                        $list_cat_03 = array(
                            'show_option_none'   => false,
                            'orderby'            => 'name',
                            'order'              => 'asc',
                            'show_count'         => 1,
                            'hide_empty'         => 1,
                            'echo'               => 1,
                            'selected'           => 1,
                            'hierarchical'       => 1,
                            'name'               => $this->get_field_name( BLOCK_CATEGORIES_03 ),
                            'id'                 => $this->get_field_name( BLOCK_CATEGORIES_03 ),
                            'class'              => 'widefat',
                            'taxonomy'           => 'product_cat',
                            'hide_if_empty'      => false,
                            'slug_id'            => 'block_03_',
                            'cat_json'           => $block_categories_03
                        );
                        $this->wp_checkbox_categories( $list_cat_03 );
                    ?>
                </p>
            </fieldset>

            <!-- Block 04 -->
            <fieldset class="fs-block-time">
                <span class="show-more"></span>
                <legend> <?php _e('Block 04','home-page-widget') ?> </legend>
                <p>
                    <label for="<?php echo $this->get_field_id( BLOCK_TIME_04 ) ?>"> <?php _e('Block time 04:', 'home-page-widget'); ?> </label>
                    <input type="number" min="0" max="24" class="widefat" id="<?php echo $this->get_field_id( BLOCK_TIME_04 ) ?>" 
                        name="<?php echo $this->get_field_name( BLOCK_TIME_04 ) ?>" 
                        value="<?php echo $block_time_04 ?>"/>
                </p>
                <p class="wc-product-cat wc-select">
                    <label>
                        <?php esc_html_e('Select Category', 'home-page-widget'); ?>
                    </label>
                    <?php
                        $list_cat_04 = array(
                            'show_option_none'   => false,
                            'orderby'            => 'name',
                            'order'              => 'asc',
                            'show_count'         => 1,
                            'hide_empty'         => 1,
                            'echo'               => 1,
                            'selected'           => 1,
                            'hierarchical'       => 1,
                            'name'               => $this->get_field_name( BLOCK_CATEGORIES_04 ),
                            'id'                 => $this->get_field_name( BLOCK_CATEGORIES_04 ),
                            'class'              => 'widefat',
                            'taxonomy'           => 'product_cat',
                            'hide_if_empty'      => false,
                            'slug_id'            => 'block_04_',
                            'cat_json'           => $block_categories_04
                        );
                        $this->wp_checkbox_categories( $list_cat_04 );
                    ?>
                </p>
            </fieldset>

            <!-- Block 05 -->
            <fieldset class="fs-block-time">
                <span class="show-more"></span>
                <legend> <?php _e('Block 05','home-page-widget') ?> </legend>
                <p>
                    <label for="<?php echo $this->get_field_id( BLOCK_TIME_05 ) ?>"> <?php _e('Block time 05:', 'home-page-widget'); ?> </label>
                    <input type="number" min="0" max="24" class="widefat" id="<?php echo $this->get_field_id( BLOCK_TIME_05 ) ?>" 
                        name="<?php echo $this->get_field_name( BLOCK_TIME_05 ) ?>" 
                        value="<?php echo $block_time_05 ?>"/>
                </p>
                <p class="wc-product-cat wc-select">
                    <label>
                        <?php esc_html_e('Select Category', 'home-page-widget'); ?>
                    </label>
                    <?php
                        $list_cat_05 = array(
                            'show_option_none'   => false,
                            'orderby'            => 'name',
                            'order'              => 'asc',
                            'show_count'         => 1,
                            'hide_empty'         => 1,
                            'echo'               => 1,
                            'selected'           => 1,
                            'hierarchical'       => 1,
                            'name'               => $this->get_field_name( BLOCK_CATEGORIES_05 ),
                            'id'                 => $this->get_field_name( BLOCK_CATEGORIES_05 ),
                            'class'              => 'widefat',
                            'taxonomy'           => 'product_cat',
                            'hide_if_empty'      => false,
                            'slug_id'            => 'block_05_',
                            'cat_json'           => $block_categories_05
                        );
                        $this->wp_checkbox_categories( $list_cat_05 );
                    ?>
                </p>
            </fieldset>

        <?php
            _e('<i>Note: This widget will be use javascript to render data</i>','home-page-widget') ;
        }

        public function update( $new_instance, $old_instance ) {
            $instance = $old_instance;

            $instance[ BLOCK_TITLE ] = isset($new_instance[ BLOCK_TITLE ]) ? $new_instance[ BLOCK_TITLE ] : '';
            // block 01
            $instance[ BLOCK_TIME_01 ] = isset($new_instance[ BLOCK_TIME_01 ]) ? $new_instance[ BLOCK_TIME_01 ] : 0;
            // get value checkbox of category
            // get keys
            $block_categories_01 = $this->get_block_categories($new_instance, '_01_category_');
            if ($block_categories_01 != '') {
                $block_categories_01 = '[' . $block_categories_01 .']';
                $instance[BLOCK_CATEGORIES_01] = $block_categories_01;
            }

            // block 02
            $instance[ BLOCK_TIME_02 ] = isset($new_instance[ BLOCK_TIME_02 ]) ? $new_instance[ BLOCK_TIME_02 ] : 0;
            $block_categories_02 = $this->get_block_categories($new_instance, '_02_category_');
            if ($block_categories_02 != '') {
                $block_categories_02 = '[' . $block_categories_02 .']';
                $instance[BLOCK_CATEGORIES_02] = $block_categories_02;
            }

            // block 03
            $instance[ BLOCK_TIME_03 ] = isset($new_instance[ BLOCK_TIME_03 ]) ? $new_instance[ BLOCK_TIME_03 ] : 0;
            $block_categories_03 = $this->get_block_categories($new_instance, '_03_category_');
            if ($block_categories_03 != '') {
                $block_categories_03 = '[' . $block_categories_03 .']';
                $instance[BLOCK_CATEGORIES_03] = $block_categories_03;
            }

            // block 04
            $instance[ BLOCK_TIME_04 ] = isset($new_instance[ BLOCK_TIME_04 ]) ? $new_instance[ BLOCK_TIME_04 ] : 0;
            $block_categories_04 = $this->get_block_categories($new_instance, '_04_category_');
            if ($block_categories_04 != '') {
                $block_categories_04 = '[' . $block_categories_04 .']';
                $instance[BLOCK_CATEGORIES_04] = $block_categories_04;
            }

            // block 05
            $instance[ BLOCK_TIME_05 ] = isset($new_instance[ BLOCK_TIME_05 ]) ? $new_instance[ BLOCK_TIME_05 ] : 0;
            $block_categories_05 = $this->get_block_categories($new_instance, '_05_category_');
            if ($block_categories_05 != '') {
                $block_categories_05 = '[' . $block_categories_05 .']';
                $instance[BLOCK_CATEGORIES_05] = $block_categories_05;
            }

            return $instance;
        }

        public function widget($args, $instance) {
            $block_title = isset( $instance[ BLOCK_TITLE ] ) ? $instance[ BLOCK_TITLE ] : '';
            $block_time_01 = isset( $instance[ BLOCK_TIME_01 ] ) ? $instance[ BLOCK_TIME_01 ] : 0;
            // it will be parse to json in function render checkbox
            $block_categories_01 = isset( $instance[ BLOCK_CATEGORIES_01 ] ) ? $instance[ BLOCK_CATEGORIES_01 ] : '';

            $block_time_02 = isset( $instance[ BLOCK_TIME_02 ] ) ? $instance[ BLOCK_TIME_02 ] : 0;
            $block_categories_02 = isset( $instance[ BLOCK_CATEGORIES_02 ] ) ? $instance[ BLOCK_CATEGORIES_02 ] : '';

            $block_time_03 = isset( $instance[ BLOCK_TIME_03 ] ) ? $instance[ BLOCK_TIME_03 ] : 0;
            $block_categories_03 = isset( $instance[ BLOCK_CATEGORIES_03 ] ) ? $instance[ BLOCK_CATEGORIES_03 ] : '';

            $block_time_04 = isset( $instance[ BLOCK_TIME_04 ] ) ? $instance[ BLOCK_TIME_04 ] : 0;
            $block_categories_04 = isset( $instance[ BLOCK_CATEGORIES_04 ] ) ? $instance[ BLOCK_CATEGORIES_04 ] : '';

            $block_time_05 = isset( $instance[ BLOCK_TIME_05 ] ) ? $instance[ BLOCK_TIME_05 ] : 0;
            $block_categories_05 = isset( $instance[ BLOCK_CATEGORIES_05 ] ) ? $instance[ BLOCK_CATEGORIES_05 ] : '';
            $results = array(
                "block_title"   => $block_title,
                "block_01"      => array(
                                        "block_time"        => $block_time_01,
                                        "block_categories"  => json_decode($block_categories_01),
                ),
                "block_02"      => array(
                                        "block_time"        => $block_time_02,
                                        "block_categories"  => json_decode($block_categories_02),
                                    ),
                "block_03"      => array(
                                        "block_time"        => $block_time_03,
                                        "block_categories"  => json_decode($block_categories_03),
                                    ),
                "block_04"      => array(
                                        "block_time"        => $block_time_04,
                                        "block_categories"  => json_decode($block_categories_04),
                                    ),
                "block_05"      => array(
                                        "block_time"        => $block_time_05,
                                        "block_categories"  => json_decode($block_categories_05),
                                    )
            )
        ?>
            <script type="text/javascript">
                var primetime_data = <?php echo json_encode($results); ?>;
            </script>
            <div id="dv-primetime-price">
                
            </div>
        <?php
            
        }

        // custom function show checkbox list categories
        /**
         * Display or retrieve the HTML dropdown list of categories.
         *
         * The 'hierarchical' argument, which is disabled by default, will override the
         * depth argument, unless it is true. When the argument is false, it will
         * display all of the categories. When it is enabled it will use the value in
         * the 'depth' argument.
         *
         * @since 2.1.0
         * @since 4.2.0 Introduced the `value_field` argument.
         * @since 4.6.0 Introduced the `required` argument.
         *
         * @param string|array $args {
         *     Optional. Array or string of arguments to generate a categories drop-down element. See WP_Term_Query::__construct()
         *     for information on additional accepted arguments.
         *
         *     @type string       $show_option_all   Text to display for showing all categories. Default empty.
         *     @type string       $show_option_none  Text to display for showing no categories. Default empty.
         *     @type string       $option_none_value Value to use when no category is selected. Default empty.
         *     @type string       $orderby           Which column to use for ordering categories. See get_terms() for a list
         *                                           of accepted values. Default 'id' (term_id).
         *     @type bool         $pad_counts        See get_terms() for an argument description. Default false.
         *     @type bool|int     $show_count        Whether to include post counts. Accepts 0, 1, or their bool equivalents.
         *                                           Default 0.
         *     @type bool|int     $echo              Whether to echo or return the generated markup. Accepts 0, 1, or their
         *                                           bool equivalents. Default 1.
         *     @type bool|int     $hierarchical      Whether to traverse the taxonomy hierarchy. Accepts 0, 1, or their bool
         *                                           equivalents. Default 0.
         *     @type int          $depth             Maximum depth. Default 0.
         *     @type int          $tab_index         Tab index for the select element. Default 0 (no tabindex).
         *     @type string       $name              Value for the 'name' attribute of the select element. Default 'cat'.
         *     @type string       $id                Value for the 'id' attribute of the select element. Defaults to the value
         *                                           of `$name`.
         *     @type string       $class             Value for the 'class' attribute of the select element. Default 'postform'.
         *     @type int|string   $selected          Value of the option that should be selected. Default 0.
         *     @type string       $value_field       Term field that should be used to populate the 'value' attribute
         *                                           of the option elements. Accepts any valid term field: 'term_id', 'name',
         *                                           'slug', 'term_group', 'term_taxonomy_id', 'taxonomy', 'description',
         *                                           'parent', 'count'. Default 'term_id'.
         *     @type string|array $taxonomy          Name of the category or categories to retrieve. Default 'category'.
         *     @type bool         $hide_if_empty     True to skip generating markup if no categories are found.
         *                                           Default false (create select element even if no categories are found).
         *     @type bool         $required          Whether the `<select>` element should have the HTML5 'required' attribute.
         *                                           Default false.
         * }
         * @return string HTML content only if 'echo' argument is 0.
         */
        function wp_checkbox_categories( $args = '' ) {
            $defaults = array(
                'show_option_all'   => '',
                'show_option_none'  => '',
                'orderby'           => 'id',
                'order'             => 'ASC',
                'show_count'        => 0,
                'hide_empty'        => 1,
                'child_of'          => 0,
                'exclude'           => '',
                'echo'              => 1,
                'selected'          => '',
                'hierarchical'      => 0,
                'name'              => 'cat',
                'id'                => '',
                'class'             => 'postform',
                'depth'             => 0,
                'tab_index'         => 0,
                'taxonomy'          => 'category',
                'hide_if_empty'     => false,
                'option_none_value' => -1,
                'value_field'       => 'term_id',
                'required'          => false,
                'slug_id'            => '',
                "cat_json"          => ''
            );

            $defaults['selected'] = ( is_category() ) ? get_query_var( 'cat' ) : 0;

            // Back compat.
            if ( isset( $args['type'] ) && 'link' == $args['type'] ) {
                _deprecated_argument( __FUNCTION__, '3.0.0',
                    /* translators: 1: "type => link", 2: "taxonomy => link_category" */
                    sprintf( __( '%1$s is deprecated. Use %2$s instead.' ),
                        '<code>type => link</code>',
                        '<code>taxonomy => link_category</code>'
                    )
                );
                $args['taxonomy'] = 'link_category';
            }

            $r = wp_parse_args( $args, $defaults );
            $option_none_value = $r['option_none_value'];

            /**
             * json type [
             *  {cat_id: 1},
             *  .......
             * ]
             * I want to change the value later, but don't need ovwerite code
             */
            $cat_json = '';
            if ($r['cat_json'] != '') {
                $cat_json = json_decode($r['cat_json']);
            }

            if ( ! isset( $r['pad_counts'] ) && $r['show_count'] && $r['hierarchical'] ) {
                $r['pad_counts'] = true;
            }

            $tab_index = $r['tab_index'];

            $tab_index_attribute = '';
            if ( (int) $tab_index > 0 ) {
                $tab_index_attribute = " tabindex=\"$tab_index\"";
            }

            // Avoid clashes with the 'name' param of get_terms().
            $get_terms_args = $r;
            unset( $get_terms_args['name'] );
            $categories = get_terms( $r['taxonomy'], $get_terms_args );

            $name = esc_attr( $r['name'] );
            $class = esc_attr( $r['class'] );
            $id = $r['id'] ? esc_attr( $r['id'] ) : $name;
            $required = $r['required'] ? 'required' : '';
            
            // render list checkbox categories
            $slug_id = $r['slug_id'];
            $output = '<div class="wg-dev-list_checkbox-categories">';
            
            foreach($categories as $category) {
                if ($category->parent != 0) continue;
                $checked = $this->check_category($cat_json, $category->term_id) ? 'checked' : '';
                $output .= '<p class="parent-category">';
                $output .= '<input type="checkbox" id="'. $this->get_field_id( $slug_id. 'category_' . $category->term_id ) .'" name="'. $this->get_field_name( $slug_id. 'category_' . $category->term_id ).'" 
                            value="'. $category->term_id .'" '. $checked .' />'. $category->name;
                            $checked = '';
                $output .= '</p>';
                foreach($categories as $subcategory) {
                    if ( $subcategory->parent == $category->term_id ) {
                        $checked = $this->check_category($cat_json, $subcategory->term_id) ? 'checked' : '';
                        $output .= '<p class="sub-category">';
                        $output .= '<input type="checkbox" id="'. $this->get_field_id( $slug_id. 'category_' . $subcategory->term_id ) .'" name="'. $this->get_field_name( $slug_id. 'category_' . $subcategory->term_id ).'" 
                            value="'. $subcategory->term_id .'" '. $checked .' />'. $subcategory->name;
                            $checked = '';
                        $output .= '</p>';
                    }
                }
            }

            $output .= '</div>';

            if ( $r['echo'] ) {
                echo $output;
            } else {
                return $output;
            }
        }

        // check category selected
        function check_category($cat_json, $cat_id) {
            if (empty($cat_json)) return false;
            try {
                foreach ($cat_json as $item) {
                    if ($item->cat_id == $cat_id) return true;
                }
            } catch(Exception $e) {
                return false;
            }
            

            return false;
        }

        function get_block_categories($_instance, $block_name) {
            $result = '';
            $arr_key = array_keys($_instance);
            foreach($arr_key as $key) {
                if (strpos( $key, $block_name )) {
                    if ($result != '') $result .= ',';
                    $result .= '{"cat_id": ' . $_instance[$key] . ', "cat_name": "' . $this->get_cat_name($_instance[$key]) . '"}';
                }
            }
            return $result;
        }

        function get_cat_name( $cat_id ) {
            $cat_id = (int) $cat_id;
            if( $term = get_term_by( 'id', $cat_id, 'product_cat' ) ){
                return $term->name;
            }
            return '';
        }

        // register css
        function register_header_admin_css() {
            function load_custom_wp_admin_style() {
                wp_register_style( 'primetime_price_css', SALE_DATE_URL.'/widget/homepage-widget/assets/css/admin-primetime-price.css', false, '1.0.0' );
                wp_enqueue_style( 'primetime_price_css' );
            }
            add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_style' );
        }

        // register footer script
        function register_footer_admin_script() {
            function my_javascripts() {
                wp_register_script( 'primetime_price_script', SALE_DATE_URL. '/widget/homepage-widget/assets/js/admin-primetime-price.min.js', '', '', true );
                wp_enqueue_script( 'primetime_price_script' );
            }
            add_action( 'admin_enqueue_scripts', 'my_javascripts' );
        }

        // register client css
        function register_header_client_css() {
            function load_custom_wp_client_style() {
                wp_register_style( 'primetime_price_client_css', SALE_DATE_URL.'/widget/homepage-widget/assets/css/client-primetime-price.css', false, '1.0.0' );
                wp_enqueue_style( 'primetime_price_client_css' );
            }
            add_action( 'wp_enqueue_scripts', 'load_custom_wp_client_style' );
        }

        // register footer client script
        function register_footer_client_script() {
            function client_script() {
                wp_register_script( 'primetime_price_client_script', SALE_DATE_URL. '/widget/homepage-widget/assets/js/reactjs/react_primetime.js', '', '', true );
                wp_enqueue_script( 'primetime_price_client_script' );
            }
            add_action( 'wp_enqueue_scripts', 'client_script' );
        }
    }
}