'use strict';

var mobile_menu = {
    
    init : function() {
        let that = this;
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
    }
}

module.exports = mobile_menu;