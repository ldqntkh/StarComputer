import React, {Component} from 'react';

// import component
import HeaderTitleComponent from './headerTitleComponent';
import HeaderTimeDownComponent from './headerTimeDownComponent';
import MainBlockComponent from './block/mainBlockComponent';

export default class MainHeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    getBlockTimeIsActived = ()=> {
        var currentHours = new Date().getHours();
        var block_data = this.props.primetime_data;

        let block_time_01 = block_data['block_01']['block_time'],
            block_time_02 = block_data['block_02']['block_time'],
            block_time_03 = block_data['block_03']['block_time'],
            block_time_04 = block_data['block_04']['block_time'],
            block_time_05 = block_data['block_05']['block_time'];
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
            if (item == arr_block.length - 1) {
                return {
                    "block_time": 24 + arr_block[0],
                    "current_block_time" : arr_block[item]
                };
            }
            if (arr_block[item] <= currentHours && currentHours < arr_block[item + 1]) {
                return {
                    "block_time": arr_block[item + 1],
                    "current_block_time" : arr_block[item]
                };
            }
        }
    }

    render() {
        var primetime_data = this.props.primetime_data;
        let block_time_data = this.getBlockTimeIsActived()
        return(
            <div className="main-header">
                <HeaderTitleComponent title= {primetime_data.block_title}/>
                <HeaderTimeDownComponent block_time_data={block_time_data} />
                <MainBlockComponent block_data={primetime_data} />
            </div>
        );
    }
}