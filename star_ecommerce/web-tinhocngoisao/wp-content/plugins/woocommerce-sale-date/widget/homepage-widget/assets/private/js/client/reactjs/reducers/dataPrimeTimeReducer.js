import {
    INIT_DATA,
    SET_BLOCK_ACTIVED,
    SET_BLOCK_CLICK,
    SET_CATEGORY_ACTIVED
} from '../action/actionType';

export const DataPrimeTimeReducer = (data_primetime = [], action) =>{
    let result = [];
    switch(action.type) {
        case INIT_DATA:
            result = Object.assign({}, data_primetime);
            result.data_block  = action.data;
            return result;
        case SET_BLOCK_ACTIVED:
            result = Object.assign({}, data_primetime);
            result.block_active = action.data.block_active;
            result.next_block_active = action.data.next_block_active;
            result.time_down_data = action.data.time_down_data;
            result.end_block_time = action.data.end_block_time;
            return result;
        case SET_BLOCK_CLICK:
            result = Object.assign({}, data_primetime);
            result.block_active_click = action.data.block_active_click;
            result.end_block_time = action.data.end_block_time;
            result.category_actived = -1;
            return result;
        case SET_CATEGORY_ACTIVED:
            result = Object.assign({}, data_primetime);
            result.category_actived = action.data;
            return result;
        default:
            return data_primetime;
    }
}