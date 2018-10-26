import React, {Component} from 'react';

// import container
import ProductDetailContainer from '../../../../containers/body/productModal/body/productDetailContainer';

const product_per_page = 7;

export default class ListProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    renderListProduct = (product_data) =>{
        let result = [];
        if (typeof product_data === "undefined" || product_data.length === 0) {
            result.push(
                <span key={0} className="error">Không tìm thấy sản phẩm nào theo yêu cầu của bạn</span>
            )
        } else {
            let page = this.state.page;
            let max = page * product_per_page > product_data.length ? product_data.length : page * product_per_page;
            for(let index = (page - 1) * product_per_page; index < max; index ++) {
                result.push(<ProductDetailContainer key={index} product={product_data[index]} />)
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
        let product_data = this.props.product_data;
        let {product_search_key, product_search_attribute} = this.props.action_data;
        
        var regex = null;
        let result = [];

        let regex_string = '';
        for (let index in product_search_attribute) {
            if (product_search_attribute[index].length > 0) {
                let regex_str = "";
                for (let i in product_search_attribute[index]) {
                    if (regex_str !== "") {
                        regex_str += '|';
                    }
                    regex_str += product_search_attribute[index][i];
                }
                
                if (regex_str !== "") {
                    regex_string += `(?=.*${regex_str})`;
                }
            }
        }
        if (regex_string !== '') regex = new RegExp(regex_string);

        // filter product
        for(let index in product_data) {
            let pr = null;
            if (regex !== null) {
                if (product_data[index].hasOwnProperty('attributes')) {
                    if (regex.test(JSON.stringify(product_data[index].attributes).toLowerCase())) {
                        pr = product_data[index];
                    }
                }
            } else  {
                pr = product_data[index];
            }
            //if (pr === null && regex === null) continue;
            
            if (product_search_key !== "" && product_search_key !== null && pr !== null) {
                if (pr.name.toLowerCase().indexOf(product_search_key) >= 0) {
                    result.push(pr);
                }
                
            } else {
                if (pr !== null)
                    result.push(pr);
            }
        }
        if ((product_search_key !== "" && product_search_key !== null) || result.length > 0) {
            return result;
        }
        if (regex !== null) return result;
        return product_data;
    }

    render() {
        let product_data = this.findProductByFilter();
        return (
            <div className="list-product-modal">
                <div className="list-product-header">
                    {
                        this.renderPageCount(product_data)
                    }
                </div>
                <div className="list-produuct-data">
                    {
                        this.renderListProduct(product_data)
                    }
                </div>
            </div>
        );
    }
}