
// import variable action
import {
    INIT_DATA_PRODUCT_BUILDPC
} from '../action/actionType';

/**
 * data có dạng
 * [
 *      { "type" : "cpu", "product_id" : <product_id> },
 *      {}..
 * ]
 */

/**
 * action có dạng
 * {
 *      type : type,
 *      data : {
 *                  product_type : product_type,
 *                  product_id : product_id
 *             }
 * }
 */

export const BuildPcProductsReducer = (data_products_buildpc = {}, action) => {
    let result = [];
    switch (action.type) {
        case INIT_DATA_PRODUCT_BUILDPC :
            result = Object.assign({}, data_products_buildpc);
            // check product type has exists
            let flag = false;
            let flag_index = -1;
            for(let index in result) {
                if (result[index].product_type === action.data.product_type) {
                    flag = true;
                    flag_index = index;
                    break;
                }
            }
            if (flag == true) {
                // change value
                result[flag_index].product_id = action.data.product_id;
            } else {
                result.push(action.data);
            }
            return result;
        default :
            return data_products_buildpc;
    }
}