import React, {Component} from 'react';

// import component
import HeaderCategoryItemComponent from './headerCategoryItemComponent';
// import container
import HeaderCategoryItemContainer from '../../../containers/body/header/headerCategoryItemContainer';

export default class HeaderCategoriesComponent extends Component {

    constructor(props) {
        super(props);
    }

    renderListCategories = ()=> {
        let list_categories = this.props.list_categories;
        let result = [];
        result.push(
            <HeaderCategoryItemContainer key={-1} category={{
                "cat_id" : "-1",
                "cat_name" : "Tất cả"
            }}/>
        )
        if (list_categories && list_categories.length > 0)
            for(let item = 0; item < list_categories.length; item ++) {
                result.push(
                    <HeaderCategoryItemContainer key={item} category={list_categories[item]}/>
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