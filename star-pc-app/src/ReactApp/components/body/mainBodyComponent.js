import React, {Component} from 'react';
import PropTypes from 'prop-types'

import MyWalletContainer from '../../containers/body/myWallet/myWalletContainer';
import MyEarningContainer from '../../containers/body/myEarning/myEarningContainer';
import MyBitboxContainer from '../../containers/body/myBitbox/myBitboxContainer';
import SettingComponent from './setting/settingComponent';

var interval = null;
class MainBodyComponent extends Component {

    constructor(props) {
        super(props);

        this.toggleScreen = this.toggleScreen.bind(this);
    }

    toggleScreen (screen) {
        this.props.toggleScreen(screen);
    }

    render() {
        let mainScreen = null;
        let screen = this.props.screen;
        switch(this.props.screen) {
            case 'mywallet': mainScreen = <MyWalletContainer />; break;
            case 'myearning': mainScreen = <MyEarningContainer />; break;
            case 'mybitbox': mainScreen = <MyBitboxContainer />; break;
            case 'setting': mainScreen = <SettingComponent />; break;
        }
        clearInterval(interval);

        // if (this.props.screen != 'setting') {
        //     let screen = '';
        //     if (this.props.screen == 'mywallet') screen = 'myearning'
        //     if (this.props.screen == 'myearning') screen = 'mybitbox'
        //     if (this.props.screen == 'mybitbox') screen = 'mywallet'
        //     interval = setInterval(() => {
        //         this.toggleScreen(screen);
        //     }, 60000);
        // }

        return (
            <main>
                <div className="dv-ft-button left-bar">
                    <div className={screen == 'mywallet' ? 'dv-row active' : 'dv-row'} onClick={()=> this.toggleScreen('mywallet')}>
                        <img src="../public/images/wallet.png"/>
                    </div>
                    <div className={screen == 'myearning' ? 'dv-row active' : 'dv-row'} onClick={()=> this.toggleScreen('myearning')}>
                        <img src="../public/images/earning.png"/>
                    </div>
                    <div className={screen == 'mybitbox' ? 'dv-row active' : 'dv-row'} onClick={()=> this.toggleScreen('mybitbox')}>
                        <img src="../public/images/box.png"/>
                    </div>
                    <div className={screen == 'setting' ? 'dv-row active' : 'dv-row'} onClick={()=> this.toggleScreen('setting')}>
                        <img src="../public/images/setting.png"/>
                    </div>
                </div>
                {mainScreen}
            </main>
        )
    }
}

export default MainBodyComponent;