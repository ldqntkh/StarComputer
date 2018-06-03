import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    MAIN_TEXT_COLOR,
    MAIN_BACKGROUND
} from '../const/variable';

const priceExchangeStyle = StyleSheet.create({
    parentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: MAIN_BACKGROUND
    },
    content : {
        display: 'flex',
        alignItems: 'center'
    },
    headerText: {
        color: MAIN_TEXT_COLOR,
        fontSize: 16,
        marginTop: 20,
        marignBottom: 20
    },
    header : {
        width: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderWidth: 2,
        borderColor: MAIN_TEXT_COLOR
    },
    row : {
        width: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: MAIN_TEXT_COLOR
    },
    rowcolor: {
        backgroundColor: 'grey'
    },
    col1: {
        width: 50,
        alignItems: 'center'
    },
    col2: {
        width: Dimensions.get('window').width - 180
    },
    col3: {
        width: 130,
        alignItems: 'center'
    },
    headerLabel: {
        color: MAIN_TEXT_COLOR
    },
    itemText: {
        color: MAIN_TEXT_COLOR
    },
    scrollview: {
        height: Dimensions.get('window').height - 150
    },
    percentUp : {
        color: 'green'
    },
    percentDown : {
        color: 'red'
    },
    icon: {
        paddingRight: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: MAIN_TEXT_COLOR
    },
});

export { priceExchangeStyle }