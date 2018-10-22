import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store
import {BuildPcStore} from './stores/indexStore';

// import component

// import container
import MainContainer from './containers/mainContainer';

ReactDOM.render(
    <Provider store={BuildPcStore}>
        <MainContainer />
    </Provider>, 
    document.getElementById('build-pc-function') );