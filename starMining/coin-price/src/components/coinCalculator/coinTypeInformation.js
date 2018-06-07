import React, {Component} from 'react';

const lstCoin=[
    {
        type: "BTC",
        name: "Bitcoin"
    },
    {
        type: "ETH",
        name: "Ethereum"
    },
    {
        type: "ETC",
        name: "Ethereum Classic"
    },
    {
        type: "XMR",
        name: "Monero"
    },
    {
        type: "PASC",
        name: "Pascal coin"
    },
    {
        type: "DASH",
        name: "Dash"
    },
    {
        type: "LTC",
        name: "Litecoin"
    },];
//"ETH", "ETC", "XMR", "ZEC", "PASC", "DASH", "LTC"
export default class CoinTypeInformation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="div-choose-coin">
                <select>
                    {lstCoin.map((item, index) => {
                        return <option value={item.type} key={index} selected={item.type === this.props.coin_type}> {item.name} </option>
                    })}
                </select>
                <div className="coin-info">
                    <img src="https://www.cryptocompare.com/media/20646/eth_logo.png" alt=""/>
                    <span>1BTC = 20k đô</span>
                </div>
            </div>
        );
    }
}