import { connect } from 'react-redux'
import MainComponent from '../components/mainComponent';

import {
    InitDataPrimeTimeSale
} from '../action/actionFunction';

const mapStateToProps = state => ({
    data_primetime : state.DataPrimeTimeReducer
});

const mapDispatchToProps = dispatch => ({
    InitDataPrimeTimeSale : data_primetime => dispatch(InitDataPrimeTimeSale(data_primetime))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);