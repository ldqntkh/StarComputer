import {createStore, combineReducers} from 'redux';
import { DataPrimeTimeReducer } from '../reducers/dataPrimeTimeReducer';

const PrimeTimeReducer = combineReducers({
    DataPrimeTimeReducer
});
const PrimeTimeStore = createStore(PrimeTimeReducer);
export default PrimeTimeStore;