import React, {Component} from 'react';
import {
    View, Text, ScrollView, Image
} from 'react-native';
import {
    Container, Content, Label, Icon
} from 'native-base';

// import component
import HeaderDetailsComponent from '../header/headerDetailsComponent';

// import variable
import {
    MAIN_WALLET_SCREEN
} from '../../../const/variableScreen';
import {
    COINSPRICE
} from '../../../const/variableLabel';
import {
    MAIN_TEXT_COLOR
} from '../../../styleSheets/const/variable';

// import style
import {priceExchangeStyle} from '../../../styleSheets/coinsprices/priceExchangeStyle';
var urlCoinMarket = 'https://api.coinmarketcap.com/v2/ticker/?limit=100';
let interval = null;
export default class PriceExchangeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataCoin : [],
            lastUpdate: 0,
            loaded : false
        }
    }

    componentDidMount() {
        this.loadCoinData();
    }

    componentWillMount() {
        interval = null
    }

    async loadCoinData () {
        try {
            let html = await fetch(urlCoinMarket);
            let htmlCode = await html.json();
            let data = htmlCode.data;
            
            let results = []
            for(let index in data) {
                let id = data[index].id,
                    name = data[index].name,
                    rank = data[index].rank,
                    symbol = data[index].symbol,
                    price = data[index].quotes.USD.price,
                    percent = data[index].quotes.USD.percent_change_24h,
                    status = data[index].quotes.USD.percent_change_24h > 0 ? true : false;
                    
                results.push({
                    id : id,
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
            }
            this.setState({
                dataCoin : results,
                lastUpdate: 60
            });
            if(interval !== null) clearInterval(interval)
            this.updateCoin();
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

    updateCoin() {
        interval = setInterval(()=> {
            let lastUpdate = this.state.lastUpdate - 1;
            if (lastUpdate == 0) {
                this.loadCoinData();
            } else {
                this.setState({
                    lastUpdate : lastUpdate
                });
            }
        }, 1000);
        
    }

    render() {//https://s2.coinmarketcap.com/static/img/coins/16x16/1.png
        return (<Container style={ priceExchangeStyle.parentContainer }>
                    <HeaderDetailsComponent walletName={COINSPRICE} 
                                            navigation={typeof (this.props.screenProps) === 'undefined' ? this.props.navigation : this.props.screenProps.mainNavigate} 
                                            backPage={MAIN_WALLET_SCREEN}/>
                    <Content style={priceExchangeStyle.content}>
                        <Label style={priceExchangeStyle.headerText}>Dữ liệu sẽ cập nhật sau {this.state.lastUpdate} giây</Label>
                        <View style={priceExchangeStyle.header}>
                            <View style={priceExchangeStyle.col1}>
                                <Label style={priceExchangeStyle.headerLabel}>#</Label>
                            </View>
                            <View style={priceExchangeStyle.col2}>
                                <Label style={priceExchangeStyle.headerLabel}>Tiền điện tử</Label>
                            </View>
                            <View style={priceExchangeStyle.col3}>
                                <Label style={priceExchangeStyle.headerLabel}>Giá</Label>
                            </View>
                        </View>
                        <ScrollView style={priceExchangeStyle.scrollview}>
                            {this.state.dataCoin.map((item, index) => {
                                return (
                                    <View style={[priceExchangeStyle.row, index % 2 == 0 ? null : priceExchangeStyle.rowcolor]} key={index}>
                                        <View style={priceExchangeStyle.col1}>
                                            <Text style={priceExchangeStyle.itemText}>{index + 1}</Text>
                                        </View>
                                        <View style={priceExchangeStyle.col2}>
                                            <Image source={{uri:"https://s2.coinmarketcap.com/static/img/coins/16x16/" + item.id + ".png"}} 
                                                    style={{width: 20, height:20, marginRight: 15}}/>
                                            <View>
                                                <Text style={priceExchangeStyle.itemText}>{ item.name }</Text>
                                                <Text style={priceExchangeStyle.itemText}>{item.symbol}</Text>
                                            </View>
                                        </View>
                                        <View style={priceExchangeStyle.col3}>
                                            <Text style={priceExchangeStyle.itemText}>${ item.price.toFixed(2) }</Text>
                                            <Text style={item.status? priceExchangeStyle.percentUp : priceExchangeStyle.percentDown}>
                                            <Icon style={[priceExchangeStyle.icon, item.status ? priceExchangeStyle.percentUp : priceExchangeStyle.percentDown ]} name={item.status ? 'arrow-round-up' : 'arrow-round-down'} />
                                                {item.percent}
                                            </Text>
                                        </View>
                                    </View>
                                )   
                            })}
                        </ScrollView>
                    </Content>
                </Container>)
    }
}