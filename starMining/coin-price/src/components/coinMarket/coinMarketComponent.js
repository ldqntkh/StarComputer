import React, {Component} from 'react';

const urlCoinMarket = 'https://api.coinmarketcap.com/v2/ticker/?limit=100';
export default class CoinMarketCompnent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCoin : [],
            lastUpdate: 0,
            loaded: false
        }
    }

    componentDidMount() {
        this.loadCoinData();
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
                    market_cap = data[index].quotes.USD.market_cap,
                    volume_24h = data[index].quotes.USD.volume_24h,
                    percent = data[index].quotes.USD.percent_change_24h,
                    status = data[index].quotes.USD.percent_change_24h > 0 ? true : false;
                    
                results.push({
                    id : id,
                    name : name, 
                    rank : rank,
                    price: price,
                    market_cap : market_cap,
                    volume_24h : volume_24h,
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
                loaded: true,
                lastUpdate: Date.now()
            });
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

    render() {
        let screen = null;
        if (this.state.loaded) {
            screen = this.state.dataCoin.map((item, index) => {
                return (
                    <div className={index % 2 === 1 ? "rowItem rowItembackground" : "rowItem"} key={index}>
                        <div className="itemCol1">
                            {index + 1}
                        </div>
                        <div className="itemCol2">
                            <img src={"https://s2.coinmarketcap.com/static/img/coins/16x16/" + item.id + ".png"} alt=""/>
                            <div>
                                <span>{item.name}</span><br/>
                                <span>{item.symbol}</span>
                            </div>
                        </div>
                        <div className="itemCol3">
                            ${item.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="itemCol4">
                            ${item.volume_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="itemCol5">
                            ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className={item.status? "itemCol6 percentup" : "itemCol5 percentdown"}>
                            {item.percent}%
                        </div>
                    </div>
                );
            });
        } else {
            screen = <h1>Chờ chút coi....</h1>
        }

        return(
            <div className="parent">
                <div className="rowItemHeader">
                    <div className="itemCol1"></div>
                    <div className="itemCol2">Tiền điện tử</div>
                    <div className="itemCol3">Market cap</div>
                    <div className="itemCol4">Volume</div>
                    <div className="itemCol5">Giá</div>
                    <div className="itemCol6">% dao động</div>
                </div>
                <div className="parent-coinmarket">
                    {screen}
                </div>
            </div>
            
        );
    }
}