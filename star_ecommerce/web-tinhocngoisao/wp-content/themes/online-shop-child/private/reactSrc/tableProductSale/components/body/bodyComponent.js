import React, { Component } from 'react'

import GroupProductComponent from './groupProduct/groupProductComponent';

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
    }

    _renderSession() {
        let result = [];
        for(let index in this.list_product_sale_price) {
            result.push(<GroupProductComponent item={this.list_product_sale_price[index]} key={index} />)
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
