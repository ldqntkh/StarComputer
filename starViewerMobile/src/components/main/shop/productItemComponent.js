import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

// import style
import {productItemStyle} from '../../../styleSheets/shop/productItemStyle';

export default class ProductItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    openWebLink = (productItem) => {
        Linking.canOpenURL(productItem.url).then(supported => {
            if (supported) {
              Linking.openURL(productItem.url);
            } else {
              console.log("Don't know how to open URL: " + productItem.url);
            }
        });
    }

    render () {
        let productItem = this.props.productItem
        return (<View style={productItemStyle.parent}>
                    <TouchableOpacity onPress={
                        () => this.openWebLink(productItem)
                    }>
                        <Image style={productItemStyle.image} source={{uri:productItem.imageurl}}/>
                        <Text numberOfLines={2} style={productItemStyle.productName}>{productItem.name}</Text>
                        <View style={productItemStyle.viewPrice}>
                            <Text style={productItemStyle.label}>Giá:</Text>
                            <Text style={productItemStyle.price}>{productItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Vnđ</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
    }
}