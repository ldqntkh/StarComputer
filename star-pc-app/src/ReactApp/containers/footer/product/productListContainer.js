import { connect } from 'react-redux'
import { AddDataProducts } from '../../../actions/product/productAction'
import ProductListComponent from '../../../components/product/productListComponent';

const mapStateToProps = state => ({
    dataProduct: state.ProductListReducer
});

const mapDispatchToProps = dispatch => ({
    updateListProducts: dataProduct => AddDataProducts(dataProduct)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListComponent)