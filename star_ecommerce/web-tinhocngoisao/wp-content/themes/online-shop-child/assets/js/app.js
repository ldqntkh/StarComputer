/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/themes/online-shop-child/private/javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/themes/online-shop-child/private/javascripts/account.js":
/*!****************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/account.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar accountpage = {\n\n    showFormAccount: function (isLogin = false) {\n        if (isLogin) {\n            $('#customer_login').show();\n            $('#customer_register').hide();\n        } else {\n            $('#customer_login').hide();\n            $('#customer_register').show();\n        }\n    },\n\n    init: function () {\n        var that = this;\n        $('#customer_register').hide();\n        $('body').on('click', '#btn-register-account', function () {\n            that.showFormAccount();\n        });\n\n        $('body').on('click', '#btn-login-account', function () {\n            that.showFormAccount(true);\n        });\n    }\n};\n\nmodule.exports = accountpage;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/account.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/app.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/app.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar header_menu = __webpack_require__(/*! ./header_menu */ \"./wp-content/themes/online-shop-child/private/javascripts/header_menu.js\");\nvar cartpage = __webpack_require__(/*! ./cart */ \"./wp-content/themes/online-shop-child/private/javascripts/cart.js\");\nvar accountpage = __webpack_require__(/*! ./account */ \"./wp-content/themes/online-shop-child/private/javascripts/account.js\");\nvar mobile_menu = __webpack_require__(/*! ./menu_mobile */ \"./wp-content/themes/online-shop-child/private/javascripts/menu_mobile.js\");\nvar productdetailpage = __webpack_require__(/*! ./pdp */ \"./wp-content/themes/online-shop-child/private/javascripts/pdp.js\");\nvar checkoutpage = __webpack_require__(/*! ./checkout */ \"./wp-content/themes/online-shop-child/private/javascripts/checkout.js\");\n\n$(document).ready(function () {\n    header_menu.init();\n    cartpage.init();\n    accountpage.init();\n    mobile_menu.init();\n    productdetailpage.init();\n    checkoutpage.init();\n});\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/app.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/cart.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/cart.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cartpage = {\n    changeValueQuantity: function (type = 'sub') {\n        var $waresQtyNumInput = $('.wares_qty_num').find('input');\n        var $qty_input = $waresQtyNumInput;\n        var $qty_product = parseInt($waresQtyNumInput.attr('max'));\n        if (typeof $qty_input !== 'undefined') {\n            var value = $qty_input.val();\n            if (type === 'sub' && value > 1) value--;\n            if (type === 'add' && value < $qty_product) value++;\n            $qty_input.val(value);\n            $('.woocommerce-cart-form :input[name=\"update_cart\"]').prop(\"disabled\", 0);\n        } else {\n            $('.woocommerce-cart-form :input[name=\"update_cart\"]').prop(\"disabled\", 1);\n        }\n    },\n\n    init: function () {\n        let that = this;\n        $('body').on('click', '.wares_qty_minus', function () {\n            that.changeValueQuantity();\n        });\n\n        $('body').on('click', '.wares_qty_add', function () {\n            that.changeValueQuantity('add');\n        });\n\n        $('.wares_qty_num').find('input').off('keypress').on('keypress', function (e) {\n            var numberPatern = /^\\d+$/;\n            if (!numberPatern.test(e.key)) {\n                $(this).val(0);\n                return false;\n            }\n        });\n\n        $('.wares_qty_num').find('input').off('focusout').on('focusout', function () {\n            var $qtyElement = $(this);\n            var qtyMaxValue = parseInt($qtyElement.attr('max'));\n            if (parseInt($qtyElement.val()) > qtyMaxValue) {\n                $qtyElement.val(qtyMaxValue);\n                return false;\n            }\n        });\n    }\n};\n\nmodule.exports = cartpage;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/cart.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/checkout.js":
/*!*****************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/checkout.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar checkoutPage = {\n    handleContinuePlaceOrder: function () {\n        $('.continue-place-order').off('click').on('click', function () {\n            $(this).parent().addClass('step-2');\n            var $fixHeaderPC = $('.fixed-header-scroll').length > 0 ? $('.fixed-header-scroll').height() : 0;\n            var $headeFreezing = $('.header-freezing').length > 0 ? $('.header-freezing').height() : 0;\n            $('html, body').animate({\n                scrollTop: $('#order_review_heading').offset().top - ($fixHeaderPC + $headeFreezing)\n            }, 1000);\n        });\n    },\n\n    init: function () {\n        // remove action check ajax payment\n        //$('form[name=\"checkout\"]').unbind('submit');\n    }\n};\n\nmodule.exports = checkoutPage;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/checkout.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/header_menu.js":
/*!********************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/header_menu.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// implement sidebar mobile \n\nvar header_menu = {\n\n    headerScroll: function () {\n        $(document).scroll(function () {\n            // OR  $(window).scroll(function() {\n            if ($(this).width() >= 1024) {\n                var pos = $(this).scrollTop();\n                if (pos >= 240) {\n                    !$('.header-wrapper').hasClass('fixed-header-scroll') && $('.header-wrapper').addClass('fixed-header-scroll');\n                    !$('body').hasClass('body-content-fixed') && $('body').addClass('body-content-fixed');\n                } else {\n                    $('.header-wrapper').removeClass('fixed-header-scroll');\n                    $('body').removeClass('body-content-fixed');\n                }\n            }\n        });\n    },\n\n    filterPlp: function () {\n        $('.custom-sidebar-pc > .header-filter').on('click', function () {\n            $('.custom-sidebar-pc').toggleClass('toggle-filter', 300);\n        });\n    },\n\n    init: function () {\n        this.filterPlp();\n    }\n};\n\nmodule.exports = header_menu;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/header_menu.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/menu_mobile.js":
/*!********************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/menu_mobile.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// implement sidebar mobile \n\nvar mobile_menu = {\n\n    initSidebarMobile: function () {\n        $('#side-header').on('click', function () {\n            $('.pr-sidebar-mobile').toggleClass('toggle');\n            $('body').toggleClass('hide-scroll-body');\n        });\n    },\n\n    closeSidebarMobile: function () {\n        $('.sidebar-custom-mobile > i.fa-close').on('click', function () {\n            $('.pr-sidebar-mobile').toggleClass('toggle');\n            $('body').toggleClass('hide-scroll-body');\n        });\n    },\n\n    init: function () {\n        $('.menu-lv2').hide();\n        $('div.pr-menu').hide();\n        $('div.panel-menu').hide();\n        $('body').on('click', '.slicknav_arrow', function () {\n            var id = $(this).eq(0).attr('id');\n            if (id !== 'undefined') {\n                $('li#' + id + '>ul').toggle(300);\n            }\n        });\n\n        $('body').on('click', '#toggle-menu, .panel-background', function () {\n            $('div.pr-menu').toggle();\n            $('div.panel-menu').animate({ width: 'toggle' });\n        });\n\n        this.initSidebarMobile();\n        this.closeSidebarMobile();\n    }\n};\n\nmodule.exports = mobile_menu;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/menu_mobile.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/pdp.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/pdp.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar productdetailpage = {\n\n    showMoreContent: function () {\n        // Configure/customize these variables.\n        $('.show-more-content').off('click').on('click', function () {\n            var $moreContentBtn = $(this);\n            var $parentElement = $moreContentBtn.parent();\n            var $moreContentElement = $moreContentBtn.siblings('.more-content');\n            var allowMaxHeight = $moreContentElement.is('ol') ? 240 : 150;\n\n            $parentElement.toggleClass('expand');\n\n            if ($parentElement.hasClass('expand')) {\n                $moreContentElement.css('max-height', 'none');\n                $moreContentBtn.empty().text('Thu gọn nội dung');\n            } else {\n                $moreContentElement.css('max-height', allowMaxHeight);\n                $moreContentBtn.empty().text('Xem thêm nội dung');\n            }\n        });\n    },\n\n    displayShowMoreContentButton: function () {\n        var allowMaxHeight = 150;\n        var $showMoreContentBtn = '';\n        $('.more-content').each(function () {\n            var $moreContent = $(this);\n            // comment list will use different max-height and element\n            if ($moreContent.is('ol')) {\n                allowMaxHeight = 240;\n            }\n            $showMoreContentBtn = $moreContent.siblings('.show-more-content');\n\n            if ($moreContent.height() > allowMaxHeight) {\n                $moreContent.css('max-height', allowMaxHeight);\n                $showMoreContentBtn.removeClass('hidden');\n            }\n        });\n    },\n\n    init: function () {\n        let that = this;\n        that.showMoreContent();\n        that.displayShowMoreContentButton();\n    }\n};\n\nmodule.exports = productdetailpage;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/pdp.js?");

/***/ })

/******/ });