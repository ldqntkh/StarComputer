import React, { Component } from 'react';

class GroupProductComponent extends Component {
    render() {
        let item = this.props.item;
        return (
            <div className="group-product">
                <div className="group-name">
                    <h3>{item.display_name}</h3>
                </div>
                
                <div className="table-row">
                    <div className="tb-col-1">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-2">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-3">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-4">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-5">
                        <h4>apb</h4>
                    </div>
                </div>
                <div className="table-row">
                    <div className="tb-col-1">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-2">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-3">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-4">
                        <h4>apb</h4>
                    </div>
                    <div className="tb-col-5">
                        <h4>apb</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default GroupProductComponent;
