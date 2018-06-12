import React from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    MAIN_BACKGROUND,
    MAIN_TEXT_COLOR,
    BTN_LOGIN_BG_COLOR,
    BTN_CANCEL_BG_COLOR
} from '../const/variable';

const listWorkerStyle = StyleSheet.create({
    parentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: MAIN_BACKGROUND
    },
    parentView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    parentViewLoading : {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_BACKGROUND
    },
    viewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    lstItem : {
        maxHeight: Dimensions.get('window').height - 150
    },

    btnDetails : {
        fontSize: 15,
        color: MAIN_TEXT_COLOR,
        padding: 5,
        width: 80
    },
    btnCustom: {
        backgroundColor: BTN_LOGIN_BG_COLOR,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 5
    },
    btnRemove: {
        backgroundColor: BTN_CANCEL_BG_COLOR,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 5
    }
});

export {listWorkerStyle};