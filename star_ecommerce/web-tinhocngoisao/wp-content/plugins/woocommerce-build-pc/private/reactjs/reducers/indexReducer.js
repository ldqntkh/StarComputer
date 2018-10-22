import {combineReducers} from 'redux';

// import reducer
import {ProductTypeReducer} from './productTypeReducer';
import {BuildPcProductsReducer} from './buildPcProductsReducer';
import {ActionReducer} from './actionReducer';

let BuildPcReducer = combineReducers({
    ProductTypeReducer,
    BuildPcProductsReducer,
    ActionReducer
});

export default BuildPcReducer;