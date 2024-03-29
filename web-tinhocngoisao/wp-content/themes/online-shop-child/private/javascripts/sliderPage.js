/*!
 * Custom JS
 * @package Acme Themes
 * @subpackage Online Shop
 */
jQuery(document).ready(function($) {
    var at_body = $('body'),
    at_window = $(window);

    $('.featured-slider').each(function() {
        var at_featured_img_slider = $(this);
        var autoplay = parseInt(at_featured_img_slider.data('autoplay'));
        var arrows = parseInt(at_featured_img_slider.data('arrows'));
        var autoplaySpeed = at_featured_img_slider.data('autoplayspeed') ? parseInt(at_featured_img_slider.data('autoplayspeed') ) : 3000;
        var prevArrow = at_featured_img_slider.closest('.slider-section').find('.at-action-wrapper > .prev');
        var nextArrow = at_featured_img_slider.closest('.slider-section').find('.at-action-wrapper > .next');

        at_featured_img_slider.css('visibility', 'visible').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: (autoplay===1),
            adaptiveHeight: true,
            cssEase: 'linear',
            arrows: (arrows===1),
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            autoplaySpeed: autoplaySpeed,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });

    $('.fs-right-slider').each(function() {
        var at_featured_img_slider = $(this);
        var autoplay = parseInt(at_featured_img_slider.data('autoplay'));
        var isSliderDisabled = at_featured_img_slider.data('disable-slider');
        var autoplaySpeed = at_featured_img_slider.data('autospeed') ? parseInt(at_featured_img_slider.data('autospeed')) : 3000;
        if (!isSliderDisabled) {
            at_featured_img_slider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: autoplay === 1,
                adaptiveHeight: true,
                cssEase: 'linear',
                arrows: false,
                autoplaySpeed: autoplaySpeed,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            autoplay: (autoplay===1)
                        }
                    }
                ]
            });
        }
    });

    $('.acme-slick-carausel').each(function() {
        var at_featured_img_slider = $(this);

        var slidesToShow = parseInt(at_featured_img_slider.data('column'));
        var slidesToScroll = parseInt(at_featured_img_slider.data('column'));
        var prevArrow =at_featured_img_slider.closest('.widget').find('.at-action-wrapper > .prev');
        var nextArrow =at_featured_img_slider.closest('.widget').find('.at-action-wrapper > .next');
        var autoSpeed = at_featured_img_slider.data('autospeed') > 0 ? parseInt(at_featured_img_slider.data('autospeed')) : 3000;
        /**
        * vậy nếu chúng ta check trước column và tổng số product để k cho nó bắt sự kiện slide thì sao
        */
        if ( slidesToShow > at_featured_img_slider.find('.single-list').length ) {
            return at_featured_img_slider.parent().addClass('slick-unavailable');
        }
        at_featured_img_slider.css('visibility', 'visible').slick({
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            autoplay: true,
            adaptiveHeight: true,
            cssEase: 'linear',
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            autoplaySpeed: autoSpeed,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1367,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }
            ]
        });
    });

    //Select 2 js init
    // if (typeof select2 !== 'undefined' && $.isFunction(select2)){
    //     $('.select_products, .woocommerce-ordering .orderby').select2({
    //         minimumResultsForSearch: -1
    //     });
    // }

    // $('.header-wrapper .acmethemes-nav').slicknav({
    //     allowParentLinks :true,
    //     duration: 500,
    //     prependTo: '.header-wrapper .responsive-slick-menu',
    //     easingOpen: "swing",
    //     'closedSymbol': '+',
    //     'openedSymbol': '-'
    // });
    $('.acmethemes-nav >ul > li,.special-menu-wrapper > li').each(function () {
        if ($(this).children('ul.sub-menu').length) {
            $(this).prepend("<i class='fa fa-angle-down angle-down'></i>")
        }
    });
    $('.header-main-menu ul.sub-menu li').each(function () {
        if ($(this).children('ul.sub-menu').length) {
            $(this).prepend("<i class='fa fa-angle-right angle-down'></i>")
        }
    });

    //for menu
    $('.header-wrapper #site-navigation .menu-main-menu-container').addClass('clearfix');
    $('.menu-item-has-children > a').click(function(){
        var at_this = $(this);
        if( at_this.hasClass('at-clicked')){
            return true;
        }
        var at_width = at_window.width();
        if( at_width > 992 && at_width <= 1230 ){
            at_this.addClass('at-clicked');
            return false;
        }
    });

    /*sticky menu*/
    var menu_sticky_height = $('#masthead').height() - $('#site-navigation').height();
    at_window.scroll(function(){
        if ( $(this).scrollTop() > menu_sticky_height) {
            $('.online-shop-enable-sticky-menu').css({"position": "fixed", "top": "0","right": "0","left": "0","z-index":'999'});
            $('.online-shop-enable-sticky-menu .header-main-menu').css('margin','0 auto');
        }
        else {
            $('.online-shop-enable-sticky-menu').removeAttr( 'style' );
            $('.online-shop-enable-sticky-menu .header-main-menu').removeAttr( 'style' );
        }
        if ( $(this).scrollTop() > menu_sticky_height) {
            $('.sm-up-container').show();
        }
        else {
            $('.sm-up-container').hide();
        }
    });

    //Sticky Sidebar
    if(at_body.hasClass('at-sticky-sidebar')){
        if(at_body.hasClass('both-sidebar')){
            $('#primary-wrap, #secondary-right, #secondary-left').theiaStickySidebar();
        }
        else{
            // $('.secondary-sidebar, #primary').theiaStickySidebar();
        }
    }

    // init slider in recently viewed product section
    function recently_viewed_product_slider() {
        var arrowHTML = '<span class="at-action-wrapper hide-mobile"><i class="prev fa fa-angle-left"></i><i class="next fa fa-angle-right"></i></span>';
        var $productListWidget = $( '.widget_recently_viewed_products').find('.product_list_widget');
        var $productListWidgetParent = $productListWidget.parent();

        if ( $productListWidgetParent.find( '.at-action-wrapper' ).length === 0 ) {
            $productListWidgetParent.append(arrowHTML);
        }
        if ( $productListWidget.length > 0 ) {
            var $atActionWrapper = $productListWidgetParent.find( '.at-action-wrapper' );
            var elementCounted = $productListWidget.find('li').length;
            var options = {
                slidesToShow: 5,
                slidesToScroll: 5,
                autoplay: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                arrows: true,
                prevArrow: $productListWidgetParent.find('.prev'),
                nextArrow: $productListWidgetParent.find('.next'),
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 1367,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }
                ]
            }

            var recentlyViewedProductSlider = '';
            if ( isValidateElementOnDevices( elementCounted, at_window.width() ) ) {
                $atActionWrapper.removeClass('hidden');
                recentlyViewedProductSlider = $productListWidget.slick( options );
            } else {
                $atActionWrapper.addClass('hidden');
            }

            $productListWidget.on('breakpoint', function(event, slick, breakpoint) {
                var validateMobile = (elementCounted > 2) && at_window.width() < 768;
                var validateTablet = (elementCounted > 3) && at_window.width() < 1024;
                var validateIpadPro = (elementCounted > 4) && at_window.width() < 1367;
                var validatePC = (elementCounted > 5) && at_window.width() > 1367;
                if( !validateMobile && !validateTablet && !validateIpadPro && !validatePC ) {
                    if ( !$atActionWrapper.hasClass('hidden') ) {
                        $atActionWrapper.addClass('hidden');
                    }
                    slick.unslick();
                } else {
                    $atActionWrapper.removeClass('hidden');
                }
            });

            $(window).on('resize', function() {
                if( isValidateElementOnDevices( elementCounted, at_window.width() ) && (recentlyViewedProductSlider === '' || !recentlyViewedProductSlider.hasClass('slick-initialized') ) ) {
                    $atActionWrapper.removeClass('hidden');
                    recentlyViewedProductSlider = $productListWidget.slick( options );
                }
            });
        }
        return false;
    }
    recently_viewed_product_slider();

    function isValidateElementOnDevices( elementCounted, width ) {
        //mobile 2, ipad 3, ipad pro 4, pc 5
        var validateMobile = (elementCounted > 2) && width < 768;
        var validateTablet = (elementCounted > 3) && width < 1024;
        var validateIpadPro = (elementCounted > 4) && width < 1367;
        var validatePC = (elementCounted > 5) && width > 1367;
        return validateMobile || validateTablet || validateIpadPro || validatePC;
    }

    /*feature special menu*/
    function feature_special_menu_height_fixed() {
        var width = at_window.width();
        if( width > 992 ){
            // var slider_height = $('.online-shop-feature-special-menu .slider-feature-wrap').height();
            // $('.online-shop-feature-special-menu .special-menu-wrapper > li > ul').height( slider_height + 20 );
        }
        else{
            $('.online-shop-feature-special-menu .special-menu-wrapper > li > ul').attr('style','');
        }
    }
    feature_special_menu_height_fixed();
    at_window.on('resize orientationchange', function() {
        feature_special_menu_height_fixed();
    });

    /*click hover effect on mobile*/
    $(document).on('click', '.special-menu, .angle-down', function (event) {
        var width = at_window.width();
        if( width > 992 ){
            return false;
        }
        event.preventDefault();
        var angle_down = $(this).parent().children('i.angle-down'),
            submenu = angle_down.siblings('ul.sub-menu');
        submenu.slideToggle('fast');
        angle_down.toggleClass('fa-angle-up');
        angle_down.toggleClass('fa-angle-down');
        return false;
    });

    /*cats tab*/
    function cats_tab() {
        // Runs when the image button is clicked.
        var complete = 1;
        at_body.on('click','.at-tabs > span', function(e){

            var $this = $(this),
                tab_wrap = $this.closest('.widget_online_shop_wc_cats_tabs'),
                cats_tab_id = $this.data('id'),
                tab_title = tab_wrap.find('.at-tabs > span'),
                single_tab_content_wrap = tab_wrap.find('.at-tabs-wrap');

            if( $this.hasClass('active') || complete === 0 ){
                return false;
            }
            if( complete === 1 ){
                complete = 0;
            }
            tab_title.removeClass('active');
            $this.addClass('active');
            single_tab_content_wrap.removeClass('active');

            single_tab_content_wrap.each(function () {
                if( $(this).data('id') === cats_tab_id ){
                    $(this).addClass('active');
                    var at_featured_img_slider = $(this).find('.acme-slick-carausel');
                    var prevArrow =at_featured_img_slider.closest('.widget').find('.at-action-wrapper > .prev');
                    var nextArrow =at_featured_img_slider.closest('.widget').find('.at-action-wrapper > .next');
                    prevArrow.off('click');
                    nextArrow.off('click');
                    at_featured_img_slider.slick('reinit')
                }
            });
            complete = 1;
            e.preventDefault();
        });
        $('.widget_online_shop_wc_cats_tabs').each(function () {
            $(this).find('.at-tabs-wrap:first').find('.acme-slick-carausel').slick('reinit')
        })
    }
    cats_tab();

    function toggle_cats() {
        var width = at_window.width();
        if( width > 767 ){
        $('.at-action-wrapper.at-tabs').show();
        }
        at_body.on('click','.toggle-cats', function(e){
            var width = at_window.width();
            if( width <= 767 ){
                var $this = $(this),
                    action_wrapper = $this.next('.at-action-wrapper.at-tabs');
                action_wrapper.slideToggle();
            }
            e.preventDefault();
        })
    }
    toggle_cats();

    function modal_toggle(){
        $(document).on('click', '.at-modal', function (event) {
            event.preventDefault();
            at_body.addClass('modal-open');
            $('#at-widget-modal').fadeIn();
        });
        $(document).on('click', '.modal-header .close', function (event) {
            event.preventDefault();
            $(this).closest('.modal').fadeOut();
            at_body.removeClass('modal-open');
        });
    }
    modal_toggle();
});