<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<h1><?php _e('Quản lý ngân hàng', BRAND_PLUGIN_NAME) ?></h1>
<div class="brands-container">
	
	<div class="left-container">
		<form class="form" id="brand-data" method="post">
			<h3><?php _e( 'Thêm ngân hàng mới', BRAND_PLUGIN_NAME ) ?></h3>

			<div class="form-field form-required term-name-wrap">
				<label for="brand-name"><?php _e('Tên ngân hàng', BRAND_PLUGIN_NAME) ?></label>
				<input name="brand-name" id="brand-name" type="text" value="" size="40" aria-required="true">
			</div>

			<div class="form-field term-brand-status-wrap">
				<label for="brand-status"><?php _e( 'Loại ngân hàng', BRAND_PLUGIN_NAME ) ?></label>
				<select name="brand-status" id="brand-status" class="postform">
					<option value="1"><?php _e( 'Tổ chức tài chính', BRAND_PLUGIN_NAME ) ?></option>
					<option value="0"><?php _e( 'Thẻ tín dụng', BRAND_PLUGIN_NAME ) ?></option>
				</select>
			</div>

			<div class="form-field term-thumbnail-wrap">
				<label><?php _e('Hình ảnh ngân hàng. (Size: 280px x 150px )', BRAND_PLUGIN_NAME) ?></label>
				<div id="brand_thumbnail" style="float: left; margin-right: 10px;"><img src="<?php echo esc_url( wc_placeholder_img_src() ); ?>" width="280px" height="150px"></div>
				<div style="line-height: 60px;">
					<input type="hidden" id="brand_thumbnail_id" name="brand_thumbnail_id">
					<button type="button" class="upload_image_button button"><?php _e('Tải lên/Thêm ảnh', BRAND_PLUGIN_NAME) ?></button>
					<button type="button" class="remove_image_button button" style="display: none;"><?php _e('Loại bỏ ảnh', BRAND_PLUGIN_NAME) ?></button>
				</div>
				<script type="text/javascript">

					// Only show the "remove image" button when needed
					if ( ! jQuery( '#brand_thumbnail_id' ).val() ) {
						jQuery( '.remove_image_button' ).hide();
					}

					// Uploading files
					var file_frame;

					jQuery( document ).on( 'click', '.upload_image_button', function( event ) {

						event.preventDefault();

						// If the media frame already exists, reopen it.
						if ( file_frame ) {
							file_frame.open();
							return;
						}

						// Create the media frame.
						file_frame = wp.media.frames.downloadable_file = wp.media({
							title: '<?php esc_html_e( 'Chọn hình ảnh', BRAND_PLUGIN_NAME ); ?>',
							button: {
								text: '<?php esc_html_e( 'Sử dụng hình ảnh', BRAND_PLUGIN_NAME ); ?>'
							},
							multiple: false
						});

						// When an image is selected, run a callback.
						file_frame.on( 'select', function() {
							var attachment           = file_frame.state().get( 'selection' ).first().toJSON();
							var attachment_thumbnail = attachment.sizes.full;

							jQuery( '#brand_thumbnail_id' ).val( attachment.id );
							jQuery( '#brand_thumbnail' ).find( 'img' ).attr( 'src', attachment_thumbnail.url );
							jQuery( '.remove_image_button' ).show();
						});

						// Finally, open the modal.
						file_frame.open();
					});

					jQuery( document ).on( 'click', '.remove_image_button', function() {
						jQuery( '#brand_thumbnail' ).find( 'img' ).attr( 'src', '<?php echo esc_js( wc_placeholder_img_src() ); ?>' );
						jQuery( '#brand_thumbnail_id' ).val( '' );
						jQuery( '.remove_image_button' ).hide();
						return false;
					});

					jQuery( document ).ajaxComplete( function( event, request, options ) {
						if ( request && 4 === request.readyState && 200 === request.status
							&& options.data && 0 <= options.data.indexOf( 'action=add-tag' ) ) {

							var res = wpAjax.parseAjaxResponse( request.responseXML, 'ajax-response' );
							if ( ! res || res.errors ) {
								return;
							}
							// Clear Thumbnail fields on submit
							jQuery( '#brand_thumbnail' ).find( 'img' ).attr( 'src', '<?php echo esc_js( wc_placeholder_img_src() ); ?>' );
							jQuery( '#brand_thumbnail_id' ).val( '' );
							jQuery( '.remove_image_button' ).hide();
							// Clear Display type field on submit
							jQuery( '#display_type' ).val( '' );
							return;
						}
					} );

				</script>
				<div class="clear"></div>
			</div>

			<div class="form-field form-required term-index-wrap">
				<label for="brand-index"><?php _e('Độ ưu tiên', BRAND_PLUGIN_NAME) ?></label>
				<input type="number" min="0" name="brand-index" id="brand-index" type="text" value="" size="40" aria-required="true" />
			</div>

			<div class="form-field form-required term-name-wrap">
				<button class="button" type="submit">
					<?php _e('Lưu', BRAND_PLUGIN_NAME) ?>
					<span class="spinner is-active hide"></span>
				</button>
			</div>
		</form>
	</div>
	<div class="right-container" id="list-brands">
		<table class="wp-list-table widefat fixed striped tags ui-sortable">
			<thead>
				<tr>
					<th scope="col" class="manage-column column-thumb"><strong><?php _e('Hình ảnh', BRAND_PLUGIN_NAME) ?></strong></th>
					<th scope="col" class="manage-column column-thumb"><strong><?php _e('Tên', BRAND_PLUGIN_NAME) ?></strong></th>
					<th scope="col" class="manage-column column-thumb"><strong><?php _e('Độ ưu tiên', BRAND_PLUGIN_NAME) ?></strong></th>
					<th scope="col" class="manage-column column-thumb"><strong><?php _e('Trạng thái', BRAND_PLUGIN_NAME) ?></strong></th>
					<th scope="col" class="manage-column column-thumb"><strong><?php _e('Liên kết', BRAND_PLUGIN_NAME) ?></strong></th>
				</tr>
			</thead>
			<?php 
				$objBrand = new StarBrand();
				$brands = $objBrand->getListBrands();
				echo '<tbody id="the-list">';
				if ( $brands ) { 
					foreach( $brands as $brand ) : 
						$image = wp_get_attachment_image_src( $brand->brand_img, 'full' );
						if ( !$image ) {
							$image = esc_js( wc_placeholder_img_src() );
						} else {
							$image = $image[0];
						}
					?>
						<tr>
							<td scope="col" class="manage-column column-thumb">
								<img src="<?php echo $image ?>" width="70px" height="37px"/>
							</td>
							<td scope="col" class="manage-column column-thumb colum-action">
								<p><strong><?php echo $brand->brand_name ?></strong></p>
								<p class="action">
									<a href="<?php echo admin_url( 'admin.php?page=star_brands&type=edit&brand_id='.$brand->id) ?>" class="edit-brand" action='edit' data-id="<?php echo $brand->id ?>"><?php _e('Sửa', BRAND_PLUGIN_NAME) ?></a>
									&nbsp;|&nbsp;
									<a href="#" class="remove-brand" action='delete' data-title='<?php echo $brand->brand_name ?>' data-id="<?php echo $brand->id ?>"><?php _e('Xóa', BRAND_PLUGIN_NAME) ?></a>
								</p>
							</td>
							<td scope="col" class="manage-column column-thumb"><?php echo $brand->brand_index ?></td>
							<?php 
								if ( $brand->brand_status == 1 ) { ?>
									<td scope="col" class="manage-column column-thumb" style="color: green"><?php _e('Hiển thị', BRAND_PLUGIN_NAME) ?></td>
								<?php } else { ?>
									<td scope="col" class="manage-column column-thumb" style="color: red"><?php _e('Ẩn', BRAND_PLUGIN_NAME) ?></td>
								<?php }
							?>
							
							<td scope="col" class="manage-column column-thumb">
								<a target="_blank" href="<?php echo $brand->brand_url ?>"><?php _e('Liên kết', BRAND_PLUGIN_NAME) ?></a>
							</td>
						</tr>
					<?php endforeach; ?>
				<?php }
				echo '</tbody>';
			?>
		</table>
	</div>

	<script>
		const brand_ajax_url = "<?php echo admin_url('admin-ajax.php'); ?>";
		const thumb_image = '<?php echo esc_js( wc_placeholder_img_src() ); ?>';
	</script>
</div>