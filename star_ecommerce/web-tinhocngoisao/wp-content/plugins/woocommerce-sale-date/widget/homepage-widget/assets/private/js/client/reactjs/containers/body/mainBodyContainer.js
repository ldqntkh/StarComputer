import { connect } from 'react-redux'
import MainBodyComponent from '../../components/body/mainBodyComponent';

import {
    
} from '../../action/actionFunction';

const mapStateToProps = state => ({
    block_active : state.DataPrimeTimeReducer.block_active,
    block_active_click : state.DataPrimeTimeReducer.block_active_click,
    data_block : state.DataPrimeTimeReducer.data_block,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBodyComponent);