import React, {Component} from 'react';

export default class ChooseHeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    _handleChange = (e)=> {
        this.props.SetValueProductSearchKey(e.target.value);
    }

    render() {
        let product_search_key = this.props.action_data.product_search_key;
        return (
            <React.Fragment>
                <h2 className="header-title">Chọn linh kiện</h2>
                <div className="input-group">
                    <input type="text" placeholder="Tìm kiếm sản phẩm" 
                        value={product_search_key === null ? "" : product_search_key}
                        onChange={this._handleChange}
                    />
                </div>
            </React.Fragment>
        );
    }
}