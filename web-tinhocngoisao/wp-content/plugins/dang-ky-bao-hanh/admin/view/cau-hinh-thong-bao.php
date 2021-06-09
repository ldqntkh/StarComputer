<?php
    if ( ! defined( 'ABSPATH' ) ) {
        exit;
    }
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if( isset( $_POST['emails'] ) ) {
            if ( get_option('ycbh_emails') ) {
                update_option( 'ycbh_emails', $_POST['emails'] );
            } else {
                add_option( 'ycbh_emails', $_POST['emails'] );
            }
        }
    }

    $ycbh_emails = get_option('ycbh_emails') ? get_option('ycbh_emails') : "";
?>
    <h3><?php _e('Cấu hình thông báo', "ycbh") ?></h3>
    <div class="lst-product-container">
        <div class="container" id="list-barcode">
            <form method="post">
                <div> 
                    <label style="font-size: 14px" for="emails"><?php _e("Danh sách email nhận thông báo:", "ycbh") ?></label>
                    <br/>
                    <i><?php _e("Các email ngăn cách bằng dấu phẩy", "ycbh") ?></i>
                    <br/>
                    <input style="width: 500px" type="text" name="emails" value="<?php echo $ycbh_emails ?>"/>
                </div>
                <p>
                    <button class="button"><?php _e("Cập nhật", "ycbh") ?></button>
                </p>
            </form>
        </div>

        <script>
            const ajax_url = "<?php echo admin_url('admin-ajax.php'); ?>";
        </script>
    </div>