<div class="checkout-thank">
    <?php $order = wc_get_order( $wp->query_vars['order-received'] ); ?>
    <?php if ( $order ) : ?>
    <div class="thank-contents">
        <h2>4. Hoàn tất đặt hàng</h4>
        <?php 
            $page_slug ='order-summary';
            $page_data = get_page_by_path($page_slug);
            $page_content = $page_data->post_content;

            $order_url = '<a href="' .$order->get_view_order_url(). '">'.$order->get_id().'</a>';
            $page_content = str_replace('{link_order}', $order_url, $page_content);
            $page_content = str_replace('{order_email}', $order->get_billing_email(), $page_content);
            echo $page_content;
        ?>
    </div>
    <div class="right-content"></div>
    <?php endif;?>
</div>