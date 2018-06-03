import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    MAIN_TEXT_COLOR,
    TRANSPARENT_COLOR
} from '../const/variable';

const walletItemStyle = StyleSheet.create({
    parent : {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: '#47315a',
        borderBottomWidth: 1,
        height: 90
    },

    walletItem: {
        display: 'flex',
        flexDirection: 'row',
    },

    leftImage: {
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    image : {
        width: 70,
        height: 70
    },

    childText : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 5,
        flex: 2
    },

    walletValue: {
        color: MAIN_TEXT_COLOR,
        fontSize: 15
    },

    walletLabel : {
        color: 'orange',
        fontSize: 16,
        fontWeight: 'bold'
    },

    // swipe
    swipeWallet : {
        backgroundColor: TRANSPARENT_COLOR
    }
});

export {walletItemStyle};