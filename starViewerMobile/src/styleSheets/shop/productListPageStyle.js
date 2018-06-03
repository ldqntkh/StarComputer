import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    MAIN_BACKGROUND, MAIN_TEXT_COLOR
} from '../const/variable';

const productListPageStyle = StyleSheet.create({
    parentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: MAIN_BACKGROUND
    },
    parentViewLoading : {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_BACKGROUND
    },
    listProducts : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    viewItem : {
        borderWidth: 1,
        borderColor: MAIN_TEXT_COLOR,
        margin: 5,
        padding: 5,
        height: 220
    },
    viewWrapper : {
        borderColor: MAIN_TEXT_COLOR,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 250
    },
    wrapper : {
        height: 240,
    },
    wrapperItem : {
        height: 210
    }
});

export {productListPageStyle};