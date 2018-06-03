import React, { Component } from 'react'
import {
    View,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    BackHandler,
    ActivityIndicator
} from 'react-native';
import {
    Container, Content, Picker
} from 'native-base';
import Button from 'react-native-button';
import {Field, reduxForm, submit, SubmissionError} from 'redux-form';

// import component
import HeaderDetailsComponent from '../main/header/headerDetailsComponent';

// import const
import {renderInputField, renderPicker} from '../../const/inputFields'
import {
    submitRegisterAccount
} from '../../const/submitForm';

// import style
import {registerStyle} from '../../styleSheets/account/registerStyle';
import { MAIN_TEXT_COLOR } from '../../styleSheets/const/variable';

// import validator
import { 
    email, maxLength, minLength, number, required, match, requiredForCombobox
} from '../../validator/validationFields';

// import variable
import {
    MAIN_WALLET_SCREEN, LOG_IN_SCREEN
} from '../../const/variableScreen';
import {
    CANCEL, REGISTER, CREATE_ACCOUNT_LABEL
} from '../../const/variableLabel';
import {
    API_URL
} from '../../const/variable';

const maxLength50 = maxLength(50);
const minLength6 = minLength(6);
const maxLengthPhone = maxLength(15);
const minLengthPhone = minLength(9);
const matchPassword = match('password');

class RegisterComponent extends Component {

    static navigationOptions = {
        headerStyle: {
          display: 'none' 
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            provinces: [],
            provinceId: 0,
            province: {id: 0, name: 'Tỉnh/thành phố'}
        }
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        let {navigation} = this.props;
        if (navigation.getParam('isLoggedFb')) {
            this.props.initialize({ 
                email: navigation.getParam('email'),
                logintype: navigation.getParam('logintype')
            });
        }
        this.getProvinces();
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        this.state.provinces = [];
    }

    handleBackButtonClick = ()=> {
        this.props.navigation.navigate("");
        return true;
    }

    register = async (value) => {
        try {
            let result = await submitRegisterAccount(value);
            let that = this;
            Keyboard.dismiss();

            if (result instanceof SubmissionError) {
                throw result;
            }

            if (result) {
                that.props.navigation.navigate(MAIN_WALLET_SCREEN);
            }
        } catch (err) {
            console.log(err);

            if (err instanceof SubmissionError) {
                throw err;
            }
        }
    }

    cancel = () => {
        Keyboard.dismiss();
        this.props.navigation.navigate(LOG_IN_SCREEN);
    }

    getProvinces = async() => {
        try {
            let results = await fetch(API_URL + 'countries/provinces/all');
            let rsJson = await results.json();
            rsJson.data.unshift(this.state.province);
            if (rsJson.errCode === 0 && rsJson.data) {
                this.setState({
                    provinces: rsJson.data
                })
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    onChange = (value) => {
        this.setState({
            provinceId: value
        });
    }
    render () {
        const {handleSubmit, submitting} = this.props;
        return (
            <Container style={registerStyle.parent}>
                <HeaderDetailsComponent walletName={CREATE_ACCOUNT_LABEL} backPage={LOG_IN_SCREEN} navigation={this.props.navigation}/>
                <Content>
                    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style={registerStyle.parentView}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={registerStyle.parentView}>
                                <View>
                                    <Field name="email" keyboardType="email-address" label="Email *" component={renderInputField} style={registerStyle._input} validate={[required, email, minLength6, maxLength50]}/>
                                    <Field name="phone" keyboardType="numeric" label="Số điện thoại *" component={renderInputField} style={registerStyle._input} validate={[required, minLengthPhone, maxLengthPhone, number]}/>
                                    <Field name="fullname" keyboardType="default" label="Họ tên *" component={renderInputField} style={registerStyle._input} validate={[required, minLength6, maxLength50]}/>
                                    <Field
                                        name="provinceid"
                                        component={ renderPicker }
                                        iosHeader={ 'Tỉnh/Thành phố' }
                                        selectedValue={ this.state.provinceId }
                                        onChange={ this.onChange }
                                        validate={ [requiredForCombobox] }
                                        value={ this.state.provinces }
                                        style={ registerStyle.picker }
                                        viewStyle={ registerStyle.pickerView}>
                                        {this.state.provinces.map((item, index) => <Picker.Item label={item.name} value={item.id} key={index}/> )}
                                    </Field>
                                    <Field name="address" keyboardType="default" label="Địa chỉ *" component={renderInputField} style={registerStyle._input} validate={[required]}/>
                                    <Field name="password" keyboardType="default" label="Mật khẩu *" component={renderInputField} style={registerStyle._input} validate={[required, minLength6, maxLength50]} secureTextEntry={true}/>
                                    <Field name="passwordconfirm" keyboardType="default" label="Nhập lại mật khẩu *" component={renderInputField} style={registerStyle._input} validate={[required, minLength6, maxLength50, matchPassword]} secureTextEntry={true}/>
                                    <Field name="logintype" keyboardType="default" label="hiddenField" component={renderInputField} style={registerStyle.hidden_input}/>
                                    <Field name="hiddenField" keyboardType="default" label="hiddenField" component={renderInputField} style={registerStyle.hidden_input}/>
                                </View>
                                {submitting ? <ActivityIndicator size="large" color={MAIN_TEXT_COLOR} /> :
                                    <View style={registerStyle.viewButton}>
                                        <Button
                                            style={registerStyle.btnRegister}
                                            containerStyle={registerStyle.btnRegisterCustom}
                                            onPress={handleSubmit(this.register)}
                                        > { REGISTER } </Button>
                                        <Button
                                            style={registerStyle.btnRegister}
                                            containerStyle={registerStyle.btnCancelCustom}
                                            onPress={this.cancel}
                                        > { CANCEL } </Button>
                                    </View>
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        );
    }
}

export default RegisterComponent = reduxForm({
    form: "register"
})(RegisterComponent);