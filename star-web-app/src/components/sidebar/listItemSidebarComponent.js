import React, {Component} from 'react';

// import component
import ItemSidebarComponent from './itemSlidebarComponent';

const lstItems = [
    {
        href: '/dashboard',
        icon_class: 'material-icons',
        icon_name: 'dashboard',
        title: 'Dashboard',
    },
    {
        href: '/users',
        icon_class: 'material-icons',
        icon_name: 'person',
        title: 'User Profile',
    },
    {
        href: '/products',
        icon_class: 'material-icons',
        icon_name: 'content_paste',
        title: 'List products',
    },
    {
        href: '/promotions',
        icon_class: 'material-icons',
        icon_name: 'library_books',
        title: 'List promotion',
    }
]

export default class ListItemSidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <ul className="nav">
                    {
                        lstItems.map((item, index) => {
                            return <ItemSidebarComponent item={item} key={index} />
                        })
                    }
                </ul>
            </div>
        )
    }
}