<?php
/*
    Template Name: Kiểm tra bảo hành
*/

get_header();
$msg = "";
$response = null;
if ( !empty( $_POST['soBN'] ) || !empty( $_POST['soDT'] ) ) {
    
    // http://115.78.9.183:8080/TTBaoHanh.ashx?textSearch=0123456789&func=soDT
    // http://115.78.9.183:8080/TTBaoHanh.ashx?textSearch=BH160830C001&func=soBN
    $api_url = "http://baohanhapi.tinhocngoisao.com:8080/TTBaoHanh.ashx?textSearch=";
    $flag = false;
    if ( !empty( $_POST['soBN'] ) ) {
        $api_url .= trim( $_POST['soBN'] ) . '&func=soBN';
        $flag = true;
    } elseif ( !empty( $_POST['soDT'] ) ) {
        if ( !empty(preg_match('/(09|03|07|08|05)+([0-9]{8}$)/', trim($_POST['soDT']) )) ) {
            $api_url .= trim( $_POST['soDT'] ) . '&func=soDT';
            $flag = true;
        } else {
            $msg = "Số điện thoại không hợp lệ";
        }
    } 
    if ( $flag ) {
    
        try {
            $curl = curl_init();
            curl_setopt($curl , CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($curl , CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt_array($curl, array(
                CURLOPT_URL => $api_url,
                CURLOPT_PORT => 8080,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_VERBOSE => true,
                CURLOPT_HTTPHEADER => array(
                    "client_id: eac5d782-3a48-4a88-ae97-888sss666778888",
                    "client_secret: 182548a4d4b666683380777188",
                    "Content-Type: application/json"
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);

            $response = json_decode( $response, true );
            
            if ( count( $response ) == 0 ) {
                $msg = "Rất tiếc chúng tôi không tìm thấy thông tin bạn đã cung cấp!";
            }
        } catch ( Exception $e) {

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
                <label for="soBN">Số biên nhận:</label>
                <input type="text" name="soBN" id="soBN" value="<?php if ( !empty( $_POST['soBN'] ) ) echo $_POST['soBN'] ; ?>" />
            </div>
            <p class="input-or">Hoặc</p>
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
        if ( $response != null && count( $response ) > 0 ) : ?>
            <div class="warranty-result-desktop">
                <table>
                    <thead>
                        <tr>
                            <th>Số biên nhận</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số Serial</th>
                            <th>Tem BH</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach( $response as $item ) : ?>
                            <tr>
                                <td><?php echo $item['soBH'] ?></td>
                                <td><?php echo $item['productID'] ?></td>
                                <td><?php echo $item['productName'] ?></td>
                                <td><?php echo $item['serial'] ?></td>
                                <td><?php echo $item['bH'] ?></td>
                                <td><?php echo $item['trangThai'] ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>

            <div class="warranty-result-mobile">
                <?php foreach( $response as $item ) : ?>
                    <div class="item">
                        <p><strong>Số biên nhận: </strong><span><?php echo $item['soBH'] ?></span></p>
                        <p><strong>Mã sản phẩm: </strong><span><?php echo $item['productID'] ?></span></p>
                        <p><strong>Tên sản phẩm: </strong><span><?php echo $item['productName'] ?></span></p>
                        <p><strong>Số Serial: </strong><span><?php echo $item['serial'] ?></span></p>
                        <p><strong>Tem BH: </strong><span><?php echo $item['bH'] ?></span></p>
                        <p><strong>Trạng thái: </strong><span><?php echo $item['trangThai'] ?></span></p>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif;
    ?>
</div>

<?php

get_footer();