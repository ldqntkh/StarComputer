const $ = jQuery;


const brand = {
    xhr: null,
    init: function() {
        brand.addNewBrand();
        brand.updateBrand();
        brand.removeBrand();
    },

    addNewBrand: function() {
        $('#brand-data').on('submit', function(e) {
            e.preventDefault();

            if ( brand.xhr !== null ) return;

            let brand_name = $('#brand-name').val().trim();
            let brand_status = $('#brand-status').val().trim();
            let brand_img = $('#brand_thumbnail_id').val().trim();
            let brand_url = $('#brand-url').val().trim();
            let brand_index = $('#brand-index').val().trim();

            if ( !brand_name ) {
                alert('Vui lòng nhập tên thương hiệu!');
                return false;
            }

            if ( !brand_status ) {
                alert('Vui lòng chọn trạng thái thương hiệu!');
                return false;
            }

            if ( !brand_img ) {
                alert('Vui lòng chọn hình ảnh thương hiệu!');
                return false;
            }

            if ( !brand_url ) {
                alert('Vui lòng nhập liên kết cho thương hiệu!');
                return false;
            }

            if ( !brand_index ) {
                alert('Vui lòng nhập độ ưu tiên thương hiệu!');
                return false;
            }

            brand.xhr = $.ajax({
                url: brand_ajax_url,
                data: {
                    action: 'brand_addnew',
                    brand_name,
                    brand_status,
                    brand_img,
                    brand_url,
                    brand_index
                },
                type: 'POST',
                beforeSend: function () {
                    $('#brand-data .spinner').removeClass('hide');
                },
                success: function (response) {
                    if (response.success) {
                        if ( response.data.status ) {
                            $('#brand-name').val('');
                            $('#brand-status').val('');
                            $('#brand_thumbnail_id').val('');
                            $('#brand-url').val('');
                            $('#brand-index').val('');
                            $( '#brand_thumbnail' ).find( 'img' ).attr( 'src', thumb_image );
                            alert('Thêm mới thương hiệu thành công!');

                            brand.getListBrand();
                        } else {
                            alert( response.data.error );
                        }
                    }
            
                    $('#brand-data .spinner').addClass('hide');
                    brand.xhr = null;
                },
                error: function (response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }
            
                    $('#brand-data .spinner').addClass('hide');
                    brand.xhr = null;
                }
            });

        });
    },

    updateBrand: function() {
        $('#brand-data-update').on('submit', function(e) {
            e.preventDefault();

            if ( brand.xhr !== null ) return;
            let brand_id = $('#brand-id').val().trim();
            let brand_name = $('#brand-name').val().trim();
            let brand_status = $('#brand-status').val().trim();
            let brand_img = $('#brand_thumbnail_id').val().trim();
            let brand_url = $('#brand-url').val().trim();
            let brand_index = $('#brand-index').val().trim();

            if ( !brand_name ) {
                alert('Vui lòng nhập tên thương hiệu!');
                return false;
            }

            if ( !brand_status ) {
                alert('Vui lòng chọn trạng thái thương hiệu!');
                return false;
            }

            if ( !brand_img ) {
                alert('Vui lòng chọn hình ảnh thương hiệu!');
                return false;
            }

            if ( !brand_url ) {
                alert('Vui lòng nhập liên kết cho thương hiệu!');
                return false;
            }

            if ( !brand_index ) {
                alert('Vui lòng nhập độ ưu tiên thương hiệu!');
                return false;
            }

            brand.xhr = $.ajax({
                url: brand_ajax_url,
                data: {
                    action: 'brand_update',
                    brand_id,
                    brand_name,
                    brand_status,
                    brand_img,
                    brand_url,
                    brand_index
                },
                type: 'POST',
                beforeSend: function () {
                    $('#brand-data-update .spinner').removeClass('hide');
                },
                success: function (response) {
                    if (response.success) {
                        if ( response.data.status ) {
                            alert('Cập nhật thương hiệu thành công!');
                            window.location.href = brand_page;
                        } else {
                            alert( response.data.error );
                        }
                    }
            
                    $('#brand-data-update .spinner').addClass('hide');
                    brand.xhr = null;
                },
                error: function (response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }
            
                    $('#brand-data-update .spinner').addClass('hide');
                    brand.xhr = null;
                }
            });

        });
    },

    removeBrand: function() {
        $('body').on('click', '.remove-brand', function(e) {
            if ( brand.xhr !== null ) return;
            let that = this;
            let title = $(that).attr('data-title');
            var r = confirm("Xóa thương hiệu " + title + "?");
            if (r == true) {
                let that = this;
                let id = $(that).attr('data-id');
    
                if ( !id ) return false;
    
                brand.xhr = $.ajax({
                    url: brand_ajax_url,
                    data: {
                        action: 'brand_remove',
                        brand_id: id
                    },
                    type: 'POST',
                    beforeSend: function () {
                        // $('#brand-data .spinner').removeClass('hide');
                    },
                    success: function (response) {
                        if (response.success) {
                            if ( response.data.status ) {
                                //
                                $(that).closest('tr').remove();
                                alert('Đã xóa thương hiệu ' + title);
                            } else {
                                alert( response.data.error );
                            }
                        }
                        brand.xhr = null;
                    },
                    error: function (response, errorStatus, errorMsg) {
                        if (errorStatus) {
                            console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                        }
                        brand.xhr = null;
                    }
                });
            } 
        });
    },

    getListBrand: function() {
        $.ajax({
            url: brand_ajax_url,
            data: {
                action: 'list_brands'
            },
            type: 'GET',
            success: function (response) {
                if (response.success) {
                    $('#list-brands #the-list').html( response.data.data );
                }
            },
            error: function (response, errorStatus, errorMsg) {
                if (errorStatus) {
                    console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                }
            }
        });
    }
}

jQuery(document).ready(function() {
    brand.init();
});