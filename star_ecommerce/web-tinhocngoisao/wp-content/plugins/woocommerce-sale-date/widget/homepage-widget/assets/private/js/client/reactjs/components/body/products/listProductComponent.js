import React, {Component} from 'react';

// import component
import ProductItemComponent from './productItemComponent';


export default class ListProductComponent extends Component {

    constructor (props) {
        super(props);
    }

    renderListProduct = ()=> {
        let result = [];
        for (let i = 0; i < 15; i++) {
            result.push(<ProductItemComponent key={i}/>);
        }
        return result;
    }

    render() {
        return (
            <div className="featured-entries-col woocommerce column custom-primetime-sale">
                {this.renderListProduct()}
            </div>
        );
    }
}