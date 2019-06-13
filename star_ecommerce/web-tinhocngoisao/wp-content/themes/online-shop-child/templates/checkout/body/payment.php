
<?php 
    $packages = WC()->shipping->get_packages();
    $currentUser = wp_get_current_user();
    $otherAddr = get_user_meta( $currentUser->ID, 'wc_multiple_shipping_addresses', true );
    $addressSelected = [];
    $placeOrderText = __( 'Place order', 'woocommerce' );
    foreach ( $otherAddr as $idx => $address ) {
        if ($address['shipping_address_is_selected'] === 'true') {
            $addressSelected = $address;
            break;
        }
    }
?>


<div class="checkout-payment">
    <div class="paymnent-details">
        <h2>3. Chọn hình thức giao hàng và thanh toán</h2>
        <form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">
            <div class="delivery hidden">
                <h3>3.1 Chọn hình thức giao hàng</h3>
                <div class="delivery-items">
                    <div class="group-radio">
                        <input type="radio" name="delivery" id="delivery-01" value="free-ship" checked/>
                        <label for="delivery-01">Giao hàng tiêu chuẩn. (Miễn phí)</label>
                    </div>
                    <div class="group-radio">
                        <input type="radio" name="delivery" id="delivery-02" value="fee-ship"/>
                        <label for="delivery-02">Giao hàng nhanh trong thành phố. (50.000đ)</label>
                    </div>
                </div>
            </div>
            <div class="payment">
                <h3>3.1 Chọn hình thức thanh toán</h3>
                <div class="payment-items">
                    <div class="group-radio">
                        <input type="radio" name="payment_method" id="payment-01" value="cod" checked/>
                        <label for="payment-01">Thanh toán khi nhận hàng (COD)</label>
                    </div>
                </div>
            </div>
            <div class="btn-order">
            <button type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="<?php echo $placeOrderText ?>" data-value="<?php echo $placeOrderText ?>">"<?php echo $placeOrderText ?></button>
                <br/>
                <i>Vui lòng kiểm tra lại đơn hàng trước khi đặt mua</i>
            </div>
            <input type="hidden" name="billing_last_name" value="<?php echo $addressSelected['shipping_last_name']; ?>" />
            <input type="hidden" name="billing_country" value="VN" />
            <input type="hidden" name="billing_address_1" value="<?php echo $addressSelected['shipping_address_1']; ?>" />
            <input type="hidden" name="billing_address_2" value="<?php echo $addressSelected['shipping_address_2']; ?>" />
            <input type="hidden" name="billing_city" value="<?php echo $addressSelected['shipping_city']; ?>" />
            <input type="hidden" name="billing_state" value="<?php echo $addressSelected['shipping_state']; ?>" />
            <input type="hidden" name="billing_phone" value="<?php echo $addressSelected['shipping_phone']; ?>" />
            <input type="hidden" name="billing_email" value="<?php echo $currentUser->user_email; ?>"/>
            <?php wp_nonce_field( 'woocommerce-process_checkout', 'woocommerce-process-checkout-nonce' ); ?>
            
        </form>
    </div>
    <div class="order-details">
        <div class="order-address">
            <div class="head">
                <span>Giao hàng đến địa chỉ</span>
                <a href="<?php echo add_query_arg( 'step', 'shipping', get_permalink('checkout') ); ?>">Sửa</a>
            </div>
            <div class="address-content">
                <span>
                    <?php
                        do_action( 'display_address_info', array(
                                                                'address' => $addressSelected['shipping_address_1'],
                                                                'address2'=> $addressSelected['shipping_address_2'],
                                                                'city'    => $addressSelected['shipping_city'],
                                                                'state'   => $addressSelected['shipping_state']
                                                            )
                        );
                    ?>
                </span>
                <br/>
                <span>Điện thoại: <?php echo $addressSelected['shipping_phone']; ?></span>
            </div>
        </div>
        <div class="order-items">
            <div class="head">
                <span>Giỏ hàng</span>
                <a href="<?php echo esc_url( wc_get_cart_url() ); ?>">Sửa</a>
            </div>
            <div class="items">
                <?php foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) : ?>
                <?php
                    $_product     = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
                    if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_checkout_cart_item_visible', true, $cart_item, $cart_item_key ) ) :
                ?>
                <div class="product-item">
                    <span>
                        <strong><?php sprintf( $cart_item['quantity'], '&times; %s' ); ?></strong>
                        <a href="<?php echo get_permalink( $_product->get_id() ); ?>"><?php echo $_product->get_name(); ?></a>
                    </span>
                    <span><?php echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); ?></span>
                </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
            <div class="foot">
                <div class="order-totals">
                    <div class="line">
                        <span>Tạm tính:</span>
                        <strong><?php wc_cart_totals_subtotal_html(); ?></strong>
                    </div>
                    <div class="line">
                        <span>Phụ phí:</span>
                        <strong>0đ</strong>
                    </div>
                    <div class="line">
                        <span>Phí vận chuyển:</span>
                        <strong><?php echo __( 'Free shipping', 'woocommerce' ); ?></strong>
                    </div>
                    <div class="line total">
                        <span>Tổng cộng:</span>
                        <strong><?php wc_cart_totals_order_total_html(); ?></strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
