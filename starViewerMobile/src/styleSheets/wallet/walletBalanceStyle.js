import React from 'react';
import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

import {
    MAIN_BACKGROUND,
    ORANGE_TEXT_COLOR,
    MAIN_TEXT_COLOR
} from '../const/variable';

const walletBalanceStyle = StyleSheet.create({
    parentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: MAIN_BACKGROUND
    },
    parent : {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    parentViewLoading : {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_BACKGROUND
    },

    parentViewQrcode : {
        display: 'flex',
        height: 280,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    qrCode: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 280,
        paddingVertical: 20,
        paddingHorizontal: null,
        backgroundColor: '#3A3635',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 140
    },

    label: {
        fontSize: 20,
        color: MAIN_TEXT_COLOR
    },

    labelHashrate : {
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold'
    },

    labelValue: {
        fontSize: 20,
        color: ORANGE_TEXT_COLOR,
        textAlign: 'center'
    },

    viewLabel: {
        display: 'flex',
        flexDirection: 'column',
        width: 160,
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewLabelTotal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    parentViewBalance : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewUnpaid : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350
    },

    parentViewHashrate : {
        display: 'flex',
        height: 160,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewHashrate : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 160,
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 80
    },


    parentViewEarning : {
        display: 'flex',
    },
    viewEarningHeader: {
        backgroundColor: '#39312F',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        flexWrap : 'nowrap',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    earningColumnOne : {
        color: MAIN_TEXT_COLOR,
        width: 80,
        height: 50
    },
    earningColumn : {
        color: MAIN_TEXT_COLOR,
        width: (Dimensions.get('window').width -80) / 3,
        height: 50
    }
});

export {walletBalanceStyle};