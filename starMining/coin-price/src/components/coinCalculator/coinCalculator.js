import React, {Component} from 'react';


// import component
import CoinTypeInformation from './coinTypeInformation';
import MinerInfo from './minerInfo';
import CoinEstimation from './coinEstimation';

export default class CoinCalculator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            coin_type : 'ETH',
            hashing: 0,
            power: 0,
            costPerKWh: 0,
            poolFee: 0,
            price: 0,
            blockNumber: 0,
            netHashesPerSecond: 0,
            blockReward: 0
        }
    }

    setCoinTypeInfo = (coin_type_info)=> {
        this.setState(coin_type_info);
    }

    setCoinInfo = (coin_info)=> {
        this.setState(coin_info);
    }

    render() {
        return(
            <div className="">
                <div className="parent-coincalcule">
                    <div className="div-choose-coin-info">
                        <CoinTypeInformation setCoinTypeInfo={this.setCoinTypeInfo} coin_type={this.state.coin_type}/>
                        <MinerInfo setCoinInfo={this.setCoinInfo}/>
                        <button onClick={()=> {
                            this.refs.CoinEstimation.calCulation(this.state);
                        }}>Tính</button>
                    </div>
                    <CoinEstimation ref="CoinEstimation"/>
                </div>
            </div>
        );
    }
}

/**
 * cách hoạt động (BTC, ETH, ETC, XMR, ZEC, PASC, DASH, LTC)
 * khi run component (lấy thông tin theo select box)
 * lấy giá coin (usd)
 * lấy BlockNumber, BlockReward và NetHash từ url https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=ETH&tsym=BTC
 * công thức tính số coin thu được trong 1 ngày (đơn vị tính dựa theo list) <YOUR HASHRATE> / (<YOUR HASHRATE> + <NETWORK HASHRATE>) x <BLOCKS PER 24H> x <BLOCK REWARD>
 * quy đổi ra giá usd
 */