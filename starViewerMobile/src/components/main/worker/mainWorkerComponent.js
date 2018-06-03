import React, { Component } from 'react';
import {
    Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// import component
import ListWorkersComponent from './listWorkerComponent';

// import container
import WorkerItemDetailsContainer from '../../../containers/main/worker/workerItemDetailsContainer';

const StackNavigator = createStackNavigator(
    {
        ListWorker: {
            screen: ListWorkersComponent,
        },
        WorkerItemDetails: {
            screen: WorkerItemDetailsContainer,
        },
    },
    {
        initialRouteName: 'ListWorker',
    }
);

class MainWorkersComponent extends Component {

    static navigationOptions = {
        tabBarIcon : () => {
            return <Image source={require('../../../../public/images/box.png')}
                          style={{width: 25, height: 25}} />
        }
    };

    render () {
        return (
            <StackNavigator screenProps={
                {
                    walletId: this.props.screenProps.walletId, 
                    walletName: this.props.screenProps.walletName,
                    mainNavigate: this.props.screenProps.mainNavigate
                }
            }/>
        );
    }
}

export default MainWorkersComponent