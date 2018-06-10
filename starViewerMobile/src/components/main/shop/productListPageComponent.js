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
const Url = 'http://103.235.212.205/wp-json/wc/v2/products?per_page=30';

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
                
                let products = this.getProductAttribute(responseJson);
                console.log(products);
                this.props.updateListProducts(products);
                this.setState({
                    loaded: true,
                    dataProducts: products
                })
            }
            //let products = `[{"id":7,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:39:40.000Z"},{"id":8,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:04.000Z"},{"id":9,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:08.000Z"},{"id":10,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":11,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":12,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":13,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":14,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":15,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":16,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":17,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":18,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":19,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":20,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":21,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":22,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":23,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":24,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":25,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":26,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":27,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":28,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":29,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"}]`;
            // products = JSON.parse(products);
            // this.props.updateListProducts(products);
            // this.setState({
            //     loaded: true,
            //     dataProducts: products
            // })
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
            result.price = item.sale_price === "" ? item.price : item.sale_price;
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
                          style={{width: 200, height: 150}} />
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