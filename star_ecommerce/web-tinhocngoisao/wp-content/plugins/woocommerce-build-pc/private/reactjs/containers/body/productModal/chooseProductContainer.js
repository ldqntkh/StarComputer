import { connect } from 'react-redux'
import ChooseProductComponent from '../../../components/body/productModal/chooseProductComponent';

import {
    ToogleModalChooseProduct
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer
});

const mapDispatchToProps = dispatch => ({
    ToogleModalChooseProduct : toogle_value => dispatch(ToogleModalChooseProduct(toogle_value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseProductComponent);