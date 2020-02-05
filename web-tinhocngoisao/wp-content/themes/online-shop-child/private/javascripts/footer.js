'use strict';
var footer = {
    init : function() {
        $('.footer-column-header').on('click', function() {
            // check class collapse-all
            var parent = $(this).closest('.contact-item');
            if (parent.length > 0) {
                parent.toggleClass('collapse-all');
            }

            // icon arrow
            var icon = $(this).find('.collapse');
            if (icon.length > 0) icon.eq(0).toggleClass('collapse-up');
        });
    }
};

module.exports = footer;