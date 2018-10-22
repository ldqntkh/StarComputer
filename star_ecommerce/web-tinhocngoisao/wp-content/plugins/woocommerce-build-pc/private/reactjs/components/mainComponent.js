import React, {Component} from 'react';

// import component
import HeaderComponent from './header/headerComponent';

// import container
import MainBodyContainer from '../containers/body/mainBodyContainer';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (typeof product_types !== 'undefined') {
            this.props.InitDataProductType(product_types);
        }
    }

    render() {
        return(
            <React.Fragment>
                <HeaderComponent />
                <MainBodyContainer />
            </React.Fragment>
        );
    }
}