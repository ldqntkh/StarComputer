import {
    ADD_NEW_DATA_PRODUCTS
} from '../../const/actionType'

export const AddDataProducts = dataProduct => ({
    type: ADD_NEW_DATA_PRODUCTS,
    dataProduct: dataProduct
})