import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store
import {BuildPcStore} from './stores/indexStore';

// import container
import MainComponent from './components/mainComponent';

const init = ()=> {
    try {
        ReactDOM.render(
            <Provider store={BuildPcStore}>
                <MainComponent />
            </Provider>, 
            document.getElementById('build-pc-function'));
    } catch (err) {
        //
    }
}

export default init;