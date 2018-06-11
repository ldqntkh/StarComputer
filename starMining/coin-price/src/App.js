import React, { Component } from 'react';
import './App.css';

// import component 
import CoinMarketCompnent from './components/coinMarket/coinMarketComponent';
import CoinCalculator from './components/coinCalculator/coinCalculator';

class App extends Component {
    render() {
        let component = null;
        if(window.location.href.indexOf('bang-gia-coin') > 0) {
            component = <CoinMarketCompnent/>
        } else {
            component = <CoinCalculator />
        }
        return (
            <React.Fragment>
                {component}
            </React.Fragment>
        );
    }
}

export default App;
