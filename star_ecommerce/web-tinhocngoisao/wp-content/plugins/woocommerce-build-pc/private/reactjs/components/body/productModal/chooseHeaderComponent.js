import React, {Component} from 'react';

class ChooseHeaderComponent extends Component {

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

// create container
import { connect } from 'react-redux';

import {
    SetValueProductSearchKey
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer
});

const mapDispatchToProps = dispatch => ({
    SetValueProductSearchKey : product_search_key => dispatch(SetValueProductSearchKey(product_search_key))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseHeaderComponent);