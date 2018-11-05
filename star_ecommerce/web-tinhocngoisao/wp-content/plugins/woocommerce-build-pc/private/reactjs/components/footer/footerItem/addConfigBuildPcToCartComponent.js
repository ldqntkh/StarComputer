import React, {Component} from 'react';
var url_api = 'insert_multiple_products_to_cart?product_data_add_to_cart={0},null';
import {
    HOST_URL_API
} from '../../../variable';
export default class AddConfigBuildPcToCartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adding : false
        }
    }

    AddingItemsToCart = async ()=> {
        if (localStorage.getItem('computer_building_data')) {
            if (this.state.adding) {
                return;
            }
            this.setState({
                adding : true
            });

            let computer_building_data = JSON.parse(localStorage.getItem('computer_building_data'));
            let flagRequire = false;
            for(let index in computer_building_data) {
                if (computer_building_data[index].require && computer_building_data[index].product === null) {
                    //flagRequire = true;
                    break;
                }
            }

            if (flagRequire) {
                alert("Vui lòng chọn những sản phẩm bắt buộc phải có (*) trong cấu hình máy tính trước khi thực hiện chức năng này!");
            } else {
                // loại bỏ những phần tử ko cần thiết, chỉ giữ lại productid và quantity
                var data_insert = '';
                for(let index in computer_building_data) {
                    if (computer_building_data[index].product !== null ) {
                        if (data_insert.length > 0) data_insert += ',';
                        data_insert += computer_building_data[index].product.id + '_' + computer_building_data[index].quantity;
                    }
                }
                
                let link = HOST_URL_API + url_api.replace('{0}', data_insert);
                console.log(link);
                try {
                    let response = await fetch(link);
                    let jsonResponse = await response.json();
                    if (jsonResponse.success) {
                        alert("Toàn bộ sản phẩm đã được thêm vào giỏ hàng.");
                    } else {
                        alert(jsonResponse.errMsg);
                    }
                } catch(err) {
                    alert(err.message);
                }
            }
        }
    }

    render() {
        return(
            <div className="btn-item">
                <button type="button" className="btn btn-add-to-cart" onClick={this.AddingItemsToCart}>
                    <i className="fa fa-shopping-cart" />
                    Thêm vào giỏ hàng
                </button>
            </div>
        );
    }
}