
// import variable action
import {
    INIT_PRODUCT_DATA_BY_TYPE
} from '../action/actionType';

/**
 * 
 * @param {*} product_data 
 * @param {*} action 
 */
export const ProductDataReducer = (product_data = {}, action) => {
    /**
     * data {
     *      "cpu" : [],
     *      "ram" : [],
     *      .......
     * }
     */
    let result = [];
    switch (action.type) {
        case INIT_PRODUCT_DATA_BY_TYPE :
            result = Object.assign({}, product_data);

            if (!result.hasOwnProperty(action.data.key)) {
                result[action.data.key] = action.data.value
            }

            return result;
        default :
            return product_data;
    }
}