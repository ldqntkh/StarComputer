import React, {Component} from 'react';
const urlProduct = 'http://traucay.vn/wp-json/rest_api/v1/product/';

import {
    _Emit_ServerUpdateArduinoId
} from '../../lib/socketArduino';

export default class ItemArduinoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_id : "",
            product_data : null,
            check_product : false
        }
        this._handleChange = this._handleChange.bind(this);
    }

    async componentDidMount() {
        let {arduinoItem} = this.props;
        if (arduinoItem && arduinoItem.product_id) {
            await this.checkProductData();
        }
    }

    _handleChange (e) {
        this.setState({product_id: e.target.value})
    }

    checkProductData = async () => {
        this.setState({
            check_product : true,
            product_data : null
        });
        try {
            // fetch data
            let product_id = this.state.product_id !== "" ? this.state.product_id : this.props.arduinoItem.product_id;
            let data = await fetch(urlProduct + product_id);
            let jsonData = await data.json();
            if (jsonData.code === 'success') {
                jsonData = jsonData.data;
                let price = jsonData.salePrice !== null && jsonData.salePrice < jsonData.regularPrice ? jsonData.salePrice : jsonData.regularPrice;
                this.setState({
                    product_data : {
                        err : 0,
                        err_msg: "",
                        data : {
                            product_img : jsonData.imageLink,
                            product_name : jsonData.name,
                            product_link : jsonData.link,
                            product_price : price
                        }
                    },
                    check_product : false
                });
                _Emit_ServerUpdateArduinoId(this.props.arduinoItem.arduino_num, product_id);
            } else {
                this.setState({
                    product_data : {
                        err: 1,
                        err_msg : jsonData.message
                    },
                    check_product : false
                })
            }
        } catch (err) {
            console.log(err);
            this.setState({
                check_product : false
            })
        }
    }

    render() {
        let {arduinoItem} = this.props;
        let {product_data, check_product} = this.state;
        let productShow = null;
        if (product_data !== null) {
            if (product_data.err !== 0) {
                productShow = <span className="error"> {product_data.err_msg} </span>
            } else {
                productShow = <a href={product_data.data.product_link} target="_blank">
                    <img src={product_data.data.product_img}/>
                    <span>
                        <strong>{product_data.data.product_name}</strong><br/>
                        <span>Giá: {product_data.data.product_price}đ</span>
                    </span>
                </a>
            }
        }
        return (
            <div className="item-arduino">
                <div className="item-id">
                    <span>Arduino number:</span> 
                    <strong>&nbsp;{arduinoItem.arduino_num}</strong>
                </div>
                <div className="item-input">
                    <span>Product ID:</span>
                    <input type="input" name={arduinoItem.arduino_num} 
                        value={this.state.product_id !== "" ? this.state.product_id : arduinoItem.product_id ? arduinoItem.product_id : ''} 
                        onChange={this._handleChange}/>
                    {
                        !check_product ? 
                        <button type="button" onClick={ ()=> this.checkProductData() }>Check</button>
                        :
                        <button type="button">Checking</button>
                    }
                    
                </div>
                <div className="item-product-details">
                    {
                        productShow
                    }
                </div>
            </div>
        );
    }
}