import {
    INIT_DATA,
    SET_BLOCK_ACTIVED,
    SET_BLOCK_CLICK
} from './actionType';

export const InitDataPrimeTimeSale = data_primetime => ({
    type : INIT_DATA,
    data : data_primetime
});

export const SetBlockTimeActive = block_active => ({
    type: SET_BLOCK_ACTIVED,
    data : block_active
});

export const SetBlockActiveClick = block_active_click => ({
    type : SET_BLOCK_CLICK,
    data : block_active_click
});