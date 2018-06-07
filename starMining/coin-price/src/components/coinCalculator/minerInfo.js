import React, {PureComponent} from 'react';

export default class MinerInfo extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            hashing : 0,
            power : 0,
            costPerKWh : 0,
            poolFee : 0
        }
    }

    _onChange = (e)=> {
        let _value = (e.target.value.trim() !== "" && !isNaN(e.target.value.trim()))? e.target.value.trim() : 0;
        this.props.setCoinInfo({
            hashing : e.target.name === "hashing" ? _value : this.state.hashing,
            power : e.target.name === "power" ? _value : this.state.power,
            costPerKWh : e.target.name === "costPerKWh" ? _value : this.state.costPerKWh,
            poolFee : e.target.name === "poolFee" ? _value : this.state.poolFee
        });
        this.setState({
            hashing : e.target.name === "hashing" ? e.target.value : this.state.hashing,
            power : e.target.name === "power" ? e.target.value : this.state.power,
            costPerKWh : e.target.name === "costPerKWh" ? e.target.value : this.state.costPerKWh,
            poolFee : e.target.name === "poolFee" ? e.target.value : this.state.poolFee
        });
    }

    render() {
        let {hashing, power, costPerKWh, poolFee} = this.state;
        return (
            <div className="div-coin-info-cal">
                <div className="dv-input">
                    <label>Hashing *</label>
                    <input type="number" name="hashing" value={hashing} onChange={this._onChange}/>
                </div>
                <div className="dv-input">
                    <label>Điện năng tiêu thụ (W)*</label>
                    <input type="number" name="power" value={power} onChange={this._onChange}/>
                </div>
                <div className="dv-input">
                    <label>Giá điện/kWh ($)*</label>
                    <input type="number" name="costPerKWh" value={costPerKWh} onChange={this._onChange}/>
                </div>
                <div className="dv-input">
                    <label>Phí pool (%)*</label>
                    <input type="number" name="poolFee" value={poolFee} onChange={this._onChange}/>
                </div>
            </div>
        );
    }
}