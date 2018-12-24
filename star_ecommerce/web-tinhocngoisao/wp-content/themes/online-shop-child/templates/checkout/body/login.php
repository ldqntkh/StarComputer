<div class="checkout-account">
    <h2>1. Đăng nhập hoặc đăng ký thành viên mới</h2>
    <div class="social-login">
        <h3>Thanh toán đơn hàng trong chỉ một bước với:</h3>
        <div class="social-buttons">
            <a class="btn btn-block btn-social btn-facebook user-name-loginfb" title="Đăng nhập bằng Facebook" href="javascript: void(0)" data-url="https://tiki.vn/customer/account/login_facebook?checkout_step=1">
                <i class="fa fa-facebook"></i>
                <span>Đăng nhập bằng Facebook</span>
            </a>
            <p class="or">Hoặc</p>
            <a class="btn btn-block btn-social btn-google user-name-login-google" title="Đăng nhập bằng Google" href="javascript: void(0)" data-url="https://tiki.vn/customer/account/login_google?reset&amp;ref=checkout/shipping">
                <i class="fa fa-google-plus"></i>
                <span>Đăng nhập bằng Google</span>
            </a>
            <p class="or">Hoặc</p>
            <a class="btn btn-block btn-social btn-zalo user-name-login-zalo" title="Đăng nhập bằng Zalo" href="javascript: void(0)" data-url="https://tiki.vn/customer/account/loginZalo&amp;ref=checkout/shipping">
                <div class="icon-zalo"><img src="https://tiki.vn/desktop/img/svg/zaloicon.svg"></div>
                <span class="text">Đăng nhập bằng Zalo</span>
            </a>
        </div>
    </div>

    <div class="account-order">
        <div class="form-account">

            <div class="error_msg">
                <?php wc_print_notices(); ?>
            </div>

            <div class="tab">
                <button class="tablinks" id="checkout_login" onclick="openTabAccount(event, 'login')">
                    <span>Đăng nhập</span>
                    <br/>
                    <i>Dành cho thành viên của Tinhocngoisao</i>
                </button>
                <button class="tablinks" id="checkout_register" onclick="openTabAccount(event, 'register')">
                    <span>Đăng ký</span>
                    <br/>
                    <i>Dành cho khách hàng mới</i>
                </button>
            </div>

            <div id="login" class="tabcontent">
                <form method="post">
                    <div class="input-form">
                        <label for="username"><?php esc_html_e( 'Email or username', 'wooomsa' ); ?></label>
                        <input type="text" placeholder="Tài khoản" value="<?php echo !empty($_POST['username']) ? $_POST['username'] : '' ?>" name="username" autocomplete="username" id="username">
                    </div>
                    <div class="input-form">
                        <label for="password"><?php esc_html_e( 'Password', 'wooomsa' ); ?></label>
                        <input type="password" placeholder="Mật khẩu" value="" name="password" autocomplete="current-password" id="password">
                    </div>
                    <div class="group-button">
                        <p><?php esc_html_e( 'Lost your password?', 'wooomsa' ); ?> <a href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php esc_html_e( 'Here', 'wooomsa' ); ?></a></p> 
                        <?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
                        <input type="hidden" name="redirect" value="<?php echo esc_url( wc_get_page_permalink( 'checkout' ) ) ?>" />
                        <input type="hidden" name="currentTab" value="login"/>
                        <button type="submit" class="btn-login" name="login" value="<?php esc_attr_e( 'Login', 'woocommerce' ); ?>"><?php esc_html_e( 'Login', 'woocommerce' ); ?></button>
                    </div>
                </form>
            </div>

            <div id="register" class="tabcontent">
                <!-- kiểm tra thử 2 cái form có name input giống nhau có bị gì ko nhe a K -->
                <form method="post">
                    <div class="input-form">
                        <label for="username"><?php esc_html_e( 'Email', 'wooomsa' ); ?></label>
                        <input type="text" placeholder="Tài khoản" value="<?php ?>" name="email" id="reg_email">
                    </div>
                    <div class="input-form">
                        <label for="password"><?php esc_html_e( 'Mật khẩu', 'wooomsa' ); ?></label>
                        <input type="password" placeholder="<?php esc_html_e( 'Mật khẩu', 'placeholder', 'wooomsa' ); ?>" value="" name="password" autocomplete="new-password" id="reg_password">
                    </div>
                    <div class="input-form">
                        <label for="re-password"><?php esc_html_e( 'Nhập lại mật khẩu', 'wooomsa' ); ?></label>
                        <input type="password" placeholder="<?php esc_html_e( 'Nhập lại mật khẩu', 'placeholder', 'wooomsa' ); ?>" value="" name="password" autocomplete="new-password" id="reg_password_again">
                    </div>
                    <div class="group-button">
                        <p>Khi bạn đăng ký tài khoản, bạn đã đồng ý với mọi <a href="<?php echo esc_url( get_permalink( wc_privacy_policy_page_id() ) ) ?>" class="woocommerce-privacy-policy-link" target="_blank"><?php echo __( 'privacy policy', 'woomsa' ) ?></a> của chúng tôi.</p> 
                        <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
                        <input type="hidden" name="redirect" value="<?php echo esc_url( wc_get_page_permalink( 'checkout' ) ) ?>" />
                        <input type="hidden" name="currentTab" value="register"/>
                        <button type="submit" class="btn-login" name="register" value="<?php esc_attr_e( 'Đăng ký', 'wooomsa' ); ?>"><?php esc_html_e( 'Đăng ký', 'wooomsa' ); ?></button>
                    </div>
                </form>
            </div>
        </div>
        <div class="order-items">
            <div class="head">
                <span>Giỏ hàng</span>
                <a href="<?php echo esc_url( wc_get_page_permalink( 'cart' ) ) ?>">Sửa</a>
            </div>
            <div class="items">
                <?php
                foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
                    $_product = $cart_item['data'];
                    $quantity = $cart_item['quantity'];
                    $product_id = $cart_item['product_id'];
                    $product_permalink = $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '';
                    $price = WC()->cart->get_product_price_value($_product);
                    $regular_price = $_product->regular_price;
                    $sale_price = $_product->sale_price;
                ?>
                    <div class="product-item">
                        <span>
                            <strong><?php echo $quantity;?>x</strong>
                            <?php echo sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ); ?>
                        </span>
                        <?php if ( ! empty( $sale_price ) && $sale_price > 0 && $sale_price < $regular_price ) { ?>
                            <span class="price">
                                <span class="woocommerce-Price-amount amount"><?php echo wc_price( $sale_price ); ?></span>
                            </span>
                        <?php } else { ?>
                            <span class="price">
                                <span class="woocommerce-Price-amount amount"><?php wc_price( $regular_price ); ?></span>
                            </span>;
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>
            <div class="foot">
                <div class="order-totals">
                    <div class="line">
                        <span><?php esc_attr_e( 'Subtotal', 'woomsa' ); ?></span>
                        <strong><?php wc_cart_totals_subtotal_html(); ?></strong>
                    </div>
                    <div class="line total">
                        <span><?php _e( 'Total', 'woomsa' ); ?></span>
                        <strong><?php wc_cart_totals_order_total_html(); ?></strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        function openTabAccount(evt, tabname) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName('tabcontent');
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = 'none';
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName('tablinks');
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(' active', '');
            }

            // Show the current tab, and add an "active" class to the link that opened the tab
            document.getElementById(tabname).style.display = 'block';
            evt.currentTarget.className += ' active';
        }
        var currentTab = '<?php echo ! empty( $_POST['login'] ) ? 'checkout_login' : ! empty( $_POST['register'] ) ? 'checkout_register' : 'checkout_login'; ?>';
        document.getElementById(currentTab).click();
    </script>
</div>