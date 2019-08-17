import React, { Component, createRef } from 'react'
import axios from 'axios';
import GroupProductComponent from './groupProduct/groupProductComponent';
import {URL_GET_LIST_PRODUCT_HAS_SLUG} from '../../../variable';
/**
 * Render session product name
 */

class BodyComponent extends Component {
    constructor(props) {
        super(props);
        this.list_product_sale_price = list_product_sale_price ? list_product_sale_price : [];
        this.list_product_sale_price.push({
            "cat_slug" : [],
            "name": "khac",
            "display_name" : "Khác"
        });

        for(let index in this.list_product_sale_price) {
            this[`list_product_${index}`] = createRef(); 
        }

        this.state = {
            fetching : false,
            post_number: 200,
            start_page: 1,
            search: {
                ma_sp : '',
                ten_sp: ''
            }
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    setValueSearch = (data) => {
        this.setState({
            search: data
        })
    }

    _fetchData = (page = 1)=> {
        let {
            post_number, start_page
        } = this.state;
        let url = URL_GET_LIST_PRODUCT_HAS_SLUG.replace('{post_number}', post_number).replace('{start_page}', start_page);
        this.setState({
            fetching: true
        });
        axios.get(url).then(async res => {
            let resultData = res.data;
            if (resultData.status === 'OK') {
                let dataProduct = resultData.data;
                for(let i in this.list_product_sale_price) {
                    dataProduct = await this[`list_product_${i}`].current.searchProducts(dataProduct);
                }
                page = page+1;
                this.setState({
                    start_page: page
                });
                this._fetchData(page);
            }
        }).catch(err => {
            console.log(err.message);
        }).finally(()=> {
            this.setState({
                fetching: false
            })
        });
    }

    _renderSession() {
        let result = [];
        for(let index in this.list_product_sale_price) {
            result.push(<GroupProductComponent search={this.state.search} item={this.list_product_sale_price[index]} key={index} ref={this[`list_product_${index}`]}/>)
        }
        return result;
    }

    render() {
        
        return (
            this._renderSession()
        )
    }
}

export default BodyComponent;
