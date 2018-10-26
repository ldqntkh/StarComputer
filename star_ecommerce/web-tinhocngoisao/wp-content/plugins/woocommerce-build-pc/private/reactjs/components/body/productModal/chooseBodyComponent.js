import React, {Component} from 'react';

// import component
import ListAttributeComponent from './body/attribute/listAttributeComponent';

// import container
import ListProductContainer from '../../../containers/body/productModal/body/listProductContainer';

export default class ChooseBodyComponent extends Component {

    constructor(props) {
        super(props);
    }

    // xử lý render list product trước
    render() {
        let {product_data} = this.props;
        let product_data_by_type = product_data[this.props.action_data.value_product_type];
        return (
            <React.Fragment>
                {/*filter attribute*/}
                <div className="filter-attri">
                    <ListAttributeComponent product_data={product_data_by_type}/>
                </div>

                {/*Show list product*/}
                {
                    product_data_by_type !== null && <ListProductContainer product_data={product_data_by_type} />
                }
            </React.Fragment>
        );
    }
}