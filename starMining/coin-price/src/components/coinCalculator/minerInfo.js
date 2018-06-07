import React, {Component} from 'react';

export default class MinerInfo extends Component {

    render() {
        return (
            <div className="div-coin-info-cal">
                <div className="dv-input">
                    <label>Hashing </label>
                    <input type="number"/>
                </div>
                <div className="dv-input">
                    <label>Điện năng tiêu thụ (W)</label>
                    <input type="number"/>
                </div>
                <div className="dv-input">
                    <label>Giá điện/kWh ($)</label>
                    <input type="number"/>
                </div>
                <div className="dv-input">
                    <label>Phí pool (%)</label>
                    <input type="number"/>
                </div>
            </div>
        );
    }
}