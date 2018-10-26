import { connect } from 'react-redux'
import ProductDetailsComponent from '../../../components/body/productType/productDetailsComponent';

import {
    SetQuantityOfComputerProduct,
    ClearValueComputerProductByType
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    data_product_type : state.ProductTypeReducer
});

const mapDispatchToProps = dispatch => ({
    SetQuantityOfComputerProduct        : computer_product_data => dispatch(SetQuantityOfComputerProduct(computer_product_data)),
    ClearValueComputerProductByType     : computer_product_data => dispatch(ClearValueComputerProductByType(computer_product_data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailsComponent);