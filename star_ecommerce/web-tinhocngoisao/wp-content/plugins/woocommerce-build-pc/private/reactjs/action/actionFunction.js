// import variable action
import {
    INIT_DATA_PRODUCT_TYPE,

    TOOGLE_MODAL_CHOOSE_PRODUCT,
    SET_VALUE_PRODUCT_TYPE
} from './actionType';

//---------------Product type function------------------
export const InitDataProductType = data_product_type => ({
    type : INIT_DATA_PRODUCT_TYPE,
    data : data_product_type
});


//----------------Action app----------------------------
export const ToogleModalChooseProduct = toogle_value => ({
    type : TOOGLE_MODAL_CHOOSE_PRODUCT,
    data : toogle_value
});

export const SetValueProductType = product_type => ({
    type : SET_VALUE_PRODUCT_TYPE,
    data : product_type
});