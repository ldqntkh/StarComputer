import React,{PureComponent} from 'react';
import {
    View,
    Dimensions,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

// import component
import ProductItemComponent from './productItemComponent';

// import style
import {productListPageStyle} from '../../../styleSheets/shop/productListPageStyle';

// import variable
const Url = 'http://103.235.212.205/wp-json/wc/v2/products/categories/80';

export default class ProductSlideShowComponent extends PureComponent {

    constructor(props) {
        super (props);
        this.state = {
            loaded: false,
            dataProducts : []
        }
    }
    componentDidMount() {
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
        // tính toán số lượng product sẽ hiển thị
        let showed = Math.floor(Dimensions.get('window').width / 160);
        let viewShowed = this.state.dataProducts.length / showed;
        viewShowed = Math.floor(viewShowed) === viewShowed ? viewShowed : Math.ceil(viewShowed);

        if (!this.state.loaded) {
            screen = <View style={productListPageStyle.parentViewLoading}>
                        <Image source={require('../../../../public/images/loading.gif')}
                          style={{width: 100, height: 90}} />
                    </View>
        } else {
            let miniScreens = [];
            let miniScreens_ = [];
            let miniScreen = null;
            for(let i = 0; i < this.state.dataProducts.length; i++) {
                miniScreens.push(<ProductItemComponent productItem={this.state.dataProducts[i]} key={i} />);
            }
            for(let i = 0; i < viewShowed; i++) {
                miniScreen = <View style={[productListPageStyle.listProducts,productListPageStyle.wrapperItem]} key={i}> 
                                {miniScreens.slice(i * showed, (i * showed) +showed)}
                            </View>
                miniScreens_.push(miniScreen);
            }

            screen = <View style={productListPageStyle.viewWrapper}>
                        <Swiper style={productListPageStyle.wrapper} 
                                showsButtons={false}>
                            {miniScreens_}
                        </Swiper>
                    </View>
        }

        return screen;
    }
}