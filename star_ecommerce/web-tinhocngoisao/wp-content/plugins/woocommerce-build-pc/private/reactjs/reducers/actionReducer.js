import {
    TOOGLE_MODAL_CHOOSE_PRODUCT,
    SET_VALUE_PRODUCT_TYPE,
    SET_VALUE_PRODUCT_SEARCH_KEY,
    SET_VALUE_PRODUCT_SEARCH_ATTRIBUTE,
    CLEAN_ALL_ACTION_SEARCH
} from '../action/actionType';

export const ActionReducer = (action_data = {
    toogle_modal_choose_product : false,
    value_product_type : '',
    product_search_key : '',
    product_search_attribute : []
}, action)=> {
    let result = {};
    switch (action.type) {
        case TOOGLE_MODAL_CHOOSE_PRODUCT:
            result = Object.assign({}, action_data);
            result['toogle_modal_choose_product'] = action.data;
            return result;
        case SET_VALUE_PRODUCT_TYPE:
            result = Object.assign({}, action_data);
            result['value_product_type'] = action.data;
            return result;
        case SET_VALUE_PRODUCT_SEARCH_KEY:
            result = Object.assign({}, action_data);
            result['product_search_key'] = action.data;
            return result;
        case SET_VALUE_PRODUCT_SEARCH_ATTRIBUTE:
            /**
             * {
             *      "pa_color" : [],
             *      ......
             * }
             */
            result = Object.assign({}, action_data);
            result['product_search_attribute'] = action.data;
            return result;
        case CLEAN_ALL_ACTION_SEARCH: // this function will be call before when call function set new data
            result = Object.assign({}, action_data);
            result['value_product_type'] = '';
            result['product_search_key'] = '';
            result['product_search_attribute'] = [];
            return result;
        default:
            return action_data;
    }
}