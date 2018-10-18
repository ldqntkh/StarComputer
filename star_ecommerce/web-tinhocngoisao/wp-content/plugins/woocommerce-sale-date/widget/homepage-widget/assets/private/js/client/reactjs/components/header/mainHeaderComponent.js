import React, {Component} from 'react';

// import component
import HeaderTitleComponent from './headerTitleComponent';

// import container
import HeaderTimeDownContainer from '../../containers/header/headerTimeDownContainer';
import MainBlockContainer from '../../containers/header/block/mainBlockContainer';
var block_time = 0;
export default class MainHeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getBlockTimeIsActived();
    }

    getBlockTimeIsActived = ()=> {
        let {
            SetBlockTimeActive,
            data_block
        } = this.props;
        if (data_block != null) {
            var currentHours = new Date().getHours();

            let block_time_01 = data_block['block_01']['block_time'],
                block_time_02 = data_block['block_02']['block_time'],
                block_time_03 = data_block['block_03']['block_time'],
                block_time_04 = data_block['block_04']['block_time'],
                block_time_05 = data_block['block_05']['block_time'];
            let arr_block = [];

            if (typeof block_time_01 !== undefined && parseInt(block_time_01) > 0) {
                arr_block.push(parseInt(block_time_01));
            }
            if (typeof block_time_02 !== undefined && parseInt(block_time_02) > 0) {
                arr_block.push(parseInt(block_time_02));
            }
            if (typeof block_time_03 !== undefined && parseInt(block_time_03) > 0) {
                arr_block.push(parseInt(block_time_03));
            }
            if (typeof block_time_04 !== undefined && parseInt(block_time_04) > 0) {
                arr_block.push(parseInt(block_time_04));
            }
            if (typeof block_time_05 !== undefined && parseInt(block_time_05) > 0) {
                arr_block.push(parseInt(block_time_05));
            }
            
            for(let item = 0; item < arr_block.length; item++ ) {
                // dispatch block active
                if (item == arr_block.length - 1) {
                    SetBlockTimeActive({
                        "block_active" : arr_block[item],
                        "next_block_active" : arr_block[0],
                        "end_block_time" : arr_block[0],
                        "time_down_data" : {
                                                "block_time": 24 + arr_block[0],
                                                "current_block_time" : arr_block[item]
                                            }
                    });
                    block_time = 24 + arr_block[0];
                    return;
                }
                else if (arr_block[item] <= currentHours && currentHours < arr_block[item + 1]) {
                    SetBlockTimeActive({
                        "block_active" : arr_block[item],
                        "next_block_active" : arr_block[item + 1],
                        "end_block_time" : arr_block[item + 1],
                        "time_down_data" : {
                                                "block_time": arr_block[item + 1],
                                                "current_block_time" : arr_block[item]
                                            }
                    });
                    block_time = arr_block[item + 1];
                    return;
                }
            }
        }
    }

    render() {
        var data_block = this.props.data_block;
        if (data_block == null) return null;
        return(
            <div className="main-header">
                
            </div>
        );
    }
}