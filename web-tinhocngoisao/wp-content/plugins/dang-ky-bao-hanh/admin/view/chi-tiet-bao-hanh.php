<?php
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

  $ycbh_id = isset( $_GET['ycbh_id'] ) ? intval( $_GET['ycbh_id'] ) : -1;
  
  if( $ycbh_id == -1 ) {
      wp_redirect('/wp-admin/admin.php?page=danh-sach-yeu-cau-bao-hanh');
  }

  global $wpdb, $table_prefix;
  $table_dang_ky_bao_hanh = $table_prefix . 'dang_ky_bao_hanh';
  
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $status = '0';
    if( isset( $_POST['ycbh_status'] ) ) {
      if( $_POST['ycbh_status'] == '1' ) {
        $status = '1';
      } else {
        $status = '2';
      }
    }
    // update vào db
    $wpdb->update($table_dang_ky_bao_hanh, array( 'status' => $status ), array( "id" => $ycbh_id ));
  }

  $sql = "SELECT * FROM $table_dang_ky_bao_hanh
            WHERE id = '$ycbh_id'";
  
  $result = $wpdb->get_results($sql);

  if( !$result || count( $result ) == 0 ) {
    wp_redirect('/wp-admin/admin.php?page=danh-sach-yeu-cau-bao-hanh');
  }
  $result = $result[0];
  
?>
<h2><a href="<?php echo admin_url('admin.php?page=danh-sach-yeu-cau-bao-hanh') ?>"><?php _e( 'Danh sách yêu cầu bảo hành', "ycbh" ) ?></a></h2>
<h3><?php _e('Chi tiết yêu cầu bảo hành sản phẩm', "ycbh") ?></h3>
<div class="lst-product-container">
    <div class="container" id="list-barcode">
        <p><?php _e("Họ tên khách hàng:", "ycbh") ?> <strong><?php echo $result->fullname ?></strong></p>
        <p><?php _e("Số điện thoại:", "ycbh") ?> <strong><?php echo $result->phone_number ?></strong></p>
        <p><?php _e("Email:", "ycbh") ?> <strong><?php echo $result->email ?></strong></p>
        <p><?php _e("Địa chỉ:", "ycbh") ?> <strong><?php echo $result->address ?></strong></p>
        <p><?php _e("Công ty:", "ycbh") ?> <strong><?php echo $result->company_name ?></strong></p>
        <p><?php _e("Loại sản phẩm:", "ycbh") ?> <strong><?php echo $result->nganh_hang ?></strong></p>
        <p><?php _e("Thông tin mô tả:", "ycbh") ?> 
          <strong>
            <?php 
              $file = json_decode($result->file_data, true);
              $file = $file[0];
            ?>
            <a href="<?= $file['url'] ?>" target="_blank">CLICK HERE</a>
          </strong>
        </p>
        <p style="margin-bottom: 0"><?php _e("Nhu cầu:", "ycbh") ?></p>
        <p style="padding: 0 10px; margin-top: 5px"><?php echo $result->description ?></p>
        <form method="post">
            <?php if( $result->status != "2" ) : ?>
              <p> 
                <?php _e("Hoàn tất?", "ycbh") ?>
                <input type="checkbox" value="finish" name="ycbh_status"  <?php if( $result->status == "1" ) echo 'checked' ?> />
              </p>
            <?php endif; ?>
           
            <?php if( $result->status != "1" ) : ?>
              <p> 
                <?php _e("Hủy bỏ?", "ycbh") ?>
                <input type="checkbox" value="cancel" name="ycbh_status"  <?php if( $result->status == "2" ) echo 'checked' ?> />
              </p>
            <?php endif; ?>
            <p>
                <button class="button"><?php _e("Cập nhật", "ycbh") ?></button>
            </p>
        </form>
    </div>

    <script>
        const ajax_url = "<?php echo admin_url('admin-ajax.php'); ?>";
    </script>
</div>