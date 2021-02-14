import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './components/mainComponent';

const init = ()=> {
    try {
        ReactDOM.render(
            <MainComponent />,
            document.getElementById("list_category_mobile"));
    } catch(err) {
        
    }
}
export default init;