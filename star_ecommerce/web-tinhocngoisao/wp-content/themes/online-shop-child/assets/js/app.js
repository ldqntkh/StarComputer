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
eval("\n\nvar header_menu = __webpack_require__(/*! ./header_menu */ \"./wp-content/themes/online-shop-child/private/javascripts/header_menu.js\");\nvar cartpage = __webpack_require__(/*! ./cart */ \"./wp-content/themes/online-shop-child/private/javascripts/cart.js\");\nvar accountpage = __webpack_require__(/*! ./account */ \"./wp-content/themes/online-shop-child/private/javascripts/account.js\");\nvar mobile_menu = __webpack_require__(/*! ./menu_mobile */ \"./wp-content/themes/online-shop-child/private/javascripts/menu_mobile.js\");\nvar productdetailpage = __webpack_require__(/*! ./pdp */ \"./wp-content/themes/online-shop-child/private/javascripts/pdp.js\");\nvar checkoutpage = __webpack_require__(/*! ./checkout */ \"./wp-content/themes/online-shop-child/private/javascripts/checkout.js\");\nvar custom_filter = __webpack_require__(/*! ./custom_filter */ \"./wp-content/themes/online-shop-child/private/javascripts/custom_filter.js\");\nvar showRooms = __webpack_require__(/*! ./showroom */ \"./wp-content/themes/online-shop-child/private/javascripts/showroom.js\");\nvar footer = __webpack_require__(/*! ./footer */ \"./wp-content/themes/online-shop-child/private/javascripts/footer.js\");\n\n$(document).ready(function () {\n    header_menu.init();\n    cartpage.init();\n    accountpage.init();\n    mobile_menu.init();\n    productdetailpage.init();\n    checkoutpage.init();\n    custom_filter.init();\n    showRooms.init();\n    footer.init();\n});\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/app.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/cart.js":
/*!*************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/cart.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cartpage = {\n    changeValueQuantity: function (type = 'sub', $element) {\n        var $qtyBtnElement = $element;\n        var $waresQtyNumInput = $qtyBtnElement.siblings('.wares_qty_num').find('input');\n        var $qty_input = $waresQtyNumInput;\n        var $qty_product = parseInt($waresQtyNumInput.attr('max'));\n        if (typeof $qty_input !== 'undefined') {\n            var value = $qty_input.val();\n            if (type === 'sub' && value > 1) value--;\n            if (type === 'add' && value < $qty_product) value++;\n            $qty_input.val(value);\n            $('.woocommerce-cart-form :input[name=\"update_cart\"]').prop(\"disabled\", 0);\n        } else {\n            $('.woocommerce-cart-form :input[name=\"update_cart\"]').prop(\"disabled\", 1);\n        }\n    },\n\n    init: function () {\n        let that = this;\n        $('.wares_qty_minus').off('click').on('click', function () {\n            that.changeValueQuantity('sub', $(this));\n        });\n\n        $('.wares_qty_add').off('click').on('click', function () {\n            that.changeValueQuantity('add', $(this));\n        });\n\n        $('.wares_qty_num').find('input').off('keypress').on('keypress', function (e) {\n            var numberPatern = /^\\d+$/;\n            if (!numberPatern.test(e.key)) {\n                $(this).val(0);\n                return false;\n            }\n        });\n\n        $('.wares_qty_num').find('input').off('focusout').on('focusout', function () {\n            var $qtyElement = $(this);\n            var qtyMaxValue = parseInt($qtyElement.attr('max'));\n            if (parseInt($qtyElement.val()) > qtyMaxValue) {\n                $qtyElement.val(qtyMaxValue);\n                return false;\n            }\n        });\n    }\n};\n\nmodule.exports = cartpage;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/cart.js?");

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

/***/ "./wp-content/themes/online-shop-child/private/javascripts/custom_filter.js":
/*!**********************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/custom_filter.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar custom_filter = {\n    init: function () {\n        $(document).on('click', '.filter-title', function () {\n            $('.filter-title').each(function (index, value) {\n                $(this).removeClass('active');\n            });\n            $(this).addClass('active');\n            var id = $(this).attr('data_attri_id');\n            var $element = $('#' + id)[0];\n            var flag = false;\n            if ($element.className.indexOf('showfilter') > 0) flag = true;\n            $('.filter-attris').each(function (index, value) {\n                $(this).removeClass('showfilter');\n            });\n\n            !flag && $($element).toggleClass('showfilter');\n        });\n\n        this.initMobileFilter();\n    },\n\n    initMobileFilter: function () {\n        $('.filters-mobile').on('click', '#short-products', function () {\n            $('#popup-short-product').toggleClass('show-block');\n        }).on('click', '#categories', function () {\n            $('#popup-categories').toggleClass('show-block');\n        }).on('click', '#filter-product-attr', function () {\n            $('#popup-filter-product-attr').toggleClass('show-block');\n        });\n        // init onchange short product\n        $('input[type=radio][name=short-product]').change(function () {\n            $('select.orderby option[value=' + this.value + ']').prop('selected', true);\n            $('select.orderby').closest(\"form\").submit();\n        });\n\n        // close modal \n        $('i[id^=close-popup-]').on('click', function () {\n            var data_close = $(this).attr('data-close');\n            if (data_close !== null) {\n                $('#' + data_close).toggleClass('show-block');\n            }\n        });\n\n        // init filter attri\n        $('.filter-products-attr').on('click', '.product-filter-attri > h5', function () {\n            $(this).closest('.product-filter-attri').toggleClass('auto-height');\n        });\n    }\n};\n\nmodule.exports = custom_filter;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/custom_filter.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/footer.js":
/*!***************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/footer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar footer = {\n    init: function () {\n        $('.footer-column-header').on('click', function () {\n            // check class collapse-all\n            var parent = $(this).closest('.contact-item');\n            if (parent.length > 0) {\n                parent.toggleClass('collapse-all');\n            }\n\n            // icon arrow\n            var icon = $(this).find('.collapse');\n            if (icon.length > 0) icon.eq(0).toggleClass('collapse-up');\n        });\n    }\n};\n\nmodule.exports = footer;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/footer.js?");

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
eval("\n\n// implement sidebar mobile \n\nvar mobile_menu = {\n\n    initSidebarMobile: function () {\n        $('#side-header').on('click', function () {\n            $('.pr-sidebar-mobile').toggleClass('toggle');\n            $('body').toggleClass('hide-scroll-body');\n        });\n    },\n\n    closeSidebarMobile: function () {\n        $('.sidebar-custom-mobile > i.fa-close').on('click', function () {\n            $('.pr-sidebar-mobile').toggleClass('toggle');\n            $('body').toggleClass('hide-scroll-body');\n        });\n    },\n\n    toggleMainMenu: function (that) {\n        $('div.pr-menu').toggle();\n        $('div.panel-menu').animate({ width: 'toggle' });\n\n        if ($(that).attr('class') === 'panel-background') {\n            $('.fixed-product-detail').show();\n        } else {\n            $('.fixed-product-detail').hide();\n        }\n\n        // hide footer menu\n        $('.filters-mobile').toggleClass('hide');\n    },\n\n    init: function () {\n        let that = this;\n        $('.menu-lv2').hide();\n        $('div.pr-menu').hide();\n        $('div.panel-menu').hide();\n        $('.slicknav_arrow').on('click', function () {\n            var id = $(this).eq(0).attr('id');\n            if (id !== 'undefined') {\n                $('li#' + id + '>ul').toggle(300);\n            }\n        });\n\n        // $('body').on('click', '#toggle-menu, .panel-background', function() {\n        //     $('div.pr-menu').toggle();\n        //     $('div.panel-menu').animate({width: 'toggle'});\n\n        //     if ($(this).attr('class') === 'panel-background') {\n        //         $('.fixed-product-detail').show();\n        //     } else {\n        //         $('.fixed-product-detail').hide();\n        //     }\n        // });\n        // fix code not work in safari mobile\n        $('#toggle-menu').on('click', function () {\n            that.toggleMainMenu(this);\n        });\n        $('.panel-background').on('click', function () {\n            that.toggleMainMenu(this);\n        });\n\n        that.initSidebarMobile();\n        that.closeSidebarMobile();\n    }\n};\n\nmodule.exports = mobile_menu;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/menu_mobile.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/pdp.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/pdp.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cartpage = __webpack_require__(/*! ./cart */ \"./wp-content/themes/online-shop-child/private/javascripts/cart.js\");\n\nvar productdetailpage = {\n    displayCountDownTime: function () {\n        var currentTime = new Date();\n        var endTime = parseInt($('#woocommerce-product-sale-date').data('sale-time'));\n        if (endTime === '') {\n            return false;\n        }\n        var hours = endTime - currentTime.getHours() - 1;\n        var minutes = 59 - currentTime.getMinutes();\n        var seconds = 59 - currentTime.getSeconds();\n        var x = setInterval(function () {\n            seconds--;\n            if (seconds < 0) {\n                minutes--;\n                seconds = 59;\n                if (minutes < 0) {\n                    hours--;\n                    minutes = 59;\n                }\n            }\n            $('#woocommerce-product-sale-date').find('div').empty();\n            if (hours < 0) {\n                $('#woocommerce-product-sale-date').find('div').append(`<div><span class=\"hours\">00</span>&nbsp;:&nbsp;<span class=\"minutes\">00</span>&nbsp;:&nbsp;<span>00</span></div>`);\n                clearInterval(x);\n            } else {\n                $('#woocommerce-product-sale-date').find('div').append(`<div><span class=\"hours\">${hours >= 0 && hours < 10 ? '0' + hours : hours}</span>&nbsp;:&nbsp;<span class=\"minutes\">${minutes >= 0 && minutes < 10 ? '0' + minutes : minutes}</span>&nbsp;:&nbsp;<span>${seconds >= 0 && seconds < 10 ? '0' + seconds : seconds}</span></div>`);\n            }\n        }, 1000);\n    },\n\n    closeVideoImage: function () {\n        //<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Af5uIRN5Quc\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n        if (typeof video_product_id !== 'undefined') {\n            var html = '<div class=\"video-product\">';\n            html += '<iframe src=\"https://www.youtube.com/embed/' + video_product_id + '\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>';\n            html += '<i id=\"close-video\" class=\"fa fa-close\"></i>';\n            html += '</div>';\n            $(\"#show_video_product\").prepend(html);\n            $(\"#show_video_product\").addClass('show-video');\n\n            // insert first element video li\n            //$('ol.flex-control-nav >li >img').removeClass('flex-active');\n            //$('ol.flex-control-nav').prepend(`<li> <i id=\"show-video-item\" class=\"fa fa-youtube-play flex-active\"></i> </li>`);\n\n            $(\"#show_video_product\").on('click', '#close-video', function () {\n                $(\"#show_video_product\").removeClass('show-video');\n                $('.video-product').css({\n                    \"display\": 'none'\n                });\n\n                if ($(\"#show_video_product ol\").find('img').length >= 2) $(\"#show_video_product ol\").find('img').eq(1).trigger('click');\n            });\n        }\n    },\n\n    initFixedProductDetail: function () {\n        if ($('.fixed-product-detail').length > 0) {\n            $('div.add-to-cart-form').prepend($('.add-to-cart-form').find('button[type=\"submit\"]').eq(0));\n            $('.fixed-product-detail').on('click', '.add-to-cart-form > button', function () {\n                //console.log($(this).attr('class'));\n                var class_btn = $(this).attr('class').split(' ')[0];\n                var top = $('.' + class_btn + ':first').position().top;\n                $('html, body').animate({\n                    scrollTop: top\n                }, 1000);\n            });\n\n            if ($(window).width() >= 1024) {\n                // add class when header promotion not active\n                if ($('.top-header-promotion').find('.promotion-banner').length === 0) {\n                    $('.fixed-product-detail').addClass('header-promo-not-active');\n                }\n\n                $(window).scroll(function (event) {\n                    var scroll = $(window).scrollTop();\n                    if (scroll >= 300) {\n                        $('.fixed-product-detail').removeClass('hide');\n                    } else {\n                        if ($('.fixed-product-detail').attr('class').indexOf('hide') < 0) {\n                            $('.fixed-product-detail').addClass('hide');\n                        }\n                    }\n                });\n            }\n        }\n    },\n\n    displayTotalPriceGroupedProduct: function () {\n        var $price = $('.price');\n        var total = 0;\n        $('.grouped_form').eq(0).find('.woocommerce-grouped-product-list-item').each(function (index) {\n            var $productItem = $(this);\n            var $quantity = $productItem.find('.wares_qty_box').find(':text');\n            var $priceProduct = $productItem.find('.price-product');\n            total += parseInt($quantity.val()) * parseFloat($priceProduct.val());\n        });\n\n        if (total > 0) {\n            $price.text(total.toString().replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, '$1.') + '₫');\n        }\n    },\n\n    handleEventOnClickQty: function () {\n        let that = this;\n        $('.wares_qty_minus').off('click').on('click', function () {\n            cartpage.changeValueQuantity('sub', $(this));\n            that.displayTotalPriceGroupedProduct();\n        });\n\n        $('.wares_qty_add').off('click').on('click', function () {\n            cartpage.changeValueQuantity('add', $(this));\n            that.displayTotalPriceGroupedProduct();\n        });\n    },\n    displayShowMoreButtonInProductContent: function () {\n        var $postsDescriptionContent = $('.post-product-description-content');\n        var allowMaxHeight = 750;\n        $postsDescriptionContent.each(function () {\n            var $postDescriptionContent = $(this);\n            if ($postDescriptionContent.height() > allowMaxHeight) {\n                $postDescriptionContent.css('max-height', allowMaxHeight);\n                $postDescriptionContent.parent().find('.show-more-button-wrapper').removeClass('hidden');\n            }\n        });\n    },\n    handleSwitchTabElement: function () {\n        $('.tab-wrapper').find('li').off('click').on('click', function () {\n            var $tabItem = $(this);\n            var $fixedProductDetail = $tabItem.parents('.fixed-product-detail');\n            var $tabClassName = $tabItem.attr('class').split(' ').length > 1 ? $tabItem.attr('class').split(' ')[0] : $tabItem.attr('class');\n            $('.tab-wrapper').find('li').removeClass('active');\n            $('.tab-content-wrapper').find('.tab-content').hide();\n            $('#' + $tabItem.data('content') + '-content').show();\n            if (!$tabItem.hasClass('active')) {\n                $('.' + $tabClassName).addClass('active');\n            }\n\n            if ($fixedProductDetail.length > 0 && !$fixedProductDetail.hasClass('hidden')) {\n                var positionTop = $('.tab-content-wrapper').position().top;\n                $('html, body').animate({\n                    scrollTop: positionTop + 330\n                }, 1000);\n            }\n        });\n    },\n    displayViewMoreContentButton: function () {\n        var $tabContents = $('.tab-content');\n        var allowMaxHeight = 750;\n\n        $tabContents.each(function () {\n            var $tabContentItem = $(this);\n            if ($tabContentItem.height() > allowMaxHeight) {\n                $tabContentItem.find('.tab-detail-content').css('max-height', allowMaxHeight);\n                $tabContentItem.append('<p class=\"show-more-content\">Xem đầy đủ</p>');\n            }\n            productdetailpage.handleViewMoreContent($tabContentItem, allowMaxHeight);\n        });\n    },\n    handleViewMoreContent: function (element, allowMaxHeight) {\n        var $showMoreContentBtn = element.find('.show-more-content');\n        var $tabDetailContent = element.find('.tab-detail-content');\n        var $tabContentWrapper = element.parent();\n        $showMoreContentBtn.off('click').on('click', function () {\n            $tabDetailContent.toggleClass('expanded');\n            if ($tabDetailContent.hasClass('expanded')) {\n                $tabDetailContent.css('max-height', 'none');\n                $showMoreContentBtn.empty().text('Thu gọn');\n            } else {\n                $tabDetailContent.css('max-height', allowMaxHeight);\n                $showMoreContentBtn.empty().text('Xem đầy đủ');\n                $('html, body').animate({\n                    scrollTop: $tabContentWrapper.position().top + allowMaxHeight\n                }, 1000);\n            }\n        });\n    },\n    init: function () {\n        let that = this;\n        that.displayCountDownTime();\n        that.closeVideoImage();\n        that.initFixedProductDetail();\n        that.displayShowMoreButtonInProductContent();\n        that.handleSwitchTabElement();\n        that.displayViewMoreContentButton();\n        // init functions for grouped product type\n        if ($('.grouped_form').length > 0) {\n            that.displayTotalPriceGroupedProduct();\n            that.handleEventOnClickQty();\n        }\n    }\n};\n\nmodule.exports = productdetailpage;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/pdp.js?");

/***/ }),

/***/ "./wp-content/themes/online-shop-child/private/javascripts/showroom.js":
/*!*****************************************************************************!*\
  !*** ./wp-content/themes/online-shop-child/private/javascripts/showroom.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var data_init = [];\nvar showRooms = {\n    initialize: function () {\n        var myOptions = {\n            zoom: 13,\n            center: new google.maps.LatLng(0, 0),\n            mapTypeId: google.maps.MapTypeId.ROADMAP\n        };\n        map = new google.maps.Map(document.getElementById(\"list_address_store\"), myOptions);\n        this.insertMarkers();\n    },\n\n    insertMarkers: function () {\n        for (let index in list_address_store) {\n            let item = list_address_store[index];\n            this.renderMarkerFromAddress(item);\n        }\n    },\n\n    renderMarkerFromAddress: function (item) {\n        var geo = new google.maps.Geocoder();\n        geo.geocode({ 'address': item.address }, function (results, status) {\n            if (status == google.maps.GeocoderStatus.OK) {\n                var image = {\n                    url: item.image_icon,\n                    size: new google.maps.Size(20, 32),\n                    origin: new google.maps.Point(0, 0),\n                    anchor: new google.maps.Point(0, 32)\n                };\n                map.setCenter(results[0].geometry.location);\n                var marker = new google.maps.Marker({\n                    map: map,\n                    icon: image,\n                    position: results[0].geometry.location,\n                    title: item.store_name\n                });\n                marker.addListener('click', function () {\n                    new google.maps.InfoWindow({\n                        content: `<div class=\"marker-item\"><h2>${item.store_name}</h2>\n                                    <p>Địa chỉ: ${item.address}</p>\n                                    <a href=\"tel:${item.phone}\">Hotline:${item.phone}</a>\n                                </div>`\n                    }).open(map, marker);\n                });\n                data_init[data_init.length] = {\n                    \"location\": results[0].geometry.location,\n                    \"marker\": marker\n                };\n            } else {\n                console.log(\"Geocode was not successful for the following reason: \" + status);\n            }\n        });\n    },\n\n    init: function () {\n        if (typeof google_map_key !== 'undefined' && google_map_key !== '' && typeof list_address_store !== 'undefined') {\n            this.initialize();\n            $('.show-map').on('click', function () {\n                var item = data_init[$(this).attr('data')];\n                if (item.length > 0) {\n                    map.setCenter(item.location);\n                    map.setZoom(20);\n                    new google.maps.event.trigger(item.marker, 'click');\n\n                    var top = $('#list_address_store').position().top - 50;\n                    $('html, body').animate({\n                        scrollTop: top\n                    }, 1000);\n                }\n            });\n        }\n    }\n};\n\nmodule.exports = showRooms;\n\n//# sourceURL=webpack:///./wp-content/themes/online-shop-child/private/javascripts/showroom.js?");

/***/ })

/******/ });