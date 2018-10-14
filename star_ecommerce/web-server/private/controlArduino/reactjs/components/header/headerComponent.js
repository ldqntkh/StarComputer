import React, {Component} from 'react';

import {
    _Emit_ServerUpdate_Price
} from '../../lib/socketArduino';
var interval = null;
export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countdown: 0
        }
    }

    componentWillUnmount() {
        interval !== null && clearInterval(interval);
    }

    updatePriceAllClients = () => {
        if (this.state.countdown === 0)
        {
            _Emit_ServerUpdate_Price();

            this.setState({
                countdown: 10
            });
            this.updateCountDown();
        }
    }

    updateCountDown = () => {
        let that = this;
        interval !== null && clearInterval(interval);
        interval = setInterval(function() {
            let count = that.state.countdown;
            that.setState({
                countdown : count - 1
            })
            if (count - 1 == 0) clearInterval(interval);
        }, 1000);
    }

    render() {
        return (
            <div className="header">
                <h3>Danh sách các client đang kết nối</h3>

                {this.state.countdown === 0 ? 
                   <button type="button" onClick={()=> this.updatePriceAllClients()}>
                        Cập nhật giá hiển thị của tất cả clients
                    </button>
                    :
                    <button type="button">
                        Đang cập nhật giá của các clients ({this.state.countdown})
                    </button>
                } 
                
            </div>
        )
    }
}