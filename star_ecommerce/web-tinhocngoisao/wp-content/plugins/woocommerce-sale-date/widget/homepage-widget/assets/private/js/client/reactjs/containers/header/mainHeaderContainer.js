import { connect } from 'react-redux'
import MainHeaderComponent from '../../components/header/mainHeaderComponent';

import {
    SetBlockTimeActive
} from '../../action/actionFunction';

const mapStateToProps = state => ({
    data_block : state.DataPrimeTimeReducer.data_block,
    block_active : state.DataPrimeTimeReducer.block_active
});

const mapDispatchToProps = dispatch => ({
    SetBlockTimeActive : block_active => dispatch(SetBlockTimeActive(block_active))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainHeaderComponent);