import React, {PureComponent} from 'react';

const lstCoin=[
    // {
    //     type: "BTC",
    //     name: "Bitcoin"
    // },
    {
        type: "ETH",
        name: "Ethereum"
    },
    // {
    //     type: "ETC",
    //     name: "Ethereum Classic"
    // },
    // {
    //     type: "XMR",
    //     name: "Monero"
    // },
    // {
    //     type: "PASC",
    //     name: "Pascal coin"
    // },
    // {
    //     type: "DASH",
    //     name: "Dash"
    // },
    // {
    //     type: "LTC",
    //     name: "Litecoin"
    // },
];
//"ETH", "ETC", "XMR", "ZEC", "PASC", "DASH", "LTC"
const urlCoinInfo = 'https://min-api.cryptocompare.com/data/top/exchanges/full?fsym={0}&tsym=USD';
export default class CoinTypeInformation extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            coin_type : this.props.coin_type,
            coin_usd : 0,
            imageUrl : '',
            blockNumber: 0,
            netHashesPerSecond: 0,
            blockReward: 0
        }
    }

    componentWillMount() {
        this.getCoinInfo(this.props.coin_type);
    }

    getCoinInfo = async (coin_type)=> {
        try {
            let response = await fetch(urlCoinInfo.replace('{0}', coin_type));
            let dataJson = await response.json();
            if (dataJson.Response.toLowerCase() === 'success') {
                let coinInfo = dataJson.Data.CoinInfo;
                let {ImageUrl, BlockNumber, NetHashesPerSecond, BlockReward} = coinInfo;
                this.props.setCoinTypeInfo({
                    coin_type: coin_type,
                    price: dataJson.Data.AggregatedData.PRICE,
                    blockNumber: BlockNumber,
                    netHashesPerSecond: NetHashesPerSecond,
                    blockReward: BlockReward
                });
                this.setState({
                    coin_type: coin_type,
                    coin_usd: dataJson.Data.AggregatedData.PRICE,
                    imageUrl : ImageUrl,
                    blockNumber: BlockNumber,
                    netHashesPerSecond: NetHashesPerSecond,
                    blockReward: BlockReward
                });
            }
        } catch(err) {
            console.log(err);
        }
    }

    _onChange = async (e)=> {
        await this.getCoinInfo(e.target.value);
    }

    render() {
        let cointype = this.state.coin_type;
        return (
            <div className="div-choose-coin">
                <select value={cointype} onChange={this._onChange}>
                    {lstCoin.map((item, index) => {
                        return <option value={item.type} key={index}> {item.name} </option>
                    })}
                </select>
                <div className="coin-info">
                    <img src={"https://www.cryptocompare.com" + this.state.imageUrl} alt={cointype}/>
                    <span>1{cointype} = ${this.state.coin_usd}</span>
                </div>
            </div>
        );
    }
}