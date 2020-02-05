import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// import container
import MainComponent from './components/mainComponent';

const init = ()=> {
    try {
        ReactDOM.render(
            // <Provider store={BuildPcStore}>
                <MainComponent />,
            // </Provider>, 
            document.getElementById('list_sale_price'));
    } catch (err) {
        //
    }
}

export default init;