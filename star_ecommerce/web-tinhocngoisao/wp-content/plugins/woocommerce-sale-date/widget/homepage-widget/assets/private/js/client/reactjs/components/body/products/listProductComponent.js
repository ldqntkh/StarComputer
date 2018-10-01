import React, {Component} from 'react';

// import component
import ProductItemComponent from './productItemComponent';

// import variable 
import {
    HOST, URL_API_GET_LIST_PRODUCT
} from '../../../variable';

export default class ListProductComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            block_time : 0,
            loaded : false,
            listProduct : []
        }
    }

    async componentDidMount() {
        await this.getProducts();
    }

    async componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props) ) {
            this.setState({
                loaded : false,
                listProduct : []
            });
            console.log('update')
            await this.getProducts();
        }
    }

    getProducts = async() => {
        try {
            let {
                category_actived,
                block_active,
                block_active_click,
                end_block_time
            } = this.props;
    
            let block = typeof block_active_click != 'undefined' ? block_active_click : block_active;

            if (typeof category_actived === 'undefined' && isNaN(category_actived)) category_actived = -1;

            let url = URL_API_GET_LIST_PRODUCT.replace('{cat_id}', category_actived).replace('{block_time}', block).replace('{end_block_time}', end_block_time);
            console.log(url);
            let response = await fetch(HOST + url);
            let dataJson = await response.json();
            this.setState({
                loaded : true,
                listProduct : dataJson
            })
        } catch (err) {
            console.log(err);
            this.setState({
                loaded : true
            })
        }
    }

    renderListProduct = ()=> {
        
        let listProduct = this.state.listProduct;
        let result = [];
        for(let index in listProduct) {
            result.push(<ProductItemComponent key={index} dataProduct={listProduct[index]}/>);
        }
        return result;
    }

    render() {
        if (this.state.loaded == false) return <div> Cho chut coi </div>
        return (
            <div className="featured-entries-col woocommerce column custom-primetime-sale">
                {this.renderListProduct()}
            </div>
        );
    }
}