'use strict';

var productdetailpage = {

    showMoreContent: function() {
        // Configure/customize these variables.
        $('.show-more-content').off('click').on('click', function() {
            var $moreContentBtn = $(this);
            var $parentElement = $moreContentBtn.parent();
            var $moreContentElement = $moreContentBtn.siblings('.more-content');
            var allowMaxHeight = $moreContentElement.is('ol') ? 240 : 150;

            $parentElement.toggleClass('expand');

            if ( $parentElement.hasClass('expand') ) {
                $moreContentElement.css('max-height', 'none');
                $moreContentBtn.empty().text('Thu gọn nội dung');
            } else {
                $moreContentElement.css('max-height', allowMaxHeight);
                $moreContentBtn.empty().text('Xem thêm nội dung');
            }
        });
    },

    displayShowMoreContentButton: function() {
        var allowMaxHeight = 150;
        var $showMoreContentBtn = '';
        $('.more-content').each(function() {
            var $moreContent = $(this);
            // comment list will use different max-height and element
            if ( $moreContent.is('ol') ) {
                allowMaxHeight = 240;
            }
            $showMoreContentBtn = $moreContent.siblings('.show-more-content');

            if ( $moreContent.height() > allowMaxHeight ) {
                $moreContent.css('max-height', allowMaxHeight);
                $showMoreContentBtn.removeClass('hidden');
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
    },

    init: function() {
        let that = this;
        that.showMoreContent();
        that.displayShowMoreContentButton();
        that.displayCountDownTime();
        that.closeVideoImage();
        that.initFixedProductDetail();
    }
}

module.exports = productdetailpage;