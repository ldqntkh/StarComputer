import { connect } from 'react-redux'
import ProductSlideShowComponent from '../../../components/main/shop/productSlideShowComponent';
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
)(ProductSlideShowComponent)