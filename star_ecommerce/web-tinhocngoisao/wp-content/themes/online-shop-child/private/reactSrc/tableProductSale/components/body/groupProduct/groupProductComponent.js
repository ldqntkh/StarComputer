import React, { Component } from 'react';

class GroupProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProduct : []
        }
    }

    _arrayContainsArray = (superset, subset)=> {
        if (0 === subset.length) {
          return false;
        }
        for (let i in subset) {
            if (superset.includes(subset[i])) return true;
        }
        return false;
      }

    searchProducts = (lstProduct)=> {
        let that = this;
        return new Promise((resolve, reject) => {
            let data = [...lstProduct];
            try {
                let {
                    item
                } = this.props;
                let result = [];
                if (item.cat_slug.length == 0) {
                    for (let index in data) {
                        result.push(data[index]);
                        data.splice(index,1);
                    }
                } else {
                    for (let index in data) {
                        if (data[index].slugs && that._arrayContainsArray(item.cat_slug, data[index].slugs)) {
                            result.push(data[index]);
                            data.splice(index,1);
                        }
                    }
                }
                that.setState({
                    listProduct: this.state.listProduct.concat(result)
                });
                
                resolve(data);
            } catch (err) {
                console.log(err.message);
                reject(err);
            }
        });
    }

    _renderListProduct = (listProduct)=> {
        let search = this.props.search;

        let result = [];
        for (let i in listProduct) {
            let product = listProduct[i];
            if (search.ma_sp !==  "" || search.ten_sp !== "") {
                if (search.ma_sp !== "") {
                    if ((product.id + "").toLowerCase().indexOf(search.ma_sp.toLowerCase()) < 0) product = null;
                } else if (search.ten_sp !== "") {
                    if (product.name.toLowerCase().indexOf(search.ten_sp.toLowerCase()) < 0) product = null;
                }
            } 
            if (product === null) continue;
            result.push(
                <div className="table-row" key={i}>
                    <div className="tb-col-1">
                        <h4>
                            <a href={product.link} target="_blank">{product.id}</a>
                        </h4>
                    </div>
                    <div className="tb-col-2">
                        <h4>
                            <a href={product.link} target="_blank">{product.name}</a>
                        </h4>
                        <div className="display-mobile">
                            <p>
                                Giá: {
                                    product.sale_price === "0" ? product.regular_price : product.sale_price
                                }đ
                            </p>
                            <p>
                                Bảo hành: {product.period}(tháng)
                            </p>
                            {/* <p>
                                {
                                    product.stock_status === "instock" ? `Còn hàng ${product.stock_quantity}` : 'Hết hàng'
                                }
                            </p> */}
                        </div>
                    </div>
                    <div className="tb-col-3">
                        <h4>
                            {
                                product.sale_price === "0" ? product.regular_price : product.sale_price
                            }đ
                        </h4>
                    </div>
                    <div className="tb-col-4">
                        <h4>{product.period}(tháng)</h4>
                    </div>
                    {/* <div className="tb-col-5">
                        <span>
                            {
                                product.stock_status === "instock" ? `Còn hàng ${product.stock_quantity}` : 'Hết hàng'
                            }
                        </span>
                    </div> */}
                </div>
            )
        }
        return result;
    }

    render() {
        let item = this.props.item;
        let {
            listProduct
        } = this.state;
        
        let renderLstProduct = this._renderListProduct(listProduct);

        if (renderLstProduct.length === 0) return null;

        return (
            <div className="group-product">
                <div className="group-name">
                    <h3>{item.display_name}</h3>
                </div>
                {
                    renderLstProduct
                }
            </div>
        )
    }
}
export default GroupProductComponent;
