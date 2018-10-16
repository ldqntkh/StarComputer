import React, {Component} from 'react';

import {
    _Emit_AdminRequestListArduino,
    _On_ServerReceiveListArduino,
    _On_ServerReceiveArduinoItem
} from '../../lib/socketArduino';

// import component
import ItemArduinoComponent from './itemArduinoComponent';

export default class BodyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listArduinoConnected : []
        }
    }

    componentDidMount() {
        _Emit_AdminRequestListArduino();
        _On_ServerReceiveListArduino((err, data) => {
            if (err) throw err;
            if (data.hasOwnProperty('errMsg')) {
                alert(data.errMsg);
            } else {
                this.setState({
                    listArduinoConnected : data
                })
            }
        });
        _On_ServerReceiveArduinoItem((err, data)=> {
            console.log(data);
        });
    }


    render() {
        // render list arduino
        let {listArduinoConnected} = this.state;
        if (listArduinoConnected.length == 0) return null;
        
        let listArduinos = [];
        for (let index in listArduinoConnected) {
            listArduinos.push(<ItemArduinoComponent key={index} arduinoItem={listArduinoConnected[index]} />);
        }

        return (
            <div className="body-list-arduino">
                { listArduinos }
            </div>
        );
    }
}