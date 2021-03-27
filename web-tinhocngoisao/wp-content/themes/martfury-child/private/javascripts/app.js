import paymentCheckout from './checkout/payment';
import checkoutAddress from './checkout/address';
import checkout from './checkout/checkout';
import homePost from './home/post-component';

jQuery(document).ready(function () {
    checkout.init();
    paymentCheckout.init();
    checkoutAddress.init();
    homePost.init();
});