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

    toggleMainMenu: function(that) {
        $('div.pr-menu').toggle();
        $('div.panel-menu').animate({width: 'toggle'});
        
        if ($(that).attr('class') === 'panel-background') {
            $('.fixed-product-detail').show();
        } else {
            $('.fixed-product-detail').hide();
        }

        // hide footer menu
        $('.filters-mobile').toggleClass('hide');
    },

    init : function() {
        let that = this;
        $('.menu-lv2').hide();
        $('div.pr-menu').hide();
        $('div.panel-menu').hide();
        $('#lst-action-account').on('click', function() {
            $('.menu-lv2').toggle(300);
        });

        $('body').on('click', '#url-list-categories', function(e) {
            e.preventDefault();
            try {
                sessionStorage.removeItem('CATEGORIES_DATA_HISTORY');
                location.href = e.target.href;
            } catch (err) {
                // 
            }
        });


        // fix code not work in safari mobile
        $('#toggle-menu').on('click', function() {
            that.toggleMainMenu(this);
        });
        $('.panel-background').on('click', function() {
            that.toggleMainMenu(this);
        });
        
        that.initSidebarMobile();
        that.closeSidebarMobile();
    }
}

module.exports = mobile_menu;