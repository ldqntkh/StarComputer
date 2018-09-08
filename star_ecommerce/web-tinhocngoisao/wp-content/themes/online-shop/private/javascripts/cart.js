'use strict';

var cartpage = {
    changeValueQuantity: function(type='sub') {
        var $waresQtyNumInput = $('.wares_qty_num').find('input');
        var $qty_input = $waresQtyNumInput;
        var $qty_product = parseInt($waresQtyNumInput.attr('max'));
        if (typeof $qty_input !== 'undefined') {
            var value = $qty_input.val();
            if (type === 'sub' && value > 1) value--;
            if (type === 'add' && value < $qty_product) value++;
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

        $('.wares_qty_num').find('input').off('keypress').on('keypress', function(e) {
            var numberPatern = /^\d+$/;
            if ( !numberPatern.test(e.key) ) {
                $(this).val(0);
                return false;
            }
        });

        $('.wares_qty_num').find('input').off('focusout').on('focusout', function() {
            var $qtyElement = $( this );
            var qtyMaxValue = parseInt( $qtyElement.attr('max') );
            if ( parseInt( $qtyElement.val() ) > qtyMaxValue ) {
                $qtyElement.val( qtyMaxValue );
                return false;
            }
        });
    }
}

module.exports = cartpage;