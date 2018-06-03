import React from 'react';
import {
    StyleSheet
} from 'react-native';
import { MAIN_TEXT_COLOR } from '../const/variable';

const productItemStyle = StyleSheet.create({
    parent : {
        display: 'flex',
        width: 150,
        height: 180,
        paddingTop: 10,
        flexDirection: 'column',
        marginLeft: 5,
        marginRight: 5
    },
    image : {
        height: 120,
        width: null
    },
    productName : {
        color: MAIN_TEXT_COLOR,
        paddingTop: 5,
        paddingBottom: 5
    },
    viewPrice : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    label : {
        color: MAIN_TEXT_COLOR
    },
    price : {
        color: 'red',
        fontWeight: 'bold'
    }
});

export {productItemStyle};