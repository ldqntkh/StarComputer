import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

export default class ItemSidebarComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <li className="nav-item">
                <NavLink className="nav-link" to={item.href} activeClassName="active">
                    <i className={item.icon_class}>{item.icon_name}</i>
                    <p>{item.title}</p>
                </NavLink>
            </li>
        )
    }
}