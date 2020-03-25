const $ = jQuery;


const bank = {
    xhr: null,
    init: function() {
        bank.addNewbank();
        bank.updatebank();
        bank.removebank();
        bank.updateSubBank();
    },

    addNewbank: function() {
        $('#bank-data').on('submit', function(e) {
            e.preventDefault();

            if ( bank.xhr !== null ) return;

            let bank_name = $('#bank-name').val().trim();
            let bank_type = $('#bank-type').val().trim();
            let bank_img = $('#bank_thumbnail_id').val().trim();
            let bank_index = $('#bank-index').val().trim();

            if ( !bank_name ) {
                alert('Vui lòng nhập tên ngân hàng!');
                return false;
            }

            if ( !bank_type ) {
                alert('Vui lòng chọn trạng thái ngân hàng!');
                return false;
            }

            if ( !bank_img ) {
                alert('Vui lòng chọn hình ảnh ngân hàng!');
                return false;
            }

            if ( !bank_index ) {
                alert('Vui lòng nhập độ ưu tiên ngân hàng!');
                return false;
            }

            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'bank_addnew',
                    bank_name,
                    bank_type,
                    bank_img,
                    bank_index
                },
                type: 'POST',
                beforeSend: function () {
                    $('#bank-data .spinner').removeClass('hide');
                },
                success: function (response) {
                    if (response.success) {
                        if ( response.data.status ) {
                            $('#bank-name').val('');
                            $('#bank-type').val('');
                            $('#bank_thumbnail_id').val('');
                            $('#bank-index').val('');
                            $( '#bank_thumbnail' ).find( 'img' ).attr( 'src', thumb_image );
                            alert('Thêm mới ngân hàng thành công!');

                            bank.getListbank();
                        } else {
                            alert( response.data.error );
                        }
                    }
            
                    $('#bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                },
                error: function (response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }
            
                    $('#bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                }
            });

        });
    },

    updatebank: function() {
        $('#bank-data-update').on('submit', function(e) {
            e.preventDefault();

            if ( bank.xhr !== null ) return;

            let bank_id = $('#bank-id').val().trim();
            let bank_name = $('#bank-name').val().trim();
            let bank_type = $('#bank-type').val().trim();
            let bank_img = $('#bank_thumbnail_id').val().trim();
            let bank_index = $('#bank-index').val().trim();

            if ( !bank_name ) {
                alert('Vui lòng nhập tên ngân hàng!');
                return false;
            }

            if ( !bank_type ) {
                alert('Vui lòng chọn trạng thái ngân hàng!');
                return false;
            }

            if ( !bank_img ) {
                alert('Vui lòng chọn hình ảnh ngân hàng!');
                return false;
            }

            if ( !bank_index ) {
                alert('Vui lòng nhập độ ưu tiên ngân hàng!');
                return false;
            }

            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'bank_update',
                    bank_id,
                    bank_name,
                    bank_type,
                    bank_img,
                    bank_index
                },
                type: 'POST',
                beforeSend: function () {
                    $('#bank-data-update .spinner').removeClass('hide');
                },
                success: function (response) {
                    if (response.success) {
                        if ( response.data.status ) {
                            alert('Cập nhật ngân hàng thành công!');
                            window.location.href = bank_page;
                        } else {
                            alert( response.data.error );
                        }
                    }
            
                    $('#bank-data-update .spinner').addClass('hide');
                    bank.xhr = null;
                },
                error: function (response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }
            
                    $('#bank-data-update .spinner').addClass('hide');
                    bank.xhr = null;
                }
            });

        });
    },

    removebank: function() {
        $('body').on('click', '.remove-bank', function(e) {
            if ( bank.xhr !== null ) return;
            let that = this;
            let title = $(that).attr('data-title');
            var r = confirm("Xóa ngân hàng " + title + "?");
            if (r == true) {
                let that = this;
                let id = $(that).attr('data-id');
    
                if ( !id ) return false;
    
                bank.xhr = $.ajax({
                    url: bank_ajax_url,
                    data: {
                        action: 'bank_remove',
                        bank_id: id
                    },
                    type: 'POST',
                    beforeSend: function () {
                        // $('#bank-data .spinner').removeClass('hide');
                    },
                    success: function (response) {
                        if (response.success) {
                            if ( response.data.status ) {
                                //
                                $(that).closest('tr').remove();
                                alert('Đã xóa ngân hàng ' + title);
                            } else {
                                alert( response.data.error );
                            }
                        }
                        bank.xhr = null;
                    },
                    error: function (response, errorStatus, errorMsg) {
                        if (errorStatus) {
                            console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                        }
                        bank.xhr = null;
                    }
                });
            } 
        });
    },

    getListbank: function() {
        $.ajax({
            url: bank_ajax_url,
            data: {
                action: 'list_banks'
            },
            type: 'GET',
            success: function (response) {
                if (response.success) {
                    $('#list-banks #the-list').html( response.data.data );
                }
            },
            error: function (response, errorStatus, errorMsg) {
                if (errorStatus) {
                    console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                }
            }
        });
    },

    updateSubBank: function() {
        $('#sub-bank-data').on('submit', function(e) {
            e.preventDefault();
            if ( bank.xhr !== null ) return;

            let visa = $("#bank-visa").is(":checked") ? 1 : 0,
                mastercard = $("#bank-mastercard").is(":checked") ? 1 : 0,
                jcb = $("#bank-jcb").is(":checked") ? 1 : 0;
            let bank_id = $('#bank-id').val().trim();
            bank.xhr = $.ajax({
                url: bank_ajax_url,
                data: {
                    action: 'bank_insert_sub',
                    bank_id,
                    visa,
                    mastercard,
                    jcb
                },
                type: 'POST',
                beforeSend: function () {
                    $('#sub-bank-data .spinner').removeClass('hide');
                },
                success: function (response) {
                    if (response.success) {
                        alert('Cập nhật thẻ ngân hàng thành công!');
                    } else {
                        alert('Không thể cập nhật thẻ ngân hàng!');
                    }
            
                    $('#sub-bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                },
                error: function (response, errorStatus, errorMsg) {
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }
            
                    $('#sub-bank-data .spinner').addClass('hide');
                    bank.xhr = null;
                }
            });
        });
    }
}

jQuery(document).ready(function() {
    bank.init();
});