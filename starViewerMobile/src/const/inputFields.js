import React from 'react'
import {
    View,
    TextInput,
    Text
} from 'react-native';
import {
    Picker
} from 'native-base';

import {
    Item, Input, Icon, Label
} from 'native-base';

// import style
import { MAIN_TEXT_COLOR } from '../styleSheets/const/variable';

const renderInputField = ({label, keyboardType, secureTextEntry, style, styleItem, meta: {touched, error, warn}, input:{onChange, ...restInput} }) => {
    let result = null;
    if (label == "hiddenField") {
        result = <TextInput style={style}/>
    }
    else {
        let inputFiel = <TextInput placeholder={label} style={style}
                            autoCapitalize="none"
                            keyboardType={keyboardType}
                            placeholderTextColor='white'
                            secureTextEntry={secureTextEntry}
                            underlineColorAndroid="transparent"
                            onChange={onChange} {...restInput}
                        />
        let icon = null;
        switch (restInput.name) {
            case "email":
                icon = <Icon name="md-mail" style={ {color: MAIN_TEXT_COLOR} }></Icon>;
                break;
            case "password":case "passwordconfirm":
                icon = <Icon name="md-key" style={ {color: MAIN_TEXT_COLOR} }></Icon>;
                break;
            case "phone":
                icon = <Icon name="md-phone-portrait" style={ {color: MAIN_TEXT_COLOR} }></Icon>;
                break;
            case "fullname":
                icon = <Icon name="md-person" style={ {color: MAIN_TEXT_COLOR} }></Icon>;
                break;
            case "Token *":
                icon = <Icon name="md-lock" style={ {color: MAIN_TEXT_COLOR} }></Icon>
                break;
            case "address":
                icon = <Icon name="md-locate" style={ {color: MAIN_TEXT_COLOR} }></Icon>
                break;
        }
        if (touched && error) {
            result = <Item rounded error style={styleItem ? styleItem : {width:320}}>
                        {icon}
                        {inputFiel}
                    </Item>
        } else {
            result = <Item rounded style={styleItem ? styleItem : {width:320}}>
                        {icon}
                        {inputFiel}
                    </Item>
        }
    }
    return (
        <View style={{marginTop: 10}}>
            { result }
            {touched && ((error && <Text style={{color: 'red'}}>{error}</Text>) ||
                        (warn && <Text style={{color: 'yellow'}}>{warn}</Text>)) }
        </View>
    );
}


const renderInputLoginField = ({label, keyboardType, secureTextEntry, name, style, meta: {touched, error, warn}, input:{onChange, ...restInput} }) => {
    let result = null;
    if (label == "hiddenField") {
        result = <TextInput style={style}/>
    }
    else {
        inputFiel = <TextInput placeholder={label} style={style}
                            autoCapitalize="none"
                            keyboardType={keyboardType}
                            placeholderTextColor='white'
                            underlineColorAndroid="transparent"
                            secureTextEntry={secureTextEntry}
                            onChange={onChange} {...restInput}
                        />
        if (touched && error) {
            result = <Item rounded error style={{width:320}}>
                        {label == "Email *"? <Icon name="md-contact"></Icon> : <Icon name="md-key"></Icon>}
                        {inputFiel}
                    </Item>
        } else {
            result = <Item rounded style={{width:320}}>
                        {label == "Email *"? <Icon style={{color:'#F2F6F2'}} name="md-contact"></Icon> : <Icon style={{color:'#F2F6F2'}} name="md-key"></Icon>}
                        {inputFiel}
                    </Item>
        }
    }
    return (
        <View style={{marginTop: 15}}>
            { result }
            {touched && ((error && <Text style={{color: 'red'}}>{error}</Text>) ||
                        (warn && <Text style={{color: 'yellow'}}>{warn}</Text>)) }
        </View>
    );
}

const renderPicker = ( { input: { onChange, value, ...inputProps }, meta: {touched, error, warn}, children, ...pickerProps, style, viewStyle,iosHeader } ) => {
    let result = null;
    let inputField = null;
    inputField = <Picker
                    mode="dropdown"
                    iosHeader={iosHeader}
                    iosIcon={<Icon name="arrow-dropdown-circle"
                        style={{ color: "#007aff", fontSize: 25 }} />}
                    style={[style]}
                    textStyle={ {color: MAIN_TEXT_COLOR} }
                    selectedValue= { value }
                    onValueChange={ value => onChange(value)}
                    { ...inputProps }
                    { ...pickerProps }
                >
                    { children }
                </Picker>
    return (
        <View>
            <View style={viewStyle}>
                { inputField }
            </View>
            { touched && ((error && <Text style={{color: 'red'}}>{error}</Text>) ||
            (warn && <Text style={{color: 'yellow'}}>{warn}</Text>)) }
        </View>
    );
};

export {
    renderInputField,
    renderInputLoginField,
    renderPicker
}