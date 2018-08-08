'use strict';

var cartpage = require('./cart');
var accountpage = require('./account');

$(document).ready(function() {
    cartpage.init();
    accountpage.init();
})