
import {
    ADD_NEW_DATA_PRODUCTS
} from '../const/actionType';


const ProductListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_DATA_PRODUCTS:
            return action.dataProduct
        default:
            return state
    }
}

export default MyWalletReducer