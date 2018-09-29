import { connect } from 'react-redux'
import MainBlockComponent from '../../../components/header/block/mainBlockComponent';

import {
    SetBlockTimeActive
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    data_block : state.DataPrimeTimeReducer.data_block,
    block_active : state.DataPrimeTimeReducer.block_active,
    block_active_click : state.DataPrimeTimeReducer.block_active_click
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBlockComponent);