'use strict';
var address = {
    init : function() {
        this.initializeEvents();
    },
    initializeEvents: function() {
        $('.remove-address').off('click').on('click', function(e) {
            e.preventDefault();
            var removeAddressForm = $('.remove-address-form');
            var addressHiddenField = $(this).parents('.address-content').siblings();
            $('.list-address').find('.address-hidden-field').not($(addressHiddenField)).each(function(index) {
                removeAddressForm.find('.shipping_address_hidden_field').append('<div id="shipping_address_hidden_field_' + index + '"></div>');
                $(this).clone().appendTo( '#shipping_address_hidden_field_' + index );
            });
            if (confirm('Bạn có chắc là muốn xóa?')) {
                $( '.remove-address-form' ).submit();
            } else {
                $('.remove-address-form').find('.shipping_address_hidden_field').empty();
            }
        });

        $('.add-new-address').off('click').on('click', function(e) {
            e.preventDefault();
            var address_form = document.getElementsByClassName('new-address');
            if ( !$('.update-address-form').hasClass('hidden') ) {
                $('.update-address-form').addClass('hidden');
            }
            if (address_form.length > 0) {
                if (address_form[0].className.indexOf('hidden') > 0) {
                    address_form[0].className = address_form[0].className.replace('hidden', '');
                } else {
                    address_form[0].className += " hidden";
                }
            }

            var addresses = $('.new-address').find('#addresses');
            $('.list-address').find('.address-hidden-field').each(function(index) {
                $('.shipping_address_hidden_field_' + index).remove();
                if ($('.shipping_address_hidden_field_' + index).length === 0) {
                    addresses.append('<div class="shipping_address_hidden_field_' + index + '"></div>');
                    $(this).clone().appendTo( '.shipping_address_hidden_field_' + index );
                }
            });
        });
    },
    bindingHiddenFieldToForm: function() {
        var addresses = $('.new-address').find('#addresses');
        $('.list-address').find('.address-hidden-field').each(function(index) {
            if ($('.shipping_address_hidden_field_' + index).length === 0) {
                addresses.append('<div class="shipping_address_hidden_field_' + index + '"></div>');
                $(this).clone().appendTo( '.shipping_address_hidden_field_' + index );
            }
        });
    }
};

module.exports = address;