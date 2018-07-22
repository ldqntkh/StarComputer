import React, { Component } from 'react';

// import component

// import variable
const Url = 'http://103.235.212.205/wp-json/wc/v2/products/categories/80';
var interval = null;
export default class ProductListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            dataProducts : [],
            page : 0,
            productPerpage: 0,
            indexPage: 0
        }

        this.getListProduct = this.getListProduct.bind(this);
        this.getProductAttribute = this.getProductAttribute.bind(this);
    }

    componentDidMount () {
        this.getListProduct();
    }

    async getListProduct() {
        try {
            if (this.props.dataProducts && this.props.dataProducts.length > 0) {
                this.setState({
                    dataProducts: this.props.dataProducts,
                    loaded: true
                })
            } else {
                let response = await fetch(Url);
                let responseJson = await response.json();
                let productJson = responseJson.count > 0 ? responseJson.products : []
                let products = this.getProductAttribute(productJson);
                this.props.updateListProducts(products);
                this.setState({
                    loaded: true,
                    dataProducts: products
                });
            }

            let _parentListProductWidth = document.getElementsByClassName('dv-list-products')[0].offsetWidth;
            let _productPerpage = Math.floor(_parentListProductWidth / 150);
            let _page = this.state.dataProducts.length / _productPerpage ;
            _page = Math.floor(_page) === _page ? _page : Math.ceil(_page);

            this.setState({
                productPerpage : _productPerpage
            })
            let that =this;
            clearInterval(interval);
            interval = setInterval(function() {
                let {page, indexPage, productPerpage, dataProducts} = that.state;
                if ((indexPage + 1) * productPerpage < dataProducts.length) {
                    indexPage ++;
                    that.setState({
                        indexPage : indexPage
                    });
                } else {
                    that.setState({
                        indexPage : 0
                    });
                }
            }, 10000);

        } catch (err) {
            console.log(err.message)
            this.setState({
                loaded: true
            })
        }
    }

    getProductAttribute (jsonProducts) {
        let results = [];
        /**
         * id
         * name
         * price
         * imageurl
         * url
         */
        jsonProducts.map((item, index) => {
            let result = {};
            result.id = item.id;
            result.name = item.name;
            result.price = item.sale_price === null ? item.price : item.sale_price;
            result.imageurl = item.images.length > 1 ? item.images[1].src : item.images[0].src;
            result.url = item.permalink;

            results.push(result);
        });
        return results;
    }
    
    replaceTextWithDot (text, n) {
        let updatedText = text;
        if (text.length > n) {
            updatedText =  text.substr(0, n) + '...';
        } 
        return updatedText;
    }

    render() {
        let screen  = null;
        let productArr = [];
        let item;
        if (!this.state.loaded) {
            screen = 
                <img className="loading-icon" src="../public/images/loading.gif" width="80" height="80"/>
        } else {
            if (this.state.dataProducts.length > 0) {
                let i = this.state.indexPage * this.state.productPerpage;
                let rank = i + this.state.productPerpage;
                if (rank > this.state.dataProducts.length) {
                    rank = this.state.dataProducts.length;
                }
    
                for(var x = i; x < rank; x++) {
                    item = this.state.dataProducts[x];
                    productArr.push(
                        <div className="dv-product-item">
                            <img src={item.imageurl} height="80"/>
                            <p>{this.replaceTextWithDot(item.name, 35)}</p>
                            <p>Giá:<span className="red-color">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Vnđ</span></p>
                        </div>
                    )
                }
                screen = 
                    <div className="dv-list-products">
                        {productArr}
                    </div>
            }
        }

        return (
            screen
        )
    }
}