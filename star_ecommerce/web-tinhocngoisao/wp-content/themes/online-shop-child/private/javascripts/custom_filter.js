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

        this.initMobileFilter();
    },

    initMobileFilter: function() {
        $('.filters-mobile').on('click', '#short-products', function() {
            $('#popup-short-product').toggleClass('show-block');
        }).on('click', '#categories', function() {
            $('#popup-categories').toggleClass('show-block');
        }).on('click', '#filter-product-attr', function() {
            $('#popup-filter-product-attr').toggleClass('show-block');
        });
        // init onchange short product
        $('input[type=radio][name=short-product]').change(function() {
            $('select.orderby option[value=' +this.value+ ']').prop('selected', true);
            $('select.orderby').closest("form").submit();
        });

        // close modal 
        $('i[id^=close-popup-]').on('click', function() {
            var data_close = $(this).attr('data-close');
            if (data_close !== null) {
                $('#' + data_close).toggleClass('show-block');
            }
        });
    }
}

module.exports = custom_filter;