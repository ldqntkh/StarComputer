'use strict';

// implement sidebar mobile 
var header_menu = {

    init : function() {
        $(document).scroll(function() {  // OR  $(window).scroll(function() {
            if ($(this).width() >= 1024) {
                var pos = $(this).scrollTop();
                if (pos >= 240) {
                    !$('.header-wrapper').hasClass('fixed-header-scroll') && $('.header-wrapper').addClass('fixed-header-scroll');
                    !$('body').hasClass('body-content-fixed') && $('body').addClass('body-content-fixed');
                } else {
                    $('.header-wrapper').removeClass('fixed-header-scroll');
                    $('body').removeClass('body-content-fixed');
                }
            }
        });
    }
}

module.exports = header_menu;