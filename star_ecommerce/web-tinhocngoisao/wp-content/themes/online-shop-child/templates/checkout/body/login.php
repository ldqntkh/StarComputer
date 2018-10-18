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
                <form>
                    <div class="input-form">
                        <label for="username">Email hoặc username:</label>
                        <input type="text" placeholder="Tài khoản" value="" name="username" id="username">
                    </div>
                    <div class="input-form">
                        <label for="password">Mật khẩu:</label>
                        <input type="password" placeholder="Mật khẩu" value="" name="password" id="password">
                    </div>
                    <div class="group-button">
                        <p>Quên mật khẩu? Bạn có thể khôi phục tại <a href="#">đây</a></p> 
                        <button class="btn-login">Đăng nhập</button>
                    </div>
                </form>
            </div>

            <div id="register" class="tabcontent">
                <!-- kiểm tra thử 2 cái form có name input giống nhau có bị gì ko nhe a K -->
                <form>
                    <div class="input-form">
                        <label for="username">Email hoặc username:</label>
                        <input type="text" placeholder="Tài khoản" value="" name="username" id="username">
                    </div>
                    <div class="input-form">
                        <label for="password">Mật khẩu:</label>
                        <input type="password" placeholder="Mật khẩu" value="" name="password" id="password">
                    </div>
                    <div class="input-form">
                        <label for="re-password">Nhập lại mật khẩu:</label>
                        <input type="password" placeholder="Mật khẩu" value="" name="re-password" id="re-password">
                    </div>
                    <div class="input-form">
                        <label for="username">Họ tên</label>
                        <input type="text" placeholder="Họ tên" value="" name="fullname" id="username">
                    </div>
                    <div class="group-button">
                        <p>Khi bạn đăng ký tài khoản, bạn đã đồng ý với mọi <a href="#">chính sách</a> của chúng tôi.</p> 
                        <button class="btn-login">Đăng nhập</button>
                    </div>
                </form>
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
                    <div class="line total">
                        <span>Tổng cộng:</span>
                        <strong>1.550.000đ</strong>
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
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the link that opened the tab
            document.getElementById(tabname).style.display = "block";
            evt.currentTarget.className += " active";
        }
        document.getElementById("checkout_login").click();
    </script>
</div>