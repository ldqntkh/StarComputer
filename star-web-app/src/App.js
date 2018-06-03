import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// import component
import MainSidebarComponent from './components/sidebar/mainSidebarComponent';
import MainPageComponent from './components/main/mainPageComponent';
class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <MainSidebarComponent />
                    <MainPageComponent/>
                </React.Fragment>
            </Router>
        );   
    }
}

export default App;
