<?php
/**
 * Template Name: Virus NCOV
 */

get_header('ncov');

echo '<div id="virus-ncov"></div>';

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://ncov.moh.gov.vn",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);

curl_close($curl); 

if ( !empty( $response ) ) {
    $datas = explode( "_congbothongke_WAR_coronadvcportlet_jsonData : '", $response );
    if ( count( $datas ) > 0 ) {
        $data_1 = $datas[1];
        $data_1 = explode( "}]'", $data_1 )[0] . '}]';
        if ( strpos( $data_1, 'VNALL' ) ) : ?>
            <script>
                const vn_data = <?php echo $data_1 ?>;
            </script>
        <?php else : ?>
            <script>
                const global_data = <?php echo $data_1 ?>;
            </script>
        <?php endif;

        if ( count( $datas ) > 2 ) {
            $data_2 = $datas[2];
            $data_2 = explode( "}]'", $data_2 )[0] . '}]';
            if ( strpos( $data_2, 'QTALL' ) ) : ?>
                <script>
                    const global_data = <?php echo $data_2 ?>;
                </script>
            <?php else : ?>
                <script>
                    const vn_data = <?php echo $data_2 ?>;
                </script>
            <?php endif;
        }
    }
}

// tin tức
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://ncov.moh.gov.vn/web/guest/tin-tuc",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);

curl_close($curl);

if ( !empty( $response ) ) {
    try {
        $tintucs = explode( '_118_INSTANCE_IrnCPpeHzQ4m_column-1', $response );
        $arr_tin = [];
        if( count( $tintucs ) > 1 ) {
            $tintucs = explode( '_118_INSTANCE_IrnCPpeHzQ4m_column-2', $tintucs[1] )[0];
            
            $cols = explode( 'class="col-md-12"', $tintucs );
            if ( count( $cols ) > 1 ) {
                $tin = $cols[1];
                $img = explode( '"', explode( 'src="', $tin )[1] )[0];
                $href = explode( '"', explode( 'href="', $tin )[1] )[0];
                $title = explode( '<h2>', explode( "</h2>", explode( '"', explode( 'href="', $tin )[1] )[1] )[0] )[1];
                if ( !empty( $img ) && !empty( $href ) ) {
                    if ( false === strpos( $img, 'http' ) ) $img = 'https://ncov.moh.gov.vn' . $img;
                    if ( false === strpos( $href, 'http' ) ) $href = 'https://ncov.moh.gov.vn' . $href;
                        
                    array_push( $arr_tin, array( $img, $href, $title ) );
                }
            }
            if ( count( $cols ) > 2 ) {
                $tin = explode('class="row mb-15"', $cols[2] ) ;
                foreach( $tin as $item ) {
                    $img = explode( '"', explode( 'src="', $item )[1] )[0];
                    $href = explode( '"', explode( 'href="', $item )[1] )[0];
                    $title = explode( '>', explode( "</a>", explode( '"', explode( 'href="', $item )[1] )[1] )[0] )[1];
                    if ( !empty( $img ) && !empty( $href ) ) {
                        if ( false === strpos( $img, 'http' ) ) $img = 'https://ncov.moh.gov.vn' . $img;
                        if ( false === strpos( $href, 'http' ) ) $href = 'https://ncov.moh.gov.vn' . $href;
                        array_push( $arr_tin, array( $img, $href, $title ) );
                    }
                }
            }

            // code chay
            $link = explode( 'https://ncov.moh.gov.vn/web/guest/tin-tuc', $tintucs );
            if ( count( $link ) > 1 ) {
                $link = 'https://ncov.moh.gov.vn/web/guest/tin-tuc' . explode( '"', $link[1] )[0];
                $curl = curl_init();
                curl_setopt_array($curl, array(
                    CURLOPT_URL => $link,
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => "",
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => "GET",
                    ));
                    
                    $response = curl_exec($curl);
                    
                    curl_close($curl);
                    
                    if ( !empty( $response ) ) {
                        
                        try {
                            $tintucs = explode( '_118_INSTANCE_IrnCPpeHzQ4m_column-1', $response );
                            if( count( $tintucs ) > 1 ) {
                                $tintucs = explode( '_118_INSTANCE_IrnCPpeHzQ4m_column-2', $tintucs[1] )[0];
                                
                                $cols = explode( 'class="col-md-12"', $tintucs );
                                if ( count( $cols ) > 1 ) {
                                    $tin = $cols[1];
                                    $img = explode( '"', explode( 'src="', $tin )[1] )[0];
                                    $href = explode( '"', explode( 'href="', $tin )[1] )[0];
                                    $title = explode( '<h2>', explode( "</h2>", explode( '"', explode( 'href="', $tin )[1] )[1] )[0] )[1];
                                    if ( !empty( $img ) && !empty( $href ) ) {
                                        if ( false === strpos( $img, 'http' ) ) $img = 'https://ncov.moh.gov.vn' . $img;
                                        if ( false === strpos( $href, 'http' ) ) $href = 'https://ncov.moh.gov.vn' . $href;
                                        array_push( $arr_tin, array( $img, $href , $title) );
                                        
                                    }
                                }
                                if ( count( $cols ) > 2 ) {
                                    $tin = explode('class="row mb-15"', $cols[2] ) ;
                                    foreach( $tin as $item ) {
                                        $img = explode( '"', explode( 'src="', $item )[1] )[0];
                                        $href = explode( '"', explode( 'href="', $item )[1] )[0];
                                        $title = explode( '>', explode( "</a>", explode( '"', explode( 'href="', $item )[1] )[1] )[0] )[1];
                                        if ( !empty( $img ) && !empty( $href ) ) {
                                            if ( false === strpos( $img, 'http' ) ) $img = 'https://ncov.moh.gov.vn' . $img;
                                            if ( false === strpos( $href, 'http' ) ) $href = 'https://ncov.moh.gov.vn' . $href;
                                            array_push( $arr_tin, array( $img, $href, $title ) );
                                        }
                                    }
                                }
                    
                            }
                        } catch( Exception $e ) {
                    
                        }
                    }

            }

        }

        ?>
        <script>
            const tins = <?php echo json_encode( $arr_tin ) ?>;
        </script>
        <?php
    } catch( Exception $e ) {

    }
}

get_footer('ncov');