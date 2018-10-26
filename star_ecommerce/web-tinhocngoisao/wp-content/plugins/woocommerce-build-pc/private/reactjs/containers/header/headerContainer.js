import { connect } from 'react-redux'
import HeaderComponent from '../../components/header/headerComponent';

import {
    InitComputerbuildingData
} from '../../action/actionFunction';

const mapStateToProps = state => ({
    computer_building_data : state.ComputerBuildingDataReducer
});

const mapDispatchToProps = dispatch => ({
    InitComputerbuildingData : computer_building_data => dispatch(InitComputerbuildingData(computer_building_data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);