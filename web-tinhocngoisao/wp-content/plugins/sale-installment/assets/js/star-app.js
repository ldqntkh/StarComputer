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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/sale-installment/private/javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/plugins/sale-installment/private/javascripts/app.js":
/*!************************************************************************!*\
  !*** ./wp-content/plugins/sale-installment/private/javascripts/app.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = jQuery;

var bank = {
    xhr: null,
    init: function init() {
        bank.addNewbank();
        bank.updatebank();
        bank.removebank();
        bank.updateSubBank();
        bank.addNewInstallment();
        bank.deleteInstallment();
    },

    addNewbank: function addNewbank() {
        $('#bank-data').on('submit', function (e) {
            e.preventDefault();

            if (bank.xhr !== null) return;

            var bank_name = $('#bank-name').val().trim();
            var bank_type = $('#bank-type').val().trim();
            var bank_img = $('#bank_thumbnail_id').val().trim();
            var bank_index = $('#bank-index').val().trim();

            if (!bank_name) {
                alert('Vui lòng nhập tên ngân hàng!');
                return false;
            }

            if (!bank_type) {
                alert('Vui lòng chọn trạng thái ngân hàng!');
                return false;
            }

            if (!bank_img) {
                alert('Vui lòng chọn hình ảnh ngân hàng!');
                return false;
            }

            if (!bank_index) {
                alert('Vui lòng nhập độ ưu tiên ngân hàng!');
                return false;
            }

            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'bank_addnew',
                    bank_name: bank_name,
                    bank_type: bank_type,
                    bank_img: bank_img,
                    bank_index: bank_index
                },
                type: 'POST',
                beforeSend: function beforeSend() {
                    $('#bank-data .spinner').removeClass('hide');
                },
                success: function success(response) {
                    if (response.success) {
                        if (response.data.status) {
                            $('#bank-name').val('');
                            $('#bank-type').val('');
                            $('#bank_thumbnail_id').val('');
                            $('#bank-index').val('');
                            $('#bank_thumbnail').find('img').attr('src', thumb_image);
                            alert('Thêm mới ngân hàng thành công!');

                            bank.getListbank();
                        } else {
                            alert(response.data.error);
                        }
                    }

                    $('#bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                },
                error: function error(response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }

                    $('#bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                }
            });
        });
    },

    updatebank: function updatebank() {
        $('#bank-data-update').on('submit', function (e) {
            e.preventDefault();

            if (bank.xhr !== null) return;

            var bank_id = $('#bank-id').val().trim();
            var bank_name = $('#bank-name').val().trim();
            var bank_type = $('#bank-type').val().trim();
            var bank_img = $('#bank_thumbnail_id').val().trim();
            var bank_index = $('#bank-index').val().trim();

            if (!bank_name) {
                alert('Vui lòng nhập tên ngân hàng!');
                return false;
            }

            if (!bank_type) {
                alert('Vui lòng chọn trạng thái ngân hàng!');
                return false;
            }

            if (!bank_img) {
                alert('Vui lòng chọn hình ảnh ngân hàng!');
                return false;
            }

            if (!bank_index) {
                alert('Vui lòng nhập độ ưu tiên ngân hàng!');
                return false;
            }

            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'bank_update',
                    bank_id: bank_id,
                    bank_name: bank_name,
                    bank_type: bank_type,
                    bank_img: bank_img,
                    bank_index: bank_index
                },
                type: 'POST',
                beforeSend: function beforeSend() {
                    $('#bank-data-update .spinner').removeClass('hide');
                },
                success: function success(response) {
                    if (response.success) {
                        if (response.data.status) {
                            alert('Cập nhật ngân hàng thành công!');
                            window.location.href = bank_page;
                        } else {
                            alert(response.data.error);
                        }
                    }

                    $('#bank-data-update .spinner').addClass('hide');
                    bank.xhr = null;
                },
                error: function error(response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }

                    $('#bank-data-update .spinner').addClass('hide');
                    bank.xhr = null;
                }
            });
        });
    },

    removebank: function removebank() {
        $('body').on('click', '.remove-bank', function (e) {
            if (bank.xhr !== null) return;
            var that = this;
            var title = $(that).attr('data-title');
            var r = confirm("Xóa ngân hàng " + title + "?");
            if (r == true) {
                var _that = this;
                var id = $(_that).attr('data-id');

                if (!id) return false;

                bank.xhr = $.ajax({
                    url: bank_ajax_url,
                    data: {
                        action: 'bank_remove',
                        bank_id: id
                    },
                    type: 'POST',
                    beforeSend: function beforeSend() {
                        // $('#bank-data .spinner').removeClass('hide');
                    },
                    success: function success(response) {
                        if (response.success) {
                            if (response.data.status) {
                                //
                                $(_that).closest('tr').remove();
                                alert('Đã xóa ngân hàng ' + title);
                            } else {
                                alert(response.data.error);
                            }
                        }
                        bank.xhr = null;
                    },
                    error: function error(response, errorStatus, errorMsg) {
                        if (errorStatus) {
                            console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                        }
                        bank.xhr = null;
                    }
                });
            }
        });
    },

    getListbank: function getListbank() {
        $.ajax({
            url: bank_ajax_url,
            data: {
                action: 'list_banks'
            },
            type: 'GET',
            success: function success(response) {
                if (response.success) {
                    $('#list-banks #the-list').html(response.data.data);
                }
            },
            error: function error(response, errorStatus, errorMsg) {
                if (errorStatus) {
                    console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                }
            }
        });
    },

    updateSubBank: function updateSubBank() {
        $('#sub-bank-data').on('submit', function (e) {
            e.preventDefault();
            if (bank.xhr !== null) return;

            var visa = $("#bank-visa").is(":checked") ? 1 : 0,
                mastercard = $("#bank-mastercard").is(":checked") ? 1 : 0,
                jcb = $("#bank-jcb").is(":checked") ? 1 : 0;
            var bank_id = $('#bank-id').val().trim();
            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'bank_insert_sub',
                    bank_id: bank_id,
                    visa: visa,
                    mastercard: mastercard,
                    jcb: jcb
                },
                type: 'POST',
                beforeSend: function beforeSend() {
                    $('#sub-bank-data .spinner').removeClass('hide');
                },
                success: function success(response) {
                    if (response.success) {
                        alert('Cập nhật thẻ ngân hàng thành công!');
                    } else {
                        alert('Không thể cập nhật thẻ ngân hàng!');
                    }

                    $('#sub-bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                },
                error: function error(response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }

                    $('#sub-bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                }
            });
        });
    },

    addNewInstallment: function addNewInstallment() {
        $('#installment-data').on('submit', function (e) {
            e.preventDefault();

            if (bank.xhr !== null) return;
            var bank_id = $('#bank-id').val().trim();

            var month = $('#installment-month').val().trim();
            var min_price = $('#installment-minprice').val().trim();
            var prepaid_percentage = $('#installment-prepaid').val().trim();
            var fee = $('#installment-fee').val().trim();
            var docs_require = $('#installment-docs').val().trim();

            if (!month) {
                alert('Vui lòng nhập số tháng trả góp!');
                return false;
            }

            if (!min_price) {
                alert('Vui lòng nhập số tiền tối thiểu cho phép trả góp!');
                return false;
            } else if (parseFloat(min_price) % 1000 !== 0) {
                alert('Số tiền phải là bội của 1000.');
                return false;
            }

            if (!prepaid_percentage || parseFloat(prepaid_percentage) < 0 || parseFloat(prepaid_percentage) > 80) {
                alert('Vui lòng nhập số tiền trả trước tối thiểu.');
                return false;
            }

            if (!fee || parseFloat(fee) < 0 || parseFloat(fee) > 100) {
                alert('Vui lòng nhập mức phí trả góp!');
                return false;
            }

            if (!docs_require) {
                alert('Vui lòng nhập giấy tờ yêu cầu!');
                return false;
            }

            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'installment_addnew',
                    bank_id: bank_id,
                    month: month,
                    min_price: min_price,
                    prepaid_percentage: prepaid_percentage,
                    fee: fee,
                    docs_require: docs_require
                },
                type: 'POST',
                beforeSend: function beforeSend() {
                    $('#installment-data .spinner').removeClass('hide');
                },
                success: function success(response) {
                    if (response.success) {
                        if (response.data.status) {
                            $('#installment-month').val('');
                            $('#installment-minprice').val('');
                            $('#installment-prepaid').val('');
                            $('#installment-fee').val('');
                            $('#installment-docs').val('');
                            bank.getListInstallment();
                            alert('Thêm mới tháng trả góp thành công!');

                            //bank.getListInstallment();
                        } else {
                            alert(response.data.error);
                        }
                    }

                    $('#installment-data .spinner').addClass('hide');
                    bank.xhr = null;
                },
                error: function error(response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }

                    $('#installment-data .spinner').addClass('hide');
                    bank.xhr = null;
                }
            });
        });
    },

    deleteInstallment: function deleteInstallment() {
        $('body').on('click', '.delete-installment', function (e) {
            e.preventDefault();

            if (bank.xhr !== null) return;
            var bank_id = $('#bank-id').val().trim();
            var month = $(this).attr('data-id');
            var that = $(this);
            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'installment_delete',
                    bank_id: bank_id,
                    month: month
                },
                type: 'POST',
                beforeSend: function beforeSend() {
                    $(that.find('.spinner')).removeClass('hide');
                },
                success: function success(response) {
                    if (response.success) {
                        if (response.data.status) {
                            alert('Đã xóa dữ liệu!');
                            $(that.closest('tr')).remove();
                        } else {
                            alert(response.data.error);
                        }
                    }

                    $(that.find('.spinner')).addClass('hide');
                    bank.xhr = null;
                },
                error: function error(response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }

                    $(that.find('.spinner')).addClass('hide');
                    bank.xhr = null;
                }
            });
        });
    },

    getListInstallment: function getListInstallment() {
        var bank_id = $('#bank-id').val().trim();
        $.ajax({
            url: bank_ajax_url,
            data: {
                action: 'installment_getlist',
                bank_id: bank_id
            },
            type: 'GET',
            success: function success(response) {
                if (response.success) {
                    $('#list-installment #the-list').html(response.data.data);
                }
            },
            error: function error(response, errorStatus, errorMsg) {
                if (errorStatus) {
                    console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                }
            }
        });
    }
};

jQuery(document).ready(function () {
    bank.init();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL3NhbGUtaW5zdGFsbG1lbnQvcHJpdmF0ZS9qYXZhc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOlsiJCIsImJhbmsiLCJ4aHIiLCJpbml0IiwiYWRkTmV3YmFuayIsImUiLCJiYW5rX25hbWUiLCJiYW5rX3R5cGUiLCJiYW5rX2ltZyIsImJhbmtfaW5kZXgiLCJhbGVydCIsInVybCIsImRhdGEiLCJhY3Rpb24iLCJ0eXBlIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsInVwZGF0ZWJhbmsiLCJiYW5rX2lkIiwid2luZG93IiwicmVtb3ZlYmFuayIsInRoYXQiLCJ0aXRsZSIsInIiLCJjb25maXJtIiwiaWQiLCJnZXRMaXN0YmFuayIsInVwZGF0ZVN1YkJhbmsiLCJ2aXNhIiwibWFzdGVyY2FyZCIsImpjYiIsImFkZE5ld0luc3RhbGxtZW50IiwibW9udGgiLCJtaW5fcHJpY2UiLCJwcmVwYWlkX3BlcmNlbnRhZ2UiLCJmZWUiLCJkb2NzX3JlcXVpcmUiLCJwYXJzZUZsb2F0IiwiZGVsZXRlSW5zdGFsbG1lbnQiLCJnZXRMaXN0SW5zdGFsbG1lbnQiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LFlBQVc7QUFDOUIxQztBQURKMEMsRyIsImZpbGUiOiJ3cC1jb250ZW50L3BsdWdpbnMvc2FsZS1pbnN0YWxsbWVudC9hc3NldHMvanMvc3Rhci1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dwLWNvbnRlbnQvcGx1Z2lucy9zYWxlLWluc3RhbGxtZW50L3ByaXZhdGUvamF2YXNjcmlwdHMvYXBwLmpzXCIpO1xuIiwiY29uc3QgJCA9IGpRdWVyeTtcblxuXG5jb25zdCBiYW5rID0ge1xuICAgIHhocjogbnVsbCxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFuay5hZGROZXdiYW5rKCk7XG4gICAgICAgIGJhbmsudXBkYXRlYmFuaygpO1xuICAgICAgICBiYW5rLnJlbW92ZWJhbmsoKTtcbiAgICAgICAgYmFuay51cGRhdGVTdWJCYW5rKCk7XG4gICAgICAgIGJhbmsuYWRkTmV3SW5zdGFsbG1lbnQoKTtcbiAgICAgICAgYmFuay5kZWxldGVJbnN0YWxsbWVudCgpO1xuICAgIH0sXG5cbiAgICBhZGROZXdiYW5rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI2JhbmstZGF0YScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICggYmFuay54aHIgIT09IG51bGwgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBiYW5rX25hbWUgPSAkKCcjYmFuay1uYW1lJykudmFsKCkudHJpbSgpO1xuICAgICAgICAgICAgbGV0IGJhbmtfdHlwZSA9ICQoJyNiYW5rLXR5cGUnKS52YWwoKS50cmltKCk7XG4gICAgICAgICAgICBsZXQgYmFua19pbWcgPSAkKCcjYmFua190aHVtYm5haWxfaWQnKS52YWwoKS50cmltKCk7XG4gICAgICAgICAgICBsZXQgYmFua19pbmRleCA9ICQoJyNiYW5rLWluZGV4JykudmFsKCkudHJpbSgpO1xuXG4gICAgICAgICAgICBpZiAoICFiYW5rX25hbWUgKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgdMOqbiBuZ8OibiBow6BuZyEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggIWJhbmtfdHlwZSApIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnVnVpIGzDsm5nIGNo4buNbiB0cuG6oW5nIHRow6FpIG5nw6JuIGjDoG5nIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCAhYmFua19pbWcgKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Z1aSBsw7JuZyBjaOG7jW4gaMOsbmgg4bqjbmggbmfDom4gaMOgbmchJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoICFiYW5rX2luZGV4ICkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdWdWkgbMOybmcgbmjhuq1wIMSR4buZIMawdSB0acOqbiBuZ8OibiBow6BuZyEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJhbmsueGhyID0gJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGJhbmtfYWpheF91cmwsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdiYW5rX2FkZG5ldycsXG4gICAgICAgICAgICAgICAgICAgIGJhbmtfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYmFua190eXBlLFxuICAgICAgICAgICAgICAgICAgICBiYW5rX2ltZyxcbiAgICAgICAgICAgICAgICAgICAgYmFua19pbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2JhbmstZGF0YSAuc3Bpbm5lcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UuZGF0YS5zdGF0dXMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2JhbmstbmFtZScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2JhbmstdHlwZScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2JhbmtfdGh1bWJuYWlsX2lkJykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYmFuay1pbmRleCcpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCggJyNiYW5rX3RodW1ibmFpbCcgKS5maW5kKCAnaW1nJyApLmF0dHIoICdzcmMnLCB0aHVtYl9pbWFnZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUaMOqbSBt4bubaSBuZ8OibiBow6BuZyB0aMOgbmggY8O0bmchJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5rLmdldExpc3RiYW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCByZXNwb25zZS5kYXRhLmVycm9yICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKCcjYmFuay1kYXRhIC5zcGlubmVyJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFuay54aHIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSwgZXJyb3JTdGF0dXMsIGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvclN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBlcnJvciBzdGF0dXMgaXM6ICcgKyBlcnJvclN0YXR1cyArICcgYW5kIHRoZSBlcnJvciBtZXNzYWdlIGlzOiAnICsgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnI2JhbmstZGF0YSAuc3Bpbm5lcicpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGJhbmsueGhyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdXBkYXRlYmFuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNiYW5rLWRhdGEtdXBkYXRlJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCBiYW5rLnhociAhPT0gbnVsbCApIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IGJhbmtfaWQgPSAkKCcjYmFuay1pZCcpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBiYW5rX25hbWUgPSAkKCcjYmFuay1uYW1lJykudmFsKCkudHJpbSgpO1xuICAgICAgICAgICAgbGV0IGJhbmtfdHlwZSA9ICQoJyNiYW5rLXR5cGUnKS52YWwoKS50cmltKCk7XG4gICAgICAgICAgICBsZXQgYmFua19pbWcgPSAkKCcjYmFua190aHVtYm5haWxfaWQnKS52YWwoKS50cmltKCk7XG4gICAgICAgICAgICBsZXQgYmFua19pbmRleCA9ICQoJyNiYW5rLWluZGV4JykudmFsKCkudHJpbSgpO1xuXG4gICAgICAgICAgICBpZiAoICFiYW5rX25hbWUgKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgdMOqbiBuZ8OibiBow6BuZyEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggIWJhbmtfdHlwZSApIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnVnVpIGzDsm5nIGNo4buNbiB0cuG6oW5nIHRow6FpIG5nw6JuIGjDoG5nIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCAhYmFua19pbWcgKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Z1aSBsw7JuZyBjaOG7jW4gaMOsbmgg4bqjbmggbmfDom4gaMOgbmchJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoICFiYW5rX2luZGV4ICkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdWdWkgbMOybmcgbmjhuq1wIMSR4buZIMawdSB0acOqbiBuZ8OibiBow6BuZyEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJhbmsueGhyID0gJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGJhbmtfYWpheF91cmwsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdiYW5rX3VwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIGJhbmtfaWQsXG4gICAgICAgICAgICAgICAgICAgIGJhbmtfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYmFua190eXBlLFxuICAgICAgICAgICAgICAgICAgICBiYW5rX2ltZyxcbiAgICAgICAgICAgICAgICAgICAgYmFua19pbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2JhbmstZGF0YS11cGRhdGUgLnNwaW5uZXInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLmRhdGEuc3RhdHVzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdD4bqtcCBuaOG6rXQgbmfDom4gaMOgbmcgdGjDoG5oIGPDtG5nIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFua19wYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCggcmVzcG9uc2UuZGF0YS5lcnJvciApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnI2JhbmstZGF0YS11cGRhdGUgLnNwaW5uZXInKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBiYW5rLnhociA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIGVycm9yIHN0YXR1cyBpczogJyArIGVycm9yU3RhdHVzICsgJyBhbmQgdGhlIGVycm9yIG1lc3NhZ2UgaXM6ICcgKyBlcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKCcjYmFuay1kYXRhLXVwZGF0ZSAuc3Bpbm5lcicpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGJhbmsueGhyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlYmFuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnJlbW92ZS1iYW5rJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKCBiYW5rLnhociAhPT0gbnVsbCApIHJldHVybjtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGxldCB0aXRsZSA9ICQodGhhdCkuYXR0cignZGF0YS10aXRsZScpO1xuICAgICAgICAgICAgdmFyIHIgPSBjb25maXJtKFwiWMOzYSBuZ8OibiBow6BuZyBcIiArIHRpdGxlICsgXCI/XCIpO1xuICAgICAgICAgICAgaWYgKHIgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSAkKHRoYXQpLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoICFpZCApIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgICBiYW5rLnhociA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYmFua19hamF4X3VybCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYmFua19yZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFua19pZDogaWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkKCcjYmFuay1kYXRhIC5zcGlubmVyJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UuZGF0YS5zdGF0dXMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhhdCkuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ8SQw6MgeMOzYSBuZ8OibiBow6BuZyAnICsgdGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCByZXNwb25zZS5kYXRhLmVycm9yICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFuay54aHIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvclN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgZXJyb3Igc3RhdHVzIGlzOiAnICsgZXJyb3JTdGF0dXMgKyAnIGFuZCB0aGUgZXJyb3IgbWVzc2FnZSBpczogJyArIGVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbmsueGhyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldExpc3RiYW5rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogYmFua19hamF4X3VybCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdsaXN0X2JhbmtzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3QtYmFua3MgI3RoZS1saXN0JykuaHRtbCggcmVzcG9uc2UuZGF0YS5kYXRhICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UsIGVycm9yU3RhdHVzLCBlcnJvck1zZykge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvclN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIGVycm9yIHN0YXR1cyBpczogJyArIGVycm9yU3RhdHVzICsgJyBhbmQgdGhlIGVycm9yIG1lc3NhZ2UgaXM6ICcgKyBlcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdXBkYXRlU3ViQmFuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNzdWItYmFuay1kYXRhJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICggYmFuay54aHIgIT09IG51bGwgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCB2aXNhID0gJChcIiNiYW5rLXZpc2FcIikuaXMoXCI6Y2hlY2tlZFwiKSA/IDEgOiAwLFxuICAgICAgICAgICAgICAgIG1hc3RlcmNhcmQgPSAkKFwiI2JhbmstbWFzdGVyY2FyZFwiKS5pcyhcIjpjaGVja2VkXCIpID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgamNiID0gJChcIiNiYW5rLWpjYlwiKS5pcyhcIjpjaGVja2VkXCIpID8gMSA6IDA7XG4gICAgICAgICAgICBsZXQgYmFua19pZCA9ICQoJyNiYW5rLWlkJykudmFsKCkudHJpbSgpO1xuICAgICAgICAgICAgYmFuay54aHIgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYmFua19hamF4X3VybCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2JhbmtfaW5zZXJ0X3N1YicsXG4gICAgICAgICAgICAgICAgICAgIGJhbmtfaWQsXG4gICAgICAgICAgICAgICAgICAgIHZpc2EsXG4gICAgICAgICAgICAgICAgICAgIG1hc3RlcmNhcmQsXG4gICAgICAgICAgICAgICAgICAgIGpjYlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Yi1iYW5rLWRhdGEgLnNwaW5uZXInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnQ+G6rXAgbmjhuq10IHRo4bq7IG5nw6JuIGjDoG5nIHRow6BuaCBjw7RuZyEnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdLaMO0bmcgdGjhu4MgY+G6rXAgbmjhuq10IHRo4bq7IG5nw6JuIGjDoG5nIScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Yi1iYW5rLWRhdGEgLnNwaW5uZXInKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBiYW5rLnhociA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIGVycm9yIHN0YXR1cyBpczogJyArIGVycm9yU3RhdHVzICsgJyBhbmQgdGhlIGVycm9yIG1lc3NhZ2UgaXM6ICcgKyBlcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKCcjc3ViLWJhbmstZGF0YSAuc3Bpbm5lcicpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGJhbmsueGhyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFkZE5ld0luc3RhbGxtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI2luc3RhbGxtZW50LWRhdGEnKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIGJhbmsueGhyICE9PSBudWxsICkgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IGJhbmtfaWQgPSAkKCcjYmFuay1pZCcpLnZhbCgpLnRyaW0oKTtcblxuICAgICAgICAgICAgbGV0IG1vbnRoID0gJCgnI2luc3RhbGxtZW50LW1vbnRoJykudmFsKCkudHJpbSgpO1xuICAgICAgICAgICAgbGV0IG1pbl9wcmljZSA9ICQoJyNpbnN0YWxsbWVudC1taW5wcmljZScpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBwcmVwYWlkX3BlcmNlbnRhZ2UgPSAkKCcjaW5zdGFsbG1lbnQtcHJlcGFpZCcpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBmZWUgPSAkKCcjaW5zdGFsbG1lbnQtZmVlJykudmFsKCkudHJpbSgpO1xuICAgICAgICAgICAgbGV0IGRvY3NfcmVxdWlyZSA9ICQoJyNpbnN0YWxsbWVudC1kb2NzJykudmFsKCkudHJpbSgpO1xuXG4gICAgICAgICAgICBpZiAoICFtb250aCApIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnVnVpIGzDsm5nIG5o4bqtcCBz4buRIHRow6FuZyB0cuG6oyBnw7NwIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCAhbWluX3ByaWNlICkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdWdWkgbMOybmcgbmjhuq1wIHPhu5EgdGnhu4FuIHThu5FpIHRoaeG7g3UgY2hvIHBow6lwIHRy4bqjIGfDs3AhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggcGFyc2VGbG9hdChtaW5fcHJpY2UpICUgMTAwMCAhPT0gMCApIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU+G7kSB0aeG7gW4gcGjhuqNpIGzDoCBi4buZaSBj4bunYSAxMDAwLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCAhcHJlcGFpZF9wZXJjZW50YWdlIHx8IHBhcnNlRmxvYXQocHJlcGFpZF9wZXJjZW50YWdlKSA8IDAgfHwgcGFyc2VGbG9hdChwcmVwYWlkX3BlcmNlbnRhZ2UpID4gODAgKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgc+G7kSB0aeG7gW4gdHLhuqMgdHLGsOG7m2MgdOG7kWkgdGhp4buDdS4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoICFmZWUgfHwgcGFyc2VGbG9hdChmZWUpIDwgMCB8fCBwYXJzZUZsb2F0KGZlZSkgPiAxMDAgKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgbeG7qWMgcGjDrSB0cuG6oyBnw7NwIScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCAhZG9jc19yZXF1aXJlICkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdWdWkgbMOybmcgbmjhuq1wIGdp4bqleSB04budIHnDqnUgY+G6p3UhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiYW5rLnhociA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiYW5rX2FqYXhfdXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnaW5zdGFsbG1lbnRfYWRkbmV3JyxcbiAgICAgICAgICAgICAgICAgICAgYmFua19pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICAgICAgICAgIG1pbl9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFpZF9wZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICAgICAgICAgIGRvY3NfcmVxdWlyZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LWRhdGEgLnNwaW5uZXInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlLmRhdGEuc3RhdHVzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1tb250aCcpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LW1pbnByaWNlJykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjaW5zdGFsbG1lbnQtcHJlcGFpZCcpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LWZlZScpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LWRvY3MnKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmsuZ2V0TGlzdEluc3RhbGxtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1Row6ptIG3hu5tpIHRow6FuZyB0cuG6oyBnw7NwIHRow6BuaCBjw7RuZyEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFuay5nZXRMaXN0SW5zdGFsbG1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoIHJlc3BvbnNlLmRhdGEuZXJyb3IgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1kYXRhIC5zcGlubmVyJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFuay54aHIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSwgZXJyb3JTdGF0dXMsIGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvclN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBlcnJvciBzdGF0dXMgaXM6ICcgKyBlcnJvclN0YXR1cyArICcgYW5kIHRoZSBlcnJvciBtZXNzYWdlIGlzOiAnICsgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LWRhdGEgLnNwaW5uZXInKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBiYW5rLnhociA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGRlbGV0ZUluc3RhbGxtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZGVsZXRlLWluc3RhbGxtZW50JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIGJhbmsueGhyICE9PSBudWxsICkgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IGJhbmtfaWQgPSAkKCcjYmFuay1pZCcpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBtb250aCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgYmFuay54aHIgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYmFua19hamF4X3VybCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2luc3RhbGxtZW50X2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGJhbmtfaWQsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoYXQuZmluZCgnLnNwaW5uZXInKSkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5kYXRhLnN0YXR1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnxJDDoyB4w7NhIGThu68gbGnhu4d1IScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhhdC5jbG9zZXN0KCd0cicpKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoIHJlc3BvbnNlLmRhdGEuZXJyb3IgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQodGhhdC5maW5kKCcuc3Bpbm5lcicpKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBiYW5rLnhociA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIGVycm9yIHN0YXR1cyBpczogJyArIGVycm9yU3RhdHVzICsgJyBhbmQgdGhlIGVycm9yIG1lc3NhZ2UgaXM6ICcgKyBlcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKHRoYXQuZmluZCgnLnNwaW5uZXInKSkuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFuay54aHIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBnZXRMaXN0SW5zdGFsbG1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYmFua19pZCA9ICQoJyNiYW5rLWlkJykudmFsKCkudHJpbSgpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBiYW5rX2FqYXhfdXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2luc3RhbGxtZW50X2dldGxpc3QnLFxuICAgICAgICAgICAgICAgIGJhbmtfaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsaXN0LWluc3RhbGxtZW50ICN0aGUtbGlzdCcpLmh0bWwoIHJlc3BvbnNlLmRhdGEuZGF0YSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBlcnJvciBzdGF0dXMgaXM6ICcgKyBlcnJvclN0YXR1cyArICcgYW5kIHRoZSBlcnJvciBtZXNzYWdlIGlzOiAnICsgZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn1cblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBiYW5rLmluaXQoKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=