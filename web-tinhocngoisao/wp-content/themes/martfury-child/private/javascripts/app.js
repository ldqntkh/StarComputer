import paymentCheckout from './checkout/payment';
import checkoutAddress from './checkout/address';
import checkout from './checkout/checkout';

jQuery(document).ready(function () {
    checkout.init();
    paymentCheckout.init();
    checkoutAddress.init();
});