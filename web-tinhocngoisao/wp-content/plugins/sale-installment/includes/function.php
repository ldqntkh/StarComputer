<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class StartBankFunction {
    public function __construct() {
        
    }

    public static function init_shortcode() {
        add_shortcode( 'display_brands', array('StartBankFunction', 'displayBrands') );
    }

    public static function init_api() {
        add_action( 'wp_ajax_bank_addnew', array('StartBankFunction', 'bank_addnew') );
        add_action( 'wp_ajax_bank_remove', array('StartBankFunction', 'removeBank') );
        add_action( 'wp_ajax_bank_update', array('StartBankFunction', 'updateBank') );
        add_action( 'wp_ajax_list_banks', array('StartBankFunction', 'getListBank') );

        add_action( 'wp_ajax_bank_insert_sub', array('StartBankFunction', 'updateSubBank') );
    }

    public static function bank_addnew() {
        $bank_name      = $_REQUEST['bank_name'];
        $bank_type      = !isset($_REQUEST['bank_type']) ? 0 : $_REQUEST['bank_type'];
        $bank_img       = $_REQUEST['bank_img'];
        $bank_index     = empty($_REQUEST['bank_index']) ? 0 : $_REQUEST['bank_index'];

        if ( empty( $bank_name ) || empty( $bank_img ) || empty( $bank_index ) ) {
            wp_send_json_error( array(
                'error' => __('Params not found!', BANK_PLUGIN_NAME )
            ) );
            die;
        }

        $bank_data = [
            "bank_name"     => $bank_name,
            "bank_type"     => $bank_type,
            "bank_img"      => $bank_img,
            "display_index"    => $bank_index,
        ];

        $bank = new Bank( json_encode( $bank_data ) );

        $result = $bank->addNew();
        wp_send_json_success( array(
            'status' => $result,
            'error' => !$result ? __('Không thể thêm mới ngân hàng', BANK_PLUGIN_NAME) : ''
        ) );
        die;
    }

    public static function updateBank() {
        $bank_id       = $_REQUEST['bank_id'];
        $bank_name     = $_REQUEST['bank_name'];
        $bank_type      = !isset($_REQUEST['bank_type']) ? 0 : $_REQUEST['bank_type'];
        $bank_img       = $_REQUEST['bank_img'];
        $bank_index     = empty($_REQUEST['bank_index']) ? 0 : $_REQUEST['bank_index'];

        if ( empty( $bank_name ) || empty( $bank_img ) || empty( $bank_index ) ) {
            wp_send_json_error( array(
                'error' => __('Params not found!', BANK_PLUGIN_NAME )
            ) );
            die;
        }

        $bank_data = [
            "ID"            => $bank_id,
            "bank_name"     => $bank_name,
            "bank_type"     => $bank_type,
            "bank_img"      => $bank_img,
            "display_index"    => $bank_index,
        ];

        $bank = new Bank( json_encode( $bank_data ) );

        $result = $bank->updateBank();

        wp_send_json_success( array(
            'status' => $result,
            'error' => !$result ? __('Không thể cập nhật thương hiệu này', BANK_PLUGIN_NAME) : ''
        ) );
        die;
    }

    public static function removeBank() {
        $bank_id     = $_POST['bank_id'];

        if ( empty( $bank_id ) ) {
            wp_send_json_error( array(
                'error' => __('Params not found!', BANK_PLUGIN_NAME )
            ) );
            die;
        }

        $objBank = new Bank();

        $result = $objBank->removeBank( $bank_id  );
        wp_send_json_success( array(
            'status' => $result,
            'error' => !$result ? __('Không thể xóa thương hiệu này', BANK_PLUGIN_NAME) : ''
        ) );
        die;
    }

    public static function getListBank() {
        $objBank = new Bank();
        $banks = $objBank->getListBanksHtml();
        wp_send_json_success( array(
            "data" => $banks
        ) );
        die;
    }

    public static function displayBrands( $args ) {
        $limit = isset($args['limit']) ? $args['limit'] : null;
        $display_name = isset($args['display_name']) ? true : false;
        $is_page = isset($args['is_page']) ? true : false;
        $is_display_page = false;
        $objBrand = new StarBrand();
        $brands = $objBrand->getListBrands( $limit, 1 );


        ob_start();
        echo '<div class="branches">';
        $index = 0;
        $flag = false;

        foreach( $brands as $brand ) : 
            $flag = false;
            $image = wp_get_attachment_image_src( $brand->brand_img, 'full' );
            if ( !$image ) {
                $image = esc_js( wc_placeholder_img_src() );
            } else {
                $image = $image[0];
            }

            if ( $is_page ) {
                if ( !$is_display_page ) {
                    echo '<div class="brch-row-page">';
                    $is_display_page = true;
                }
            }
            else if ( $index == 0 || $index % 8 == 0 ) {
                echo '<div class="brch-row">';
            }
            
            $name = '';
            if ( $display_name ) {
                echo '<div class="branch-item-name"><div class="branch-item">
                        <a href="'.$brand->brand_url.'">
                            <img src="'.$image.'" alt="'.$brand->brand_name.'" />
                        </a>
                    </div>
                    <a href="'.$brand->brand_url.'">'.$brand->brand_name.'
                    </a>
                </div>';
            } else {
                echo '<div class="branch-item">
                    <a href="'.$brand->brand_url.'">
                        <img src="'.$image.'" alt="'.$brand->brand_name.'" />
                    </a>
                </div>';
            }

            if ( $index > 0 && $index % 7 == 0 && !$is_page ) {
                echo '</div>';
                $index = -1;
                $flag = true;
            }
            $index++;
        endforeach; 
        if ( !$flag ) echo '</div>';
        echo '</div>';
        $list_brands = ob_get_contents(); //Lấy toàn bộ nội dung phía trên bỏ vào biến $list_post để return
 
        ob_end_clean();
 
        return $list_brands;

    }

    public static function updateSubBank() {
        $bank_id        = $_REQUEST['bank_id'];
        $visa           = !empty( $_REQUEST['visa'] ) ? 'visa' : '';
        $mastercard     = !empty( $_REQUEST['mastercard'] ) ? 'mastercard' : '';
        $jcb            = !empty( $_REQUEST['jcb'] ) ? 'jcb' : '';

        $sub_banks = [
            "visa"  => $visa,
            "mastercard"  => $mastercard,
            "jcb"  => $jcb
        ];

        $objBank = new Bank();
        $status = $objBank->insertSubBanks( $bank_id, $sub_banks );

        if ( $status ) {
            wp_send_json_success();
        } else {
            wp_send_json_error();
        }
        die;
    }
}

StartBankFunction::init_api();
StartBankFunction::init_shortcode();