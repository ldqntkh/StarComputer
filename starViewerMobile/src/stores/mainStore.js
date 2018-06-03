import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {WalletDataReducer} from '../reducers/wallet/walletReducer';
import {CoinsPriceDataReducer} from '../reducers/coinsprices/coinsPriceReducer';
import {ListProductsReducer} from '../reducers/shop/listProductReducer'

const rootReducer = combineReducers({
    form: formReducer,
    WalletDataReducer,
    CoinsPriceDataReducer,
    ListProductsReducer
});

const mainStore = createStore(rootReducer);
export default mainStore;