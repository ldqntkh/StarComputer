import React from 'react';
import Select from 'react-select';
const api_url = '/wp-admin/admin-ajax.php';
import Axios from 'axios';

class DangKyBaoHanhComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input_imei: '',
            CustomerAdd: '',
            CustomerMobile: '',
            CustomerName: '',
            infos: {},
            fetching: false,
            success: "",
            errorMsg: '',
            hts_errors: []
        }
    }

    async componentDidMount() {
        document.body.classList.add('compare_loading');
        try {
            let response = await Axios.get(
                '/wp-json/rest_api/v1/get-error-hts'
            );
            
            this.setState({
                hts_errors: response.data.data ? response.data.data : []
            })
        } catch (err) {
            console.log(err);
        } finally {
            document.body.classList.remove('compare_loading');
        }
    }

    _handleChangeInput = (event)=> {
        let data = this.state;
        data.success = '';
        data[event.target.name] = event.target.value;
        this.setState(data)
    }

    _handleSubmitForm = async()=> {
        let data = this.state;
        if( data.fetching ) return false;
        data.errorMsg = '';
        this.setState(data);
        
        if( data.CustomerAdd.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết địa chỉ của bạn';
            this.setState(data);
            return false;
        }
        if( data.CustomerMobile.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết số điện thoại của bạn';
            this.setState(data);
            return false;
        }
        if( data.CustomerName.trim() == '' ) {
            data.errorMsg = 'Vui lòng cho biết họ tên của bạn';
            this.setState(data);
            return false;
        }
        if( Object.keys(data.infos).length == 0 ) {
            data.errorMsg = 'Vui lòng nhập sản phẩm lỗi';
            this.setState(data);
            return false;
        }
        let keys = Object.keys(data.infos);
        for( let i = 0; i < keys.length; i++ ) {
            if( data.infos[keys[i]].ErrorID == -1 ) {
                data.errorMsg = 'Vui lòng chọn mã lỗi cho sản phẩm: ' + data.infos[keys[i]].ItemName ;
                this.setState(data);
                return false;
            }
        }


        try {
            document.body.classList.add('compare_loading');
            this.setState({
                fetching: true
            });
            let dataPost = {...this.state};
            delete(dataPost.hts_errors)
            let response = await Axios.post('/wp-json/rest_api/v1/add-bao-hanh-hts',
                dataPost
            );
            
            if( response.data.success ) {
                this.setState({
                    input_imei: '',
                    CustomerAdd: '',
                    CustomerMobile: '',
                    CustomerName: '',
                    infos: {},
                    fetching: false,
                    errorMsg: '',
                    hts_errors: [],
                    success: 'Yêu cầu của bạn đã được tiếp nhận. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!'
                });
            } else {
                this.setState({
                    errorMsg: response.data.data.msg ? response.data.data.msg : "Đã có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline để được hỗ trợ!"
                })
            }
        } catch (err) {
            this.setState({
                errorMsg: "Đã có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ hotline để được hỗ trợ!"
            })
        } finally {
            document.body.classList.remove('compare_loading');
            this.setState({
                fetching: false
            });
        }
    }

    _searchImei = async() => {
        if( this.state.input_imei.trim() == '' ) return false;

        let imei = this.state.input_imei.trim();
        document.body.classList.add('compare_loading');
        try {
            let response = await Axios.post(
                '/wp-json/rest_api/v1/get-info-by-imei-hts', 
                {
                    "Imei": imei
                }
            );
            if( response.data.data.info && response.data.data.info.length > 0 ) {
                let info = response.data.data.info[0];
                
                let _infos = this.state.infos;

                if( this.state.CustomerMobile != '' &&  this.state.CustomerMobile != info.Mobile ) {
                    alert('Bạn đang nhập IMEI thuộc về 1 đơn hàng khác, chúng tôi sẽ hủy thông tin hiện tại để lưu thông tin mới.');
                    _infos = {};
                }
                _infos[imei] = {
                    "Assignedby":"", 
                    "Description":"", 
                    "ErrorCode":"", 
                    "ErrorDescription":"",
                    "ErrorID":-1, 
                    "Imei": imei, 
                    "ItemCode": info.ItemCode, 
                    "Priorityid":"1",	
                    "Requestdate": parseInt(new Date().getTime()/1000),
                    "ItemName": info.ItemName
                }
                
                this.setState({
                    errorMsg: '',
                    CustomerAdd: info.Address,
                    CustomerMobile: info.Mobile,
                    CustomerName: info.CusName.replace('.' + info.Mobile, ''),
                    CreatedDate: parseInt(new Date().getTime()/1000), 
                    Description: '',
                    infos: _infos
                });
            } else {
                this.setState({
                    errorMsg: "Chúng tôi không tìm thấy thông tin với IMEI được cung cấp"
                })
            }
        } catch (err) {
            console.log(err);
            this.setState({
                errorMsg: err.message
            })
        } finally {
            document.body.classList.remove('compare_loading');
        }
    }

    _renderErrorCode = (imei)=> {
        let hts_errors = this.state.hts_errors;
        let _infos = this.state.infos;

        const optHTS = [];
        optHTS.push({ label: 'Chọn mã lỗi', value: '' });
        for( let i = 0; i < hts_errors.length; i++ ) {
            optHTS.push({ label: hts_errors[i].Name, value: hts_errors[i].ID });
        }

        return(
            <div className="form-group">
                <label htmlFor={imei}>Mã lỗi<span style={{color: 'red'}}>*</span></label>
                <Select options={optHTS} name={imei} placeholder="Chọn mã lỗi" className="select2"
                    onChange={ (values) => {
                        if( values.value == '' ) {
                            _infos[imei].ErrorID = -1;
                            _infos[imei].ErrorCode = '';
                        } else {
                            _infos[imei].ErrorID = values.value;
                            _infos[imei].ErrorCode = values.label;
                        }
                        this.setState({
                            infos: _infos
                        })
                    } }
                />
            </div>
        )
    }

    render() {
        let data = this.state;
        let infos = this.state.infos;
        let infoKeys = Object.keys( infos );
        return (
            <div className="form-container">
                <div className="header">
                    <h3>YÊU CẦU LẤY HÀNG LỖI TẬN NƠI TẠI HỒ CHÍ MINH</h3>
                    <p>Sau khi nhận được yêu cầu và xem xét thông tin quý khách cung cấp, nếu hợp lệ theo điều khoản của chúng tôi, nhân viên của TinHocNgoiSao sẽ liên hệ với quý khách trong thời gian sớm nhất.</p>
                    <p><i>Nếu sản phẩm lỗi thuộc <strong>2 đơn hàng khác nhau</strong>, quý khách vui lòng <strong>không tạo chung 1 yêu cầu</strong> để tránh nhầm lẫn thông tin</i></p>
                </div>
                <div className="form-content">
                    <div className="form-group form-imei">
                        <label htmlFor="input_imei">Imei in trên sản phẩm<span style={{color: 'red'}}>*</span></label>
                        <input name="input_imei" value={data.input_imei} onChange={this._handleChangeInput}/>
                        <button onClick={this._searchImei}><i className="fa fa-search"></i></button>
                    </div>

                    <div className="form-group">
                        <label htmlFor="CustomerName">Họ tên</label>
                        <input readOnly={true} name="CustomerName" value={data.CustomerName} onChange={()=>null}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CustomerMobile">Số điện thoại</label>
                        <input readOnly={true} name="CustomerMobile" value={data.CustomerMobile} onChange={()=>null}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CustomerAdd">Địa chỉ</label>
                        <input readOnly={true} name="CustomerAdd" value={data.CustomerAdd} onChange={()=>null}/>
                    </div>

                    {
                        infoKeys && infoKeys.length > 0 &&
                        infoKeys.map((item, index)=> {
                            let info = infos[item];
                            return (
                                <fieldset key={item}>
                                    <legend>{info.Imei}</legend>
                                    <div className="form-group">
                                        <label htmlFor="">Tên sản phẩm</label>
                                        <input readOnly={true} name="" value={ info.ItemName} onChange={()=>null}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Imei</label>
                                        <input readOnly={true} name="" value={ info.Imei} onChange={()=>null}/>
                                    </div>
                                    {
                                        this._renderErrorCode(item)
                                    }
                                    <div className="form-group">
                                        <label htmlFor="noidung">Mô tả lỗi</label>
                                        <textarea name="noidung" value={ info.ErrorDescription} onChange={(e)=> {
                                            let _infos = this.state.infos;
                                            _infos[item].ErrorDescription = e.target.value;
                                            this.setState({
                                                infos: _infos
                                            })

                                        }}/>
                                    </div>
                                    <button onClick={()=> {
                                        let _infos = this.state.infos;
                                        delete _infos[item];
                                        this.setState({
                                            errorMsg: '',
                                            infos: _infos
                                        })
                                    }}>Xóa sản phẩm này</button>
                                </fieldset>
                            )
                        })
                    }
                    
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
                    {
                        infoKeys && infoKeys.length > 0 &&
                        <div className="form-group-btn">
                            <button type="button" onClick={this._handleSubmitForm}>{ !data.fetching ? "Gửi yêu cầu" : "Đang gửi yêu cầu..." }</button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default DangKyBaoHanhComponent;