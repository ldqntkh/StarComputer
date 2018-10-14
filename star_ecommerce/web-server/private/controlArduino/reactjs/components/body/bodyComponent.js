import React, {Component} from 'react';

import {
    _Emit_AdminRequestListArduino,
    _On_ServerReceiveListArduino
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
            this.setState({
                listArduinoConnected : data.arrSocketArduinos
            })
        })
    }


    render() {
        // render list arduino
        let {listArduinoConnected} = this.state;
        console.log(listArduinoConnected);
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