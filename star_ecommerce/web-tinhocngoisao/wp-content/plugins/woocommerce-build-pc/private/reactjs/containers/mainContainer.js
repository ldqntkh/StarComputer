import { connect } from 'react-redux'
import MainComponent from '../components/mainComponent';

import {
    InitDataProductType,
    InitComputerbuildingData
} from '../action/actionFunction';

const mapStateToProps = state => ({
    data_product_type : state.ProductTypeReducer
});

const mapDispatchToProps = dispatch => ({
    InitDataProductType         : data_product_type => dispatch(InitDataProductType(data_product_type)),
    InitComputerbuildingData    : computer_building_data => dispatch(InitComputerbuildingData(computer_building_data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);