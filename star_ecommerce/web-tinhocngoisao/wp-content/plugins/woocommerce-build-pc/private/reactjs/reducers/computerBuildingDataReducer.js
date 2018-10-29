
// import variable action
import {
    INIT_COMPUTER_BUILDING_DATA,
    SET_VALUE_COMPUTER_PRODUCT_BY_TYPE,
    SET_QUANTITY_COMPUTER_PRODUCT_BY_TYPE,
    CLEAR_VALUE_COMPUTER_PRODUCT_BY_TYPE
} from '../action/actionType';

/**
 * data có dạng
 * [
 *      "main" : {
 *          "product" : product,
 *          "quantity" : 1,
 *          "require" : true,
 *          "require-by" : null,
 *          "link" : null
 *      }, .....
 * ]
 */

export const ComputerBuildingDataReducer = (computer_building_data = {}, action) => {
    let result = [];
    switch (action.type) {
        case INIT_COMPUTER_BUILDING_DATA :
            result = Object.assign({}, action.data);
            return result;
        case SET_VALUE_COMPUTER_PRODUCT_BY_TYPE:
            result = Object.assign({}, computer_building_data);
            result[action.data.type]["product"] = action.data.value;
            return result;
        case CLEAR_VALUE_COMPUTER_PRODUCT_BY_TYPE:
            result = Object.assign({}, computer_building_data);
            result[action.data.type]["product"] = null;
            result[action.data.type]["quantity"] = 1;
            return result;
        case SET_QUANTITY_COMPUTER_PRODUCT_BY_TYPE:
            result = Object.assign({}, computer_building_data);
            result[action.data.type]["quantity"] = action.data.value;
            return result;
        default :
            return computer_building_data;
    }
}