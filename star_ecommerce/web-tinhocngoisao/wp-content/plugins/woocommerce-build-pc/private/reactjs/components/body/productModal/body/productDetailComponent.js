import React, { Component } from "react";

class ProductDetailComponent extends Component {

    constructor(props) {
        super(props);
    }

    SetValueComputerProductByType = ()=> {
        let {
            product,
            action_data
        } = this.props;
        this.props.SetValueComputerProductByType({
            "type" : action_data.value_product_type,
            "value" : product
        });
        this.props.ToogleModalChooseProduct(false);
    }

    render() {
        let product = this.props.product;
        let rating = null;
        let price = (product.sale_price !== "0" && product.sale_price !== "") ? product.sale_price : product.regular_price;
        if (product.average_rating !== "0") {
            rating = <div className="star-rating">
                        <span style={{width: (product.average_rating)/5 *100 + '%' }}>Rated <strong className="rating">{product.average_rating}</strong> out of 5</span>
                    </div>
        }
        return(
            <div className="modal-product-detail">
                <div className="image">
                    <img src={product.image}/>
                </div>
                <div className="content">
                    <a href={product.link} target="_blank">
                        <p className="name"> {product.name} </p>
                        <p className="price"> Giá: {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ</p>
                        <p className="productid"> Mã sản phẩm: {product.id} </p>
                        { rating }
                    </a>
                    <button className="add-to-build" type="button" onClick={this.SetValueComputerProductByType}>Chọn</button>
                </div>
            </div>
        );
    }
}

// create container
import { connect } from 'react-redux';

import {
    SetValueComputerProductByType,
    ToogleModalChooseProduct
} from '../../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer
});

const mapDispatchToProps = dispatch => ({
    SetValueComputerProductByType   : computer_product_type => dispatch(SetValueComputerProductByType(computer_product_type)),
    ToogleModalChooseProduct        : toogle_value => dispatch(ToogleModalChooseProduct(toogle_value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailComponent);