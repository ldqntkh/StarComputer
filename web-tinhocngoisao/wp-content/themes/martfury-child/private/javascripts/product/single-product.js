
'use strict';
const $ = jQuery;
const thns_home_ajax= '/wp-admin/admin-ajax.php';
var singleProduct = {
    xhr: null,
    init: function () {
        singleProduct.compareProduct();

        if( window.location.href.indexOf('#cmt-lst-tags') ) {
            $('.tab-reviews').trigger('click');
            // document.getElementById("cmt-lst-tags").scrollIntoView();
            // $('#cmt-lst-tags').scrollIntoView();
            // $('body').animate({
            //     scrollTop: $("#cmt-lst-tags").offset().top
            // }, 2000);
        }
    },

    compareProduct: function () {
        if (
            typeof product_id === "undefined" ||
            typeof product_type_id === "undefined"
        )
            return;
        $("body").on("keyup", "#input-product-compare", function (e) {
            if (singleProduct.xhr != null) singleProduct.xhr.abort();
            var inputValue = $(this).val();
            if (inputValue !== "") {
                var $search_suggestions = $("#search-suggestions");
                $search_suggestions.css({
                    display: "block"
                });
                $search_suggestions.html(`<p>Đang tìm kiếm....</p>`);
    
                singleProduct.xhr = $.ajax({
                    type: "post",
                    dataType: "json",
                    url: thns_home_ajax,
                    data: {
                        action: "load_product_compare",
                        product_id: product_id,
                        product_type_id: product_type_id,
                        search_name: inputValue
                    },
                    success: function (response) {
                        $search_suggestions = $("#search-suggestions");
    
                        var data = response.data;
                        if (!data || data.length == 0) {
                            $search_suggestions.css({
                                display: "block"
                            });
                            $search_suggestions.html(`<p>Không tìm thấy sản phẩm phù hợp!</p>`);
                        } else {
                            let html = "<ul>";
                            for (let i in response.data) {
                                html +=
                                    '<li><a target="_blank" href="' +
                                    response.data[i].link +
                                    '">' +
                                    response.data[i].name +
                                    "<a></li>";
                            }
                            html += "</ul>";
                            $search_suggestions.css({
                                display: "block"
                            });
                            $search_suggestions.html(html);
                        }
                    },
                    error: function (response, errorStatus, errorMsg) {
                        $search_suggestions.css({
                            display: "none"
                        });
                        $search_suggestions.html("");
                        if (errorStatus) {
                            console.log(
                                "The error status is: " +
                                errorStatus +
                                " and the error message is: " +
                                errorMsg
                            );
                        }
                    }
                });
                return false;
            }
        });
    
        $("body").on("blur", "#input-product-compare", function (e) {
            setTimeout(function () {
                var $search_suggestions = $("#search-suggestions");
                $search_suggestions.css({
                    display: "none"
                });
                $search_suggestions.html("");
            }, 200)
        });
    
        
    }
}

module.exports = singleProduct;
