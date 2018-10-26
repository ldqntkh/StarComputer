import { connect } from 'react-redux'
import ChooseProductComponent from '../../../components/body/productModal/chooseProductComponent';

import {
    ToogleModalChooseProduct,
    InitProductDataByType,
    CleanValueProductSearchKey
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    data_product_type : state.ProductTypeReducer,
    action_data : state.ActionReducer,
    product_data : state.ProductDataReducer
});

const mapDispatchToProps = dispatch => ({
    ToogleModalChooseProduct        : toogle_value => dispatch(ToogleModalChooseProduct(toogle_value)),
    CleanValueProductSearchKey      : () => dispatch(CleanValueProductSearchKey()),
    InitProductDataByType           : product_data_by_type => dispatch(InitProductDataByType(product_data_by_type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseProductComponent);