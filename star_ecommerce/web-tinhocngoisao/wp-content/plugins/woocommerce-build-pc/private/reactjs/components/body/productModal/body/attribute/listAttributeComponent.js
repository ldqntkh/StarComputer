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

    findListAttribute = ()=> {
        let product_data = this.props.product_data;
        let arrAttributes = {};
        for(let index in product_data) {
            let attributes = product_data[index]['attributes'];
            
            for(let i in attributes) {
                let name = attributes[i]['name'];
                let values = attributes[i]['values'];
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
                {this.renderListAttributes(listAttribute)}
            </React.Fragment>
        );
    }
}

// create container
import { connect } from 'react-redux';

import {
    
} from '../../../../../action/actionFunction';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListAttributeComponent);