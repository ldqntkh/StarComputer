import React, {Component} from 'react';

export default class AddConfigBuildPcToCartComponent extends Component {

    render() {
        return(
            <div className="btn-item">
                <button type="button" className="btn btn-add-to-cart">
                    <i className="fa fa-shopping-cart" />
                    Thêm vào giỏ hàng
                </button>
            </div>
        );
    }
}