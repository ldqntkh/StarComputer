import React, {Component} from 'react';

export default class HeaderCategoryItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    categoryItemClick = ()=> {
        this.props.SetCategoryActived(this.props.category.cat_id);
    }

    render() {
        let classActive = 'category-item';
        if (this.props.category_actived == this.props.category.cat_id || 
            (typeof this.props.category_actived === 'undefined' && this.props.category.cat_id == -1)) 
            classActive = 'category-item active';
        return (
            <span className={classActive} onClick={() => this.categoryItemClick()}>
                {this.props.category.cat_name}
            </span>
        );
    }
}