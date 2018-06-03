import React, {Component} from 'react';
import {
    Container, Content, Header, Left, Body, Right, Button, Icon, Title
} from 'native-base';
import {
    StyleSheet
} from 'react-native';
export default class HeaderDetailsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Header style={headerStyle.header}>
                <Button style={headerStyle.buttonBack} transparent onPress={
                    () => {
                        try {
                            if(this.props.backPage === null) {
                                this.props.navigation.goBack();
                            }
                            else this.props.navigation.navigate(this.props.backPage)
                        } catch (err) {
                            console.log(err.message);
                        }
                    }
                }>
                    <Icon style={headerStyle.iconBack} name='arrow-back'/>
                </Button>
                <Body style={headerStyle.headerBody}>
                    <Title style={headerStyle.titleText}>{ this.props.walletName }</Title>
                </Body>
            </Header>
        );
    }
}

const headerStyle = StyleSheet.create({
    header: {
        backgroundColor: 'black'
    },
    headerBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonBack : {
        width: 50
    },
    iconBack : {
        width: 30
    },
    titleText : {
        color:'white', 
        textAlign:'left'
    }
})