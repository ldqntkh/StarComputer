import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';
import {
    Picker
} from 'native-base';
import { walletModalStyle } from '../../../styleSheets/modal/walletModalStyle';
import Button from 'react-native-button';
import { Field, reduxForm, submit, SubmissionError } from 'redux-form';
import { submitRegisterWalletItem } from '../../../const/submitForm';
import { renderPicker, renderInputField } from '../../../const/inputFields';
import { maxLength, minLength, required, requiredForCombobox } from '../../../validator/validationFields';
import { KEY_USER_LOGIN } from '../../../const/variable';

const minLength100 = minLength(100);
const maxLength250 = maxLength(250);

import {
    SAVE, CANCEL
} from '../../../const/variableLabel';

import {
    API_URL
} from '../../../const/variable';

class WalletModalFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poolservice : null,
            poolservicedata: [],
            labelPoolService: 'Please choose a pool service!'
        };
    }

    componentWillMount() {
        if(this.props.walletItem) {
            walletItem = this.props.walletItem;
            this.props.initialize({
                walletId: walletItem.walletId,
                name: walletItem.walletName,
                poolservice: walletItem.poolService,
                id: walletItem.id
            });
            this.setState({
                poolservice: walletItem.poolService
            })
        } else {
            this.props.initialize({
                walletId: null,
                name: null,
                poolservice: null
            })
        }
        this.getPoolService();
    }

    getPoolService = async() => {
        try {
            let results = await fetch(API_URL + 'pools/all');
            let rsJson = await results.json();
            let defaultPoolService = {poolservice: null, poolname: this.state.labelPoolService};
            rsJson.data.unshift(defaultPoolService);
            if (rsJson.errCode === 0 && rsJson.data) {
                this.setState({
                    poolservicedata: rsJson.data
                })
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    save = async (value) => {
        try {
            // only support for ethereum
            value.walletTypeId = 1;
            let result = await submitRegisterWalletItem(value);
            let that = this;

            if (result instanceof SubmissionError) {
                throw result;
            }

            if (result) {
                that.props.getWallet();
                that.props.hideModal();
            }
            that.props.initialize({
                walletId: '',
                name: '',
                poolservice: -1
            })
        } catch (err) {
            console.log(err);

            if (err instanceof SubmissionError) {
                throw err;
            }
        }
    }

    onChange = (value) => {
        this.setState({
            poolservice: value
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={{marginTop: 10}}>
                <Field name="walletId" keyboardType="default" label="Wallet id*" component={renderInputField} 
                       style={walletModalStyle.inputField} styleItem={{width: 300}} validate={[required]}/>
                <Field name="name" keyboardType="default" label="Wallet name*" component={renderInputField} 
                       style={walletModalStyle.inputField} styleItem={{width: 300}} validate={[required, maxLength250]}/>
                {/**
                    only support for ethereum
                */}
                
                <Field
                    name="poolservice"
                    component={ renderPicker }
                    iosHeader={this.state.labelPoolService}
                    selectedValue={ this.state.poolservice }
                    onChange={ this.onChange }
                    validate={ [requiredForCombobox] }
                    style={walletModalStyle.picker}
                    viewStyle={walletModalStyle.pickerView}>
                    {this.state.poolservicedata.map((item, index) => <Picker.Item label={item.poolname} value={item.poolservice} key={index}/> )}
                </Field>

                <Field name="hiddenField" keyboardType="default" label="hiddenField" component={renderInputField} 
                        style={walletModalStyle.hiddenInput} styleItem={{width: 300}}/>

                <View style={walletModalStyle.btnGroup}>

                    <Button
                        style={ [walletModalStyle.btnSaveCustom, walletModalStyle.btnCustom] }
                        onPress={ handleSubmit(this.save) }
                    >
                        {SAVE}
                    </Button>

                    <Button
                        style={ [walletModalStyle.btnCancelCustom, walletModalStyle.btnCustom] }
                        onPress={ this.props.hideWalletModal }
                    >
                        {CANCEL}
                    </Button>

                </View>

            </View>
        );
    }
}

export default WalletModalFormComponent = reduxForm({
    form: 'registerWalletItem'
})(WalletModalFormComponent);