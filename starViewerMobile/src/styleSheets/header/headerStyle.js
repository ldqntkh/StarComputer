import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    MAIN_TEXT_COLOR,
    MAIN_HEADER_BACKGROUND,
    HEADER_TEXT_COLOR
} from '../const/variable';

const headerStyle = StyleSheet.create({
    parent : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: MAIN_HEADER_BACKGROUND,
        height: 50,
        ...Platform.select({
            ios: {
                //marginTop: 30,
            },
            android: {
                //marginTop: 25,
            },
        })
    },

    imgHamburger : {
        width : 40,
        height: 40,
        padding: 5,
        margin: 5,
        fontSize: 30,
        color: HEADER_TEXT_COLOR
    },

    title : {
        fontSize: 20,
        lineHeight: 50,
        color: HEADER_TEXT_COLOR,
        fontWeight: 'bold'
    }
});

export {headerStyle};