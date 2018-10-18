
<?php 
    $packages = WC()->shipping->get_packages();
?>


<div class="checkout-payment">
    <div class="paymnent-details">
        <h2>3. Chọn hình thức giao hàng và thanh toán</h2>
        <form>
            <div class="delivery">
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
                <h3>3.2 Chọn hình thức thanh toán</h3>
                <div class="payment-items">
                    <div class="group-radio">
                        <input type="radio" name="payment" id="payment-01" value="cod" checked/>
                        <label for="payment-01">Thanh toán khi nhận hàng (COD)</label>
                    </div>
                </div>
            </div>
            <div class="btn-order">
                <button>Đặt mua</button>
                <br/>
                <i>Vui lòng kiểm tra lại đơn hàng trước khi đặt mua</i>
            </div>
        </form>
    </div>
    <div class="order-details">
        <div class="order-address">
            <div class="head">
                <span>Giao hàng đến địa chỉ</span>
                <a href="#">Sửa</a>
            </div>
            <div class="address-content">
                <span>Địa chỉ: 416 Dương quảng hàm, phường 5, Gò Vấp, Hồ Chí Minh</span>
                <br/>
                <span>Điện thoại: 0123456789</span>
            </div>
        </div>
        <div class="order-items">
            <div class="head">
                <span>Giỏ hàng</span>
                <a href="#">Sửa</a>
            </div>
            <div class="items">
                <div class="product-item">
                    <span>
                        <strong>2x</strong>
                        <a href="#">Sản phẩm 01</a>
                    </span>
                    <span>150.000đ</span>
                </div>
                <div class="product-item">
                    <span>
                        <strong>1x</strong>
                        <a href="#">Sản phẩm 02</a>
                    </span>
                    <span>1.300.000đ</span>
                </div>
            </div>
            <div class="foot">
                <div class="order-totals">
                    <div class="line">
                        <span>Tạm tính:</span>
                        <strong>1.450.000đ</strong>
                    </div>
                    <div class="line">
                        <span>Phụ phí:</span>
                        <strong>100.000đ</strong>
                    </div>
                    <div class="line">
                        <span>Phí vận chuyển:</span>
                        <strong>50.000đ</strong>
                    </div>
                    <div class="line total">
                        <span>Tổng cộng:</span>
                        <strong>1.600.000đ</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>