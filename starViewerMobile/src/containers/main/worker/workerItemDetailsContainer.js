import { connect } from 'react-redux'
import WorkerItemDetailsComponent from '../../../components/main/worker/workerItemDetailsComponent';

const mapStateToProps = state => ({
    dataProducts : state.ListProductsReducer
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkerItemDetailsComponent)