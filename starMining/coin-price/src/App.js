import React, { Component } from 'react';
// import './App.css';

// import component 
import CoinMarketCompnent from './components/coinMarket/coinMarketComponent';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(page_content);
    }

    render() {
        
        return (
            <div className="App">
                <CoinMarketCompnent />
            </div>
        );
    }
}

export default App;
