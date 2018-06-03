import React, {Component} from 'react';
import { createDrawerNavigator } from 'react-navigation';

// import component
import RegisterComponent from '../components/account/RegisterComponent';
import ForgotPasswordComponent from '../components/account/ForgotPasswordComponent';
import MyAccountComponent from '../components/account/myAccountComponent';
import ChangePasswordComponent from '../components/account/ChangePasswordComponent';
import WalletItemDetailsComponent from '../components/main/wallet/walletItemDetailComponent';
import PriceExchangeComponent from '../components/main/coinsprices/priceExchangeComponent';
import DrawerContent from '../components/main/drawer/mainListItemDrawer';

// import container
import LoginContainer from '../containers/account/loginContainer';
import MainWalletContainer from '../containers/main/wallet/mainWalletContainer';
import ProductListPageContainer from '../containers/main/shop/productListPageContainer';

// import variable
import {
    LOG_IN_SCREEN
} from '../const/variableScreen';

let drawerScreen = {
    Login : {
        screen : LoginContainer
    },
    Register : {
        screen : RegisterComponent
    },
    ForgotPassword : {
        screen : ForgotPasswordComponent
    },
    MyAccount : {
        screen : MyAccountComponent
    },
    ChangePassword : {
        screen : ChangePasswordComponent
    },
    CoinMarket : {
        screen : PriceExchangeComponent
    },
    MainWallet: {
        screen: MainWalletContainer,
    },
    WalletItemDetails: {
        screen: WalletItemDetailsComponent,
    },
    Shop: {
        screen: ProductListPageContainer
    }
}

let drawerConfig = {
    initialRouteName: LOG_IN_SCREEN,
    contentComponent:({navigation})=> <DrawerContent navigation={navigation} routes={drawerScreen} />,
    drawerWidth: 300
}

let MainDrawerNavigation = createDrawerNavigator(drawerScreen, drawerConfig);
export default MainDrawerNavigation;