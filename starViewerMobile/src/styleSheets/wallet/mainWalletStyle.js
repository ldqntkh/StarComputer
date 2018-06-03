import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    MAIN_BACKGROUND
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
});

export {mainWalletStyle};