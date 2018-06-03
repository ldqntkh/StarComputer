import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    BackHandler,
    AsyncStorage,
    Alert,
    ActivityIndicator
} from 'react-native';
import {
    Container, Content, Icon, Picker
} from 'native-base'
import Button from 'react-native-button';
import {Field, reduxForm, submit, SubmissionError} from 'redux-form';

// import component
import HeaderDetailsComponent from '../main/header/headerDetailsComponent';

// import const
import {renderInputField, renderPicker} from '../../const/inputFields'
import {
    submitUpdateAccount
} from '../../const/submitForm';

// import style
import {registerStyle} from '../../styleSheets/account/registerStyle';
import {
    MAIN_TEXT_COLOR
} from '../../styleSheets/const/variable';

// import validator
import { 
    email, maxLength, minLength, number, required, match, requiredForCombobox
} from '../../validator/validationFields';

// import variable
import {
    MAIN_WALLET_SCREEN, LOG_IN_SCREEN
} from '../../const/variableScreen'
import {
    CANCEL, SAVE, MY_ACCOUNT, RANKING, TOTAL_POINT, USED_POINT, OK, UPDATE_ACCOUNT_TITLE, UPDATE_ACCOUNT_SUBTITLE
} from '../../const/variableLabel'
import {
    KEY_USER_LOGIN,
    API_URL
} from '../../const/variable';

const maxLength50 = maxLength(50);
const minLength6 = minLength(6);
const maxLengthPhone = maxLength(15);
const minLengthPhone = minLength(9);

class MyAccountComponent extends Component {

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

    async componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        try {
            let user_login = await AsyncStorage.getItem(KEY_USER_LOGIN);
            if (user_login) {
                let jsonData = JSON.parse(user_login);
                this.props.initialize({ 
                    email: jsonData.email,
                    phone: jsonData.phone,
                    fullname: jsonData.fullname,
                    address: jsonData.address,
                    provinceid: jsonData.provinceid
                });
                this.setState({
                    provinceId: jsonData.provinceid,
                    point: jsonData.points,
                    points_used: jsonData.points_used
                });
            }
        } catch (err) {
            console.log(err);
        }
        this.getProvinces();
    }

    async componentDidMount() {
        
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = ()=> {
        this.props.navigation.navigate("");
        return true;
    }

    updateAccount = async (value) => {
        Keyboard.dismiss();
        try {
            Alert.alert(
                UPDATE_ACCOUNT_TITLE,
                UPDATE_ACCOUNT_SUBTITLE,
                [
                    {text: CANCEL, onPress: () => {} },
                    {text: OK, onPress: async () => {
                        let result = await submitUpdateAccount(value);
                        if (result instanceof SubmissionError) {
                            throw result;
                        }

                        if (result) {
                            this.props.navigation.navigate(MAIN_WALLET_SCREEN);
                        }
                    }},
                ],
                { cancelable: false }
            )
        } catch (err) {
            console.log(err);
            if (err instanceof SubmissionError) {
                throw err;
            }
        }
    }

    cancel = () => {
        Keyboard.dismiss();
        this.props.navigation.navigate(MAIN_WALLET_SCREEN);
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
        return <Container style={registerStyle.parent}>
                    <HeaderDetailsComponent walletName={MY_ACCOUNT} navigation={this.props.navigation} backPage={MAIN_WALLET_SCREEN}/>
                    <Content>
                        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style={registerStyle.parentView}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={registerStyle.parentView}>
                                
                                    <Field name="email" keyboardType="email-address" label="Email *" component={renderInputField} style={registerStyle._input} validate={[required, email, minLength6, maxLength50]}/>
                                    <Field name="phone" keyboardType="numeric" label="Số điện thoại *" component={renderInputField} style={registerStyle._input} validate={[required, minLengthPhone, maxLengthPhone, number]}/>
                                    <Field name="fullname" keyboardType="default" label="Họ tên *" component={renderInputField} style={registerStyle._input} validate={[required, minLength6, maxLength50]}/>
                                    <View style={{height: 50}}>
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
                                    </View>
                                    <Field name="address" keyboardType="default" label="Địa chỉ *" component={renderInputField} style={registerStyle._input} validate={[required]}/>
                                    <Field name="hiddenField" keyboardType="default" label="hiddenField" component={renderInputField} style={registerStyle.hidden_input}/>
                           
                                    <View style={registerStyle.pointView}>
                                        <Text>
                                            <Text style={registerStyle.pointLabel}>{RANKING} </Text>
                                            <Text style={registerStyle.pointValue}>Vàng</Text>
                                        </Text>
                                        <Text>
                                            <Text style={registerStyle.pointLabel}>{TOTAL_POINT} </Text>
                                            <Text style={registerStyle.pointValue}>{this.state.point}</Text>
                                        </Text>
                                        <Text>
                                            <Text style={registerStyle.pointLabel}>{USED_POINT} </Text>
                                            <Text style={registerStyle.pointValue}>{this.state.points_used}</Text>
                                        </Text>
                                    </View>
                                    {submitting ? <ActivityIndicator size="large" color={MAIN_TEXT_COLOR} /> :
                                        <View style={registerStyle.viewButton}>
                                            <Button
                                                style={registerStyle.btnRegister}
                                                containerStyle={registerStyle.btnRegisterCustom}
                                                onPress={handleSubmit(this.updateAccount)}
                                            > { SAVE } </Button>
                                            <Button
                                                style={registerStyle.btnRegister}
                                                containerStyle={registerStyle.btnCancelCustom}
                                                onPress={this.cancel}
                                            > { CANCEL } </Button>
                                        </View>}
                                </View>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
                    </Content>
                </Container>
    }
}

export default MyAccountComponent = reduxForm({
    form: "editAccount"
})(MyAccountComponent);