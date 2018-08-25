'use strict';
var header_menu = require('./header_menu');
var cartpage = require('./cart');
var accountpage = require('./account');
var mobile_menu = require('./menu_mobile');

$(document).ready(function() {
    header_menu.init();
    cartpage.init();
    accountpage.init();
    mobile_menu.init();
})