<?php 
/**
 * Template Name: Đăng ký bảo hành
 */
if( !is_user_logged_in() ) {
    wp_redirect( 'https://tinhocngoisao.com/my-account?redirect_to=https://tinhocngoisao.com/yeu-cau-bao-hanh' );
    die;
}
get_header();
?>
    <div id="yeu-cau-bao-hanh"></div>
<?php
    get_footer();
?>