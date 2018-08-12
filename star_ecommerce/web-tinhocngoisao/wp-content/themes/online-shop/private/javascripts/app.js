'use strict';

var cartpage = require('./cart');
var accountpage = require('./account');
var mobile_menu = require('./menu_mobile');

$(document).ready(function() {
    cartpage.init();
    accountpage.init();
    mobile_menu.init();
})