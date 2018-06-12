import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

import {
    MAIN_TEXT_COLOR,
    BORDER_WORKER_COLOR
} from '../const/variable';

const workerItemStyle = StyleSheet.create({
    parent : {
        display: 'flex',
        flexDirection: 'row',
        borderColor: BORDER_WORKER_COLOR,
        borderTopWidth: 1,
        height: 70,
        padding: 5
    },
    leftImage: {
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    workerInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    imageWorker: {
        width: 70,
        height: 55
    },

    activeText: {
        color: MAIN_TEXT_COLOR
    },

    inactiveText: {
        color: 'red'
    }
});

export {workerItemStyle};