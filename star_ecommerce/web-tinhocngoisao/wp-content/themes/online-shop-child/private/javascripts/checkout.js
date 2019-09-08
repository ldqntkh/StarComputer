'use strict';

var checkoutPage = {
    handleContinuePlaceOrder: function() {
        $('.continue-place-order').off('click').on('click', function() {
            $(this).parent().addClass('step-2');
            var $fixHeaderPC = $('.fixed-header-scroll').length > 0 ? $('.fixed-header-scroll').height() : 0;
            var $headeFreezing = $('.header-freezing').length > 0 ? $('.header-freezing').height() : 0;
            $('html, body').animate({
                scrollTop: $('#order_review_heading').offset().top - ( $fixHeaderPC + $headeFreezing)
            }, 1000)
        });
    },
    validateAddressField: function() {
        $('.input-form').find('input, select, textarea').off('focusout').on('focusout', function() {
            var $input = $(this);
            if ( $input.hasClass('required-field') && $input.val() === '' ) {
                $input.addClass('error-form');
            } else {
                $input.removeClass('error-form');
                $input.siblings('.error-value').remove();
            }
        });

        $('.save-new-address').off('click').on('click', function(e) {
            e.preventDefault();
            var $addressForm = $(this).parents('form');
            var $inputForm = $addressForm.parent().find('.input-form');
            $inputForm.find('input, select, textarea').each(function() {
                var $item = $(this);
                $item.siblings('.error-value').remove();
                if ( $item.hasClass('required-field') && $item.val() === ''  ) {
                    $item.addClass('error-form');
                    $item.parent().append('<span class="error-value">Đây là ô bắt buộc cần nhập</span>');
                } else {
                    $item.removeClass('error-form');
                }

                if ( $item.prop('id') === 'phone' && $item.val() !== '' ) {
                    var mobileRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                    if ( !mobileRegex.test($(this).val()) ) {
                        $item.addClass('error-form');
                        $item.parent().append('<span class="error-value">Số điện thoại của bạn không hợp lệ</span>')
                    } else {
                        $item.removeClass('error-form');
                    }
                }
            });

            $('.update-address-form').find('.address-hidden-field').each(function() {
                if ( $(this).parent().hasClass('selected') ) {
                    checkoutPage.bindValueToSelectedHiddenField( $(this).parent() );
                }
            });

            if ( $('.error-form').length === 0 ) {
                var input_action = $(this).parent().find('input[name="shipping_account_address_action"]');
                if (input_action && input_action.val()==='update') {
                    $addressForm.find('.shipping_address').remove();
                }
                $addressForm.submit();
            }
        });
    },
    bindValueToSelectedHiddenField: function($element) {
        var $fullNameHiddenField = $element.find('input[name="shipping_last_name[]"]'),
            $firstNameHiddenField = $element.find('input[name="shipping_first_name[]"]'),
            $emailHiddenField = $element.find('input[name="shipping_email[]"]'),
            $phoneHiddenField = $element.find('input[name="shipping_phone[]"]'),
            $stateHiddenField = $element.find('input[name="shipping_state[]"]'),
            $cityHiddenField = $element.find('input[name="shipping_city[]"]'),
            $address02HiddenField = $element.find('input[name="shipping_address_2[]"]'),
            $addressHiddenField = $element.find('input[name="shipping_address_1[]"]'),
            $defaultOptionsHiddenField = $element.find('input[name="shipping_address_is_default[]"]');

        var $shippingAddress = $element.siblings('.shipping_address');

        var $fullNameField = $shippingAddress.find('#fullname'),
            $phoneField = $shippingAddress.find('#phone'),
            $stateField = $shippingAddress.find('#city'),
            $cityField = $shippingAddress.find('#district'),
            $address02Field = $shippingAddress.find('#ward'),
            $addressField = $shippingAddress.find('#address'),
            $defaultAddressField = $shippingAddress.find('.choose_default_address');

        if ($shippingAddress.find('#firstname')) {
            $firstNameHiddenField.val($shippingAddress.find('#firstname').val());
        }
        if ($shippingAddress.find('#emails')) {
            $emailHiddenField.val($shippingAddress.find('#emails').val());
        }
        $fullNameHiddenField.val( $fullNameField.val() );
        $phoneHiddenField.val( $phoneField.val() );
        $stateHiddenField.val( $stateField.val() );
        $cityHiddenField.val( $cityField.val() );
        $address02HiddenField.val( $address02Field.val() );
        $addressHiddenField.val( $addressField.val() );
        $defaultOptionsHiddenField.val( $defaultAddressField.is(':checked') );
    },
    chooseDefaultShippingAddress: function() {
        $('.choose_default_address').off('change').on('change', function() {
            var $addressForm = $(this).parents('form');
            if( $(this).is(':checked') ) {
                $addressForm.parent().find('input[name="shipping_address_is_default[]"]').val('false');
                $(this).siblings('input[name$="_address_is_default[]"]').val('true');
            } else {
                $(this).siblings('input[name$="_address_is_default[]"]').val('false');
            }
        });
    },
    initShippingClasses: function() {
        $('input[name^=shipping_method]:radio').off('change').on('change', function() {
            for(let i in shippingClasses) {
                if (shippingClasses[i].slug === this.value) {
                    $('#shipping_name').text(shippingClasses[i].name);
                    //that.updateShippingMethods();
                }
            }
        });
    },
    init : function() {
        let that = this;
        that.validateAddressField();
        that.chooseDefaultShippingAddress();
        that.initShippingClasses();
    }
}

module.exports = checkoutPage;