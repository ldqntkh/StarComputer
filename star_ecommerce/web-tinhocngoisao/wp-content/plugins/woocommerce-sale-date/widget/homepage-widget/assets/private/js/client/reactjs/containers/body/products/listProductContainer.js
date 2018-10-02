import { connect } from 'react-redux'
import ListProductComponent from '../../../components/body/products/listProductComponent';

import {
    
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    block_active_click : state.DataPrimeTimeReducer.block_active_click, 
    end_block_time : state.DataPrimeTimeReducer.end_block_time, 
    block_active : state.DataPrimeTimeReducer.block_active,
    category_actived : state.DataPrimeTimeReducer.category_actived
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListProductComponent);