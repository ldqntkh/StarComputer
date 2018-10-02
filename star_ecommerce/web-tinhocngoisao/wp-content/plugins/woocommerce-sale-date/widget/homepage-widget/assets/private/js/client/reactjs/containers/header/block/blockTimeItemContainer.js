import { connect } from 'react-redux'
import BlockTimeItemComponent from '../../../components/header/block/blockTimeItemComponent';

import {
    SetBlockActiveClick
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    block_active : state.DataPrimeTimeReducer.block_active,
    block_active_click : state.DataPrimeTimeReducer.block_active_click,
    data_block : state.DataPrimeTimeReducer.data_block,
});

const mapDispatchToProps = dispatch => ({
    SetBlockActiveClick : block_active_click => dispatch(SetBlockActiveClick(block_active_click))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockTimeItemComponent);