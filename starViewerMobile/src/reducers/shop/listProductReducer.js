import {
    ADD_NEW_DATA_PRODUCTS
} from '../../actions/actionType';

export const ListProductsReducer = (listProducts=[] ,action) => {
    switch(action.type) {
        case ADD_NEW_DATA_PRODUCTS: 
            return action.dataProducts;
        default:
            return listProducts
    }
}