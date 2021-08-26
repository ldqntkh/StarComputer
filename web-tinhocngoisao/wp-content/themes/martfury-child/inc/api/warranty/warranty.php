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

if( !function_exists( 'get_list_error_code_hts' ) ) {

    function get_list_error_code_hts() {

        $old_data = get_transient('get_list_error_code_hts');
        if( !empty( $old_data ) ) {
            return array(
                "status" =>  "OK",
                "errMsg" => "old",
                "data" => $old_data
            );
        }

        $api_url = "http://ngoisaolon.htsoft.vn:9044/ActionService.svc/GetListErrorCode";

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
                CURLOPT_CUSTOMREQUEST => "GET",
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
            if ( $response['responseCode'] == '00' &&  isset( $response['data'] ))
                $response = $response['data'];
            else $response = [];

            set_transient( 'get_list_error_code_hts', $response, 86400 );

            return array(
                "status" =>  "OK",
                "errMsg" => "t",
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

if( !function_exists( 'get_info_by_imei_hts' ) ) {
    function get_info_by_imei_hts ( WP_REST_Request $request ) {
        $params = $request->get_params();
        $imei = $params['Imei'];

        if( empty( $imei ) ) {
            wp_send_json_error([
                "msg" => "Thông tin không phù hợp"
            ]);
            die;
        }


        $api_url = "http://ngoisaolon.htsoft.vn:9044/ActionService.svc/GetInfoImeiByImei";

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
            CURLOPT_POSTFIELDS => "{\n\t\"Imei\":\"" . $imei . "\"\n}",
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
            

            if ( count( $response ) == 0 ) {
                $msg = "Rất tiếc chúng tôi không tìm thấy thông tin bạn đã cung cấp!";
                wp_send_json_error([
                    "msg" => $msg,
                    "res" => $response,
                    "err" => $err
                ]);
                die;
            }
            wp_send_json_success([
                "msg" => "",
                "info" => $response
            ]);
            die;

        } catch ( Exception $e) {
            wp_send_json_error([
                "msg" => $e->getMessage()
            ]);
            die;
            
        }

       
    }
}

if( !function_exists( 'submit_bao_hanh_hts' ) ) {
    function submit_bao_hanh_hts(WP_REST_Request $request) {
        $params = $request->get_params();

        $currentDate = date('Y')%1000 . date('m') . date('d') ;

        $infos = [];
        foreach( $params['infos'] as $info ) {
            $infos[] = [
                "Assignedby" => "", 
                "Description" => "", 
                "ErrorCode" => $info['ErrorCode'], 
                "ErrorDescription" => $info['ErrorDescription'],
                "ErrorID" => $info['ErrorID'], 
                "Imei" => $info['Imei'], 
                "ItemCode" => $info['ItemCode'], 
                "Priorityid" => "1",	
                "Requestdate" => $params['CreatedDate']
            ];
        }
        $data = [[
            "BranchID" => "EDA4FB19-5D10-4241-A11C-9778521C5E57", 
            "Code" => "W" . $currentDate .random_int(10000, 99999), 
            "CreatedBy" => "y.hn.qtb", 
            "CreatedDate" => $params['CreatedDate'], 
            "CustomerAdd" => $params['CustomerAdd'],  		
            "CustomerMobile" => $params['CustomerMobile'], 	
            "Description" => "", 
            "Details" => $infos  
        ]];

        $curl = curl_init();
        // y.hn.qtb
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://ngoisaolon.htsoft.vn:9044/ActionService.svc/AddListWarrantyNote',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>'{
                "data": '. json_encode($data) .'
            }',
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
        
        $dataresponse  = $response['data'][0];
        if( $dataresponse['responseCode'] != '00' ) {
            if( $dataresponse['responseCode'] == '01' ) {
                wp_send_json_error([
                    "msg" => $dataresponse['message'],
                    "test" => $data
                ]);
            } else {
                wp_send_json_error([
                    "tets" => $dataresponse['message']
                ]);
            }
            die;
        } else {
            wp_send_json_success([
            ]);
            die;
        }
    }
}