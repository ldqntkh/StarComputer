import React, {Component} from 'react';

// import component
import MainHeaderComponent from './header/mainHeaderComponent';
import MainBodyComponent from './body/mainBodyComponent';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            primetime_data : null
        }
    }

    componentWillMount() {
        if (typeof primetime_data !== 'undefined') {
            this.setState({
                primetime_data: primetime_data
            });
        }
    }

    render() {
        if (this.state.primetime_data === null) return '';

        return(
            <React.Fragment>
                <MainHeaderComponent primetime_data={this.state.primetime_data}/>
                <MainBodyComponent primetime_data={this.state.primetime_data}/>
            </React.Fragment>
        );
    }
}