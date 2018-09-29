import React, {Component} from 'react';

export default class HeaderCategoryItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="category-item">
                <span>{this.props.category.cat_name}</span>
            </div>
        );
    }
}