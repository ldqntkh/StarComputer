import React, {Component} from 'react';

// import component

// import container
import ProductTypeItemContainer from '../../containers/body/productType/productTypeItemContainer';
import ChooseProductContainer from '../../containers/body/productModal/chooseProductContainer';

export default class MainBodyComponent extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        let {data_product_type} = this.props;
        let listProductType =[];
        if (data_product_type !== undefined) {
            for(let index in data_product_type) {
                listProductType.push(
                    <ProductTypeItemContainer key={index} product_type={data_product_type[index]} index={parseInt(index) + 1}/>
                );
            }
        }

        return(
            <React.Fragment>
                <div className="build-pc-body">
                    {listProductType}
                </div>
                <ChooseProductContainer />
            </React.Fragment>
        );
    }
}