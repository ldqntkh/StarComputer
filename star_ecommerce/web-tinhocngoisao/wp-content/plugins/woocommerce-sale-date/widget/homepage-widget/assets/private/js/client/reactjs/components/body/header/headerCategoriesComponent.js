import React, {Component} from 'react';

// import component
import HeaderCategoryItemComponent from './headerCategoryItemComponent';

export default class HeaderCategoriesComponent extends Component {

    constructor(props) {
        super(props);
    }

    renderListCategories = ()=> {
        let list_categories = this.props.list_categories;
        let result = [];
        result.push(
            <HeaderCategoryItemComponent key={-1} category={{
                "cat_id" : "all",
                "cat_name" : "Tất cả"
            }}/>
        )
        for(let item = 0; item < list_categories.length; item ++) {
            result.push(
                <HeaderCategoryItemComponent key={item} category={list_categories[item]}/>
            )
        }
        return result;
    }

    render() {
        return(
            <div className='header-categories'>
                {this.renderListCategories()}
            </div>
        );
    }
}