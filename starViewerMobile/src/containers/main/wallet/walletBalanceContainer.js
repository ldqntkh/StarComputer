import { connect } from 'react-redux'
import WalletBalanceComponent from '../../../components/main/wallet/walletBalanceComponent';

const mapStateToProps = state => ({
    dataProducts : state.ListProductsReducer
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WalletBalanceComponent)