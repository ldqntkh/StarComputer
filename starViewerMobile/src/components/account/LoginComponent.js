
import React, { PureComponent } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import {
    Container, Content, Icon
} from 'native-base'
import Button from 'react-native-button';
import {Field, reduxForm, SubmissionError} from 'redux-form';

// import container
import CoinPriesContainer from '../../containers/main/coinsprices/coinsPriceContainer';

// import const
import {renderInputLoginField} from '../../const/inputFields'
import {
    submitLoginForm
} from '../../const/submitForm';

// import style
import {loginStyle} from '../../styleSheets/account/loginStyle';
import { MAIN_TEXT_COLOR } from '../../styleSheets/const/variable';

// import validator
import { 
    email, maxLength, minLength, number, required
} from '../../validator/validationFields';

// import variable
import {
    ACCOUNT_LOGIN,
    URL_MAIN_PAGE,
    USER_PERMISSIONS,
    FB_USER_FIELDS,
    FB_API_URL
} from '../../const/variable';
import {
    FORGOT_PASSWORD, LOG_IN, REGISTER, SOCIAL_LOGIN_WITH_BTN, SOCIAL_FB_LOGIN
} from '../../const/variableLabel';
import {
    MAIN_WALLET_SCREEN, REGISTER_SCREEN, FORGOT_PASSWORD_SCREEN
} from '../../const/variableScreen'

// import lib
import crypto from '../../package/crypto';

const maxLength50 = maxLength(50);
const minLength6 = minLength(6);
const uri = URL_MAIN_PAGE;
const appID = '1017059581804224';
const logintype = 'facebook';
class LoginComponent extends PureComponent {

    static navigationOptions = {
        headerStyle: {
          display: 'none' 
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            logged: true
        }
    }

    componentWillUnmount() {
        this.setState = undefined;
    }

    async componentDidMount() {
        try {
            //await AsyncStorage.clear();
            let account_login = await AsyncStorage.getItem(ACCOUNT_LOGIN);
            if (account_login) {
                let accountdata = JSON.parse(account_login);
                if (await submitLoginForm(accountdata)) {
                    this.props.navigation.navigate(MAIN_WALLET_SCREEN);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    openWebLink = () => {
        Linking.canOpenURL(uri).then(supported => {
            if (supported) {
              Linking.openURL(uri);
            } else {
              console.log("Don't know how to open URI: " + uri);
            }
        });
    }

    login = async value => {
        Keyboard.dismiss();
        // check value before navigate to main screen
        try {
            let result = await submitLoginForm(value);
            if(result instanceof SubmissionError)  throw result;
            if (result) {
                this.props.initialize({ 
                    email: "",
                    password: ""
                });
                this.props.navigation.navigate(MAIN_WALLET_SCREEN);
            }
        } catch (err) {
            console.log(err);
            if(err instanceof SubmissionError)  throw err
        }
    }

    register = () => {
        Keyboard.dismiss();
        this.props.navigation.navigate(REGISTER_SCREEN);
    }

    forgotPassword = ()=> {
        Keyboard.dismiss();
        this.props.navigation.navigate(FORGOT_PASSWORD_SCREEN);
    }

    loginFB = async () => {
        try {
            let account_login = await AsyncStorage.getItem(ACCOUNT_LOGIN);
            if (account_login === null) {
                const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appID, {
                    permissions: USER_PERMISSIONS.split(','),
                });
                if (type === 'success') {
                    // Get the user's name using Facebook's Graph API
                    const response = await fetch(
                    FB_API_URL + `/me?access_token=${token}&fields=` + FB_USER_FIELDS);
                    const responseJson = await response.json();

                    let userFacebook = {
                        email: responseJson.email,
                        logintype: logintype
                    };
                    let result = await submitLoginForm(userFacebook);
                    if(result instanceof SubmissionError) {
                        this.props.navigation.navigate(REGISTER_SCREEN, {isLoggedFb: true, email: responseJson.email, logintype: logintype});
                    } else {
                        this.props.navigation.navigate(MAIN_WALLET_SCREEN);
                    }
                }
            }
        } catch(err) {
            console.log(err);
        }
    }

    render () {
        const {handleSubmit, submitting} = this.props;
        let screen = null;
        if (!this.state.logged) {
            screen = <View style={loginStyle.parentViewLoading}>
                        <Image source={require('../../../public/images/loading.gif')}
                          style={{width: 100, height: 90}} />
                    </View>
        } else {
            screen = <Container>
                        <Content>
                            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style={ loginStyle.parentView }>
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                    <View style={ loginStyle.parentView }>
                                        <Image source ={ require('../../../public/images/logo.png') } style={ loginStyle.logo_image }/>
                                        <TouchableOpacity onPress={ this.openWebLink }>
                                            <Text style={ loginStyle.url }> {uri} </Text>
                                        </TouchableOpacity>
                                        <View>
                                            <Field name="email" keyboardType="email-address" label="Email *" component={renderInputLoginField} style={loginStyle.email_input} validate={[required, email, minLength6, maxLength50]}/>
                                            <Field name="password" keyboardType="default" label="Mật khẩu *" component={renderInputLoginField} style={loginStyle.email_input} validate={[required, minLength6, maxLength50]} secureTextEntry={true}/>
                                            <Field name="hiddenField" keyboardType="default" label="hiddenField" component={renderInputLoginField} style={loginStyle.hidden_input}/>
                                        </View>
                                        <TouchableOpacity onPress={ this.forgotPassword }>
                                            <Text style={ loginStyle.forgotPassword }> { FORGOT_PASSWORD } </Text>
                                        </TouchableOpacity>
                                        {submitting ? <ActivityIndicator size="large" color={MAIN_TEXT_COLOR} />:
                                            <View style={loginStyle.viewButtonLogin}>
                                                <Button ref={component => this.touchable = component}
                                                    style={ loginStyle.btnLogin } 
                                                    containerStyle={ loginStyle.btnLoginCustom }
                                                    onPress = { handleSubmit(this.login) }
                                                > { LOG_IN } </Button>

                                                <Button 
                                                    style={ loginStyle.btnLogin } 
                                                    containerStyle={ loginStyle.btnRegisterCustom }
                                                    onPress = { this.register }
                                                > { REGISTER } </Button>
                                            </View>
                                        }
                                        <View style={ loginStyle.socialContainer }>
                                            <Text style={ loginStyle.socialTitle }>{SOCIAL_LOGIN_WITH_BTN}</Text>
                                            <Button 
                                                style={ {color: MAIN_TEXT_COLOR} } 
                                                containerStyle={ loginStyle.socialButtonContainer }
                                                onPress = { this.loginFB }
                                            >
                                                <Icon name="facebook-f" type="FontAwesome" style={ loginStyle.socialIcon }/>
                                                <Text style={ loginStyle.socialButtonText }>{SOCIAL_FB_LOGIN}</Text>
                                            </Button>
                                        </View>
                                        <View style={ loginStyle.coinprices }>
                                            <CoinPriesContainer dataCoinsPrice={this.props.dataCoinsPrice}/>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </KeyboardAvoidingView>
                        </Content>
                    </Container>
        }
        return (
            screen
        );
    }
}

export default LoginComponent = reduxForm({
    form: "login"
})(LoginComponent);