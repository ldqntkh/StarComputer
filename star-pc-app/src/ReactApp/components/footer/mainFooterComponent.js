import React from 'react';
import PropTypes from 'prop-types'

import CoinPricesComponent from '../coinprices/coinPricesComponent';
import ProductListContainer from '../../containers/footer/product/productListContainer';

const MainFooterComponent = ({screen, toggleScreen}) => {
    return (
        <footer>
            <CoinPricesComponent />
            <ProductListContainer />
        </footer>
    )
}

MainFooterComponent.PropTypes = {
    screen : PropTypes.string.isRequired,
    toggleScreen: PropTypes.func.isRequired
}
export default MainFooterComponent;