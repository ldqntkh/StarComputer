import { connect } from 'react-redux'
import MainComponent from '../components/mainComponent';

import {
    InitDataProductType
} from '../action/actionFunction';

const mapStateToProps = state => ({
    data_product_type : state.ProductTypeReducer
});

const mapDispatchToProps = dispatch => ({
    InitDataProductType : data_product_type => dispatch(InitDataProductType(data_product_type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);