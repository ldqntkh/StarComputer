import React, {Component} from 'react';

export default class ItemArduinoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_data : null,
            check_product : false
        }
    }

    // async componentDidMount() {
    //     let {arduinoItem} = this.props;
    //     if (arduinoItem && arduinoItem.id_product) {
    //         await this.checkProductData();
    //     }
    // }

    checkProductData = async () => {
        this.setState({
            check_product : true,
            product_data : null
        });
        // fetch data
        this.setState({
            product_data : {
                err : 0,
                err_msg: "",
                data : {
                    product_img : "http://traucay.vn/wp-content/uploads/2017/12/vga03-1-100x100.png",
                    product_name : "Dàn máy đào 6 VGA RX470 4G His",
                    product_link : "http://traucay.vn/product/mobile/",
                    product_price : 10000000
                }
            },
            check_product : false
        })
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
                        value={arduinoItem.id_product ? arduinoItem.id_product : ''} 
                        onChange={()=> console.log('')}/>
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