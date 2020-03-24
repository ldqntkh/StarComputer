<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class StartBrandFunction {
    public function __construct() {
        
    }

    public static function init_shortcode() {
        add_shortcode( 'display_brands', array('StartBrandFunction', 'displayBrands') );
    }

    public static function init_api() {
        add_action( 'wp_ajax_brand_addnew', array('StartBrandFunction', 'addNewBrand') );
        add_action( 'wp_ajax_brand_remove', array('StartBrandFunction', 'removeBrand') );
        add_action( 'wp_ajax_brand_update', array('StartBrandFunction', 'updateBrand') );
        add_action( 'wp_ajax_list_brands', array('StartBrandFunction', 'getListBrand') );
    }

    public static function addNewBrand() {
        $brand_name     = $_REQUEST['brand_name'];
        $brand_status   = empty($_REQUEST['brand_status']) ? 0 : $_REQUEST['brand_status'];
        $brand_img      = $_REQUEST['brand_img'];
        $brand_url      = $_REQUEST['brand_url'];
        $brand_index    = empty($_REQUEST['brand_index']) ? 0 : $_REQUEST['brand_index'];

        if ( empty( $brand_name ) || empty( $brand_img ) || empty( $brand_url ) ) {
            wp_send_json_error( array(
                'error' => __('Params not found!', BRAND_PLUGIN_NAME )
            ) );
            die;
        }

        $brand_data = [
            "brand_name"    => $brand_name,
            "brand_status"  => $brand_status,
            "brand_img"     => $brand_img,
            "brand_url"     => $brand_url,
            "brand_index"   => $brand_index,
        ];

        $brand = new StarBrand( json_encode( $brand_data ) );

        $result = $brand->addNew();
        wp_send_json_success( array(
            'status' => $result,
            'error' => !$result ? __('Không thể thêm mới thương hiệu', BRAND_PLUGIN_NAME) : ''
        ) );
        die;
    }

    public static function updateBrand() {
        $brand_id       = $_REQUEST['brand_id'];
        $brand_name     = $_REQUEST['brand_name'];
        $brand_status   = empty($_REQUEST['brand_status']) ? 0 : $_REQUEST['brand_status'];
        $brand_img      = $_REQUEST['brand_img'];
        $brand_url      = $_REQUEST['brand_url'];
        $brand_index    = empty($_REQUEST['brand_index']) ? 0 : $_REQUEST['brand_index'];

        if ( empty( $brand_name ) || empty( $brand_img ) || empty( $brand_url ) ) {
            wp_send_json_error( array(
                'error' => __('Params not found!', BRAND_PLUGIN_NAME )
            ) );
            die;
        }

        $brand_data = [
            "id"      => $brand_id,
            "brand_name"    => $brand_name,
            "brand_status"  => $brand_status,
            "brand_img"     => $brand_img,
            "brand_url"     => $brand_url,
            "brand_index"   => $brand_index,
        ];

        $brand = new StarBrand( json_encode( $brand_data ) );

        $result = $brand->updateBrand();

        wp_send_json_success( array(
            'status' => $result,
            'error' => !$result ? __('Không thể cập nhật thương hiệu này', BRAND_PLUGIN_NAME) : ''
        ) );
        die;
    }

    public static function removeBrand() {
        $brand_id     = $_POST['brand_id'];

        if ( empty( $brand_id ) ) {
            wp_send_json_error( array(
                'error' => __('Params not found!', BRAND_PLUGIN_NAME )
            ) );
            die;
        }

        $brand = new StarBrand( );

        $result = $brand->removeBrand( $brand_id  );
        wp_send_json_success( array(
            'status' => $result,
            'error' => !$result ? __('Không thể xóa thương hiệu này', BRAND_PLUGIN_NAME) : ''
        ) );
        die;
    }

    public static function getListBrand() {
        $objBrand = new StarBrand();
        $brands = $objBrand->getListBrandsHtml();
        wp_send_json_success( array(
            "data" => $brands
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
}

StartBrandFunction::init_api();
StartBrandFunction::init_shortcode();