import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import WalletBalanceContainer from '../../../containers/main/wallet/walletBalanceContainer';
import MainWorkersComponent from '../worker/mainWorkerComponent';
import ProductListPageContainer from '../../../containers/main/shop/productListPageContainer';

const BottomTabNavigator = createBottomTabNavigator({
    WalletBalance: {
        screen: WalletBalanceContainer
    },
    MainWorkers: {
        screen: MainWorkersComponent
    },
    Shop : {
        screen: ProductListPageContainer
    }
});


class WalletItemDetailsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = params.walletName;
        return {
            headerTitle
        }
    }
    
    constructor(props) {
        super(props);
    }

    functionClick() {

    }

    componentDidMount() {
        // set param to call in navigation
        // this.props.navigation.setParams({
        //     functionClick: this.functionClick.bind(this)
        // });
    }

    // render tab navigation
    // wallet balance, earning, workers

    render () {
        return (
            <BottomTabNavigator screenProps={{
                walletId: this.props.navigation.state.params.walletId, 
                walletName: this.props.navigation.state.params.walletName,
                poolService: this.props.navigation.state.params.poolService,
                mainNavigate: this.props.navigation}}/>
        );
    }
}

export default WalletItemDetailsComponent