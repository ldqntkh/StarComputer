import { connect } from 'react-redux'
import ProductTypeItemComponent from '../../../components/body/productType/productTypeItemComponent';

import {
    ToogleModalChooseProduct,
    SetValueProductType
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    data_products_buildpc : state.BuildPcProductsReducer,

});

const mapDispatchToProps = dispatch => ({
    ToogleModalChooseProduct : toogle_value => dispatch(ToogleModalChooseProduct(toogle_value)),
    SetValueProductType      : product_type => dispatch(SetValueProductType(product_type)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTypeItemComponent);