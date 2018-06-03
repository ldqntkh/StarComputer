import { connect } from 'react-redux'
import LoginComponent from '../../components/account/LoginComponent';

const mapStateToProps = state => ({
    dataCoinsPrice : state.CoinsPriceDataReducer
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)