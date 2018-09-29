import { connect } from 'react-redux'
import HeaderTimeDownComponent from '../../components/header/headerTimeDownComponent';

import {
    SetBlockTimeActive
} from '../../action/actionFunction';

const mapStateToProps = state => ({
    block_active : state.DataPrimeTimeReducer.block_active,
    next_block_active : state.DataPrimeTimeReducer.next_block_active,
    time_down_data : state.DataPrimeTimeReducer.time_down_data
});

const mapDispatchToProps = dispatch => ({
    SetBlockTimeActive : block_active => dispatch(SetBlockTimeActive(block_active))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderTimeDownComponent);