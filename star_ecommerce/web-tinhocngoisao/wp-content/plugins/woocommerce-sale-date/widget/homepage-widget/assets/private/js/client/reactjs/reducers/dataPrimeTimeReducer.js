import {
    INIT_DATA,
    SET_BLOCK_ACTIVED,
    SET_BLOCK_CLICK
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
            return result;
        case SET_BLOCK_CLICK:
            result = Object.assign({}, data_primetime);
            result.block_active_click = action.data;
            return result;
        default:
            return data_primetime;
    }
}