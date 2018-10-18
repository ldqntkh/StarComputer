import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store
import PrimeTimeStore from './stores/indexStore';

import MainContainer from './containers/mainContainer';

ReactDOM.render(
    <Provider store={PrimeTimeStore}>
        <MainContainer />
    </Provider>, 
    document.getElementById('slider-section-right'));