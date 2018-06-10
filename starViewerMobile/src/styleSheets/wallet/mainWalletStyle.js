import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    MAIN_BACKGROUND, MAIN_TEXT_COLOR
} from '../const/variable';

const mainWalletStyle = StyleSheet.create({
    parent : {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: MAIN_BACKGROUND,
    },
    parentViewLoading : {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_BACKGROUND
    },
    coinprices : {
        width: Dimensions.get('window').width,
        height: 50,
        borderColor: MAIN_TEXT_COLOR,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        position: 'relative'
    },
});

export {mainWalletStyle};