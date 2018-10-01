import React, {Component} from 'react';

export default class HeaderCategoryItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    categoryItemClick = ()=> {
        this.props.SetCategoryActived(this.props.category.cat_id);
    }

    render() {
        return (
            <span className="category-item" onClick={() => this.categoryItemClick()}>
                {this.props.category.cat_name}
            </span>
        );
    }
}