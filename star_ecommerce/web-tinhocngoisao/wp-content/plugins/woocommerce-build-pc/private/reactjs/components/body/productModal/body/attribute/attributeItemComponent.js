import React, {Component} from 'react';

// import container
import AttributeItemDetailContainer from '../../../../../containers/body/productModal/body/attribute/attributeItemDetailContainer';

export default class AttributeItemComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_filter : false
        }
    }

    toogleFilter = ()=> {
        let show_filter = this.state.show_filter;
        this.setState({
            show_filter : !show_filter
        })
    }

    render() {
        let {attribute_name, attribute_value} = this.props;
        return(
            <div className={ `attribute-item ${this.state.show_filter ? 'show' : ''}` }>
                <div className="header-attr-name" onClick={this.toogleFilter}>
                    <h4>{attribute_name.replace('pa_', '').toUpperCase()}</h4>
                    <i className="fa fa-angle-down angle-down"></i>
                </div>
                <div className="body-attr-value">
                    {
                        attribute_value.map((item, index) => <AttributeItemDetailContainer item={item} key={index}/>)
                    }
                </div>
            </div>
        );
    }
}