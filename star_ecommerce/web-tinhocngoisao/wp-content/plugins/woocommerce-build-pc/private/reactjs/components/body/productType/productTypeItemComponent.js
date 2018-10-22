import React, {Component} from 'react';
// import component
import ProductDetailsComponent from './productDetailsComponent';

export default class ProductTypeItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    showModalChooseProduct = ()=> {
        // setup data modal
        this.props.SetValueProductType(this.props.product_type.value);
        // show modal
        this.props.ToogleModalChooseProduct(true);
    }

    checkProductTypeExists = (product_type)=> {
        let {data_products_buildpc} = this.props;
        for(let index in data_products_buildpc) {
            if (data_products_buildpc[index].product_type === product_type)
                return data_products_buildpc[index];
        }
        return false;
    }

    render() {
        let {product_type} = this.props;
        let product_data = this.checkProductTypeExists(product_type.value);
        return(
            <React.Fragment>
            <div className="product-type-item">
                <div className="left-content">
                    {this.props.index} . {product_type.name}
                </div>
                <div className="right-content">
                    {
                        /**
                         * check nếu đã chọn 1 product nào đó thì render product đó
                         * nếu chưa thì render button chon product
                         */
                    }
                    {
                        !product_data ? 
                            <button className="choose-product" onClick={this.showModalChooseProduct}>
                                <i className="fa fa-plus"></i>
                                {product_type.name}
                            </button>
                        :
                            <ProductDetailsComponent product_id = {product_data.product_id} />
                    }
                </div>
            </div>
            </React.Fragment>
        );
    }
}