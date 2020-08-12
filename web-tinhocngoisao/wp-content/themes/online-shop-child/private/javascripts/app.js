'use strict';
var header_menu = require('./header_menu');
var cartpage = require('./cart');
var accountpage = require('./account');
var mobile_menu = require('./menu_mobile');
var productdetailpage = require('./pdp');
var checkoutpage = require('./checkout');
var custom_filter = require('./custom_filter');
var showRooms = require('./showroom');
var footer = require('./footer');
var address = require('./address');

import checkoutAddress from './checkout/address';

$(document).ready(function() {
    header_menu.init();
    cartpage.init();
    accountpage.init();
    mobile_menu.init();
    productdetailpage.init();
    // checkoutpage.init();
    custom_filter.init();
    showRooms.init();
    footer.init();
    // address.init();

    checkoutAddress.init();
})