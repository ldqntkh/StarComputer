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

    init: function() {
        let that = this;
        that.showMoreContent();
        that.displayShowMoreContentButton();
    }
}

module.exports = productdetailpage;