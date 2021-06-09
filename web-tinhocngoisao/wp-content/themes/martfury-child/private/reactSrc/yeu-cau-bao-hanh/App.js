import React from 'react';
import ReactDOM from 'react-dom';
const api_url = '/wp-admin/admin-ajax.php';
import Axios from 'axios';

class YeuCauBaoHanhComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname : '',
            email: '',
            phone: '',
            address: '',
            company: '',
            product_type: 'PC để bàn',
            noidung: '',
            file: null,
            errorMsg: '',
            fetching: false,
            success: ""
        }
    }

    _handleChangeInput = (event)=> {
        let data = this.state;
        data.success = '';
        data[event.target.name] = event.target.value;
        this.setState(data)
    }

    _handleChangeFile = (event)=> {
        let data = this.state;
        data.file = event.target.files[0];
        this.setState(data);
    }

    _handleSubmitForm = async()=> {
        let data = this.state;
        if( data.fetching ) return false;
        data.errorMsg = '';
        this.setState(data);
        if( data.fullname.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết tên của bạn';
            this.setState(data);
            return false;
        } else {
            data.fullname = data.fullname.trim()
        }

        if( data.email.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết Email của bạn';
            this.setState(data);
            return false;
        } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email.trim())) {
            data.errorMsg = 'Email của bạn không hợp lệ';
            this.setState(data);
            return false;
        } else {
            data.email = data.email.trim()
        }

        if( data.phone.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết số điện thoại của bạn';
            this.setState(data);
            return false;
        } else if ( !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data.phone.trim()) ) {
            data.errorMsg = 'Số điện thoại của bạn không hợp lệ';
            this.setState(data);
            return false;
        } else {
            data.phone = data.phone.trim()
        }

        if( data.address.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết địa chỉ của bạn';
            this.setState(data);
            return false;
        } else {
            data.address = data.address.trim()
        }

        if( data.product_type.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết loại sản phẩm cần hỗ trợ';
            this.setState(data);
            return false;
        } else {
            data.product_type = data.product_type.trim()
        }

        if( data.noidung.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết tình trạng hiện tại của sản phẩm';
            this.setState(data);
            return false;
        } else {
            data.noidung = data.noidung.trim()
        }

        try {
            this.setState({
                fetching: true
            });
            const formData = new FormData();
            formData.append('action', 'insertycbh');
            formData.append('fullname', data.fullname);
            formData.append('phone', data.phone);
            formData.append('email', data.email);
            formData.append('description', data.noidung);
            formData.append('address', data.address);
            formData.append('company', data.company);
            formData.append('product_type', data.product_type);
            // formData.append('has_thebaohanh', data.has_thebaohanh);
            formData.append('file', data.file);
            const response = await Axios.post(
                api_url,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            )
            const responseData = response.data;
            if( responseData.success ) {
                this.setState({
                    fullname : '',
                    email: '',
                    phone: '',
                    address: '',
                    company: '',
                    product_type: 'PC để bàn',
                    noidung: '',
                    file: null,
                    errorMsg: '',
                    success: 'Yêu cầu của bạn đã được tiếp nhận. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!'
                })
            } else {
                this.setState({
                    errorMsg: responseData.data.message ? responseData.data.message : "Đã có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline để được hỗ trợ!"
                })
            }
        } catch (err) {
            console.log(err)
            this.setState({
                errorMsg: "Đã có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline để được hỗ trợ!"
            })
        } finally {
            this.setState({
                fetching: false
            });
        }
    }

    render() {
        let data = this.state;
        let spSp = ["PC để bàn", "Laptop", "LCD", "Màn hình", "Camera", "Máy in"];
        return (
            <div className="form-container">
                <div className="header">
                    <h3>YÊU CẦU DỊCH VỤ KỸ THUẬT, BẢO HÀNH</h3>
                    <p>Nếu quý khách có yêu cầu bảo hành tận nơi hoặc bất cứ dịch vụ kỹ thuật nào, quý khách vui lòng gửi yêu cầu tới chúng tôi.<br/>Sau khi nhận được yêu cầu, nhân viên sẽ liên hệ ngay với khách hàng để phục vụ.</p>
                </div>
                <div className="form-content">
                    <div className="form-group">
                        <label htmlFor="fullname">Họ tên<span style={{color: 'red'}}>*</span></label>
                        <input name="fullname" value={data.fullname} onChange={this._handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email<span style={{color: 'red'}}>*</span></label>
                        <input name="email" type="email" value={data.email} onChange={this._handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Số điện thoại<span style={{color: 'red'}}>*</span></label>
                        <input name="phone" value={data.phone} onChange={this._handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ<span style={{color: 'red'}}>*</span></label>
                        <input name="address" value={data.address} onChange={this._handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Công ty</label>
                        <input name="company" value={data.company} onChange={this._handleChangeInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="product_type">Chọn loại sản phẩm cần hỗ trợ</label>
                        <select name="product_type" onChange={(event)=> this.setState({ product_type: event.target.value })}>
                        {
                            spSp.map((item, index) => {
                                return( <option value={item} key={index}>{item}</option> )
                            })
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Ảnh chụp sản phẩm lỗi / Phiếu bảo hành / Phiếu xuất kho</label>
                        <input type="file" 
                            onChange={this._handleChangeFile}
                            accept="image/jpeg,image/png,application/pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                            name="file" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="noidung">Nội dung yêu cầu</label>
                        <textarea name="noidung" value={data.noidung} onChange={this._handleChangeInput}/>
                    </div>
                    {
                        data.errorMsg != '' &&
                        <div className="form-group">
                            <p style={{color: 'red'}}>Lỗi: <i>{data.errorMsg}</i></p>
                        </div>
                    }
                    {
                        data.success != '' &&
                        <div className="form-group">
                            <p style={{color: 'green'}}>Thông báo: <i>{data.success}</i></p>
                        </div>
                    }

                    <div className="form-group-btn">
                        <button type="button" onClick={this._handleSubmitForm}>{ !data.fetching ? "Gửi yêu cầu" : "Đang gửi yêu cầu..." }</button>
                    </div>
                </div>
            </div>
        );
    }
}



const init = ()=> {
    try {
        document.body.classList.add('installment-data');
        ReactDOM.render(
            <YeuCauBaoHanhComponent />, 
            document.getElementById('yeu-cau-bao-hanh'));
    } catch (err) {
        //
    }
}

export default init;