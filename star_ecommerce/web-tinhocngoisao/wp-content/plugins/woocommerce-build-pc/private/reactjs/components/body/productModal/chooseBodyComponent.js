import React, {Component} from 'react';

// import component
import ListAttributeComponent from './body/attribute/listAttributeComponent';
import ListProductComponent from './body/listProductComponent';

class ChooseBodyComponent extends Component {

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
                    <ListAttributeComponent product_data={product_data_by_type} product_type={this.props.product_type}/>
                </div>

                {/*Show list product*/}
                {
                    product_data_by_type !== null && <ListProductComponent product_data={product_data_by_type} />
                }
            </React.Fragment>
        );
    }
}

// create container
import { connect } from 'react-redux';

import {
    
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer,
    product_data : state.ProductDataReducer
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseBodyComponent);