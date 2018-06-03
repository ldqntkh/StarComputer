import React, {Component} from 'react';

// import component
import SidebarHeaderComponent from './sidebarHeaderComponent';
import ListItemSidebarComponent from './listItemSidebarComponent'

export default class MainSidebarComponent extends Component {

    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white">
                <SidebarHeaderComponent />
                <ListItemSidebarComponent />
            </div>
        )
    }
}