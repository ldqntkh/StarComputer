import React, {Component} from 'react';

// import component
import ProductDetailComponent from './productDetailComponent';

const product_per_page = 7;

class ListProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    renderListProduct = (product_data, errMsg) =>{
        let result = [];
        if (typeof product_data === "undefined" || product_data.length === 0) {
            result.push(
                <span key={0} className="error">{errMsg === '' ? 'Đang nạp dữ liệu' : errMsg}</span>
            )
        } else {
            let page = this.state.page;
            let max = page * product_per_page > product_data.length ? product_data.length : page * product_per_page;
            for(let index = (page - 1) * product_per_page; index < max; index ++) {
                result.push(<ProductDetailComponent key={index} product={product_data[index]} />)
            }
        }
        return result;
    }

    changePageIndex = (index)=> {
        if (index !== this.state.page) {
            this.setState({
                page : index
            })
        }
    }

    renderPageCount = (product_data)=> {
        if (typeof product_data === "undefined" || product_data.length === 0) return null;
        let page = this.state.page;
        let page_count = Math.ceil(product_data.length / product_per_page);
        let result = [];
        let classname = '';
        
        result.push(
            <span key={0}>Trang: <strong>{page}</strong>/<strong>{page_count}</strong></span>
        );

        for(let index = 1; index <= page_count; index++) {
            if (index === page) classname = 'btn-page active';
            else classname = 'btn-page';
            result.push(
                <button type="button" className={classname} key={index} onClick={() => this.changePageIndex(index)} >{index}</button>
            );
        }
        return result;
    }

    findProductByFilter = ()=> {
        const product_data = this.props.product_data_value;
        let {product_search_key, product_search_attribute} = this.props.action_data;
        let result = [];
        // không dùng regex, for toàn bộ attr
        let keys = Object.keys(product_search_attribute);
        for (let i in keys) {
            let key = keys[i];
            if (product_search_attribute[key].length > 0) {
                for(let index in product_data) {
                    let attributes = product_data[index].attributes;
                    let item = attributes.find(o => o.name === key);
                    if(item) {
                        item = item.values;
                        for (let m in item) {
                            if (product_search_attribute[key].includes(item[m].slug)) {
                                if (result.includes(product_data[index])) {
                                    break;
                                } else {
                                    result.push(product_data[index]);
                                    break;
                                }
                            }
                        }
                    }
                } 
            }
        }
        let result_1 = [];
        if (result.length === 0) result = product_data;
        for(let index in result) {
            if (product_search_key !== "" && product_search_key !== null) {
                if (result[index].name.toLowerCase().includes(product_search_key.toLowerCase())) {
                    result_1.push(result[index]);
                }
            } else {
                result_1.push(result[index]);
            }
        }

        return result_1;
    }

    componentWillUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                page : 1
            })
        }
    }

    render() {
        let product_data = this.findProductByFilter();
        let errMsg = '';
        if(product_data && product_data.length == 0) errMsg = 'Không tìm thấy sản phẩm nào theo yêu cầu!';
        return (
            <div className="list-product-modal">
                <div className="list-product-header">
                    {
                        this.renderPageCount(product_data)
                    }
                </div>
                <div className="list-product-data">
                    {
                        this.renderListProduct(product_data, errMsg)
                    }
                </div>
            </div>
        );
    }
}

// create container
import { connect } from 'react-redux';

import {
    
} from '../../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer,
    product_type : state.ProductTypeReducer,
    computer_building_data : state.ComputerBuildingDataReducer
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListProductComponent);