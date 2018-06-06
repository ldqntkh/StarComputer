import React, { Component } from 'react';
import './App.css';

// import component 
import CoinMarketCompnent from './components/coinMarket/coinMarketComponent';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <CoinMarketCompnent />
            </React.Fragment>
        );
    }
}

export default App;
