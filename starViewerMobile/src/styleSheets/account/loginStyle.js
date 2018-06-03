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
    BTN_REGISTER_BG_COLOR,
    BTN_SOCIAL_FB_BG_COLOR
} from '../const/variable';

const loginStyle = StyleSheet.create({
    parentView : {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        backgroundColor: MAIN_BACKGROUND,
    },

    parentViewLoading : {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_BACKGROUND
    },

    titleText : {
        color : MAIN_TEXT_COLOR,
        fontSize: 20,
    },

    logo_image : {
        width: 280,
        height: 150,
        marginBottom: 10
    },

    email_input: {
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

    url : {
        fontSize: 20,
        color: MAIN_TEXT_COLOR,
        textDecorationLine: 'underline',
    },

    forgotPassword : {
        fontSize: 20,
        fontStyle: 'italic',
        color: MAIN_TEXT_COLOR,
        textDecorationLine: 'underline',
    },

    viewButtonLogin : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        width: 320,
    },
    btnLogin : {
        fontSize: 20,
        color: MAIN_TEXT_COLOR,
        padding: 10,
        width: 150,
    },
    btnLoginCustom: {
        backgroundColor: BTN_LOGIN_BG_COLOR,
        borderRadius: 40,
        marginBottom: 20
    },

    btnRegisterCustom: {
        backgroundColor: BTN_REGISTER_BG_COLOR,
        borderRadius: 40,
        marginBottom: 20
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

    socialContainer: {
        paddingBottom: 20
    },
    
    socialTitle: {
        color: MAIN_TEXT_COLOR,
        fontSize: 20,
        paddingBottom: 10,
        textAlign: 'center'
    },

    socialButtonContainer: {
        padding: 5,
        paddingRight: 20,
        backgroundColor: BTN_SOCIAL_FB_BG_COLOR
    },

    socialIcon: {
        color: MAIN_TEXT_COLOR,
        fontSize: 25,
        paddingLeft: 5
    },

    socialButtonText: {
        color: MAIN_TEXT_COLOR,
        fontSize: 20,
        paddingLeft: 5
    }
});

export {loginStyle};