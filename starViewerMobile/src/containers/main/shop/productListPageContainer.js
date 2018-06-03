import { connect } from 'react-redux'
import ProductListPageComponent from '../../../components/main/shop/productListPageComponent';
import { UpdateListProducts } from '../../../actions/shop/shopProductAction'

const mapStateToProps = state => ({
    dataProducts : state.ListProductsReducer
});

const mapDispatchToProps = dispatch => ({
    updateListProducts : dataProducts => dispatch(UpdateListProducts(dataProducts))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListPageComponent)