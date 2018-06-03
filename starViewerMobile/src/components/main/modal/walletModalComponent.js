import React, { Component } from 'react'

import {
    View,
    TextInput,
    Text,
    Picker,
    TouchableOpacity
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

import { walletModalStyle } from '../../../styleSheets/modal/walletModalStyle';
import WalletModalFormComponent from './walletModalFormComponent';

import {
    ADD_NEW_WALLET, EDIT_WALLET
} from '../../../const/variableLabel';

class WalletModalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            walletItem: null
        }
    }

    // được gọi public ra bên parent
    showModal = (item) => {
        if(typeof item !== 'undefined') {
            this.setState({
                walletItem: item
            })
        }
        this.refs.walletModal.open();
    }

    hideModal = () => {
        this.setState({
            walletItem: null
        })
        this.refs.walletModal.close();
    }

    render () {
        return (
            <Modal 
                ref="walletModal"
                style={ walletModalStyle.parent } 
                position='center' 
                backdrop={ true } 
            >
                <Text style={ walletModalStyle.title }> {this.state.walletItem ? EDIT_WALLET : ADD_NEW_WALLET} </Text>
                <WalletModalFormComponent 
                    hideWalletModal={ this.props.hideWalletModal }
                    hideModal={ this.hideModal }
                    getWallet={ this.props.getWallet }
                    walletItem = {this.state.walletItem}
                />
            </Modal>
        )
    }
}

export default WalletModalComponent;