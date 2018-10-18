'use strict';

var custom_filter = {
    init : function() {
        $(document).on('click', '.filter-title', function() {
            $('.filter-title').each(function (index, value) { 
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            var id = $(this).attr('data_attri_id');
            var $element = $('#' + id)[0];
            var flag = false;
            if ($element.className.indexOf('showfilter') > 0) flag = true;
            $('.filter-attris').each(function (index, value) { 
                $(this).removeClass('showfilter');
            });
            
            !flag && $($element).toggleClass('showfilter');
        });
    }
}

module.exports = custom_filter;