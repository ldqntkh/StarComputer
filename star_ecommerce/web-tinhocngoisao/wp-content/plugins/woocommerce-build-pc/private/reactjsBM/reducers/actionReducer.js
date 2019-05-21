// import from client app
import {
    TOOGLE_MODAL_CHOOSE_PRODUCT,
} from '../../reactjs/action/actionType';

import {
    SELECT_PRODUCT_TYPE,
    INIT_MESSAGE_CLOSE_MODAL
} from '../action/actionType';

export const ActionReducer = (action_data = {
    toogle_modal_choose_product : false,
    product_type_selected : '',
    message_close_modal : ''
}, action)=> {
    let result = {...action_data};
    switch (action.type) {
        case TOOGLE_MODAL_CHOOSE_PRODUCT:
            result['message_close_modal'] = '';
            result['toogle_modal_choose_product'] = action.data;
            return result;
        case SELECT_PRODUCT_TYPE :
            result['product_type_selected'] = action.data;
            return result;
        case INIT_MESSAGE_CLOSE_MODAL:
            result['message_close_modal'] = action.message;
            return result;
        default:
            return action_data;
    }
}