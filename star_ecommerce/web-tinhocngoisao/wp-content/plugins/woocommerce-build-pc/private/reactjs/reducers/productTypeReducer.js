
// import variable action
import {
    INIT_DATA_PRODUCT_TYPE
} from '../action/actionType';


export const ProductTypeReducer = (data_producttype = [], action) => {
    let result = [];
    switch (action.type) {
        case INIT_DATA_PRODUCT_TYPE :
            result = Object.assign({}, action.data);
            return result;
        default :
            return data_producttype;
    }
}