'use strict';
const $ = jQuery;
var paymentCheckout = {
    init: function () {
        $('body').on('change', 'input[name=iCheck]', function () {
            $('input[id="payment_method_zalo_payment"]').prop('checked', true).trigger('change');
        });

        $('body').on('change', 'input[name=payment_method]', function () {
            var valPayment = $(this).val();
            if (valPayment != 'zalo_payment') {
                $('input[name=iCheck]').prop('checked', false);
            }
        });

        jQuery(document).on('click', '#place_order', function () {
            jQuery('body').addClass('ajax_loading');
        });

        jQuery('body').on('checkout_error', function () {
            jQuery('body').removeClass('ajax_loading');
        });
    }
}

module.exports = paymentCheckout;