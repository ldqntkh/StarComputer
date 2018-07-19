import React, {Component} from 'react';

const urlCoinMarket = 'https://api.coinmarketcap.com/v2/ticker/?limit=100';
export default class CoinMarketCompnent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCoin : [],
            lastUpdate: 0,
            search : '',
            loaded: false
        }

        this._onChange = this._onChange.bind(this);
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
    
    _onChange(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        let screen = null;
        if (this.state.loaded) {
            let search = this.state.search;
            screen = this.state.dataCoin.map((item, index) => {
                let _item = null;
                if (search.trim() !== '') {
                    if (item.name.toLowerCase().indexOf(search.toLowerCase().trim()) >= 0) {
                        _item = item;
                    }
                } else _item = item;
                if (_item === null) return;

                return (
                    <div className={index % 2 === 1 ? "rowItem rowItembackground" : "rowItem"} key={index}>
                        <div className="itemCol1">
                            {index + 1}
                        </div>
                        <div className="itemCol2">
                            <img src={"https://s2.coinmarketcap.com/static/img/coins/16x16/" + _item.id + ".png"} alt=""/>
                            <div>
                                <span>{_item.name}</span><br/>
                                <span>{_item.symbol}</span>
                            </div>
                        </div>
                        <div className="itemCol3">
                            ${_item.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="itemCol4">
                            ${_item.volume_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className="itemCol5">
                            ${_item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div className={item.status? "itemCol6 percentup" : "itemCol5 percentdown"}>
                            {_item.percent}%
                        </div>
                    </div>
                );
            });
        } else {
            screen = <h1 className="h1-title-coinmarket">Chờ chút nhé....</h1>
        }

        return(
            <React.Fragment>
                <div className="row">
                <div className="form-group">
                    <label for="exampleInputEmail1">Tìm tên tiền điện tử</label>
                    <input type="text" className="form-control" placeholder="Tên coin" onChange={this._onChange}/>
                </div>
                </div>
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
            </React.Fragment>
        );
    }
}