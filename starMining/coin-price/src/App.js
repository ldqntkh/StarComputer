import React, { Component } from 'react';
import './App.css';

// import component 
//import CoinMarketCompnent from './components/coinMarket/coinMarketComponent';
import CoinCalculator from './components/coinCalculator/coinCalculator';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CoinCalculator />
            </React.Fragment>
        );
    }
}

export default App;
