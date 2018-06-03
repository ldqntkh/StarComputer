import React from 'react';
import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

import {
    MAIN_BACKGROUND,
    MAIN_TEXT_COLOR,
    BTN_LOGIN_BG_COLOR,
    BTN_CANCEL_BG_COLOR,
    YELLOW_TEXT_COLOR
} from '../const/variable';

const registerStyle = StyleSheet.create({
    parent : {
        backgroundColor: MAIN_BACKGROUND,
    },

    parentView : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    parentViewLoading : {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_BACKGROUND
    },

    _input: {
        borderColor: MAIN_TEXT_COLOR,
        color: MAIN_TEXT_COLOR,
        width: Dimensions.get('window').width < 360 ? 320 : 350,
        height: 40,
        fontSize: 16,
        padding: 5,
    },

    hidden_input: {
        width: 0,
        height: 0
    },

    viewButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    btnRegister : {
        fontSize: 20,
        color: MAIN_TEXT_COLOR,
        padding: 10,
        width: 120
    },
    btnRegisterCustom: {
        backgroundColor: BTN_LOGIN_BG_COLOR,
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 5
    },

    btnCancelCustom: {
        backgroundColor: BTN_CANCEL_BG_COLOR,
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 5
    },

    picker : {
        ...Platform.select({
            android: {
                color: MAIN_TEXT_COLOR
            }
        }),
        width: Dimensions.get('window').width < 360 ? 310 : 325,
        height: 40,
        borderWidth: 0.5,
        borderColor: MAIN_TEXT_COLOR,
        borderRadius: 40
    },

    pickerView : {
        borderWidth: 0.5,
        borderColor: MAIN_TEXT_COLOR,
        borderRadius: 40,
        marginTop: 10
    },

    pointView: {
        display: 'none',
        width: Dimensions.get('window').width < 360 ? 320 : 350,
        paddingLeft: 20
    },

    pointLabel: {
        color: MAIN_TEXT_COLOR
    },

    pointValue: {
        color: YELLOW_TEXT_COLOR
    }
});

export {registerStyle};