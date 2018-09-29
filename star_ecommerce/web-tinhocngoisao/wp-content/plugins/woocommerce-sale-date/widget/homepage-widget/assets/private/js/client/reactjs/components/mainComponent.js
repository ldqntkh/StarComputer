import React, {Component} from 'react';

// import container
import MainHeaderContainer from '../containers/header/mainHeaderContainer';
import MainBodyContainer from '../containers/body/mainBodyContainer';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (typeof primetime_data !== 'undefined') {
            this.props.InitDataPrimeTimeSale(primetime_data);
        }
    }

    render() {
        return(
            <React.Fragment>
                <MainHeaderContainer />
                <MainBodyContainer />
            </React.Fragment>
        );
    }
}