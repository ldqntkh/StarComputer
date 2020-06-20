'use strict';
var cartpage = require('./cart');

var productdetailpage = {
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
            var html = '<div class="video-product-icon"><div class="play-video"><i></i><span>Video đánh giá</span></div></div>';

            $("#show_video_product").append(html);

            $("#show_video_product").on('click', ".play-video", function() {
                // display video popup
                var html_video = '<div id="popup-video-review">';
                html_video += '<i id="close-video" class="fa fa-close"></i>';
                html_video += '<iframe src="https://www.youtube.com/embed/' + video_product_id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                html_video += '</div>';

                $('body').append(html_video);
                $('body').on('click', "#popup-video-review > #close-video", function() {
                    $('#popup-video-review').remove();
                });
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
            var userAgent = navigator.userAgent.toLowerCase();
            var isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
            if ($(window).width() >= 1024 && !isTablet) {
                // add class when header promotion not active
                if ( $('.top-header-promotion').find('.promotion-banner').length === 0 ) {
                    $('.fixed-product-detail').addClass('header-promo-not-active');
                }
                
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
    handleSwitchTabElement: function() {
        $('.tab-wrapper').find('li').off('click').on('click', function(e, params) {
            var $tabItem = $(this);
            var $fixedProductDetail = $tabItem.parents('.fixed-product-detail');
            var $tabClassName = $tabItem.attr('class').split(' ').length > 1 ? $tabItem.attr('class').split(' ')[0] : $tabItem.attr('class');
            var disableScroll = params && params.disableScroll ? params.disableScroll : false;
            var promotionBannerHeight = $('.top-header-promotion').length > 0 ? $('.top-header-promotion').height() : 0;
            $('.tab-wrapper').find('li').removeClass('active');
            $('.tab-content-wrapper').find('.tab-content').hide();
            $('#' + $tabItem.data('content') + '-content').show();
            if (!$tabItem.hasClass('active')) {
                $('.' + $tabClassName).addClass('active');
            }

            if ($fixedProductDetail.length > 0 && !$fixedProductDetail.hasClass('hidden') && !disableScroll) {
                var positionTop = $('.tab-content-wrapper').position().top;
                $('html, body').animate({
                    scrollTop: positionTop + $('.fixed-product-detail').height() + promotionBannerHeight + $('.tab-wrapper ul').height() + 10
                }, 1000);
            }
        });
    },
    displayViewMoreContentButton: function() {
        var $tabContents = $('.tab-content');
        var allowMaxHeight = 750;

        $tabContents.each(function() {
            var $tabContentItem = $(this);
            if ( $tabContentItem.height() > allowMaxHeight ) {
                $tabContentItem.find('.tab-detail-content').css('max-height', allowMaxHeight);
                $tabContentItem.append('<p class="show-more-content">Xem đầy đủ</p>');
            }
            productdetailpage.handleViewMoreContent($tabContentItem, allowMaxHeight);
        });
    },
    handleViewMoreContent: function(element, allowMaxHeight) {
        var $showMoreContentBtn = element.find('.show-more-content');
        var $tabDetailContent = element.find('.tab-detail-content');
        var $tabContentWrapper = element.parent();
        $showMoreContentBtn.off('click').on('click', function() {
            $tabDetailContent.toggleClass('expanded');
            if ($tabDetailContent.hasClass('expanded')) {
                $tabDetailContent.css('max-height', 'none');
                $showMoreContentBtn.empty().text('Thu gọn');
            } else {
                $tabDetailContent.css('max-height', allowMaxHeight);
                $showMoreContentBtn.empty().text('Xem đầy đủ');
                $('html, body').animate({
                    scrollTop: $tabContentWrapper.position().top + allowMaxHeight
                }, 1000);
            }
        });
    },
    handleViewProductRating: function() {
        $('.woocommerce-product-rating').find('a').off('click').on('click', function(e) {
            e.preventDefault();
            var $tabWrapper = $('.wc-tabs-wrapper');
            var tabWrapperPositionTop = $tabWrapper.offset().top;
            var promotionBannerHeight = $('.top-header-promotion').length > 0 ? $('.top-header-promotion').height() : 0;
            var fixedProductDetailHeight = 98;
            // switch to comment tab
            $('li.product-comment-tab').trigger('click', [{disableScroll: true}]);
            $('html, body').animate({
                scrollTop: tabWrapperPositionTop - (promotionBannerHeight + fixedProductDetailHeight)
            }, 2000);
        });
    },
    handleCommentTab: function() {
        var currentURL = location.href;
        var $tabDescription = $('#tab-description');
        if (currentURL.indexOf('#comment') !== -1 && !$tabDescription.is(':visible')) {
            var $tabWrapper = $('.tab-wrapper');
            var $tabWrapperLI = $tabWrapper.find('li');
            var $tabContentWrapper = $tabDescription.find('.tab-content-wrapper');
            var $tabContent = $tabContentWrapper.find('.tab-content');
            // add class active to display tab
            $tabWrapperLI.removeClass('active');
            $tabWrapper.find($tabWrapperLI.length - 1).addClass('active');
            // add class active to display content
            $tabContent.removeClass('active');
            $tabContent.eq($tabContent.length - 1).addClass('active');
            // add class active to display tab in fixed section
            $tabDescription.show();
        }
        return false;
    },
    init: function() {
        let that = this;
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
        that.handleViewProductRating();
        that.handleCommentTab();
    }
}

module.exports = productdetailpage;