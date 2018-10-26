import { connect } from 'react-redux'
import ListProductComponent from '../../../../components/body/productModal/body/listProductComponent';

import {
    
} from '../../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListProductComponent);