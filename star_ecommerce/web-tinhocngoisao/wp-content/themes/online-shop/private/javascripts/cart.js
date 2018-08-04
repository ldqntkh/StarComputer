'use strict';

var cartpage = {
    changeValueQuantity: function(type='sub') {
        var $qty_input = $('.wares_qty_num').find('input').eq(0);
        if (typeof $qty_input !== 'undefined') {
            var value = $qty_input.val();
            if (type === 'sub' && value > 1) value--;
            if (type === 'add') value++;
            $qty_input.val(value);
            $('.woocommerce-cart-form :input[name="update_cart"]').prop("disabled", 0)
        } else {
            $('.woocommerce-cart-form :input[name="update_cart"]').prop("disabled", 1);
        }
    },

    init : function() {
        let that = this;
        $('body').on('click', '.wares_qty_minus', function() {
            that.changeValueQuantity();
        });

        $('body').on('click', '.wares_qty_add', function() {
            that.changeValueQuantity('add');
        });
    }
}

module.exports = cartpage;