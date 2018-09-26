import React, {Component} from 'react';

// import component
import BlockTimeItemComponent from './blockTimeItemComponent';

export default class MainBlockComponent extends Component{

    constructor(props) {
        super(props);
    }

    renderBlockTime = ()=> {
        let block_data = this.props.block_data;
        let currentHours = new Date().getHours();
        var results = [];

        let block_time_01 = block_data['block_01']['block_time'],
            block_time_02 = block_data['block_02']['block_time'],
            block_time_03 = block_data['block_03']['block_time'],
            block_time_04 = block_data['block_04']['block_time'],
            block_time_05 = block_data['block_05']['block_time'];
        let arr_block = [];

        if (typeof block_time_01 !== undefined && block_time_01 > 0) {
            arr_block.push(block_time_01);
        }
        if (typeof block_time_02 !== undefined && block_time_02 > 0) {
            arr_block.push(block_time_02);
        }
        if (typeof block_time_03 !== undefined && block_time_03 > 0) {
            arr_block.push(block_time_03);
        }
        if (typeof block_time_04 !== undefined && block_time_04 > 0) {
            arr_block.push(block_time_04);
        }
        if (typeof block_time_05 !== undefined && block_time_05 > 0) {
            arr_block.push(block_time_05);
        }

        var activeBlock = 0;
        for(let item = 0; item < arr_block.length; item++ ) {
            if (activeBlock == 0 && item == arr_block.length - 1) activeBlock = item;
            if (arr_block[item] <= currentHours && currentHours < arr_block[item + 1]) {
                activeBlock = item;
                break;
            }
        }

        for(let index = activeBlock; index < arr_block.length; index++ ) {
            if (index == activeBlock) {
                results.push( <BlockTimeItemComponent block_time={arr_block[index]} active={true} active_block_time={arr_block[activeBlock]} key={index}/> );
            } else {
                results.push( <BlockTimeItemComponent block_time={arr_block[index]} active={false} key={index}/> );
            }
        }

        for(let index = 0; index < activeBlock; index++ ) {
            results.push( <BlockTimeItemComponent block_time={arr_block[index]} active={false} active_block_time={arr_block[activeBlock]} key={index}/> );
        }

        return results;
    }

    render() {
        return(
            <div className="block-time-items">
                {this.renderBlockTime()}
            </div>
        );
    }
}