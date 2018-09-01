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

    init : function() {
        let that = this;
        that.handleContinuePlaceOrder();
    }
}

module.exports = checkoutPage;