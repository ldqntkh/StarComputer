<?php
/**
 * List down the product category
 *
 * @since Online Shop 1.0.0
 *
 * @param int $post_id
 * @return string list of category
 *
 */
if ( !function_exists('online_shop_list_product_category') ) :
    function online_shop_list_product_category( $post_id = 0 ) {

        if( 0 == $post_id ){
            global $post;
            $post_id = $post->ID;
        }
        $terms = get_the_terms( $post_id, 'product_cat' );
        $separator = '&nbsp;';
        $output = '';
        if ( $terms && ! is_wp_error( $terms ) ) :
            echo '<span class="cat-links">';
            foreach($terms as $term) {
                $output .= '<a class="at-cat-item-'.esc_attr($term->term_id).'" href="'.esc_url( get_term_link( $term->term_id, 'product_cat' ) ).'"  rel="category tag">'.esc_html( $term->name ).'</a>'.$separator;
            }
            echo trim($output, $separator);
            echo '</span>';
        endif;
    }
endif;

/**
 * List down the post category
 *
 * @since Online Shop 1.0.0
 *
 * @param int $post_id
 * @return string list of category
 *
 */
if ( !function_exists('online_shop_list_post_category') ) :
    function online_shop_list_post_category( $post_id = 0 ) {

        if( 0 == $post_id ){
            global $post;
            $post_id = $post->ID;
        }
        $categories = get_the_category($post_id);
        $separator = '&nbsp;';
        $output = '';
        if($categories) {
            echo '<span class="cat-links">';
            foreach($categories as $category) {
                $output .= '<a class="at-cat-item-'.esc_attr($category->term_id).'" href="'.esc_url( get_category_link( $category->term_id ) ).'"  rel="category tag">'.esc_html( $category->cat_name ).'</a>'.$separator;
            }
            echo '</span>';
            echo trim($output, $separator);
        }
    }
endif;

/**
 * Callback functions for comments
 *
 * @since Online Shop 1.0.0
 *
 * @param $comment
 * @param $args
 * @param $depth
 * @return void
 *
 */
if ( !function_exists('online_shop_commment_list') ) :

    function online_shop_commment_list($comment, $args, $depth) {
        if ('div' == $args['style']) {
            $tag = 'div';
            $add_below = 'comment';
        }
        else {
            $tag = 'li';
            $add_below = 'div-comment';
        }
        ?>
        <<?php echo $tag ?>
        <?php comment_class(empty($args['has_children']) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
        <?php if ('div' != $args['style']) : ?>
            <div id="div-comment-<?php comment_ID() ?>" class="comment-body clearfix">
        <?php endif; ?>
        <div class="comment-author vcard">
            <?php
            if ($args['avatar_size'] != 0) echo get_avatar($comment, '64');
            printf('%s', '<cite class="fn">'.get_comment_author_link().'</cite>' );
            ?>
        </div>
        <?php if ($comment->comment_approved == '0') : ?>
            <em class="comment-awaiting-moderation"><?php esc_html_e('Your comment is awaiting moderation.', 'online-shop'); ?></em>
            <br/>
        <?php endif; ?>
        <div class="comment-meta commentmetadata">
            <a href="<?php echo esc_url( get_comment_link($comment->comment_ID) ); ?>">
                <i class="fa fa-clock-o"></i>
                <?php
                /* translators: 1: date, 2: time */
                printf(esc_html__('%1$s at %2$s', 'online-shop'), get_comment_date(), get_comment_time()); ?>
            </a>
            <?php edit_comment_link(esc_html__('(Edit)', 'online-shop'), '  ', ''); ?>
        </div>
        <?php comment_text(); ?>
        <div class="reply">
            <?php comment_reply_link( array_merge($args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
        </div>
        <?php if ('div' != $args['style']) : ?>
            </div>
        <?php endif;
    }
endif;

/**
 * Select sidebar according to the options saved
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return string
 *
 */
if ( !function_exists('online_shop_sidebar_selection') ) :
    function online_shop_sidebar_selection( ) {
        wp_reset_postdata();
        $online_shop_customizer_all_values = online_shop_get_theme_options();
        global $post;
        if(
            isset( $online_shop_customizer_all_values['online-shop-single-sidebar-layout'] ) &&
            (
                'left-sidebar' == $online_shop_customizer_all_values['online-shop-single-sidebar-layout'] ||
                'both-sidebar' == $online_shop_customizer_all_values['online-shop-single-sidebar-layout'] ||
                'no-sidebar' == $online_shop_customizer_all_values['online-shop-single-sidebar-layout']
            )
        ){
            $online_shop_body_global_class = $online_shop_customizer_all_values['online-shop-single-sidebar-layout'];
        }
        else{
            $online_shop_body_global_class= 'right-sidebar';
        }

        if ( online_shop_is_woocommerce_active() && ( is_product() || is_shop() || is_product_taxonomy() )) {
            if( is_product() ){
                $post_class = get_post_meta( $post->ID, 'online_shop_sidebar_layout', true );
                $online_shop_wc_single_product_sidebar_layout = $online_shop_customizer_all_values['online-shop-wc-single-product-sidebar-layout'];

                if ( 'default-sidebar' != $post_class ){
                    if ( $post_class ) {
                        $online_shop_body_classes = $post_class;
                    } else {
                        $online_shop_body_classes = $online_shop_wc_single_product_sidebar_layout;
                    }
                }
                else{
                    $online_shop_body_classes = $online_shop_wc_single_product_sidebar_layout;

                }
            }
            else{
                if( isset( $online_shop_customizer_all_values['online-shop-wc-shop-archive-sidebar-layout'] ) ){
                    $online_shop_archive_sidebar_layout = $online_shop_customizer_all_values['online-shop-wc-shop-archive-sidebar-layout'];
                    if(
                        'right-sidebar' == $online_shop_archive_sidebar_layout ||
                        'left-sidebar' == $online_shop_archive_sidebar_layout ||
                        'both-sidebar' == $online_shop_archive_sidebar_layout ||
                        'no-sidebar' == $online_shop_archive_sidebar_layout
                    ){
                        $online_shop_body_classes = $online_shop_archive_sidebar_layout;
                    }
                    else{
                        $online_shop_body_classes = $online_shop_body_global_class;
                    }
                }
                else{
                    $online_shop_body_classes= $online_shop_body_global_class;
                }
            }
        }
        elseif( is_front_page() ){
            if( isset( $online_shop_customizer_all_values['online-shop-front-page-sidebar-layout'] ) ){
                if(
                    'right-sidebar' == $online_shop_customizer_all_values['online-shop-front-page-sidebar-layout'] ||
                    'left-sidebar' == $online_shop_customizer_all_values['online-shop-front-page-sidebar-layout'] ||
                    'both-sidebar' == $online_shop_customizer_all_values['online-shop-front-page-sidebar-layout'] ||
                    'no-sidebar' == $online_shop_customizer_all_values['online-shop-front-page-sidebar-layout']
                ){
                    $online_shop_body_classes = $online_shop_customizer_all_values['online-shop-front-page-sidebar-layout'];
                }
                else{
                    $online_shop_body_classes = $online_shop_body_global_class;
                }
            }
            else{
                $online_shop_body_classes= $online_shop_body_global_class;
            }
        }

        elseif ( is_singular() && isset( $post->ID ) ) {
            $post_class = get_post_meta( $post->ID, 'online_shop_sidebar_layout', true );
            if ( 'default-sidebar' != $post_class ){
                if ( $post_class ) {
                    $online_shop_body_classes = $post_class;
                } else {
                    $online_shop_body_classes = $online_shop_body_global_class;
                }
            }
            else{
                $online_shop_body_classes = $online_shop_body_global_class;
            }

        }
        elseif ( is_archive() ) {
            if( isset( $online_shop_customizer_all_values['online-shop-archive-sidebar-layout'] ) ){
                $online_shop_archive_sidebar_layout = $online_shop_customizer_all_values['online-shop-archive-sidebar-layout'];
                if(
                    'right-sidebar' == $online_shop_archive_sidebar_layout ||
                    'left-sidebar' == $online_shop_archive_sidebar_layout ||
                    'both-sidebar' == $online_shop_archive_sidebar_layout ||
                    'no-sidebar' == $online_shop_archive_sidebar_layout
                ){
                    $online_shop_body_classes = $online_shop_archive_sidebar_layout;
                }
                else{
                    $online_shop_body_classes = $online_shop_body_global_class;
                }
            }
            else{
                $online_shop_body_classes= $online_shop_body_global_class;
            }
        }
        else {
            $online_shop_body_classes = $online_shop_body_global_class;
        }
        return $online_shop_body_classes;
    }
endif;

/**
 * Excerpt with length
 *
 * @since 1.0.0
 *
 * @param int     $length Excerpt length in words.
 * @param WP_Post $post_obj WP_Post instance (Optional).
 * @return string Excerpt.
 */
if ( ! function_exists( 'online_shop_excerpt_words_count' ) ) :
    
    function online_shop_excerpt_words_count( $length = 40, $post_obj = null ) {

        global $post;
        if ( is_null( $post_obj ) ) {
            $post_obj = $post;
        }
        $length = absint( $length );
        if ( $length < 1 ) {
            $length = 40;
        }
        $source_content = $post_obj->post_content;
        if ( ! empty( $post_obj->post_excerpt ) ) {
            $source_content = $post_obj->post_excerpt;
        }
        $source_content = preg_replace( '`\[[^\]]*\]`', '', $source_content );
        $trimmed_content = wp_trim_words( $source_content, $length, '...' );
        return $trimmed_content;
    }
endif;

/**
 * BreadCrumb Settings
 */
if( ! function_exists( 'online_shop_breadcrumbs' ) ):
    function online_shop_breadcrumbs() {
        $online_shop_customizer_all_values = online_shop_get_theme_options();
        $online_shop_breadcrumb_options = $online_shop_customizer_all_values['online-shop-breadcrumb-options'];
        if( 'disable' != $online_shop_breadcrumb_options ){
            $breadcrumb_args = array(
                'container'   => 'div',
                'delimiter'   => '&nbsp;&#47;&nbsp;',
                'show_browse' => false
            );

            echo "<div class='breadcrumbs clearfix'><div id='online-shop-breadcrumbs'>";
            if( 'wc-breadcrumb' == $online_shop_breadcrumb_options && online_shop_is_woocommerce_active() ){
                woocommerce_breadcrumb(  $breadcrumb_args );
            }
            else{
                if ( ! function_exists( 'breadcrumb_trail' ) ) {
                    require_once online_shop_file_directory('acmethemes/library/breadcrumbs/breadcrumbs.php');
                }
                breadcrumb_trail( $breadcrumb_args );
            }
            echo "</div></div><div class='clear'></div>";
        }
    }
endif;

/**
 *  Get all Font Awesome Icons
 * https://gist.github.com/codersantosh/b4f423fec60fe598b315594fac0a5812
 */
if (!function_exists('online_shop_icons_array')) {
    function online_shop_icons_array(){
        $fa_icon_list = ' fa-glass, fa-music, fa-search, fa-envelope-o, fa-heart, fa-star, fa-star-o, fa-user, fa-film, fa-th-large, fa-th, fa-th-list, fa-check, fa-times, fa-search-plus, fa-search-minus, fa-power-off, fa-signal, fa-cog, fa-trash-o, fa-home, fa-file-o, fa-clock-o, fa-road, fa-download, fa-arrow-circle-o-down, fa-arrow-circle-o-up, fa-inbox, fa-play-circle-o, fa-repeat, fa-refresh, fa-list-alt, fa-lock, fa-flag, fa-headphones, fa-volume-off, fa-volume-down, fa-volume-up, fa-qrcode, fa-barcode, fa-tag, fa-tags, fa-book, fa-bookmark, fa-print, fa-camera, fa-font, fa-bold, fa-italic, fa-text-height, fa-text-width, fa-align-left, fa-align-center, fa-align-right, fa-align-justify, fa-list, fa-outdent, fa-indent, fa-video-camera, fa-picture-o, fa-pencil, fa-map-marker, fa-adjust, fa-tint, fa-pencil-square-o, fa-share-square-o, fa-check-square-o, fa-arrows, fa-step-backward, fa-fast-backward, fa-backward, fa-play, fa-pause, fa-stop, fa-forward, fa-fast-forward, fa-step-forward, fa-eject, fa-chevron-left, fa-chevron-right, fa-plus-circle, fa-minus-circle, fa-times-circle, fa-check-circle, fa-question-circle, fa-info-circle, fa-crosshairs, fa-times-circle-o, fa-check-circle-o, fa-ban, fa-arrow-left, fa-arrow-right, fa-arrow-up, fa-arrow-down, fa-share, fa-expand, fa-compress, fa-plus, fa-minus, fa-asterisk, fa-exclamation-circle, fa-gift, fa-leaf, fa-fire, fa-eye, fa-eye-slash, fa-exclamation-triangle, fa-plane, fa-calendar, fa-random, fa-comment, fa-magnet, fa-chevron-up, fa-chevron-down, fa-retweet, fa-shopping-cart, fa-folder, fa-folder-open, fa-arrows-v, fa-arrows-h, fa-bar-chart, fa-twitter-square, fa-facebook-square, fa-camera-retro, fa-key, fa-cogs, fa-comments, fa-thumbs-o-up, fa-thumbs-o-down, fa-star-half, fa-heart-o, fa-sign-out, fa-linkedin-square, fa-thumb-tack, fa-external-link, fa-sign-in, fa-trophy, fa-github-square, fa-upload, fa-lemon-o, fa-phone, fa-square-o, fa-bookmark-o, fa-phone-square, fa-twitter, fa-facebook, fa-github, fa-unlock, fa-credit-card, fa-rss, fa-hdd-o, fa-bullhorn, fa-bell, fa-certificate, fa-hand-o-right, fa-hand-o-left, fa-hand-o-up, fa-hand-o-down, fa-arrow-circle-left, fa-arrow-circle-right, fa-arrow-circle-up, fa-arrow-circle-down, fa-globe, fa-wrench, fa-tasks, fa-filter, fa-briefcase, fa-arrows-alt, fa-users, fa-link, fa-cloud, fa-flask, fa-scissors, fa-files-o, fa-paperclip, fa-floppy-o, fa-square, fa-bars, fa-list-ul, fa-list-ol, fa-strikethrough, fa-underline, fa-table, fa-magic, fa-truck, fa-pinterest, fa-pinterest-square, fa-google-plus-square, fa-google-plus, fa-money, fa-caret-down, fa-caret-up, fa-caret-left, fa-caret-right, fa-columns, fa-sort, fa-sort-desc, fa-sort-asc, fa-envelope, fa-linkedin, fa-undo, fa-gavel, fa-tachometer, fa-comment-o, fa-comments-o, fa-bolt, fa-sitemap, fa-umbrella, fa-clipboard, fa-lightbulb-o, fa-exchange, fa-cloud-download, fa-cloud-upload, fa-user-md, fa-stethoscope, fa-suitcase, fa-bell-o, fa-coffee, fa-cutlery, fa-file-text-o, fa-building-o, fa-hospital-o, fa-ambulance, fa-medkit, fa-fighter-jet, fa-beer, fa-h-square, fa-plus-square, fa-angle-double-left, fa-angle-double-right, fa-angle-double-up, fa-angle-double-down, fa-angle-left, fa-angle-right, fa-angle-up, fa-angle-down, fa-desktop, fa-laptop, fa-tablet, fa-mobile, fa-circle-o, fa-quote-left, fa-quote-right, fa-spinner, fa-circle, fa-reply, fa-github-alt, fa-folder-o, fa-folder-open-o, fa-smile-o, fa-frown-o, fa-meh-o, fa-gamepad, fa-keyboard-o, fa-flag-o, fa-flag-checkered, fa-terminal, fa-code, fa-reply-all, fa-star-half-o, fa-location-arrow, fa-crop, fa-code-fork, fa-chain-broken, fa-question, fa-info, fa-exclamation, fa-superscript, fa-subscript, fa-eraser, fa-puzzle-piece, fa-microphone, fa-microphone-slash, fa-shield, fa-calendar-o, fa-fire-extinguisher, fa-rocket, fa-maxcdn, fa-chevron-circle-left, fa-chevron-circle-right, fa-chevron-circle-up, fa-chevron-circle-down, fa-html5, fa-css3, fa-anchor, fa-unlock-alt, fa-bullseye, fa-ellipsis-h, fa-ellipsis-v, fa-rss-square, fa-play-circle, fa-ticket, fa-minus-square, fa-minus-square-o, fa-level-up, fa-level-down, fa-check-square, fa-pencil-square, fa-external-link-square, fa-share-square, fa-compass, fa-caret-square-o-down, fa-caret-square-o-up, fa-caret-square-o-right, fa-eur, fa-gbp, fa-usd, fa-inr, fa-jpy, fa-rub, fa-krw, fa-btc, fa-file, fa-file-text, fa-sort-alpha-asc, fa-sort-alpha-desc, fa-sort-amount-asc, fa-sort-amount-desc, fa-sort-numeric-asc, fa-sort-numeric-desc, fa-thumbs-up, fa-thumbs-down, fa-youtube-square, fa-youtube, fa-xing, fa-xing-square, fa-youtube-play, fa-dropbox, fa-stack-overflow, fa-instagram, fa-flickr, fa-adn, fa-bitbucket, fa-bitbucket-square, fa-tumblr, fa-tumblr-square, fa-long-arrow-down, fa-long-arrow-up, fa-long-arrow-left, fa-long-arrow-right, fa-apple, fa-windows, fa-android, fa-linux, fa-dribbble, fa-skype, fa-foursquare, fa-trello, fa-female, fa-male, fa-gratipay, fa-sun-o, fa-moon-o, fa-archive, fa-bug, fa-vk, fa-weibo, fa-renren, fa-pagelines, fa-stack-exchange, fa-arrow-circle-o-right, fa-arrow-circle-o-left, fa-caret-square-o-left, fa-dot-circle-o, fa-wheelchair, fa-vimeo-square, fa-try, fa-plus-square-o, fa-space-shuttle, fa-slack, fa-envelope-square, fa-wordpress, fa-openid, fa-university, fa-graduation-cap, fa-yahoo, fa-google, fa-reddit, fa-reddit-square, fa-stumbleupon-circle, fa-stumbleupon, fa-delicious, fa-digg, fa-pied-piper-pp, fa-pied-piper-alt, fa-drupal, fa-joomla, fa-language, fa-fax, fa-building, fa-child, fa-paw, fa-spoon, fa-cube, fa-cubes, fa-behance, fa-behance-square, fa-steam, fa-steam-square, fa-recycle, fa-car, fa-taxi, fa-tree, fa-spotify, fa-deviantart, fa-soundcloud, fa-database, fa-file-pdf-o, fa-file-word-o, fa-file-excel-o, fa-file-powerpoint-o, fa-file-image-o, fa-file-archive-o, fa-file-audio-o, fa-file-video-o, fa-file-code-o, fa-vine, fa-codepen, fa-jsfiddle, fa-life-ring, fa-circle-o-notch, fa-rebel, fa-empire, fa-git-square, fa-git, fa-hacker-news, fa-tencent-weibo, fa-qq, fa-weixin, fa-paper-plane, fa-paper-plane-o, fa-history, fa-circle-thin, fa-header, fa-paragraph, fa-sliders, fa-share-alt, fa-share-alt-square, fa-bomb, fa-futbol-o, fa-tty, fa-binoculars, fa-plug, fa-slideshare, fa-twitch, fa-yelp, fa-newspaper-o, fa-wifi, fa-calculator, fa-paypal, fa-google-wallet, fa-cc-visa, fa-cc-mastercard, fa-cc-discover, fa-cc-amex, fa-cc-paypal, fa-cc-stripe, fa-bell-slash, fa-bell-slash-o, fa-trash, fa-copyright, fa-at, fa-eyedropper, fa-paint-brush, fa-birthday-cake, fa-area-chart, fa-pie-chart, fa-line-chart, fa-lastfm, fa-lastfm-square, fa-toggle-off, fa-toggle-on, fa-bicycle, fa-bus, fa-ioxhost, fa-angellist, fa-cc, fa-ils, fa-meanpath, fa-buysellads, fa-connectdevelop, fa-dashcube, fa-forumbee, fa-leanpub, fa-sellsy, fa-shirtsinbulk, fa-simplybuilt, fa-skyatlas, fa-cart-plus, fa-cart-arrow-down, fa-diamond, fa-ship, fa-user-secret, fa-motorcycle, fa-street-view, fa-heartbeat, fa-venus, fa-mars, fa-mercury, fa-transgender, fa-transgender-alt, fa-venus-double, fa-mars-double, fa-venus-mars, fa-mars-stroke, fa-mars-stroke-v, fa-mars-stroke-h, fa-neuter, fa-genderless, fa-facebook-official, fa-pinterest-p, fa-whatsapp, fa-server, fa-user-plus, fa-user-times, fa-bed, fa-viacoin, fa-train, fa-subway, fa-medium, fa-y-combinator, fa-optin-monster, fa-opencart, fa-expeditedssl, fa-battery-full, fa-battery-three-quarters, fa-battery-half, fa-battery-quarter, fa-battery-empty, fa-mouse-pointer, fa-i-cursor, fa-object-group, fa-object-ungroup, fa-sticky-note, fa-sticky-note-o, fa-cc-jcb, fa-cc-diners-club, fa-clone, fa-balance-scale, fa-hourglass-o, fa-hourglass-start, fa-hourglass-half, fa-hourglass-end, fa-hourglass, fa-hand-rock-o, fa-hand-paper-o, fa-hand-scissors-o, fa-hand-lizard-o, fa-hand-spock-o, fa-hand-pointer-o, fa-hand-peace-o, fa-trademark, fa-registered, fa-creative-commons, fa-gg, fa-gg-circle, fa-tripadvisor, fa-odnoklassniki, fa-odnoklassniki-square, fa-get-pocket, fa-wikipedia-w, fa-safari, fa-chrome, fa-firefox, fa-opera, fa-internet-explorer, fa-television, fa-contao, fa-500px, fa-amazon, fa-calendar-plus-o, fa-calendar-minus-o, fa-calendar-times-o, fa-calendar-check-o, fa-industry, fa-map-pin, fa-map-signs, fa-map-o, fa-map, fa-commenting, fa-commenting-o, fa-houzz, fa-vimeo, fa-black-tie, fa-fonticons, fa-reddit-alien, fa-edge, fa-credit-card-alt, fa-codiepie, fa-modx, fa-fort-awesome, fa-usb, fa-product-hunt, fa-mixcloud, fa-scribd, fa-pause-circle, fa-pause-circle-o, fa-stop-circle, fa-stop-circle-o, fa-shopping-bag, fa-shopping-basket, fa-hashtag, fa-bluetooth, fa-bluetooth-b, fa-percent, fa-gitlab, fa-wpbeginner, fa-wpforms, fa-envira, fa-universal-access, fa-wheelchair-alt, fa-question-circle-o, fa-blind, fa-audio-description, fa-volume-control-phone, fa-braille, fa-assistive-listening-systems, fa-american-sign-language-interpreting, fa-deaf, fa-glide, fa-glide-g, fa-sign-language, fa-low-vision, fa-viadeo, fa-viadeo-square, fa-snapchat, fa-snapchat-ghost, fa-snapchat-square, fa-pied-piper, fa-first-order, fa-yoast, fa-themeisle, fa-google-plus-official, fa-font-awesome, fa-handshake-o, fa-envelope-open, fa-envelope-open-o, fa-linode, fa-address-book, fa-address-book-o, fa-address-card, fa-address-card-o, fa-user-circle, fa-user-circle-o, fa-user-o, fa-id-badge, fa-id-card, fa-id-card-o, fa-quora, fa-free-code-camp, fa-telegram, fa-thermometer-full, fa-thermometer-three-quarters, fa-thermometer-half, fa-thermometer-quarter, fa-thermometer-empty, fa-shower, fa-bath, fa-podcast, fa-window-maximize, fa-window-minimize, fa-window-restore, fa-window-close, fa-window-close-o, fa-bandcamp, fa-grav, fa-etsy, fa-imdb, fa-ravelry, fa-eercast, fa-microchip, fa-snowflake-o, fa-superpowers, fa-wpexplorer, fa-meetup' ;
        $fa_icon_list_array = explode( ", " , $fa_icon_list);
        return $fa_icon_list_array;
    }
}

/**
 * Column Selection
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_widget_column_number
 *
 */
if ( !function_exists('online_shop_widget_column_number') ) :
    function online_shop_widget_column_number() {
        $online_shop_widget_column_number =  array(
            1 => esc_html__( '1', 'online-shop' ),
            2 => esc_html__( '2', 'online-shop' ),
            3 => esc_html__( '3', 'online-shop' ),
            4 => esc_html__( '4', 'online-shop' ),
            5 => esc_html__( '5', 'online-shop' )
        );
        return apply_filters( 'online_shop_widget_column_number', $online_shop_widget_column_number );
    }
endif;

/**
 * Display Type
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_widget_display_type
 *
 */
if ( !function_exists('online_shop_widget_display_type') ) :
    function online_shop_widget_display_type() {
        $online_shop_widget_display_type =  array(
            'column' => esc_html__( 'Normal Column', 'online-shop' ),
            'carousel' => esc_html__( 'Carousel Column', 'online-shop' )
        );
        return apply_filters( 'online_shop_widget_display_type', $online_shop_widget_display_type );
    }
endif;

/**
 * Post advanced options
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_post_advanced_options
 *
 */
if ( !function_exists('online_shop_post_advanced_options') ) :
    function online_shop_post_advanced_options() {
        $online_shop_post_advanced_options =  array(
            'recent' => esc_html__( 'All posts', 'online-shop' ),
            'cat' => esc_html__( 'Categories', 'online-shop' ),
            'tag' => esc_html__( 'Tags', 'online-shop' )
        );
        return apply_filters( 'online_shop_post_advanced_options', $online_shop_post_advanced_options );
    }
endif;

/**
 * Default Post Order By
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_post_orderby
 *
 */
if ( !function_exists('online_shop_post_orderby') ) :
    function online_shop_post_orderby() {
        $online_shop_post_orderby =  array(
            'none' => esc_html__( 'None', 'online-shop' ),
            'ID' => esc_html__( 'ID', 'online-shop' ),
            'author' => esc_html__( 'Author', 'online-shop' ),
            'title' => esc_html__( 'Title', 'online-shop' ),
            'date' => esc_html__( 'Date', 'online-shop' ),
            'modified' => esc_html__( 'Modified Date', 'online-shop' ),
            'rand' => esc_html__( 'Random', 'online-shop' ),
            'comment_count' => esc_html__( 'Comment Count', 'online-shop' ),
            'menu_order' => esc_html__( 'Menu Order', 'online-shop' )
        );
        return apply_filters( 'online_shop_post_orderby', $online_shop_post_orderby );
    }
endif;

/**
 * Order ASC DESC
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_post_order
 *
 */
if ( !function_exists('online_shop_post_order') ) :
    function online_shop_post_order() {
        $online_shop_post_order =  array(
            'ASC' => esc_html__( 'ASC', 'online-shop' ),
            'DESC' => esc_html__( 'DESC', 'online-shop' )
        );
        return apply_filters( 'online_shop_post_order', $online_shop_post_order );
    }
endif;

/**
 * WooCommerce Advanced Options
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_wc_advanced_options
 *
 */
if ( !function_exists('online_shop_wc_advanced_options') ) :
    function online_shop_wc_advanced_options() {
        $online_shop_wc_advanced_options =  array(
            'recent' => esc_html__( 'All products', 'online-shop' ),
            'cat' => esc_html__( 'Categories', 'online-shop' ),
            'tag' => esc_html__( 'Tags', 'online-shop' ),
            'featured' => esc_html__( 'Featured products', 'online-shop' ),
            'onsale' => esc_html__( 'On-sale products', 'online-shop' ),
        );
        return apply_filters( 'online_shop_wc_advanced_options', $online_shop_wc_advanced_options );
    }
endif;

/**
 * Order by
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_wc_product_orderby
 *
 */
if ( !function_exists('online_shop_wc_product_orderby') ) :
    function online_shop_wc_product_orderby() {
        $online_shop_wc_product_orderby =  array(
            'none' => esc_html__( 'None', 'online-shop' ),
            'ID' => esc_html__( 'ID', 'online-shop' ),
            'author' => esc_html__( 'Author', 'online-shop' ),
            'title' => esc_html__( 'Title', 'online-shop' ),
            'date' => esc_html__( 'Date', 'online-shop' ),
            'modified' => esc_html__( 'Modified Date', 'online-shop' ),
            'rand' => esc_html__( 'Random', 'online-shop' ),
            'comment_count' => esc_html__( 'Comment Count', 'online-shop' ),
            'menu_order' => esc_html__( 'Menu Order', 'online-shop' ),
            'sales' => esc_html__( 'Sales', 'online-shop' ),
            'price' => esc_html__( 'Price', 'online-shop' ),
        );
        return apply_filters( 'online_shop_wc_product_orderby', $online_shop_wc_product_orderby );
    }
endif;

/**
 * Show selected category image and details
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_wc_cat_display_options
 *
 */
if ( !function_exists('online_shop_wc_cat_display_options') ) :
    function online_shop_wc_cat_display_options() {
        $online_shop_wc_cat_display_options =  array(
            'disable' => esc_html__( 'Disable', 'online-shop' ),
            'left' => esc_html__( 'Left', 'online-shop' ),
            'right' => esc_html__( 'Right', 'online-shop' )
        );
        return apply_filters( 'online_shop_wc_cat_display_options', $online_shop_wc_cat_display_options );
    }
endif;

/**
 * View all options
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_adv_link_options
 *
 */
if ( !function_exists('online_shop_adv_link_options') ) :
    function online_shop_adv_link_options() {
        $online_shop_adv_link_options =  array(
            'disable' => esc_html__( 'Disable', 'online-shop' ),
            'normal-link' => esc_html__( 'Normal Link', 'online-shop' ),
            'new-tab-link' => esc_html__( 'Open in New Tab', 'online-shop' )
        );
        return apply_filters( 'online_shop_adv_link_options', $online_shop_adv_link_options );
    }
endif;

/**
 * WC Cat Layout Type
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_wc_cat_layout_type
 *
 */
if ( !function_exists('online_shop_wc_cat_layout_type') ) :
    function online_shop_wc_cat_layout_type() {
        $online_shop_wc_cat_layout_type =  array(
            '1' => esc_html__( 'First Layout', 'online-shop' ),
            '2' => esc_html__( 'Second Layout', 'online-shop' )
        );
        return apply_filters( 'online_shop_wc_cat_layout_type', $online_shop_wc_cat_layout_type );
    }
endif;

/**
 * Term per slide/section
 *
 * @since Online Shop 1.0.0
 *
 * @param null
 * @return array $online_shop_widget_term_per_slide
 *
 */
if ( !function_exists('online_shop_widget_term_per_slide') ) :
    function online_shop_widget_term_per_slide() {
        $online_shop_widget_term_per_slide =  array(
            1 => esc_html__( '1', 'online-shop' ),
            2 => esc_html__( '2', 'online-shop' ),
            3 => esc_html__( '3', 'online-shop' ),
            4 => esc_html__( '4', 'online-shop' ),
            5 => esc_html__( '5', 'online-shop' )
        );
        return apply_filters( 'online_shop_widget_term_per_slide', $online_shop_widget_term_per_slide );
    }
endif;

if ( !function_exists('woocommerce_template_single_promotion') ) :
    function woocommerce_template_single_promotion() {
        //wc_get_template( 'single-product/promotion.php' );
        if (get_field('product_promotion')) {
            echo get_field('product_promotion');
        } else {
            echo '';
        }
    }
endif;

if ( !function_exists('woocommerce_template_trading_information') ) :
    function woocommerce_template_trading_information() {
        if ( get_field('trading_information') ) {
            echo get_field('trading_information');
        } else {
            echo '';
        }
    }
endif;

if ( !function_exists('woocommerce_template_contact_information') ) :
    function woocommerce_template_contact_information() {
        wc_get_template( 'single-product/contact-information.php' );
    }
endif;

if ( !function_exists('woocommerce_template_gift_information') ) :
    function woocommerce_template_gift_information() {
        if ( get_field('gift_information') ) {
            echo get_field('gift_information');
        } else {
            echo '';
        }
    }
endif;

if ( !function_exists('woocommerce_template_social_share') ) :
    function woocommerce_template_social_share() {
        global $product;
        if ( empty( $product ) ) return;
        echo '<div class="socials-share">';
        // zalo
        if ( !empty( get_option( 'custom_preferences_zalo_options' )['zalo_enable'] ) && get_option( 'custom_preferences_zalo_options' )['zalo_enable'] === "true" ) :
            $zaloAppID = isset(get_option( 'custom_preferences_zalo_options' )['zalo_appId']) ? get_option( 'custom_preferences_zalo_options' )['zalo_appId'] : "";
            $zaloLayout = isset(get_option( 'custom_preferences_zalo_options' )['zalo_script_layout']) ? get_option( 'custom_preferences_zalo_options' )['zalo_script_layout'] : "1";
            $zaloButtonColor = isset(get_option( 'custom_preferences_zalo_options' )['zalo_button_color']) ? get_option( 'custom_preferences_zalo_options' )['zalo_button_color'] : "blue";
            $shareURL = get_permalink( $product->get_id() );
            $zaloScriptCallback = isset(get_option( 'custom_preferences_zalo_options' )['zalo_script_callback']) ? get_option( 'custom_preferences_zalo_options' )['zalo_script_callback'] : "";
            $zaloScriptCallbackFunc = isset(get_option( 'custom_preferences_zalo_options' )['zalo_script_callback_func']) ? get_option( 'custom_preferences_zalo_options' )['zalo_script_callback_func'] : "";
            if (!empty($zaloAppID)) {
                if (!empty($zaloScriptCallback) && !empty($zaloScriptCallbackFunc)) {
                    echo '<div class="zalo-share-button" data-href="'.$shareURL.'" data-oaid="'.$zaloAppID.'" data-layout="'.$zaloLayout
                            .'" data-color="'.$zaloButtonColor.'" data-callback="'.
                            $zaloScriptCallback.'" data-customize=false></div>';
                    echo '<script type="text/javascript">';
                    echo $zaloScriptCallbackFunc;
                    echo '</script>';
                }
                else {
                    echo '<div class="zalo-share-button" data-href="'.$shareURL.'" data-oaid="'.$zaloAppID.'" data-layout="'.$zaloLayout.'" data-color="'.$zaloButtonColor.'" data-customize=false></div>';
                }
            }
        endif;

        // facebbok
        $facebookOptions = !empty( get_option( 'custom_preferences_facebook_options' ) ) ? get_option( 'custom_preferences_facebook_options' ) : '';
        if ( !empty( $facebookOptions ) && !empty( $facebookOptions['facebook_enable'] ) && $facebookOptions['facebook_enable'] === 'true' ) {
            $fbEnable = !empty( $facebookOptions ) && !empty( $facebookOptions['facebook_enable'] );
            $fbLayout = $facebookOptions[ 'facebook_layout' ];
            $fbButtonSize = $facebookOptions[ 'facebook_button_size' ];
            echo '<div class="fb-share-button" data-href="' . $shareURL . '" data-layout="' . $fbLayout . '" data-size="' . $fbButtonSize . '"><a target="_blank" class="fb-xfbml-parse-ignore">' . __( 'Share', 'online-shop' ) . '</a></div>';
        }
        echo '</div>';
    }
endif;

if ( !function_exists('woocommerce_template_installment_information') ) :
    function woocommerce_template_installment_information() {
        if ( get_field('installment_information') ) {
            echo get_field('installment_information');
        } else {
            echo '';
        }
    }
endif;

if ( !function_exists('woocommerce_template_sale_information') ) :
    function woocommerce_template_sale_information() {
        if ( get_field('sale_information') ) {
            echo get_field('sale_information');
        } else {
            echo '';
        }
    }
endif;

/**
 * Product Summary Box.
 */
add_action( 'woocommerce_single_product_summary_center', 'woocommerce_template_single_title', 5 );
add_action( 'woocommerce_single_product_summary_center', 'woocommerce_template_single_rating', 10 );
add_action( 'woocommerce_single_product_summary_center_footer', 'woocommerce_template_sale_information', 5 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_template_single_price', 5 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_template_single_promotion', 7 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_template_single_excerpt', 9 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_template_gift_information', 11 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_template_social_share', 12 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_template_single_add_to_cart', 13 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_template_installment_information', 17 );
add_action( 'woocommerce_single_product_summary_right', 'woocommerce_template_trading_information', 5 );
add_action( 'woocommerce_single_product_summary_right', 'woocommerce_template_contact_information', 7 );

/**
 * Blog content
 */
add_action( 'woocommerce_blog_header_additional', 'woocommerce_template_social_share', 5 );

/**
 * Product header
 */
add_action( 'wp_head', 'render_header_meta_single_product', 100);
if (!function_exists('render_header_meta_single_product')) {
    function render_header_meta_single_product() {
        global $post;
        if ( !$post ) {
            
            $product = wc_get_product( $post->ID );
            if ($product) {
                echo '<meta property="og:image" content="'.wp_get_attachment_image_src( $product->get_image_id(), 'medium', true )[0].'">';
                echo '<meta property="og:type" content="'.$product->get_type().'">';
                echo '<meta property="og:image:alt" content="'.$product->get_name().'">';
                echo '<meta property="og:title" content="'.$product->get_name().'">';
                echo '<meta property="og:url" content="'.get_permalink( $product->get_id()).'">';
                echo '<meta property="og:description" content="'.$product->get_name().'">';
            }
        }
    }
}


add_action( 'rest_api_init', function () {
    register_rest_route( 'rest_api/v1', '/product/(?P<productId>\d+)', array(
        'methods' => 'GET',
        'callback' => 'get_product_api',
    ) );
} );

function get_product_api($data) {
    $product = wc_get_product(intval($data['productId']));
    if ( empty( $product ) ) {
        return new WP_Error( 'no_product', 'No product was found', array( 'status' => 404 ) );
    }

    if ( $product->get_type() === 'variable' ) {
        $regularPrice = $product->get_variation_regular_price();
        $salePrice = $product->get_variation_sale_price();
    } else {
        $regularPrice = $product->get_regular_price();
        $salePrice = $product->get_sale_price();
    }

    $productDatas = [
        'name' => $product->get_name(),
        'imageLink' => wp_get_attachment_url($product->get_image_id()),
        'regularPrice' => $regularPrice,
        'salePrice' => $salePrice,
        'link' => $product->get_permalink()
    ];
    return new WP_Error( 'success', '', $productDatas );
}

// add custom class in woocommerce body class filter
add_filter( 'body_class', 'custom_wc_body_class' );

function custom_wc_body_class( $classes ) {
    $classes = (array) $classes;

    for ( $i = 0; $i < count( $classes ); $i++ ) {
        if ( $classes[$i] === 'woocommerce-plp' ) {
            unset( $classes[$i] );
            break;
        }
    }

    if ( is_woocommerce() ) {
        if ( is_product() ) {
            $classes[] = 'woocommerce-pdp';
    
        } else {
            $classes[] = 'woocommerce-plp';
        }
    }

    return array_unique( $classes );
}

add_action( 'woocommerce_after_single_product_summary', 'woocommerce_rencently_viewed_products', 30 );

function woocommerce_rencently_viewed_products() {
    if( is_active_sidebar( 'single-after-content' ) ) {
        dynamic_sidebar( 'single-after-content' );
    }
}

add_action( 'woocommerce_before_shop_loop_item', 'woocommerce_delivery_now', 15 );

if ( !function_exists('woocommerce_delivery_now') ) :
    function woocommerce_delivery_now() {
        if( get_field('is_delivery_now') ) {
            echo '<img class="delivery-now-icon" src="' . get_stylesheet_directory_uri() . '/assets/img/ic_delivery_truck.png" width="20" height="20" />';
        }
    }
endif;

add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_calcule_coupon_product', 8 );
add_action( 'woocommerce_single_product_summary_left', 'woocommerce_calcule_coupon_product', 6 );
// coupon discount type: fixed_product,percent
if ( !function_exists('woocommerce_calcule_coupon_product') ) :
    function woocommerce_calcule_coupon_product() {
        global $product;
        if (get_field('product_coupon')) {
            $coupon_code = get_field('product_coupon');
            $coupon = new WC_Coupon($coupon_code);
            if ($coupon !== NULL && $coupon->is_valid_for_product($product)) {
                $product_price_discount = 0;
                if ($coupon->get_discount_type() === "fixed_product") {
                    $product_price_discount = $coupon->get_amount();
                } elseif ($coupon->get_discount_type() === "percent") {
                    $percent = $coupon->get_amount();
                    $product_price = $product->get_price();
                    $product_price_discount = $product_price * ($percent / 100);
                }
                if ($product_price_discount > 0) {
                    echo '<div class="coupon-discount">';
                    echo '<span>NHẬP: <strong>'.$coupon_code.'</strong></span>';
                    echo '<span class="discount-price"><i class="fa fa-arrow-down" aria-hidden="true"></i><strong>'.wc_price( $product_price_discount ).'</strong></span>';
                    echo '</div>';
                }
            }
        }
    }
endif;

function is_mobile_device() {
    return preg_match( '/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|iPad|up\.browser|up\.link|webos|wos)/i', $_SERVER['HTTP_USER_AGENT'] );
}

function fix_request_query_args_for_woocommerce( $query_args ) {
	if ( isset( $query_args['post_status'] ) && empty( $query_args['post_status'] ) ) {
		unset( $query_args['post_status'] );
	}
	return $query_args;
}
add_filter( 'request', 'fix_request_query_args_for_woocommerce', 1, 1 );

add_filter( 'woocommerce_get_price_html', 'wpa83367_price_html', 100, 2 );
function wpa83367_price_html( $price, $product ){
    if (strpos($price, 'del')) {
        $price = str_replace( '<del>', '<del><span class="price-label">Giá: </span>', $price );
        return str_replace( '<ins>', '<ins><span class="price-label">Khuyến mãi: </span>', $price );
    } else  {
        return '<span class="price-label">Giá: </span>' . str_replace( '<ins>', '<ins><span class="price-label">Khuyến mãi: </span>', $price );
    }
    
}
// render my account menu navigation
if ( !function_exists('overwrite_woocommerce_account_menu_items') ) :
function overwrite_woocommerce_account_menu_items( $items, $endpoints ) {
    if ( isset( $items ) ) {
        unset( $items );
        $items = array(
                    'dashboard'       => __( 'Dashboard', 'woocommerce' ),
                    'edit-account'    => __( 'Account details', 'woocommerce' ),
                    'wishlist'         => __( 'Wishlist', 'woocommerce' ),
                    'edit-address'    => __( 'Addresses', 'woocommerce' ),
                    'orders'          => __( 'Orders', 'woocommerce' ),
                    'customer-logout' => __( 'Logout', 'woocommerce' )
                );
    } else {
        $items = array();
    }
    return $items;
}
endif;
add_filter( 'woocommerce_account_menu_items', 'overwrite_woocommerce_account_menu_items', 10, 2 );

//********REGISTER API GET PRODUCT******** */
include plugin_dir_path( __FILE__ ) . '/api/functions.php';

if ( get_option( 'custom_preferences_facebook_options' ) && get_option( 'custom_preferences_facebook_options' )['facebook_enable'] ) :
    if ( ! function_exists( 'add_facebook_script_after_body' ) ) :

        function add_facebook_script_after_body() {
            $fbBodyScript = isset( get_option( 'custom_preferences_facebook_options' )['facebook_body_script'] ) ? get_option( 'custom_preferences_facebook_options' )['facebook_body_script'] : '';
            ?>
            <div id="fb-root"></div>
            <?php if ( !empty( $fbBodyScript ) ) : ?>
                <script async defer crossorigin="anonymous" src="<?php echo trim( $fbBodyScript ); ?>"></script>
            <?php endif; ?>
        <?php
        }
    endif;
    add_action( 'online_shop_action_before', 'add_facebook_script_after_body', 15 );
endif;

if ( !function_exists('clear_session_after_add_to_cart') ) :
    function clear_session_after_add_to_cart() {
    ?>
    <script>
        if ( window.history.replaceState ) {
            window.history.replaceState( null, null, window.location.href );
        }
    </script>
<?php
    }
endif;
add_action( 'woocommerce_after_add_to_cart_button', 'clear_session_after_add_to_cart', 15 );
//********SEARCH ORDER******** */
include plugin_dir_path( __FILE__ ) . '/filter/search-order.php';

//********PRINT ORDER******** */
include plugin_dir_path( __FILE__ ) . '/print_order/print_order.php';

// cache file

if ( !function_exists('get_cache_by_key') ) {
    
    function get_cache_by_key( $key , $filename = 'json-cache.txt') {
        // return null;
        $cache_file_path = plugin_dir_path( __FILE__ ) . '/custom-cache/' .$filename;
        if ( file_exists ( $cache_file_path )  ) {
            $json = json_decode(file_get_contents($cache_file_path),TRUE);
            if (isset($json)) {
                if (isset($json[$key])) {
                    return $json[$key];
                } else return null;
            }
        }
        
        return null;
    }
}

if ( !function_exists('set_cache_by_key') ) {
    function set_cache_by_key ($key, $content, $filename = 'json-cache.txt') {
        // $cache_file_path = plugin_dir_path( __FILE__ ) . '/custom-cache/' .$filename;
        // $json[$key] = $content;
        // file_put_contents($cache_file_path, json_encode($json));
    }
}

// define the the_title callback 
function filter_the_title( $title, $id ) { 
    if (strlen($title) > 35) {
        $title = mb_substr($title, 0, 33, 'UTF-8') . '...';
    }
    return $title; 
}; 
         
// add the filter 
add_filter( 'the_title', 'filter_the_title', 10, 2 ); 

// custom code here
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );

add_action( 'woocommerce_shop_loop_item_title', 'thns_template_loop_product_title', 10 );
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_period', 5 );
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 6 );
add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 7 );


if ( ! function_exists( 'thns_template_loop_product_title' ) ) {

	/**
	 * Show the product title in the product loop. By default this is an H2.
	 */
	function thns_template_loop_product_title() {
        global $product;
		echo '<div class="product-item-details ' .  'product-type-' . $product->get_type() . '"><h2 class="' . esc_attr( apply_filters( 'woocommerce_product_loop_title_classes', 'woocommerce-loop-product__title' ) ) . '">' . get_the_title() . '</h2>'; 
	}
}

if ( ! function_exists( 'woocommerce_template_loop_period' ) ) {

	/**
	 * Show the product title in the product loop. By default this is an H2.
	 */
	function woocommerce_template_loop_period() {
		$period = get_post_meta( get_the_id(), 'warranty_period', true );
		if (!empty($period)) {
			echo '<span class="warranty_period">Bảo hành: <strong>'. $period .'</strong> tháng</span>';
		}
	}
}

if ( !function_exists('get_sale_percent') ) {
    function get_sale_percent($product, $context = 'view') {
        if ( '' !== (string) $product->get_sale_price( $context ) && $product->get_regular_price( $context ) > $product->get_sale_price( $context ) ) {
			return round(100 - (($product->get_sale_price( $context ) / $product->get_regular_price( $context ) ) * 100), 1);
		}
		return 0;
    }
}

function maintenance_mode() {
 
    //if ( !current_user_can( 'edit_themes' ) || !is_user_logged_in() ) {wp_die('Maintenance.');}

}
add_action('get_header', 'maintenance_mode');

// de-attach style file unused
add_action( 'wp_enqueue_scripts', 'remove_fontawesome_stylesheet', 20 );
function remove_fontawesome_stylesheet() {
    wp_deregister_style('yith-wcwl-font-awesome');
}