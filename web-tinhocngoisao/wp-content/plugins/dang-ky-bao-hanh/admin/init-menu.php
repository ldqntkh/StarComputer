<?php
add_action( 'admin_menu', 'cpp_service_menu', 100 );
function cpp_service_menu() {
    add_menu_page( 'Danh sách YCBH' ,'Danh sách YCBH', 'quan_ly_bao_hanh', 'danh-sach-yeu-cau-bao-hanh', 'danh_sach_yeu_cau_bao_hanh');
    add_submenu_page( 'danh-sach-yeu-cau-bao-hanh' ,'Cấu hình thông báo', 'Cấu hình thông báo', 'manage_options', 'cau-hinh-thong-bao', 'cau_hinh_thong_bao');
}

function danh_sach_yeu_cau_bao_hanh() {
    if( isset( $_GET['type'] ) && $_GET['type'] == 'view' ) {
        include_once DKBH_PLUGIN_DIR . '/admin/view/chi-tiet-bao-hanh.php';
    } else {
        include_once DKBH_PLUGIN_DIR . '/admin/view/danh-sach-bao-hanh.php';
    }
}

function cau_hinh_thong_bao() {
    include_once DKBH_PLUGIN_DIR . '/admin/view/cau-hinh-thong-bao.php';
}