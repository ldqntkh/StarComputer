import React, {Component} from 'react';

// import component
import MainNavbarComponent from '../../header/mainNavbarComponent';
import MainFooterComponent from '../../footer/mainFooterComponent';
export default class DashboardComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <MainNavbarComponent/>
                <div className="content">

                </div>
                <MainFooterComponent/>
            </React.Fragment>
        )
    }
}