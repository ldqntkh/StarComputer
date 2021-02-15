<?php
/*
    Template Name: Kiểm tra bảo hành
*/

get_header();
$msg = "";
$response = null;

function formatDateHTSoft( $strDate ) {
    $date = str_replace( '/Date(', '', $strDate );
    $date = intval( str_replace( '+0700)/', '', $date ) ) / 1000;
    $date = date("d/m/Y h:i:s A", strtotime('+7 hours', date($date)));
    return $date;
}

if ( !empty( $_POST['soBN'] ) || !empty( $_POST['soDT'] ) ) {
    
    // $api_url = "http://baohanhapi.tinhocngoisao.com:8080/TTBaoHanh.ashx?textSearch=";
    $api_url = "http://ngoisaolon.htsoft.vn:9044/ActionService.svc/GetWarrantyHistoryByCallerID";

    $flag = false;
    if ( !empty( $_POST['soDT'] ) ) {
        if ( !empty(preg_match('/(09|03|07|08|05)+([0-9]{8}$)/', trim($_POST['soDT']) )) ) {
            $flag = true;
        } else {
            $msg = "Số điện thoại không hợp lệ";
        }
    } 
    if ( $flag ) {
    
        try {
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_PORT => "9044",
            CURLOPT_URL => $api_url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "{\n\t\"callerid\":\"" . $_POST['soDT'] . "\"\n}",
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "clienttag: FFA7BB0E-82F9-4168-B46D-1AD3B526E00D",
                "content-type: application/json"
            ),
            ));

            $response = curl_exec($curl);
            $err = curl_error($curl);

            curl_close($curl);
            $response = json_decode( $response, true );
            if ( $response['responseCode'] == '00' &&  isset( $response['dataDetail'] ))
                $response = $response['dataDetail'];
            else $response = [];

            if ( count( $response ) == 0 ) {
                $msg = "Rất tiếc chúng tôi không tìm thấy thông tin bạn đã cung cấp!";
            }
        } catch ( Exception $e) {
            // var_dump( $e );die;
        }

    } else {
         $msg = "Rất tiếc bạn chưa cung cấp thông tin cho chúng tôi!";
    }
}

?>

<div class="check-warranty">
    <div class="form-search">
        <?php 
            if ( strlen( $msg ) > 0 ) {
                echo '<p class="error">'.$msg.'</p>';
            }
        ?>
        
        <form method="post">
            <div class="input-form">
                <label for="soDT">Số điện thoại:</label>
                <input type="text" name="soDT" id="soDT" value="<?php if ( !empty( $_POST['soDT'] ) ) echo $_POST['soDT'] ; ?>" />
            </div>
            <div class="submit-form">
                <button type="submit">Tra bảo hành</button>
            </div>
        </form>
    </div>
    
    <?php 
        if ( $response != null && count( $response ) > 0 ) : 
            $html_mobile = '';
        ?>
            <div class="warranty-result-desktop">
                <table style="width:100%">
                    <colgroup>
                        <col span="1" style="width: 10%;">
                        <col span="1" style="width: 25%;">
                        <col span="1" style="width: 25%;">
                        <col span="1" style="width: 10%;">
                        <col span="1" style="width: 10%;">
                        <col span="1" style="width: 10%;">
                        <col span="1" style="width: 10%;">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Số biên nhận</th>
                            <th>Tên sản phẩm</th>
                            <th>Lỗi</th>
                            <th>Ngày nhận</th>
                            <th>Tình trạng</th>
                            <th>Ngày hẹn trả</th>
                            <th>Ngày trả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach( $response as $item ) : 
                        
                            $ngayNhan = formatDateHTSoft( $item['CREATEDDATE'] );
                            $ngayHenTra = formatDateHTSoft( $item['NGAYHENTRA'] );

                            $tinhtrang = 'Đang kiểm tra';

                            if ( $item['RETURNED'] === true ) {
                                $tinhtrang = 'Đã trả khách';
                            } else if ( $item['REPAIRED'] === true || $item['RETURNEDFROMNPP'] === true ) {
                                $tinhtrang = 'Đã sửa xong';
                            }

                            $ngayTra = '';
                            if ( strpos( $item['TIMERETURN'], "01/01/0001" ) === false ) {
                                $ngayTra = $item['TIMERETURN'];
                                $ngayTra = str_replace( 'CH', 'PM', $ngayTra );
                                $ngayTra = str_replace( 'SA', 'AM', $ngayTra );
                            }
                            

                            $html_mobile .= '<div class="item">
                                                <p><strong>Số biên nhận: </strong><span>'.$item['BHCODE'].'</span></p>
                                                <p><strong>Tên sản phẩm: </strong><span>'.$item['MHTEN'].'</span></p>
                                                <p><strong>Lỗi: </strong><span>'.$item['MOTABENH'].'</span></p>
                                                <p><strong>Ngày nhận: </strong><span>'.$ngayNhan.'</span></p>
                                                <p><strong>Tình trạng: </strong><span>'.$tinhtrang.'</span></p>
                                                <p><strong>Ngày hẹn trả: </strong>'.$ngayHenTra.'</span></p>
                                                <p><strong>Ngày trả: </strong><span>'.$ngayTra.'</span></p>
                                            </div>';
                        ?>
                            <tr>
                                <td><?php echo $item['BHCODE'] ?></td>
                                <td><?php echo $item['MHTEN'] ?></td>
                                <td><?php echo $item['MOTABENH'] ?></td>
                                <td><?php echo $ngayNhan ?></td>
                                <td><?php echo $tinhtrang ?></td>
                                <td><?php echo $ngayHenTra ?></td>
                                <td><?php echo $ngayTra ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>

            <div class="warranty-result-mobile">
                <?php echo $html_mobile; ?>
            </div>
        <?php endif;
    ?>
</div>

<?php



get_footer();