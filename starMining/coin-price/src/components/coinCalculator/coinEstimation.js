import React, {Component} from 'react';
// công thức tính số coin thu được trong 1 ngày (đơn vị tính dựa theo list) 
// <YOUR HASHRATE> / (<YOUR HASHRATE> + <NETWORK HASHRATE>) x <BLOCKS PER 24H> x <BLOCK REWARD>
export default class CoinEstimation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coin_type : "",
            totalCoin: 0,
            poolFee: 0,
            powerUsed: 0,
            totalUsd: 0,
            balanceTotalUsd : 0
        }
    }

    // componentDidMount() {
    //     this.calCulation();
    // }

    calCulation = (CoinInfo)=> {
        try {
            let {
                coin_type, hashing, power, costPerKWh, poolFee, price, blockNumber, netHashesPerSecond, blockReward
            } = CoinInfo;
            hashing = parseFloat(hashing) * 1000;
            power = parseFloat(power);
            costPerKWh = parseFloat(costPerKWh);
            poolFee = parseFloat(poolFee);
            
            let totalCoin = hashing / (hashing + netHashesPerSecond) * blockNumber * blockReward;
            let _poolFee = (totalCoin/100) * poolFee * price,
                _powerUsed = (power / 1000) * 24 * costPerKWh,
                _totalUsd = totalCoin * price
            this.setState({
                coin_type: coin_type,
                totalCoin: totalCoin,
                poolFee : _poolFee,
                powerUsed : _powerUsed,
                totalUsd : _totalUsd,
                balanceTotalUsd : _totalUsd - _poolFee - _powerUsed
            });
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        let screen = null;
        if (this.state.totalCoin === 0 || isNaN(this.state.totalCoin)) screen = null;
        else {
            screen = <tbody>
                <tr>
                    <td>Ngày</td>
                    <td>{this.state.totalCoin}</td>
                    <td>${this.state.poolFee.toFixed(2)}</td>
                    <td>${this.state.powerUsed.toFixed(2)}</td>
                    <td>${this.state.totalUsd.toFixed(2)}</td>
                    <td>${this.state.balanceTotalUsd.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Tuần</td>
                    <td>{this.state.totalCoin * 7}</td>
                    <td>${(this.state.poolFee * 7).toFixed(2)}</td>
                    <td>${(this.state.powerUsed * 7).toFixed(2)}</td>
                    <td>${(this.state.totalUsd * 7).toFixed(2)}</td>
                    <td>${(this.state.balanceTotalUsd * 7).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Tháng</td>
                    <td>{this.state.totalCoin * 30}</td>
                    <td>${(this.state.poolFee * 30).toFixed(2)}</td>
                    <td>${(this.state.powerUsed * 30).toFixed(2)}</td>
                    <td>${(this.state.totalUsd * 30).toFixed(2)}</td>
                    <td>${(this.state.balanceTotalUsd * 30).toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Năm</td>
                    <td>{this.state.totalCoin * 365}</td>
                    <td>${(this.state.poolFee * 365).toFixed(2)}</td>
                    <td>${(this.state.powerUsed * 365).toFixed(2)}</td>
                    <td>${(this.state.totalUsd * 365).toFixed(2)}</td>
                    <td>${(this.state.balanceTotalUsd * 365).toFixed(2)}</td>
                </tr>
            </tbody>
        }

        return(
            <div className="dv-estimation">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Coin ({this.state.coin_type})</td>
                            <td>Phí pool ({this.state.coin_type})</td>
                            <td>Điện tiêu thụ</td>
                            <td>Tổng tiền</td>
                            <td>Số tiền thực thu</td>
                        </tr>
                    </thead>
                    {
                        screen   
                    }
                </table>
                <div className="dv-desc">
                    <p>
                        <span className="sp-title">Coin</span> : số coin thu được
                    </p>
                    <p>
                        <span className="sp-title">Phí pool</span> : phí phải trả cho pool đào
                    </p>
                    <p>
                        <span className="sp-title">Điện năng tiêu thụ</span> : Tổng số điện tiêu thụ trong quá trình đào coin
                    </p>
                    <p>
                        <span className="sp-title">Tổng tiền</span> : tổng số tiền thu được khi chưa trừ chi phí
                    </p>
                    <p>
                        <span className="sp-title">Số tiền thực thu</span> : Số tiền thu được sau khi trừ mọi chi phí
                    </p>

                    <p className="p-note">
                        <span className="sp-title">*Lưu ý:</span>
                        Trên đây chỉ là ước tính tại thời điểm hiện tại, nó có sai số và thay đổi hàng giờ
                    </p>
                </div>
            </div>
        );
    }
}