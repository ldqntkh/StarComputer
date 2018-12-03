'use strict';
var cartpage = require('./cart');

var productdetailpage = {

    showMoreContent: function() {
        // Configure/customize these variables.
        $('.show-more-content-btn').off('click').on('click', function() {
            var $showMoreContentBtn = $(this);
            var $productDescriptionContent = $showMoreContentBtn.parents('.show-more-button-wrapper').siblings('.post-product-description-content');
            var allowMaxHeight = 750;

            $productDescriptionContent.toggleClass('expanded');
            $showMoreContentBtn.toggleClass('less-more-content');
            $showMoreContentBtn.siblings().removeClass();

            if ( $productDescriptionContent.hasClass('expanded') ) {
                $productDescriptionContent.removeAttr('style');
                $showMoreContentBtn.empty().text('Thu gọn');
                $showMoreContentBtn.siblings().addClass('fa fa-angle-up');
            } else {
                $productDescriptionContent.css('max-height', allowMaxHeight);
                $showMoreContentBtn.empty().text('Xem đầy đủ');
                $showMoreContentBtn.siblings().addClass('fa fa-angle-down');
                productdetailpage.handleLessMoreEvent(this);
            }
        });
    },
    displayCountDownTime: function() {
        var currentTime = new Date();
        var endTime = parseInt($('#woocommerce-product-sale-date').data('sale-time'));
        if (endTime === '') {
            return false;
        }
        var hours = endTime - currentTime.getHours() - 1;
        var minutes = 59 - currentTime.getMinutes();
        var seconds = 59 - currentTime.getSeconds();
        var x = setInterval(function() {
            seconds--;
            if (seconds < 0) {
                minutes--;
                seconds = 59;
                if (minutes < 0) {
                    hours--;
                    minutes = 59;
                }
            }
            $('#woocommerce-product-sale-date').find('div').empty();
            if (hours < 0) {
                $('#woocommerce-product-sale-date').find('div').append(`<div><span class="hours">00</span>&nbsp;:&nbsp;<span class="minutes">00</span>&nbsp;:&nbsp;<span>00</span></div>`);
                clearInterval(x);
            } else {
                $('#woocommerce-product-sale-date').find('div').append(`<div><span class="hours">${hours >= 0 && hours < 10 ? '0' + hours : hours}</span>&nbsp;:&nbsp;<span class="minutes">${minutes >= 0 && minutes < 10 ? '0' + minutes : minutes}</span>&nbsp;:&nbsp;<span>${seconds >= 0 && seconds < 10 ? '0' + seconds : seconds}</span></div>`);
            }
        }, 1000);
    },

    closeVideoImage: function() {
        //<iframe width="560" height="315" src="https://www.youtube.com/embed/Af5uIRN5Quc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        if (typeof video_product_id !== 'undefined') {
            var html = '<div class="video-product">';
            html += '<iframe src="https://www.youtube.com/embed/' + video_product_id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            html += '<i id="close-video" class="fa fa-close"></i>';
            html += '</div>';
            $("#show_video_product").prepend(html);
            $("#show_video_product").addClass('show-video');

            // insert first element video li
            //$('ol.flex-control-nav >li >img').removeClass('flex-active');
            //$('ol.flex-control-nav').prepend(`<li> <i id="show-video-item" class="fa fa-youtube-play flex-active"></i> </li>`);

            $("#show_video_product").on('click', '#close-video', function() {
                $("#show_video_product").removeClass('show-video');
                $('.video-product').css({
                    "display" : 'none'
                });
                
                if ($("#show_video_product ol").find('img').length >= 2)
                    $("#show_video_product ol").find('img').eq(1).trigger('click');
            });
        }
    },

    initFixedProductDetail: function() {
        if ($('.fixed-product-detail').length > 0) {
            $('div.add-to-cart-form').prepend($('.add-to-cart-form').find('button[type="submit"]').eq(0));
            $('.fixed-product-detail').on('click', '.add-to-cart-form > button', function() {
                //console.log($(this).attr('class'));
                var class_btn = $(this).attr('class').split(' ')[0];
                var top = $('.' +class_btn+ ':first').position().top;
                $('html, body').animate({
                    scrollTop: top
                }, 1000);
            });

            if ($(window).width() >= 1024) {
                $(window).scroll(function (event) {
                    var scroll = $(window).scrollTop();
                    if (scroll >= 300) {
                        $('.fixed-product-detail').removeClass('hide');
                    } else {
                        if ($('.fixed-product-detail').attr('class').indexOf('hide') < 0) {
                            $('.fixed-product-detail').addClass('hide');
                        }
                    }
                });
            }
        }
    },

    displayTotalPriceGroupedProduct: function() {
        var $price = $('.price');
        var total = 0;
        $('.grouped_form').eq(0).find('.woocommerce-grouped-product-list-item').each(function( index ) {
            var $productItem = $(this);
            var $quantity = $productItem.find('.wares_qty_box').find(':text');
            var $priceProduct = $productItem.find('.price-product');
            total += parseInt($quantity.val()) * parseFloat($priceProduct.val());
        });

        if ( total > 0 ) {
            $price.text(total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') + '₫');
        }
    },

    handleEventOnClickQty: function() {
        let that = this;
        $('.wares_qty_minus').off('click').on('click', function() {
            cartpage.changeValueQuantity('sub', $(this));
            that.displayTotalPriceGroupedProduct();
        });

        $('.wares_qty_add').off('click').on('click', function() {
            cartpage.changeValueQuantity('add', $(this));
            that.displayTotalPriceGroupedProduct();
        });
    },
    displayShowMoreButtonInProductContent: function() {
        var $postsDescriptionContent = $('.post-product-description-content');
        var allowMaxHeight = 750;
        $postsDescriptionContent.each(function() {
            var $postDescriptionContent = $(this);
            if ( $postDescriptionContent.height() > allowMaxHeight ) {
                $postDescriptionContent.css('max-height', allowMaxHeight);
                $postDescriptionContent.parent().find('.show-more-button-wrapper').removeClass('hidden');
            }
        });
    },
    handleLessMoreEvent: function(element) {
        var positionTop = $(element).closest('.post-product-description-column').position().top;
        $('html, body').animate({
            scrollTop: positionTop + 700
        }, 1000);
    },
    handleSwitchTabElement: function() {
        $('.tab-wrapper').find('li').off('click').on('click', function() {
            var $tabItem = $(this);
            var $fixedProductDetail = $tabItem.parents('.fixed-product-detail');
            $('.tab-wrapper').find('li').removeClass('active');
            $('.tab-content-wrapper').find('.tab-content').hide();
            $('#' + $tabItem.data('content') + '-content').show();
            if (!$tabItem.hasClass('active')) {
                $tabItem.not($tabItem.parents('.fixed-product-detail')).addClass('active');
            }

            if ($fixedProductDetail.length > 0 && !$fixedProductDetail.hasClass('hidden')) {
                var positionTop = $('.tab-content-wrapper').position().top;
                $('html, body').animate({
                    scrollTop: positionTop + 330
                }, 1000);
            }
        });
    },
    displayViewMoreContentButton: function(element) {
        var $moreContent = $('.more-content');
        var $moreContentParent = $moreContent.parent();
        $moreContent.css('max-height', 460);
        $moreContentParent.append('<p class="show-more-content">Xem thêm nội dung</p>');
        productdetailpage.handleViewMoreContent($moreContentParent, 460);
    },
    handleViewMoreContent: function(element, allowMaxHeight) {
        var $showMoreContentBtn = element.find('.show-more-content');
        var $moreContent = element.find('.more-content');
        $showMoreContentBtn.off('click').on('click', function() {
            $showMoreContentBtn.toggleClass('hidden');
            if (element.find('.hidden').length > 0) {
                $moreContent.css('max-height', 'auto');
            } else {
                $moreContent.css('max-height', allowMaxHeight);
            }
        });
    },
    init: function() {
        let that = this;
        that.showMoreContent();
        that.displayCountDownTime();
        that.closeVideoImage();
        that.initFixedProductDetail();
        that.displayShowMoreButtonInProductContent();
        that.handleSwitchTabElement();
        that.displayViewMoreContentButton();
        // init functions for grouped product type
        if ( $('.grouped_form').length > 0 ) {
            that.displayTotalPriceGroupedProduct();
            that.handleEventOnClickQty();
        }
    }
}

module.exports = productdetailpage;