$(document).ready(function($) {
    var $groupProductData = $('#group_product_data'),
        $listProductWrapper = $('.list-product-wrapper'),
        $groupProducts = $('#grouped_products'),
        $linkedProductData = $('#linked_product_data');

    $groupProducts.removeAttr('multiple');
    if ( $groupProductData.val() !== '' ) {
        var products = $groupProductData.val() !== '' ? JSON.parse($groupProductData.val()) : [];
        for (var index in products) {
            var product = products[index];
            $listProductWrapper.find('tbody').append('<tr class="product" id="product-' + index + '"></tr>');
            $('#product-' + index).append('<td>' + product.name + '</td>');
            $('#product-' + index).append('<td>' + product.quantity + '</td>');
            $('#product-' + index).append('<td class="remove">Xóa</td>');
        }
    }
    // append list product
    $linkedProductData.find('.show_if_grouped').append($('#custom-grouped-product').html());
    // bind event remove after append
    removeProduct(products);

    $('#custom-grouped-product').remove();
    $('.save_custom_product_group').off('click').on('click', function() {
        var product = {};
        var listProduct = $groupProductData.val() !== '' ? JSON.parse($groupProductData.val()) : [];
        var $groupProduct = $linkedProductData.find('#grouped_products');
        var $product = $groupProduct.find('option');
        var $quantity = $('#custom_product_quantity');

        if ( $product.length > 0 && !isProductExisted(listProduct, parseInt($groupProduct.val())) ) {
            product.productId = $groupProduct.val();
            product.name = $product.text();
            product.quantity = parseInt($quantity.val());
            listProduct.push(product);
            $groupProductData.val(JSON.stringify(listProduct));

            $groupProduct.empty();
            $quantity.val(1);

            $('.product').remove();
            for (var index in listProduct) {
                var product = listProduct[index];
                $('.list-product-wrapper').find('table').append('<tr class="product" id="product-' + index + '"></tr>');
                $('#product-' + index).append('<td>' + product.name + '</td>');
                $('#product-' + index).append('<td>' + product.quantity + '</td>');
                $('#product-' + index).append('<td class="remove" style="cursor:pointer;">Xóa</td>');

                removeProduct(listProduct);
            }
        } else {
            $groupProduct.empty();
            $quantity.val(1);
            alert('Sản phẩm đã tồn tại. Xin vui lòng nhập sản phẩm khác');
            $groupProduct.focus();
        }
    });

    $groupProducts.off('change').on('change', function() {
        $(this).find('option').not(':last').remove();
    });

    function removeProduct(listProduct) {
        $('.remove').off('click').on('click', function() {
            $(this).parent().remove();
            var index = $(this).parent().attr('id').split('-')[1];
            listProduct.splice(index, 1);
            $groupProductData.val('');
            $groupProductData.val(JSON.stringify(listProduct));
            if ($listProductWrapper.find('.product').length === 0) {
                $listProductWrapper.find('.label').addClass('hidden');
            } else {
                $listProductWrapper.find('.label').removeClass('hidden');
            }
        });
    }

    function isProductExisted(listProduct, productId) {
        var isProductExisted = false;
        if ( listProduct.length > 0 ) {
            isProductExisted = listProduct.find(product => {
                if (parseInt(product.productId) === productId) {
                    return true;
                }
            });
        }
        return isProductExisted;
    }
});