<div class="checkout-address">
    <h2>2. Chọn địa chỉ giao hàng</h2>
    <p>Chọn địa chỉ giao hàng có sẵn</p>
    <div class="list-address">
        <div class="address-item active">
            <div class="address-content">
                <div class="address-name">
                    <h3>Address name 1</h3>
                    <span class="default">Mặc định</span>
                </div>
                <p>Địa chỉ: 416 Dương quảng hàm, Gò Vấp, Hồ chí minh</p>
                <p>Diên thoại: 012345678</p>
                <div class="group-button">
                    <span>Giao đến địa chỉ này</span>
                    <span>Sửa</span>
                    <span>Xóa</span>
                </div>
            </div>
        </div>
        <div class="address-item">
            <div class="address-content">
                <div class="address-name">
                    <h3>Address name 2</h3>
                </div>
                <p>Địa chỉ: 416 Dương quảng hàm, Gò Vấp, Hồ chí minh</p>
                <p>Diên thoại: 012345678</p>
                <div class="group-button">
                    <span>Giao đến địa chỉ này</span>
                    <span>Sửa</span>
                    <span>Xóa</span>
                </div>
            </div>
        </div>
        <div class="address-item">
            <div class="address-content">
                <div class="address-name">
                    <h3>Address name 3</h3>
                </div>
                <p>Địa chỉ: 416 Dương quảng hàm, Gò Vấp, Hồ chí minh</p>
                <p>Diên thoại: 012345678</p>
                <div class="group-button">
                    <span>Giao đến địa chỉ này</span>
                    <span>Sửa</span>
                    <span>Xóa</span>
                </div>
            </div>
        </div>
        <div class="address-item">
            <div class="address-content">
                <div class="address-name">
                    <h3>Address name 4</h3>
                </div>
                <p>Địa chỉ: 416 Dương quảng hàm, Gò Vấp, Hồ chí minh</p>
                <p>Diên thoại: 012345678</p>
                <div class="group-button">
                    <span>Giao đến địa chỉ này</span>
                    <span>Sửa</span>
                    <span>Xóa</span>
                </div>
            </div>
        </div>
    </div>
    <p>Bạn muốn giao đến địa chỉ mới? <a href="#" onclick="showNewAddressForm(event)">Tạo địa chỉ mới.</a></p>
    <div class="new-address hidden">
        <form>
            <h2>Tạo địa chỉ mới</h2>
            <div class="input-form">
                <label for="fullname">Họ tên:</label>
                <input type="text" placeholder="Tài khoản" value="" name="fullname" id="fullname">
            </div>
            <div class="input-form">
                <label for="phone">Số điện thoại:</label>
                <input type="text" placeholder="Số điện thoại" value="" name="phone" id="phone">
            </div>
            <div class="input-form">
                <label for="city">Tỉnh / Thành phố:</label>
                <select id="city" name="city">
                    <option value=''>Chon thành phố</option>
                </select>
            </div>
            <div class="input-form">
                <label for="district">Quận / Huyện</label>
                <select id="district" name="district">
                    <option value=''>Chọn quận/huyện</option>
                </select>
            </div>
            <div class="input-form">
                <label for="ward">Phường / xã</label>
                <select id="ward" name="ward">
                    <option value=''>Chọn phường xã</option>
                </select>
            </div>
            <div class="input-form">
                <label for="address">Địa chỉ:</label>
                <textarea type="text" placeholder="Địa chỉ" value="" name="address" id="address">
                </textarea>
            </div>
            <div class="group-button">
                <button class="save">Giao đến địa chỉ này</button>
                <a href="#" onclick="showNewAddressForm(event)" class="cancel">Hủy</a>
            </div>
        </form>
    </div>
</div>
<!-- tạm thời viết script ở đây -->
<script>
    function showNewAddressForm(event) {
        event.preventDefault();
        var address_form = document.getElementsByClassName('new-address');
        if (address_form.length > 0) {
            if (address_form[0].className.indexOf('hidden') > 0) {
                address_form[0].className = address_form[0].className.replace('hidden', '');
            } else {
                address_form[0].className += " hidden";
            }
        }
    }
</script>