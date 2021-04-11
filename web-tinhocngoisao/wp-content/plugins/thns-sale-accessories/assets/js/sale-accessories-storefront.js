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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/thns-sale-accessories/private/javascripts/storefront/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/thns-sale-accessories/private/javascripts/storefront/app.js":
/*!****************************************************************************************!*\
  !*** ./wp-content/plugins/thns-sale-accessories/private/javascripts/storefront/app.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(window).load(function () {
    if (typeof productSaleAccessories == 'undefined' || typeof productSelected == 'undefined') {
        // return;
    } else {
        saleAccessotiesController.init();
    }
});

var saleAccessotiesController = {
    newProductSelected: null,
    keySelected: null,
    productIdSelected: null,
    parentSelected: null,
    xhrRequest: null,
    init: function init() {
        saleAccessotiesController.newProductSelected = productSelected;

        jQuery('body').on('click', '.choose-sale-product', function (e) {
            e.preventDefault();
            var data_name = jQuery(this).attr('data-name');
            var parent = jQuery(this).closest('li.product');
            saleAccessotiesController.parentSelected = parent;
            saleAccessotiesController.keySelected = data_name;
            saleAccessotiesController.showPopupChooseProduct(data_name);
        });

        jQuery('body').on('click', '.select-product-id', function () {
            saleAccessotiesController.updateProductSelected(this);
        });

        jQuery('body').on('change', '.product-check', function () {
            saleAccessotiesController.updatePriceTotal();
        });

        jQuery('body').on('click', '.add-all-to-cart', function () {
            saleAccessotiesController.addAllProductToCart();
        });

        jQuery('body').on('click', '#close-modal', function () {
            jQuery('#modalShowAccessories').modal('hide');
        });
    },

    showPopupChooseProduct: function showPopupChooseProduct(key) {

        for (var index in productSaleAccessories) {
            if (productSaleAccessories[index]['name'] == key) {

                // set name
                jQuery('#accessories-title').text(key);
                // set product to modal

                var items = productSaleAccessories[index]['products'];
                var html = '<ul>';

                // get array key
                var arrKeySelected = saleAccessotiesController.newProductSelected.map(function (item) {
                    return item['product_id'];
                });

                for (var i in items) {
                    var item = items[i];
                    var flag = arrKeySelected.indexOf(item['product_id']) > -1 ? true : false;
                    if (flag) saleAccessotiesController.productIdSelected = item['product_id'];
                    html += '<li>\n                                <img src="' + item['image'] + '" alt="">\n                                <h3>' + item['product_name'] + '</h3>\n                                <div class="price-add-to-cart">\n                                    <span class="accessories-price">\n                                        <ins>\n                                            <span class="woocommerce-Price-amount amount">' + item['product_price_display'] + '</span>\n                                        </ins>\n                                        <span style="display: flex; justify-content: flex-start; align-items: center;">\n                                            <del>\n                                                <span class="woocommerce-Price-amount amount">' + item['product_sale_price_display'] + '</span>\n                                            </del>\n                                            <span style="font-size: 12px;">&nbsp;(- ' + item['product_percent_discount'] + '%)</span>\n                                        </span>\n                                    </span>\n                                </div>\n                                <span class="' + (flag ? '' : 'select-product-id') + '" data-product-id="' + item['product_id'] + '">' + (flag ? 'Đang chọn' : 'Chọn mua') + '</span>\n                            </li>';
                }

                html += '</ul>';
                jQuery('#accessories-lst-products').html(html);
                jQuery('#modalShowAccessories').modal('show');
            }
        }
        return;
    },

    updateProductSelected: function updateProductSelected(e) {
        var product_select = jQuery(e).attr('data-product-id');
        product_select = parseInt(product_select);
        for (var index in productSaleAccessories) {
            if (productSaleAccessories[index]['name'] == saleAccessotiesController.keySelected) {
                var products = productSaleAccessories[index]['products'];
                for (var i in products) {
                    if (products[i]['product_id'] == product_select) {

                        // delete( saleAccessotiesController.newProductSelected[saleAccessotiesController.productIdSelected] );
                        var _index_key = 0;
                        for (var _i in saleAccessotiesController.newProductSelected) {
                            if (saleAccessotiesController.newProductSelected[_i]['product_id'] == saleAccessotiesController.productIdSelected) {
                                _index_key = _i;
                                break;
                            }
                        }

                        saleAccessotiesController.newProductSelected[_index_key] = {
                            'product_id': product_select,
                            'quantity': 1,
                            'price': products[i]['product_price'],
                            'price_discount': products[i]['product_price_discount']
                        };
                        saleAccessotiesController.keySelected = null;
                        saleAccessotiesController.productIdSelected = null;

                        // update product selected
                        var parent = jQuery(saleAccessotiesController.parentSelected);
                        jQuery(parent.find('img')[0]).attr('src', products[i]['image']);
                        jQuery(parent.find('h2')[0]).text(products[i]['product_name']);
                        jQuery(parent.find('.accessories-price')[0]).html('<ins>\n                                <span class="woocommerce-Price-amount amount">' + products[i]['product_price_display'] + '</span>\n                            </ins>\n                            <span style="display: flex; justify-content: flex-start; align-items: center;">\n                                <del>\n                                    <span class="woocommerce-Price-amount amount">' + products[i]['product_sale_price_display'] + '</span>\n                                </del>\n                                <span style="font-size: 12px;">&nbsp;(- ' + products[i]['product_percent_discount'] + '%)</span>\n                            </span>');
                        saleAccessotiesController.updatePriceTotal();
                        jQuery('#modalShowAccessories').modal('hide');
                        return;
                    }
                }
                break;
            }
        }
    },

    updatePriceTotal: function updatePriceTotal() {
        var lstItems = jQuery('#sale-accessories-lst-product').find('li');
        var total_product = 0,
            total_price = 0,
            total_discount = 0;

        for (var i = 0; i < saleAccessotiesController.newProductSelected.length; i++) {
            if (lstItems[i]) {
                var item = saleAccessotiesController.newProductSelected[i];
                var elementItem = jQuery(lstItems[i]);

                if (elementItem.find('.product-check') && elementItem.find('.product-check').length == 1) {
                    if (!jQuery(elementItem.find('.product-check')[0]).is(":checked")) continue;
                }

                total_product++;
                total_price += parseInt(item['price']);
                total_discount += parseInt(item['price_discount']);
            }
        }

        var html = '<h6>T\u1ED5ng ti\u1EC1n</h6>\n                    <div class="total-price">\n                        <span class="total-price-html">\n                            <span class="woocommerce-Price-amount amount">' + total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '\n                            <span class="woocommerce-Price-currencySymbol">\u20AB</span></span></span> cho <span class="total-products">' + total_product + '</span> s\u1EA3n ph\u1EA9m\n                    </div>\n                    <div class="accessories-add-all-to-cart">\n                        <button type="button" class="single_add_to_cart_button button btn btn-primary add-all-to-cart">\n                            Mua ' + total_product + ' s\u1EA3n ph\u1EA9m<br>\n                            <span>Ti\u1EBFt ki\u1EC7m <span class="woocommerce-Price-amount amount">' + total_discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '<span class="woocommerce-Price-currencySymbol">\u20AB</span></span></span>\n                        </button>\n                    </div>';
        jQuery('#total-add-all-to-cart').html(html);
    },

    addAllProductToCart: function addAllProductToCart() {

        if (saleAccessotiesController.xhrRequest != null) return;
        var lstItems = jQuery('#sale-accessories-lst-product').find('li');

        var product_data = '';
        for (var i = 0; i < saleAccessotiesController.newProductSelected.length; i++) {
            if (lstItems[i]) {
                var item = saleAccessotiesController.newProductSelected[i];
                var elementItem = jQuery(lstItems[i]);

                if (elementItem.find('.product-check') && elementItem.find('.product-check').length == 1) {
                    if (!jQuery(elementItem.find('.product-check')[0]).is(":checked")) continue;
                }
                if (product_data != '') product_data += ',';
                product_data += item['product_id'] + '_' + 1;
            }
        }
        var add_to_cart_error = false;
        saleAccessotiesController.xhrRequest = jQuery.ajax({
            type: 'get',
            url: gearvn_accessries_ajax,
            data: {
                action: 'insert_multiple_products_to_cart',
                product_data_add_to_cart: product_data
            },
            beforeSend: function beforeSend() {
                jQuery('body').addClass('gearvn_loading');
            },
            success: function success(response) {
                window.location.reload();
                // if( response.error ) {
                //     add_to_cart_error = true;
                // } else {
                //     window.location.reload();
                // }
                // saleAccessotiesController.accessory_refresh_fragments( response );
            },
            error: function error(response, errorStatus, errorMsg) {//console.log( response )
            },
            complete: function complete(data) {
                saleAccessotiesController.xhrRequest.abort();
                saleAccessotiesController.xhrRequest = null;
            }
        });

        // let accerories_alert_msg = '';
        // if( add_to_cart_error ) {
        //     location.reload();
        // } else {
        //     accerories_alert_msg = alert_message_success ? alert_message_success :'Sản phẩm đã được thêm thành công';
        // }
        // if( accerories_alert_msg ) {
        //     jQuery( '.electro-wc-message' ).html(accerories_alert_msg);
        // }
    },

    accessory_refresh_fragments: function accessory_refresh_fragments(response) {
        var this_page = window.location.toString();
        var fragments = response.fragments;
        var cart_hash = response.cart_hash;

        // Block fragments class
        if (fragments) {
            jQuery.each(fragments, function (key) {
                jQuery(key).addClass('updating');
            });
        }

        // Replace fragments
        if (fragments) {
            jQuery.each(fragments, function (key, value) {
                jQuery(key).replaceWith(value);
            });
        }

        // Cart page elements
        jQuery('.shop_table.cart').load(this_page + ' .shop_table.cart:eq(0) > *', function () {

            jQuery('.shop_table.cart').stop(true).css('opacity', '1').unblock();

            jQuery(document.body).trigger('cart_page_refreshed');
        });

        jQuery('.cart_totals').load(this_page + ' .cart_totals:eq(0) > *', function () {
            jQuery('.cart_totals').stop(true).css('opacity', '1').unblock();
        });
    }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL3RobnMtc2FsZS1hY2Nlc3Nvcmllcy9wcml2YXRlL2phdmFzY3JpcHRzL3N0b3JlZnJvbnQvYXBwLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsInNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIiLCJuZXdQcm9kdWN0U2VsZWN0ZWQiLCJrZXlTZWxlY3RlZCIsInByb2R1Y3RJZFNlbGVjdGVkIiwicGFyZW50U2VsZWN0ZWQiLCJ4aHJSZXF1ZXN0IiwiaW5pdCIsImUiLCJkYXRhX25hbWUiLCJwYXJlbnQiLCJzaG93UG9wdXBDaG9vc2VQcm9kdWN0IiwicHJvZHVjdFNhbGVBY2Nlc3NvcmllcyIsIml0ZW1zIiwiaHRtbCIsImFycktleVNlbGVjdGVkIiwiaXRlbSIsImZsYWciLCJ1cGRhdGVQcm9kdWN0U2VsZWN0ZWQiLCJwcm9kdWN0X3NlbGVjdCIsInBhcnNlSW50IiwicHJvZHVjdHMiLCJfaW5kZXhfa2V5IiwidXBkYXRlUHJpY2VUb3RhbCIsImxzdEl0ZW1zIiwidG90YWxfcHJvZHVjdCIsInRvdGFsX3ByaWNlIiwidG90YWxfZGlzY291bnQiLCJpIiwiZWxlbWVudEl0ZW0iLCJhZGRBbGxQcm9kdWN0VG9DYXJ0IiwicHJvZHVjdF9kYXRhIiwiYWRkX3RvX2NhcnRfZXJyb3IiLCJ0eXBlIiwidXJsIiwiZGF0YSIsImFjdGlvbiIsInByb2R1Y3RfZGF0YV9hZGRfdG9fY2FydCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwid2luZG93IiwiZXJyb3IiLCJjb21wbGV0ZSIsImFjY2Vzc29yeV9yZWZyZXNoX2ZyYWdtZW50cyIsInRoaXNfcGFnZSIsImZyYWdtZW50cyIsInJlc3BvbnNlIiwiY2FydF9oYXNoIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQjJDO0FBbUIvQ0MsbUJBQU8sZ0RBQTJDLENBQUM7QUFuQko7QUFxQi9DQyxzQkFBVSx3QkFBZ0I7QUFDdEJ6QztBQUNBQTtBQUNIO0FBeEI4QyxTQUFaLENBQXZDQTs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaE8wQjs7QUFtTzlCMEMsaUNBQTZCLCtDQUFxQjtBQUM5QyxZQUFJQyxZQUFZSixnQkFBaEIsUUFBZ0JBLEVBQWhCO0FBQ0EsWUFBSUssWUFBWUMsU0FBaEI7QUFDQSxZQUFJQyxZQUFZRCxTQUFoQjs7QUFFQTtBQUNBLHVCQUFpQjtBQUNiOUMsbUNBQXdCLGVBQWdCO0FBQ3BDQTtBQURKQTtBQUdIOztBQUVEO0FBQ0EsdUJBQWlCO0FBQ2JBLG1DQUF3QixzQkFBdUI7QUFDM0NBO0FBREpBO0FBR0g7O0FBRUQ7QUFDQUEsd0NBQW1DNEMsWUFBbkM1QywrQkFBOEUsWUFBVzs7QUFFckZBOztBQUVBQSxtQkFBUWdELFNBQVJoRDtBQUpKQTs7QUFPQUEsb0NBQStCNEMsWUFBL0I1QywyQkFBc0UsWUFBVztBQUM3RUE7QUFESkE7QUFHSDtBQWpRNkIsQ0FBbEMsQyIsImZpbGUiOiJ3cC1jb250ZW50L3BsdWdpbnMvdGhucy1zYWxlLWFjY2Vzc29yaWVzL2Fzc2V0cy9qcy9zYWxlLWFjY2Vzc29yaWVzLXN0b3JlZnJvbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvcGx1Z2lucy90aG5zLXNhbGUtYWNjZXNzb3JpZXMvcHJpdmF0ZS9qYXZhc2NyaXB0cy9zdG9yZWZyb250L2FwcC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxualF1ZXJ5KHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcbiAgICBpZiAoIHR5cGVvZiBwcm9kdWN0U2FsZUFjY2Vzc29yaWVzID09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBwcm9kdWN0U2VsZWN0ZWQgPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLmluaXQoKTtcbiAgICB9XG59KTtcblxuY29uc3Qgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlciA9IHtcbiAgICBuZXdQcm9kdWN0U2VsZWN0ZWQ6IG51bGwsXG4gICAga2V5U2VsZWN0ZWQgOiBudWxsLFxuICAgIHByb2R1Y3RJZFNlbGVjdGVkOiBudWxsLFxuICAgIHBhcmVudFNlbGVjdGVkOiBudWxsLFxuICAgIHhoclJlcXVlc3Q6IG51bGwsXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIubmV3UHJvZHVjdFNlbGVjdGVkID0gcHJvZHVjdFNlbGVjdGVkO1xuICAgICAgICBcbiAgICAgICAgalF1ZXJ5KCdib2R5Jykub24oJ2NsaWNrJywgJy5jaG9vc2Utc2FsZS1wcm9kdWN0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGRhdGFfbmFtZSA9IGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBqUXVlcnkodGhpcykuY2xvc2VzdCgnbGkucHJvZHVjdCcpO1xuICAgICAgICAgICAgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5wYXJlbnRTZWxlY3RlZCA9IHBhcmVudDtcbiAgICAgICAgICAgIHNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIua2V5U2VsZWN0ZWQgPSBkYXRhX25hbWU7XG4gICAgICAgICAgICBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLnNob3dQb3B1cENob29zZVByb2R1Y3QoIGRhdGFfbmFtZSApO1xuICAgICAgICB9KTtcblxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5vbignY2xpY2snLCAnLnNlbGVjdC1wcm9kdWN0LWlkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLnVwZGF0ZVByb2R1Y3RTZWxlY3RlZCh0aGlzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgalF1ZXJ5KCdib2R5Jykub24oJ2NoYW5nZScsICcucHJvZHVjdC1jaGVjaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci51cGRhdGVQcmljZVRvdGFsKCk7XG4gICAgICAgIH0gKTtcblxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5vbignY2xpY2snLCAnLmFkZC1hbGwtdG8tY2FydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5hZGRBbGxQcm9kdWN0VG9DYXJ0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeSgnYm9keScpLm9uKCdjbGljaycsICcjY2xvc2UtbW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGpRdWVyeSgnI21vZGFsU2hvd0FjY2Vzc29yaWVzJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2hvd1BvcHVwQ2hvb3NlUHJvZHVjdDogZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgIFxuICAgICAgICBmb3IoIGxldCBpbmRleCBpbiBwcm9kdWN0U2FsZUFjY2Vzc29yaWVzICkge1xuICAgICAgICAgICAgaWYgKCBwcm9kdWN0U2FsZUFjY2Vzc29yaWVzW2luZGV4XVsnbmFtZSddID09IGtleSApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBzZXQgbmFtZVxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FjY2Vzc29yaWVzLXRpdGxlJykudGV4dCgga2V5ICk7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHByb2R1Y3QgdG8gbW9kYWxcblxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IHByb2R1Y3RTYWxlQWNjZXNzb3JpZXNbaW5kZXhdWydwcm9kdWN0cyddO1xuICAgICAgICAgICAgICAgIHZhciBodG1sID0gJzx1bD4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGdldCBhcnJheSBrZXlcbiAgICAgICAgICAgICAgICB2YXIgYXJyS2V5U2VsZWN0ZWQgPSBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLm5ld1Byb2R1Y3RTZWxlY3RlZC5tYXAoIGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bJ3Byb2R1Y3RfaWQnXSB9ICApO1xuXG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaSBpbiBpdGVtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZsYWcgPSAgYXJyS2V5U2VsZWN0ZWQuaW5kZXhPZiggaXRlbVsncHJvZHVjdF9pZCddICkgPiAtMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBmbGFnICkgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5wcm9kdWN0SWRTZWxlY3RlZCA9IGl0ZW1bJ3Byb2R1Y3RfaWQnXTtcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbVsnaW1hZ2UnXX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7aXRlbVsncHJvZHVjdF9uYW1lJ119PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLWFkZC10by1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjY2Vzc29yaWVzLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3b29jb21tZXJjZS1QcmljZS1hbW91bnQgYW1vdW50XCI+JHtpdGVtWydwcm9kdWN0X3ByaWNlX2Rpc3BsYXknXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCBhbW91bnRcIj4ke2l0ZW1bJ3Byb2R1Y3Rfc2FsZV9wcmljZV9kaXNwbGF5J119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDEycHg7XCI+Jm5ic3A7KC0gJHtpdGVtWydwcm9kdWN0X3BlcmNlbnRfZGlzY291bnQnXX0lKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7IGZsYWcgPyAnJyA6ICdzZWxlY3QtcHJvZHVjdC1pZCcgfVwiIGRhdGEtcHJvZHVjdC1pZD1cIiR7aXRlbVsncHJvZHVjdF9pZCddfVwiPiR7IGZsYWcgPyAnxJBhbmcgY2jhu41uJyA6ICdDaOG7jW4gbXVhJyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBodG1sICs9ICc8L3VsPic7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYWNjZXNzb3JpZXMtbHN0LXByb2R1Y3RzJykuaHRtbCggaHRtbCApO1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnI21vZGFsU2hvd0FjY2Vzc29yaWVzJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSxcblxuICAgIHVwZGF0ZVByb2R1Y3RTZWxlY3RlZDogZnVuY3Rpb24oIGUgKSB7XG4gICAgICAgIGxldCBwcm9kdWN0X3NlbGVjdCA9IGpRdWVyeShlKS5hdHRyKCdkYXRhLXByb2R1Y3QtaWQnKTtcbiAgICAgICAgcHJvZHVjdF9zZWxlY3QgPSBwYXJzZUludChwcm9kdWN0X3NlbGVjdCk7XG4gICAgICAgIGZvciggbGV0IGluZGV4IGluIHByb2R1Y3RTYWxlQWNjZXNzb3JpZXMgKSB7XG4gICAgICAgICAgICBpZiAoIHByb2R1Y3RTYWxlQWNjZXNzb3JpZXNbaW5kZXhdWyduYW1lJ10gPT0gc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5rZXlTZWxlY3RlZCApIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdHMgPSBwcm9kdWN0U2FsZUFjY2Vzc29yaWVzW2luZGV4XVsncHJvZHVjdHMnXTtcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBpIGluIHByb2R1Y3RzICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHByb2R1Y3RzW2ldWydwcm9kdWN0X2lkJ10gPT0gcHJvZHVjdF9zZWxlY3QgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSggc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5uZXdQcm9kdWN0U2VsZWN0ZWRbc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5wcm9kdWN0SWRTZWxlY3RlZF0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfaW5kZXhfa2V5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciggbGV0IGkgaW4gc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5uZXdQcm9kdWN0U2VsZWN0ZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLm5ld1Byb2R1Y3RTZWxlY3RlZFtpXVsncHJvZHVjdF9pZCddID09IHNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIucHJvZHVjdElkU2VsZWN0ZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbmRleF9rZXkgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5uZXdQcm9kdWN0U2VsZWN0ZWRbX2luZGV4X2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3RfaWQnOiBwcm9kdWN0X3NlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncXVhbnRpdHknICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ByaWNlJyAgICAgOiBwcm9kdWN0c1tpXVsncHJvZHVjdF9wcmljZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcmljZV9kaXNjb3VudCcgICAgOiBwcm9kdWN0c1tpXVsncHJvZHVjdF9wcmljZV9kaXNjb3VudCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5rZXlTZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLnByb2R1Y3RJZFNlbGVjdGVkID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHByb2R1Y3Qgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBqUXVlcnkoIHNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIucGFyZW50U2VsZWN0ZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSggcGFyZW50LmZpbmQoJ2ltZycpWzBdICkuYXR0cignc3JjJywgcHJvZHVjdHNbaV1bJ2ltYWdlJ10gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSggcGFyZW50LmZpbmQoJ2gyJylbMF0gKS50ZXh0KCBwcm9kdWN0c1tpXVsncHJvZHVjdF9uYW1lJ10gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSggcGFyZW50LmZpbmQoJy5hY2Nlc3Nvcmllcy1wcmljZScpWzBdICkuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGlucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3b29jb21tZXJjZS1QcmljZS1hbW91bnQgYW1vdW50XCI+JHtwcm9kdWN0c1tpXVsncHJvZHVjdF9wcmljZV9kaXNwbGF5J119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3b29jb21tZXJjZS1QcmljZS1hbW91bnQgYW1vdW50XCI+JHtwcm9kdWN0c1tpXVsncHJvZHVjdF9zYWxlX3ByaWNlX2Rpc3BsYXknXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtcIj4mbmJzcDsoLSAke3Byb2R1Y3RzW2ldWydwcm9kdWN0X3BlcmNlbnRfZGlzY291bnQnXX0lKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIudXBkYXRlUHJpY2VUb3RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbW9kYWxTaG93QWNjZXNzb3JpZXMnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZVByaWNlVG90YWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbHN0SXRlbXMgPSBqUXVlcnkoJyNzYWxlLWFjY2Vzc29yaWVzLWxzdC1wcm9kdWN0JykuZmluZCgnbGknKTtcbiAgICAgICAgdmFyIHRvdGFsX3Byb2R1Y3QgPSAwLFxuICAgICAgICAgICAgdG90YWxfcHJpY2UgPSAwLFxuICAgICAgICAgICAgdG90YWxfZGlzY291bnQgPSAwO1xuXG4gICAgICAgIGZvciggbGV0IGk9IDAgOyBpIDwgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5uZXdQcm9kdWN0U2VsZWN0ZWQubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBpZiAoIGxzdEl0ZW1zW2ldICkge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci5uZXdQcm9kdWN0U2VsZWN0ZWRbaV07XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRJdGVtID0galF1ZXJ5KCBsc3RJdGVtc1tpXSApO1xuXG4gICAgICAgICAgICAgICAgaWYoIGVsZW1lbnRJdGVtLmZpbmQoJy5wcm9kdWN0LWNoZWNrJykgJiYgZWxlbWVudEl0ZW0uZmluZCgnLnByb2R1Y3QtY2hlY2snKS5sZW5ndGggPT0gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhalF1ZXJ5KCBlbGVtZW50SXRlbS5maW5kKCcucHJvZHVjdC1jaGVjaycpWzBdICkuaXMoXCI6Y2hlY2tlZFwiKSApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG90YWxfcHJvZHVjdCsrO1xuICAgICAgICAgICAgICAgIHRvdGFsX3ByaWNlICs9IHBhcnNlSW50KGl0ZW1bJ3ByaWNlJ10pO1xuICAgICAgICAgICAgICAgIHRvdGFsX2Rpc2NvdW50ICs9IHBhcnNlSW50KGl0ZW1bJ3ByaWNlX2Rpc2NvdW50J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGh0bWwgPSBgPGg2PlThu5VuZyB0aeG7gW48L2g2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG90YWwtcHJpY2UtaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid29vY29tbWVyY2UtUHJpY2UtYW1vdW50IGFtb3VudFwiPiR7dG90YWxfcHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIi5cIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3b29jb21tZXJjZS1QcmljZS1jdXJyZW5jeVN5bWJvbFwiPuKCqzwvc3Bhbj48L3NwYW4+PC9zcGFuPiBjaG8gPHNwYW4gY2xhc3M9XCJ0b3RhbC1wcm9kdWN0c1wiPiR7dG90YWxfcHJvZHVjdH08L3NwYW4+IHPhuqNuIHBo4bqpbVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY2Vzc29yaWVzLWFkZC1hbGwtdG8tY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzaW5nbGVfYWRkX3RvX2NhcnRfYnV0dG9uIGJ1dHRvbiBidG4gYnRuLXByaW1hcnkgYWRkLWFsbC10by1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVhICR7dG90YWxfcHJvZHVjdH0gc+G6o24gcGjhuqltPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRp4bq/dCBraeG7h20gPHNwYW4gY2xhc3M9XCJ3b29jb21tZXJjZS1QcmljZS1hbW91bnQgYW1vdW50XCI+JHt0b3RhbF9kaXNjb3VudC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLlwiKX08c3BhbiBjbGFzcz1cIndvb2NvbW1lcmNlLVByaWNlLWN1cnJlbmN5U3ltYm9sXCI+4oKrPC9zcGFuPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgalF1ZXJ5KCcjdG90YWwtYWRkLWFsbC10by1jYXJ0JykuaHRtbCggaHRtbCApO1xuICAgIH0sXG5cbiAgICBhZGRBbGxQcm9kdWN0VG9DYXJ0OiBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiAoIHNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIueGhyUmVxdWVzdCAhPSBudWxsICkgcmV0dXJuO1xuICAgICAgICB2YXIgbHN0SXRlbXMgPSBqUXVlcnkoJyNzYWxlLWFjY2Vzc29yaWVzLWxzdC1wcm9kdWN0JykuZmluZCgnbGknKTtcbiAgICAgICAgXG4gICAgICAgIHZhciBwcm9kdWN0X2RhdGEgPSAnJztcbiAgICAgICAgZm9yKCBsZXQgaT0gMCA7IGkgPCBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLm5ld1Byb2R1Y3RTZWxlY3RlZC5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGlmICggbHN0SXRlbXNbaV0gKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLm5ld1Byb2R1Y3RTZWxlY3RlZFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEl0ZW0gPSBqUXVlcnkoIGxzdEl0ZW1zW2ldICk7XG5cbiAgICAgICAgICAgICAgICBpZiggZWxlbWVudEl0ZW0uZmluZCgnLnByb2R1Y3QtY2hlY2snKSAmJiBlbGVtZW50SXRlbS5maW5kKCcucHJvZHVjdC1jaGVjaycpLmxlbmd0aCA9PSAxICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFqUXVlcnkoIGVsZW1lbnRJdGVtLmZpbmQoJy5wcm9kdWN0LWNoZWNrJylbMF0gKS5pcyhcIjpjaGVja2VkXCIpICkgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpZiAoIHByb2R1Y3RfZGF0YSAhPSAnJyApIHByb2R1Y3RfZGF0YSArPSAnLCc7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhICs9IGl0ZW1bJ3Byb2R1Y3RfaWQnXSArICdfJyArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkZF90b19jYXJ0X2Vycm9yID0gZmFsc2U7XG4gICAgICAgIHNhbGVBY2Nlc3NvdGllc0NvbnRyb2xsZXIueGhyUmVxdWVzdCA9IGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgdXJsOiBnZWFydm5fYWNjZXNzcmllc19hamF4LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2luc2VydF9tdWx0aXBsZV9wcm9kdWN0c190b19jYXJ0JyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2RhdGFfYWRkX3RvX2NhcnQ6IHByb2R1Y3RfZGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnZ2VhcnZuX2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgLy8gaWYoIHJlc3BvbnNlLmVycm9yICkge1xuICAgICAgICAgICAgICAgIC8vICAgICBhZGRfdG9fY2FydF9lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBzYWxlQWNjZXNzb3RpZXNDb250cm9sbGVyLmFjY2Vzc29yeV9yZWZyZXNoX2ZyYWdtZW50cyggcmVzcG9uc2UgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHsvL2NvbnNvbGUubG9nKCByZXNwb25zZSApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci54aHJSZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgICAgICAgICAgc2FsZUFjY2Vzc290aWVzQ29udHJvbGxlci54aHJSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgYWNjZXJvcmllc19hbGVydF9tc2cgPSAnJztcbiAgICAgICAgLy8gaWYoIGFkZF90b19jYXJ0X2Vycm9yICkge1xuICAgICAgICAvLyAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBhY2Nlcm9yaWVzX2FsZXJ0X21zZyA9IGFsZXJ0X21lc3NhZ2Vfc3VjY2VzcyA/IGFsZXJ0X21lc3NhZ2Vfc3VjY2VzcyA6J1PhuqNuIHBo4bqpbSDEkcOjIMSRxrDhu6NjIHRow6ptIHRow6BuaCBjw7RuZyc7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoIGFjY2Vyb3JpZXNfYWxlcnRfbXNnICkge1xuICAgICAgICAvLyAgICAgalF1ZXJ5KCAnLmVsZWN0cm8td2MtbWVzc2FnZScgKS5odG1sKGFjY2Vyb3JpZXNfYWxlcnRfbXNnKTtcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBhY2Nlc3NvcnlfcmVmcmVzaF9mcmFnbWVudHM6IGZ1bmN0aW9uICggcmVzcG9uc2UgKXtcbiAgICAgICAgdmFyIHRoaXNfcGFnZSA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpO1xuICAgICAgICB2YXIgZnJhZ21lbnRzID0gcmVzcG9uc2UuZnJhZ21lbnRzO1xuICAgICAgICB2YXIgY2FydF9oYXNoID0gcmVzcG9uc2UuY2FydF9oYXNoO1xuXG4gICAgICAgIC8vIEJsb2NrIGZyYWdtZW50cyBjbGFzc1xuICAgICAgICBpZiAoIGZyYWdtZW50cyApIHtcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKCBmcmFnbWVudHMsIGZ1bmN0aW9uKCBrZXkgKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCBrZXkgKS5hZGRDbGFzcyggJ3VwZGF0aW5nJyApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBsYWNlIGZyYWdtZW50c1xuICAgICAgICBpZiAoIGZyYWdtZW50cyApIHtcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKCBmcmFnbWVudHMsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSgga2V5ICkucmVwbGFjZVdpdGgoIHZhbHVlICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhcnQgcGFnZSBlbGVtZW50c1xuICAgICAgICBqUXVlcnkoICcuc2hvcF90YWJsZS5jYXJ0JyApLmxvYWQoIHRoaXNfcGFnZSArICcgLnNob3BfdGFibGUuY2FydDplcSgwKSA+IConLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgalF1ZXJ5KCAnLnNob3BfdGFibGUuY2FydCcgKS5zdG9wKCB0cnVlICkuY3NzKCAnb3BhY2l0eScsICcxJyApLnVuYmxvY2soKTtcblxuICAgICAgICAgICAgalF1ZXJ5KCBkb2N1bWVudC5ib2R5ICkudHJpZ2dlciggJ2NhcnRfcGFnZV9yZWZyZXNoZWQnICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeSggJy5jYXJ0X3RvdGFscycgKS5sb2FkKCB0aGlzX3BhZ2UgKyAnIC5jYXJ0X3RvdGFsczplcSgwKSA+IConLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGpRdWVyeSggJy5jYXJ0X3RvdGFscycgKS5zdG9wKCB0cnVlICkuY3NzKCAnb3BhY2l0eScsICcxJyApLnVuYmxvY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=