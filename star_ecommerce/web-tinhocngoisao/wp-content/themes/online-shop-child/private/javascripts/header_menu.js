'use strict';

// implement sidebar mobile 
var header_menu = {

    headerScroll : function() {
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
    },

    filterPlp: function() {
        $('.custom-sidebar-pc > .header-filter').on('click', function() {
            $('.custom-sidebar-pc').toggleClass('toggle-filter', 300);
        });
    },

    init : function() {
        this.filterPlp();
    }
}

module.exports = header_menu;