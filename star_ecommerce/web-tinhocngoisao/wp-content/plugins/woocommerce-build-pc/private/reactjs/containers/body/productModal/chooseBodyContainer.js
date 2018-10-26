import { connect } from 'react-redux'
import ChooseBodyComponent from '../../../components/body/productModal/chooseBodyComponent';

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