import React, { Component } from 'react';
import {
    View, Image
} from 'react-native'
import {
    Container, Content, Icon
} from 'native-base';

// import component
import HeaderDetailsComponent from '../header/headerDetailsComponent';
import ProductItemComponent from './productItemComponent';

// import style
import {productListPageStyle} from '../../../styleSheets/shop/productListPageStyle';

// import const
import { MAIN_WALLET_SCREEN } from '../../../const/variableScreen';
import { SHOP } from '../../../const/variableLabel';
// import variable
const Url = 'http://103.235.212.205/wp-json/wc/v2/products/categories/80';

export default class ProductListPageComponent extends Component {
    static navigationOptions = {
        tabBarIcon : () => {
            return <Icon name="md-cart"
                          style={{width: 25, height: 25}} />
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            dataProducts : []
        }
    }

    componentDidMount () {
        this.getListProduct();
    }

    getListProduct = async ()=> {
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
                })
            }
        } catch (err) {
            console.log(err.message)
            this.setState({
                loaded: true
            })
        }
    }

    getProductAttribute = (jsonProducts) => {
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
    

    render() {
        let screen  = null;
        if (!this.state.loaded) {
            screen = <View style={productListPageStyle.parentViewLoading}>
                        <Image source={require('../../../../public/images/loading.gif')}
                          style={{width: 100, height: 90}} />
                    </View>
        } else {
            screen = <View style={productListPageStyle.listProducts}>
                        {
                            this.state.dataProducts.map((item, index) => {
                                return <View style={productListPageStyle.viewItem} key={index} >
                                    <ProductItemComponent productItem={item} />
                                </View>
                            })
                        }
                    </View>
        }
        return (
            <Container style={ productListPageStyle.parentContainer }>
                <HeaderDetailsComponent walletName={SHOP} 
                                        navigation={typeof (this.props.screenProps) === 'undefined' ? this.props.navigation : this.props.screenProps.mainNavigate} 
                                        backPage={MAIN_WALLET_SCREEN}/>
                <Content>
                    {screen}
                </Content>
            </Container>
        )
    }
}