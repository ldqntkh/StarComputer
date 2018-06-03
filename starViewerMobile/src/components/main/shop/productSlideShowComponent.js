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
import { API_URL } from '../../../const/variable';
const Url = API_URL + 'products';

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
            // if (this.props.dataProducts && this.props.dataProducts.length > 0) {
            //     this.setState({
            //         dataProducts: this.props.dataProducts,
            //         loaded: true
            //     })
            // } else {
            //     let response = await fetch(Url);
            //     let responseJson = await response.json();
            //     if (responseJson.errCode !== 0) {
            //         console.log(responseJson.errMessage)
            //         this.setState({
            //             loaded: true
            //         })
            //     } else {
            //         this.props.updateListProducts(responseJson.data);
            //         this.setState({
            //             loaded: true,
            //             dataProducts: responseJson.data
            //         })
            //     }
            // }
            let products = `[{"id":7,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:39:40.000Z"},{"id":8,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:04.000Z"},{"id":9,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:08.000Z"},{"id":10,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":11,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":12,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":13,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":14,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":15,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":16,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":17,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":18,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:27.000Z"},{"id":19,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":20,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":21,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":22,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":23,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":24,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":25,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":26,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":27,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":28,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"},{"id":29,"name":"Dàn máy đào 8 VGA NP104 4G Zotac 2 Fan,ETH:320mhz","price":113000000,"imageurl":"https://tinhocngoisao.com/uploads/products/norms/1526092592_32327892_1090582797747368_2734787371659689984_o.jpg","url":"https://tinhocngoisao.com/site/may-bo-trau-xanh-chip-nvidia/dan-may-dao-8-vga-np104-4g-zotac-2-fan-eth-320mhz-p505945.html","userid":1,"lastupdate":"2018-05-18T13:40:28.000Z"}]`;
            products = JSON.parse(products);
            this.props.updateListProducts(products);
            this.setState({
                loaded: true,
                dataProducts: products
            })
        } catch (err) {
            console.log(err.message)
            this.setState({
                loaded: true
            })
        }
    }

    render() {
        // tính toán số lượng product sẽ hiển thị
        let showed = Math.floor(Dimensions.get('window').width / 160);
        let viewShowed = this.state.dataProducts.length / showed;
        viewShowed = Math.floor(viewShowed) === viewShowed ? viewShowed : Math.ceil(viewShowed);

        if (!this.state.loaded) {
            screen = <View style={productListPageStyle.parentViewLoading}>
                        <Image source={require('../../../../public/images/loading.gif')}
                          style={{width: 200, height: 150}} />
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