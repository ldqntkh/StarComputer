import { connect } from 'react-redux'
import MainBodyComponent from '../../components/body/mainBodyComponent';

import {
    //InitDataProductType
} from '../../action/actionFunction';

const mapStateToProps = state => ({
    data_product_type : state.ProductTypeReducer
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBodyComponent);