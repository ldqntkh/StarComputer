import {
    ADD_NEW_DATA_COINS_PRICE
} from '../actionType'

/**
 * dataCoinsPrice {
 *      data : [],
 *      lastUpdate: date
 * }
 */
export const UpdateCoinsPricesData = dataCoinsPrice => ({
    type: ADD_NEW_DATA_COINS_PRICE,
    dataCoinsPrice : dataCoinsPrice
})