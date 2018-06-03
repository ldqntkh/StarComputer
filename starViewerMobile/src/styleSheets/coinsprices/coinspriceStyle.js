import React from 'react';
import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

import {
    MAIN_TEXT_COLOR
} from '../const/variable';

const coinsPriceStyle = StyleSheet.create({
    parent: {
        width: 20 * 170,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    itemView : {
        width: 170,
        height: 50,
        borderColor: MAIN_TEXT_COLOR,
        borderRightWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name : {
        height: 20,
        color: MAIN_TEXT_COLOR,
        marginTop: 5
    },
    viewPrice : {
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    price : {
        color: MAIN_TEXT_COLOR
    },
    icon: {
        marginLeft: 10,
        marginRight: 3,
        fontSize: 20,
        color: MAIN_TEXT_COLOR
    },
    percentUp : {
        color: 'green'
    },
    percentDown : {
        color: 'red'
    }
});

export {coinsPriceStyle};