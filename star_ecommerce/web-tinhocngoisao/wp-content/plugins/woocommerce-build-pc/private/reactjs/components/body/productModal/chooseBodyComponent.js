import React, {Component} from 'react';

// import component
import ListAttributeComponent from './body/attribute/listAttributeComponent';
import ListProductComponent from './body/listProductComponent';

class ChooseBodyComponent extends Component {

    constructor(props) {
        super(props);
    }

    _FilterProduct = (lstProduct)=> {
        const {action_data, data_product_type, computer_building_data} = this.props;
        let product_type_selected = action_data.value_product_type;
        for (let index in data_product_type) {
            let item = data_product_type[index];
            if (item.value === product_type_selected) {
                // get selected value from require product
                // selected_product_value
                const require_by = item['require-by'];
                if (require_by === null) return lstProduct;
                var lstProductSelected = computer_building_data[require_by];
                if (lstProductSelected) {
                    lstProductSelected = lstProductSelected.product.selected_product_value;
                    if (lstProductSelected && lstProductSelected !== "") {
                        lstProductSelected = atob(lstProductSelected);
                        lstProductSelected = JSON.parse(lstProductSelected);
                        lstProductSelected = lstProductSelected[product_type_selected];
                        if (typeof lstProductSelected !== 'undefined' && lstProductSelected.length > 0) {
                            // get list product in lstProductSelected
                            var resultListProduct = [];
                            for (let i in lstProduct) {
                                for (let k in lstProductSelected) {
                                    if (lstProduct[i].id === lstProductSelected[k].id) {
                                        resultListProduct.push(lstProduct[i]);
                                        break;
                                    }
                                }
                            }
                            return resultListProduct;
                        }
                    }
                }
                break;
            }
        }
        return [];
    };

    render() {
        let {product_data, action_data} = this.props;
        // xử lý filter data product
        let product_data_by_type = product_data[action_data.value_product_type];
        
        if (!product_data_by_type) {
            return(
                <div className="loading">
                    <i className="fa fa-spinner"></i>
                </div>
            )
        }
        let lstProduct = this._FilterProduct(product_data_by_type);
        return (
            <React.Fragment>
                {/*filter attribute*/}
                <div className={`filter-attri ${action_data.toogle_filter_product ? "active" : ""}`}>
                    <ListAttributeComponent product_data={lstProduct} product_type={this.props.product_type}/>
                </div>

                {/*Show list product*/}
                {
                    <ListProductComponent product_data_value={lstProduct} />
                }
            </React.Fragment>
        );
    }
}

// create container
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    action_data : state.ActionReducer,
    data_product_type : state.ProductTypeReducer,
    computer_building_data : state.ComputerBuildingDataReducer,
    product_data : {...state.ProductDataReducer}
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseBodyComponent);