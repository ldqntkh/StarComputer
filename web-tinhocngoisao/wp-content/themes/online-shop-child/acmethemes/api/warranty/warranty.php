<?php 
if ( !function_exists('check_bao_hanh') ) {
    function check_bao_hanh( WP_REST_Request $request ) {
        $phone_number = esc_attr( $_GET[ 'phone_number' ] );
        
        if ( !$phone_number ) {
            return array(
                "status" => "ERROR",
                "errMsg" => "Số điện thoại không chính xác",
                "data" => null
            );
        }

        $api_url = "http://ngoisaolon.htsoft.vn:9044/ActionService.svc/GetWarrantyHistoryByCallerID";

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
            CURLOPT_POSTFIELDS => "{\n\t\"callerid\":\"" . $phone_number . "\"\n}",
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
                return array(
                    "status" =>  "ERROR",
                    "errMsg" => $msg,
                    "data" => null
                );
            }

            return array(
                "status" =>  "OK",
                "errMsg" => "",
                "data" => $response
            );

        } catch ( Exception $e) {
            // var_dump( $e );die;
            return array(
                "status" => "ERROR",
                "errMsg" => $e->getMessage(),
                "data" => null
            );
        }
    }
}