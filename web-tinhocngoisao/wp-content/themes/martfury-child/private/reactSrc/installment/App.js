import React from 'react';
import ReactDOM from 'react-dom';
// import container
import MainComponent from './components/mainComponent.js';

const init = ()=> {
    try {
        document.body.classList.add('installment-data');
        ReactDOM.render(
            <MainComponent />, 
            document.getElementById('installment'));
    } catch (err) {
        //
    }
}

export default init;