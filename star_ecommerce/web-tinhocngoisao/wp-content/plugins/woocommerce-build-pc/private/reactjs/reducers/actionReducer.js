import {
    TOOGLE_MODAL_CHOOSE_PRODUCT,
    SET_VALUE_PRODUCT_TYPE
} from '../action/actionType';

export const ActionReducer = (action_data = {
    toogle_modal_choose_product : false,
    value_product_type : ''
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
        default:
            return action_data;
    }
}