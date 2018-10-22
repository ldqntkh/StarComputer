import React, {Component} from 'react';

export default class HeaderComponent extends Component {

    render() {
        return(
            <div className="build-pc-header">
                <div className="left-content">
                    <button className="re-build">
                        <i className="fa fa-refresh"></i>
                        Xây dựng lại
                    </button>
                </div>
                <div className="right-content">
                    <span>Chi phí dự tính: <strong>13.000.000đ</strong></span>
                </div>
            </div>
        );
    }
}