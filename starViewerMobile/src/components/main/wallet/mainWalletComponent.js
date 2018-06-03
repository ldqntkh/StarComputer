import React, { PureComponent } from 'react';
import {
    View,
    FlatList,
    Image,
    AsyncStorage
} from 'react-native';

import WalletItemComponent from './walletItemComponent';
import MainHeaderComponent from '../header/mainHeaderComponent';
import WalletModalComponent from '../modal/walletModalComponent';
import CoinPriesContainer from '../../../containers/main/coinsprices/coinsPriceContainer';
import ProductSlideShowContainer from '../../../containers/main/shop/productSlideShowContainer';

import {mainWalletStyle} from '../../../styleSheets/wallet/mainWalletStyle';
import {loginStyle} from '../../../styleSheets/account/loginStyle';

import {
    API_URL,
    KEY_USER_LOGIN
} from '../../../const/variable';

import {
    LOG_IN_SCREEN
} from '../../../const/variableScreen'

class MainWalletComponent extends PureComponent {
    static navigationOptions = {
        headerStyle: {
            //display: 'none' 
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            loadding: false
        }
    }

    showWalletModal = (item) =>{
        this.refs.WalletModalComponent.showModal(item);
    }

    hideWalletModal = () =>{
        this.refs.WalletModalComponent.hideModal();
    }

    getWallet = async() => {
        try {
            let user_login = await AsyncStorage.getItem(KEY_USER_LOGIN);
            user_login = JSON.parse(user_login);
            if (user_login) {
                // if (this.props.dataWallet && this.props.dataWallet.length > 0) {
                //     this.setState({
                //         loadding: true
                //     });
                // } else {
                    let customerId = user_login.customerid;
                    let response = await fetch(API_URL + 'wallets/wallet/' + customerId);
                    let dataJson = await response.json();
                    if (dataJson.errCode == 0) {
                        let data = dataJson.data;
                        let results = [];
                        for(let index in data) {
                            results.push({
                                walletId : data[index].walletid,
                                walletName : data[index].name,
                                poolService: data[index].poolservice,
                                id: data[index].id,
                                image : data[index].symbol ? {uri:data[index].symbol} : require('../../../../public/images/ethereum.png')
                            });
                        }
                        this.props.updateWalletData(results)
                        this.setState({
                            loadding: true
                        });
                    } else {
                        alert(dataJson.errMessage);
                    }
                //}
            } else {
                // navigate Login, clear all storage
                await AsyncStorage.clear();
                this.props.navigation.navigate(LOG_IN_SCREEN)
            }
        } catch (err) {
            console.log(err);
            // navigate Login, clear all storage
            await AsyncStorage.clear();
            this.props.navigation.navigate(LOG_IN_SCREEN)
        }
    }

    deleteWallet = walletId => {
        this.getWallet();
    }

    componentDidMount() {
        this.getWallet();
    }

    render () {
        let screen = null;
        if (!this.state.loadding) {
            screen = <View style={mainWalletStyle.parentViewLoading}>
                        <Image source={require('../../../../public/images/loading.gif')}
                          style={{width: 200, height: 150}} />
                    </View>
        } else {
            screen = <View style={ mainWalletStyle.parent }>
                            <MainHeaderComponent showWalletModal={this.showWalletModal} {...this.props}/>
                            <FlatList
                                data={ this.props.dataWallet }
                                renderItem={({item, index}) => <WalletItemComponent showWalletModal={this.showWalletModal} 
                                                                                    deleteWallet={this.deleteWallet} 
                                                                                    navigation={this.props.navigation}  
                                                                                    walletIndex={index} 
                                                                                    walletItem={item} />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <View style={ loginStyle.coinprices }>
                                <CoinPriesContainer dataCoinsPrice={this.props.dataCoinsPrice}/>
                            </View>
                            <ProductSlideShowContainer dataProducts={this.props.dataProducts} />
                            <WalletModalComponent 
                                ref="WalletModalComponent"
                                hideWalletModal={ this.hideWalletModal }
                                getWallet={ this.getWallet }
                            />
                        </View>
        }
        return (
            screen
        )
    }
}

export default MainWalletComponent