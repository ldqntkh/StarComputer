import React, {Component} from 'react';

// import component
import HeaderComponent from './header/headerComponent';
import BodyComponent from './body/bodyComponent';
class MainComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <HeaderComponent />
                <BodyComponent />
            </React.Fragment>
        )
    }
}

export default MainComponent;