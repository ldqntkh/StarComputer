import React, {Component} from 'react';

export default class SidebarHeaderComponent extends Component {

    render() {
        return (
            <div className="logo">
                <a href="/" className="simple-text logo-normal">
                    <img src="./assets/img/logo.png" alt="Tin học ngôi sao" />
                </a>
            </div>
        )
    }
}