import React, {Component} from 'react';

// import component
import HeaderCategoriesComponent from './header/headerCategoriesComponent';
import ListProductComponent from './products/listProductComponent';
export default class MainBodyComponent extends Component {

    constructor(props) {
        super(props);

    }

    renderDataBlock = () => {
        let {
            block_active,
            block_active_click,
            data_block
        } = this.props;

        let block = typeof block_active_click != 'undefined' ? block_active_click : block_active;
        let result = [];

        for(let item in data_block) {
            if (data_block[item].block_time !== "" && data_block[item].block_time == block) {
                result.push( <HeaderCategoriesComponent list_categories={data_block[item].block_categories} key={item}/> );
                break; 
            }
        }
        return result;
    }

    render() {
        return(
            <div className="main-body">
                {this.renderDataBlock()}
                <ListProductComponent />
            </div>
        );
    }
}