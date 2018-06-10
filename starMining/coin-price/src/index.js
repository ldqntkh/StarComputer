import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

try {
    ReactDOM.render(<App />, document.getElementById('root'));
}catch(err) {
    // 
}
registerServiceWorker();
