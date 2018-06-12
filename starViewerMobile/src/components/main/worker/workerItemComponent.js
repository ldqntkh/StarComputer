import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

// import style
import { workerItemStyle } from '../../../styleSheets/worker/workerItemStyle';

// import variable
import {
    DISCONNECT
} from '../../../const/variableLabel';

class WorkerItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    gotoWorkerDetails = (workerItem) => {
        this.props.navigation.navigate("WorkerItemDetails", {workerId: workerItem.workerId, status: workerItem.status, workerName: workerItem.workerName});
    }

    render () {
        let workerItem = JSON.parse(this.props.workerItem);
        let imageSource = workerItem.status ? require('../../../../public/images/mining-animation.gif') : require('../../../../public/images/mining.png');
        return (
            <TouchableOpacity onPress={() => this.gotoWorkerDetails(workerItem)}>
                <View style={ workerItemStyle.parent }>
                    <View style={workerItemStyle.leftImage}>
                        <Image source={ imageSource } style={ workerItemStyle.imageWorker } />
                    </View>
                    { workerItem.status ? 
                        <View style={workerItemStyle.workerInfo}>
                            <Text style={ workerItemStyle.activeText }>{workerItem.workerName}</Text>
                            <Text style={ workerItemStyle.activeText }>{workerItem.hashrate.toFixed(2)} Mhz/s</Text>
                        </View> 
                        : <View style={workerItemStyle.workerInfo}>
                        <Text style={ workerItemStyle.inactiveText }> {DISCONNECT} </Text>
                            <Text style={ workerItemStyle.inactiveText }> {DISCONNECT} </Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

export default WorkerItemComponent