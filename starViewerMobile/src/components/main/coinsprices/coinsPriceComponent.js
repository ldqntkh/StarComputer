import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Dimensions,
    Animated,
    Easing
} from 'react-native';
import {
    Icon
} from 'native-base';

// import style
import { coinsPriceStyle } from '../../../styleSheets/coinsprices/coinspriceStyle'

var urlCoinMarket = 'https://api.coinmarketcap.com/v2/ticker/?limit=20';
var fullWidth = -(20 * 170);

class CoinPriesComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataCoin : [],
            elementLeft: Dimensions.get('window').width - 20,
            animatedValue : new Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount() {
        this.loadCoinData();
    }

    async loadCoinData () {
        try {
            let dataCoinsPrice = this.props.dataCoinsPrice;
            if(dataCoinsPrice.data === undefined || (Date.now() - new Date(dataCoinsPrice.lastUpdate) >= 300 * 1000 )) {
                let html = await fetch(urlCoinMarket);
                let htmlCode = await html.json();
                let data = htmlCode.data;
                
                let results = []
                for(let index in data) {
                    let name = data[index].name,
                        rank = data[index].rank,
                        symbol = data[index].symbol,
                        price = data[index].quotes.USD.price,
                        percent = data[index].quotes.USD.percent_change_24h,
                        status = data[index].quotes.USD.percent_change_24h > 0 ? true : false;
                        
                    results.push({
                        name : name, 
                        rank : rank,
                        price: price, 
                        percent: percent,
                        symbol: symbol,
                        status: status
                    })
                }
                
                if (results.length > 0) {
                    results.sort(this.compare);
                    dataCoinsPrice = {
                        data : results,
                        lastUpdate: Date.now()
                    }
                    this.props.updateCoinsPricesData(dataCoinsPrice);
                }
            }
            this.setState({
                dataCoin : dataCoinsPrice.data
            });
            this.runSlide();
        } catch(err) {
            console.log(err);
        }
    }

    compare(a,b) {
        if (a.rank < b.rank)
            return -1;
        if (a.rank > b.rank)
            return 1;
        return 0;
    }

    finishedAnimation = () => {
        this.state.animatedValue.setValue(this.state.elementLeft);
        this.runSlide();
    }

    runSlide() {
        let that = this;
        Animated.timing(
            that.state.animatedValue,
            {
                toValue: fullWidth,
                duration: 100000,
                easing: Easing.linear
            }
        ).start(that.finishedAnimation);
    }

    render() {
        return (
            <Animated.View style={[coinsPriceStyle.parent, {left: this.state.animatedValue}]}>
                {this.state.dataCoin.map((item, index) => {
                    if (index < 20) 
                    return <View style={coinsPriceStyle.itemView} key={index}>
                                <Text style={coinsPriceStyle.name}>{item.name} ({item.symbol})</Text>
                                <View style={coinsPriceStyle.viewPrice}>
                                    <Text style={coinsPriceStyle.price}>${item.price.toFixed(4)}</Text>
                                    <Icon style={[coinsPriceStyle.icon, item.status ? coinsPriceStyle.percentUp : coinsPriceStyle.percentDown ]} name={item.status ? 'arrow-round-up' : 'arrow-round-down'} />
                                    <Text style={item.status ? coinsPriceStyle.percentUp : coinsPriceStyle.percentDown}>{item.percent}%</Text>
                                </View>
                            </View>
                })}
            </Animated.View>
        )   
    }
    
}

export default CoinPriesComponent;