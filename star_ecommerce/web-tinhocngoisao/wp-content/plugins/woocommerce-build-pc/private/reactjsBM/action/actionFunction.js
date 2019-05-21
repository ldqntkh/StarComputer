import {
    SELECT_PRODUCT_TYPE,
    ADD_PRODUCT_TO_LIST,
    REMOVE_PRODUCT_FROM_LIST,
    INIT_PRODUCT_TYPE,
    INIT_MESSAGE_CLOSE_MODAL
} from './actionType';

//---------------Product type function------------------
export const SelectProductType = product_type_selected => ({
    type : SELECT_PRODUCT_TYPE,
    data : product_type_selected
});

//----------------Add product to list--------------------
export const AddProductToList = data => ({
    type : ADD_PRODUCT_TO_LIST,
    data
});

//----------------remove product from list--------------------
export const RemoveProductFromList = data => ({
    type : REMOVE_PRODUCT_FROM_LIST,
    data
});

//----------------init product to reducer--------------------
export const InitProductToReducer = data => ({
    type : INIT_PRODUCT_TYPE,
    data
});

//----------------init product to reducer--------------------
export const InitMessageCloseModal = message => ({
    type : INIT_MESSAGE_CLOSE_MODAL,
    message
});