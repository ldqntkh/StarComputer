import React, {Component} from 'react';

var urlCoinMarket = 'https://api.coinmarketcap.com/v2/ticker/?limit=100';
var interval = null,
    intervalLoadUrl = null;
class CoinPriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCoin : [],
            elementSlide : document.getElementById('slide'),
            loaded: false
        }
    }

    componentDidMount() {
        this.loadCoinData();
        let that = this;
        intervalLoadUrl = setInterval(function() {
            that.loadCoinData()
        }, 20 * 60 * 1000);
    }

    componentWillUnmount() {
        clearInterval(intervalLoadUrl);
        clearInterval(interval);
    }

    async loadCoinData () {
        try {
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
                this.setState({
                    dataCoin : [...results],
                    loaded: true
                });
                this.runSlide();
            }
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

    runSlide() {
        let slideItem = document.getElementById('slide');
        let slideItems = document.getElementsByClassName('slide-items')[0];
        let slideStartHeight = slideItem.clientHeight - (parseInt(slideItem.clientHeight / 2));
        let slideHeight = slideStartHeight

        slideItems.style.top = `${slideHeight}px`;
        clearInterval(interval);
        interval = setInterval(function() {
            slideHeight --;
            if (slideHeight == -(slideItems.offsetHeight)) slideHeight = slideStartHeight;
            slideItems.style.top = `${slideHeight}px`;
        }, 50);
    }

    render() {
        let screen = null;
        if (!this.state.loaded) {
            screen = 
                <img className="loading-icon" src="../public/images/loading.gif" width="80" height="80"/>
        } else {
            screen = <div className="dv-coinprices">
                        <div id="slide">
                            <div className="slide-items">
                                {this.state.dataCoin.map((item, index) => {
                                    
                                    return <div className={index % 2 == 0 ? 'dv-coin-item bg-silver' : 'dv-coin-item'} key={index}>
                                                <div className="dv-coin-item-col-1">
                                                    <span>{index + 1}</span>
                                                </div>
                                                <div className="dv-coin-item-col-2">
                                                    <img src={"https://s2.coinmarketcap.com/static/img/coins/16x16/" + (index  + 1) + ".png"} width="20" height="20" />
                                                    <p>{item.name} <br/> ({item.symbol})</p>
                                                </div>
                                                <div className="dv-coin-item-col-3">
                                                    <span>${item.price.toFixed(4)}</span>
                                                    <span className={item.status ? 'up' : 'down'}>
                                                        <i className={item.status ? 'up' : 'down'}></i>
                                                        {item.percent}%
                                                    </span>
                                                </div>
                                            </div>
                                })}
                            </div>
                        </div>
                    </div>
        }
        return (
            screen
        )
    }
    
}

export default CoinPriesComponent;