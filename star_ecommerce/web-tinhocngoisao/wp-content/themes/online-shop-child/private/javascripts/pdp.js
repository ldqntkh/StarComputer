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
            $('#woocommerce-product-sale-date').find('div').append(`<div><span class="hours">${hours >= 0 && hours < 10 ? '0' + hours : hours}</span>&nbsp;:&nbsp;<span class="minutes">${minutes >= 0 && minutes < 10 ? '0' + minutes : minutes}</span>&nbsp;:&nbsp;<span>${seconds >= 0 && seconds < 10 ? '0' + seconds : seconds}</span></div>`);
            if (hours < 0) {
                clearInterval(x);
            }
        }, 1000);
    },

    init: function() {
        let that = this;
        that.showMoreContent();
        that.displayShowMoreContentButton();
        that.displayCountDownTime();
    }
}

module.exports = productdetailpage;