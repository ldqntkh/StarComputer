(function($) {
    $(document).ready(function() {
        $('.city-field').on('change', function() {
            getDistrict( $(this).parents('.shipping_address'), $(this).val() );
        });

        // for edit
        if (typeof shipping_state !== "undefined" && shipping_state !== "") {
            $('.city-field').val(shipping_state).trigger('change');
        }

        $('.district-field').off('change').on('change', function() {
            getWard( $(this).parents('.shipping_address'), $(this).val() );
        });

        $('.update-address').off('click').on('click', function() {
            // not allow customer update the address is already updating
            if ( $(this).hasClass('disabled') ) {
                return false;
            }
            var $updateAddressForm = $('.update-address-form');
            var addresses = $updateAddressForm.find('#addresses');
            var $updateBtn = $(this);
            var $addressHiddenField = $updateBtn.parents('.address-content').siblings();
            var $fullNameHiddenField = $addressHiddenField.find('input[name="shipping_last_name[]"]'),
                $phoneHiddenField = $addressHiddenField.find('input[name="shipping_phone[]"]'),
                $stateHiddenField = $addressHiddenField.find('input[name="shipping_state[]"]'),
                $cityHiddenField = $addressHiddenField.find('input[name="shipping_city[]"]'),
                $address02HiddenField = $addressHiddenField.find('input[name="shipping_address_2[]"]'),
                $address01HiddenField = $addressHiddenField.find('input[name="shipping_address_1[]"]'),
                $defaultOptionHiddenField = $addressHiddenField.find('input[name="shipping_address_is_default[]"]');

            var $defaultOptionField = $updateAddressForm.find('.choose_default_address');
            //remove class disabled in update button
            $('.update-address').removeClass('disabled');
            // not allow customer update the address is already updating
            $updateBtn.addClass('disabled');
            if ( $updateAddressForm.hasClass('hidden') ) {
                $updateAddressForm.removeClass('hidden');
            }

            if ( !$('.new-address').hasClass('hidden') ) {
                $('.new-address').addClass('hidden');
            }

            $updateAddressForm.find('#fullname').val( $fullNameHiddenField.val() );
            $updateAddressForm.find('#phone').val( $phoneHiddenField.val() );
            $updateAddressForm.find('#city').val( $stateHiddenField.val() );
            $updateAddressForm.find('#address').val( $address01HiddenField.val() );

            if ( $defaultOptionHiddenField.val() === 'true' ) {
                $defaultOptionField.parent().addClass('hidden');
                $defaultOptionField.prop('checked', true );
            } else {
                $defaultOptionField.parent().removeClass('hidden');
                $defaultOptionField.prop('checked', false );
            }

            getDistrict( $updateAddressForm, $stateHiddenField.val(), $cityHiddenField.val(), function() {
                getWard( $updateAddressForm,  $cityHiddenField.val(), $address02HiddenField.val() );
            } );

            $('.list-address').find('.address-hidden-field').each(function(index) {
                $('.shipping_address_hidden_field_' + index).remove();
                if ($('.shipping_address_hidden_field_' + index).length === 0) {
                    addresses.append('<div class="shipping_address_hidden_field_' + index + '"></div>');
                    $(this).clone().appendTo( '.shipping_address_hidden_field_' + index );

                    if ( $(this).is($addressHiddenField) ) {
                        $('.shipping_address_hidden_field_' + index).addClass('selected');
                    }
                }
            });
        });

        $('.cancel-update-address').off('click').on('click', function() {
            if ( $('.update-address').hasClass('disabled') ) {
                $('.update-address').removeClass('disabled');
            }

            $(this).parents('.update-address-form').addClass('hidden');
        });

        function clearField($field) {
            return ($field && $field.length > 0) ? $field.empty() : false;
        }

        function getDistrict( $element, $cityID, $districtValue, $callback ) {
            displayLoaderPopup( $element );
            $.ajax({
                type : 'post',
                dataType : 'json',
                url : options_city_ajax.admin_ajax,
                data : {action: 'diagioihanhchinh', matp : $cityID},
                success: function(response) {
                    removeLoaderPopup( $element );
                    var data = response.data;
                    var $district = $element.find('#district');
                    var $ward = $element.find('#ward');

                    clearField( $element.find('#district, #ward') );

                    $ward.append('<option value="">Chọn phường xã</option>');
                    $district.append('<option value="">Chọn quận/huyện </option>');

                    if (response.success && data.length > 0) {
                        for( var i = 0; i < data.length; i++ ) {
                            var districtItem = data[i];
                            $district.append('<option value="' + districtItem.maqh + '">' + districtItem.name + '</option>');
                        }

                        if ( $districtValue && $districtValue !== '' ) {
                            $district.val( $districtValue );
                        } else if (typeof shipping_city !== "undefined" && shipping_city !== "") {
                            $district.val(shipping_city).trigger('change');
                        }

                        if ( $callback ) {
                            $callback();
                        }
                    }
                }, 
                error: function(response, errorStatus, errorMsg) {
                    removeLoaderPopup( $element );
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }
                }
            });
            return false;
        }

        function getWard( $element, $districtID, $wardValue ) {
            displayLoaderPopup( $element );
            $.ajax({
                type : 'post',
                dataType : 'json',
                url : options_city_ajax.admin_ajax,
                data : {action: 'diagioihanhchinh', maqh : $districtID},
                success: function(response) {
                    removeLoaderPopup( $element );
                    var data = response.data;
                    var $ward = $element.find('#ward');

                    clearField( $ward );
                    $ward.append('<option value="">Chọn phường xã</option>');

                    if (response.success && data.length > 0) {
                        for( var i = 0; i < data.length; i++ ) {
                            var wardItem = data[i];
                            $ward.append('<option value="' + wardItem.xaid + '">' + wardItem.name + '</option>');
                        }

                        if ( $wardValue && $wardValue !== '' ) {
                            $ward.val( $wardValue );
                        } else if (typeof shipping_address_2 !== "undefined" && shipping_address_2 !== "") {
                            $ward.val(shipping_address_2);
                        }
                    }
                },
                error: function(response, errorStatus, errorMsg) {
                    removeLoaderPopup( $element );
                    if (errorStatus) {
                        console.log('The error status is: ' + errorStatus + ' and the error message is: ' + errorMsg);
                    }
                }
            });
        }

        function displayLoaderPopup( $form ) {
            if ( $form.length > 0 && !$form.hasClass('.processing') ) {
                $form.addClass( 'processing' ).block({
                    message: null,
                    overlayCSS: {
                        background: '#fff',
                        opacity: 0.6
                    }
                });
            }
            return false;
        }

        function removeLoaderPopup( $form ) {
            if ( $form.length > 0 && $form.hasClass('processing') ) {
                $form.removeClass( 'processing' ).unblock();
            }
            return false;
        }
    });
})(jQuery);