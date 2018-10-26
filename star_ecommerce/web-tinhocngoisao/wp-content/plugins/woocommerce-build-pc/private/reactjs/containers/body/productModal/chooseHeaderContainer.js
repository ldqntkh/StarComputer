import { connect } from 'react-redux'
import ChooseHeaderComponent from '../../../components/body/productModal/chooseHeaderComponent';

import {
    SetValueProductSearchKey
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer
});

const mapDispatchToProps = dispatch => ({
    SetValueProductSearchKey : product_search_key => dispatch(SetValueProductSearchKey(product_search_key))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseHeaderComponent);