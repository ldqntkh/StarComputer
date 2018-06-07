import React, {Component} from 'react';

export default class CoinEstimation extends Component {

    render() {
        return(
            <div className="dv-estimation">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Coin (BTC)</td>
                            <td>Phí pool (BTC)</td>
                            <td>Điện tiêu thụ</td>
                            <td>Tổng tiền (USD)</td>
                            <td>Số tiền thực thu (USD)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ngày</td>
                            <td>10</td>
                            <td>1</td>
                            <td>100</td>
                            <td>200</td>
                            <td>180</td>
                        </tr>
                        <tr>
                            <td>Tuần</td>
                            <td>10</td>
                            <td>1</td>
                            <td>100</td>
                            <td>200</td>
                            <td>180</td>
                        </tr>
                    </tbody>
                </table>
                <div className="dv-desc">
                    <span>
                        <span>Coin</span> : số coin thu được
                    </span>
                    <span>
                        <span>Phí pool</span> : phí phải trả cho pool đào
                    </span>
                    <span>
                        <span>Điện năng tiêu thụ</span> : Tổng số điện tiêu thụ trong quá trình đào coin
                    </span>
                    <span>
                        <span>Tổng tiền</span> : tổng số tiền thu được khi chưa trừ chi phí
                    </span>
                    <span>
                        <span>Số tiền thực thu</span> : Số tiền thu được sau khi trừ mọi chi phí
                    </span>

                    <p>
                        <span>Lưu ý:</span>
                        Trên đây chỉ là ước tính tại thời điểm hiện tại, nó có sai số và thay đổi hàng giờ
                    </p>
                </div>
            </div>
        );
    }
}