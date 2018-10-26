import { connect } from 'react-redux'
import ProductTypeItemComponent from '../../../components/body/productType/productTypeItemComponent';

import {
    ToogleModalChooseProduct,
    CleanValueProductSearchKey,
    SetValueProductType
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    computer_building_data : state.ComputerBuildingDataReducer
});

const mapDispatchToProps = dispatch => ({
    ToogleModalChooseProduct        : toogle_value => dispatch(ToogleModalChooseProduct(toogle_value)),
    CleanValueProductSearchKey      : () => dispatch(CleanValueProductSearchKey()),
    SetValueProductType             : product_type => dispatch(SetValueProductType(product_type)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTypeItemComponent);