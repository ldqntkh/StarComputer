import React, {Component} from 'react';

// import component
import AttributeItemComponent from './attributeItemComponent';

class ListAttributeComponent extends Component {

    constructor(props) {
        super(props);
    }
    
    isEmpty = (obj)=> {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return JSON.stringify(obj) === JSON.stringify({});
    };

    toggleFilter = ()=> {
        this.props.ToogleFilterProduct();
    }

    findListAttribute = ()=> {
        let {product_data, product_type, product_type_reducer, computer_building_data} = this.props;
        let require_field = 'pa_';
        let product_require = null;
        for (let i in product_type_reducer) {
            if (product_type_reducer[i].value === product_type) {
                if (typeof computer_building_data[product_type_reducer[i]['require-by']] === "undefined") break;
                product_require = computer_building_data[product_type_reducer[i]['require-by']].product;
                require_field += product_type_reducer[i]['require-by'] !== null && product_type_reducer[i]['require-field'] ? product_type_reducer[i]['require-field'] : '';
                break;
            }
        }
        
        let attri_values = null;
        if (product_require !== null) {
            for(let i in product_require.attributes) {
                if (product_require.attributes[i].name === require_field) {
                    attri_values = product_require.attributes[i].values;
                    break;
                }
            }
        }
        
        let regex_string = '';
        for(let i in attri_values) {
            if (regex_string.length !== 0) regex_string += '|';
            regex_string += attri_values[i].slug;
        }
        let regex = regex_string !== "" ? new RegExp(regex_string) : null;
        let arrAttributes = {};
        for(let index in product_data) {
            let attributes = product_data[index]['attributes'];
            if (regex !== null && attributes && !regex.test(JSON.stringify(attributes).toLowerCase())) {
                delete product_data[index];
                continue;
            }
            let flag_attribute = false;
            for(let i in attributes) {
                let name = attributes[i]['name'];
                if (name === require_field) continue;
                let values = attributes[i]['values'];

                //
                if (arrAttributes.hasOwnProperty(name)) {
                    // xác định số lượng mỗi attr có bao nhiêu product
                    
                    for(let k in values) {
                        let flag = false;
                        for(let index in arrAttributes[name]) {
                            if (arrAttributes[name][index]['slug'] === values[k]['slug']) {
                                flag = true;
                                arrAttributes[name][index]['count'] = ++arrAttributes[name][index]['count'];
                                break;
                            }
                        }
                        if (!flag) {
                            arrAttributes[name][arrAttributes[name].length] = {
                                "group" : name,
                                "name" : values[k]['name'],
                                'slug' : values[k]['slug'],
                                "count" : 1
                            };  
                        }
                        
                    }
                    
                } else {
                    let arrValue = [];
                    for(let k in values) {
                        arrValue.push({
                            "group" : name,
                            "name" : values[k]['name'],
                            'slug' : values[k]['slug'],
                            "count" : 1
                        });
                    }
                    arrAttributes[name] = arrValue;
                }
            }
        }
        return arrAttributes;
    }

    renderListAttributes = (listAttribute)=> {
        if (!this.isEmpty(listAttribute)) {
            let result  = [];
            let index = 0
            for (var prop in listAttribute) {
                if(!listAttribute.hasOwnProperty(prop)) continue;
                result.push(<AttributeItemComponent attribute_name={prop} attribute_value={listAttribute[prop]} key={index} />);
                index ++;
            }
            return result;       
        }
        return null;
    }

    render() {
        let listAttribute = this.findListAttribute();
        return(
            <React.Fragment>
                <div className="filter-attr-items-rect" onClick={this.toggleFilter}>
                    
                </div>
                <div className="list-attributes">
                    {this.renderListAttributes(listAttribute)}
                </div>
            </React.Fragment>
        );
    }
}

// create container
import { connect } from 'react-redux';

import {
    ToogleFilterProduct
} from '../../../../../action/actionFunction';

const mapStateToProps = state => ({
    product_type_reducer : state.ProductTypeReducer,
    computer_building_data : state.ComputerBuildingDataReducer
});

const mapDispatchToProps = dispatch => ({
    ToogleFilterProduct : () => dispatch(ToogleFilterProduct())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListAttributeComponent);