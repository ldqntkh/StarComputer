import React, {Component} from 'react';

import ListCategoriesComponent from './listCategoriesComponent';

import {
    URL_GET_LIST_CATEGORIES
} from '../../variable';

const CATEGORIES_DATA='CATEGORIES_DATA';

class MainComponent extends Component {

    constructor (props) {
        super (props);
        this.state = {
            category_click : null,
            loaded : false,
            fetched : false,
            categories : []
        }
    }

    componentWillMount() {
        this._getDataCategories(this.state.category_click);
    }

    _getDataCategories = (category)=> {
        let url = URL_GET_LIST_CATEGORIES.replace('{cat_id}', category ? category.ID : "0");
        if (sessionStorage.getItem(CATEGORIES_DATA) && JSON.parse(sessionStorage.getItem(CATEGORIES_DATA)).length > 0 ) {
            this.setState({
                fetched : true,
                loaded : true,
                categories : JSON.parse(sessionStorage.getItem(CATEGORIES_DATA)),
                category_click : category
            });
        } else {
            fetch(url)
            .then(response =>  response.json())
            .then(resData => {
                if (resData.status !== "OK") {
                    console.log(resData.errMsg)
                }
                if (resData.data.length == 0) {
                    if (category) location.href = category.url;
                } else {
                    this.setState({
                        fetched : true,
                        loaded : true,
                        categories : resData.data == null ? [] : resData.data,
                        category_click : category
                    });
                    sessionStorage.setItem(CATEGORIES_DATA, JSON.stringify(this.state.categories));
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    render() {
        let {
            loaded, fetched, categories, category_click
        } = this.state;
        
        if (!loaded) {
            return <div className="loading">
                        <i className="fa fa-spinner"></i>
                    </div>
        } else {
            return <ListCategoriesComponent category_click={category_click} categories={categories}/>
        }
    }
}

export default MainComponent;