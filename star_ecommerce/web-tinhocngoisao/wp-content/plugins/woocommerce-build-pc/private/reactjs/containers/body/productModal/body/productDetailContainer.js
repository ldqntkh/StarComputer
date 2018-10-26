import { connect } from 'react-redux'
import ProductDetailComponent from '../../../../components/body/productModal/body/productDetailComponent';

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