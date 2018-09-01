'use strict';

// implement sidebar mobile 
var mobile_menu = {
    
    initSidebarMobile : function() {
        $('#side-header').on('click', function() {
            $('.pr-sidebar-mobile').toggleClass('toggle');
            $('body').toggleClass('hide-scroll-body');
        });
    },

    closeSidebarMobile: function() {
        $('.sidebar-custom-mobile > i.fa-close').on('click', function() {
            $('.pr-sidebar-mobile').toggleClass('toggle');
            $('body').toggleClass('hide-scroll-body');
        });
    },

    init : function() {
        $('.menu-lv2').hide();
        $('div.pr-menu').hide();
        $('div.panel-menu').hide();
        $('body').on('click', '.slicknav_arrow', function() {
            var id  = $(this).eq(0).attr('id');
            if (id !== 'undefined') {
                $('li#' + id + '>ul').toggle(300);
            }
        });

        $('body').on('click', '#toggle-menu, .panel-background', function() {
            $('div.pr-menu').toggle();
            $('div.panel-menu').animate({width: 'toggle'});
        });
        
        this.initSidebarMobile();
        this.closeSidebarMobile();
    }
}

module.exports = mobile_menu;