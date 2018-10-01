import React, {Component} from 'react';


export default class BlockTimeItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    blockClick = ()=> {
        let {
            block_active,
            block_active_click,
            data_block,
            block_time
        } = this.props;

        let block_time_01 = data_block['block_01']['block_time'],
            block_time_02 = data_block['block_02']['block_time'],
            block_time_03 = data_block['block_03']['block_time'],
            block_time_04 = data_block['block_04']['block_time'],
            block_time_05 = data_block['block_05']['block_time'];
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
        
        let end_block_time = 0;
        for(let item = 0; item < arr_block.length; item++ ) {
            if (block_time == arr_block[item]) {
                if (item == arr_block.length -1) end_block_time = arr_block[0];
                else end_block_time = arr_block[item+1];
                break;
            }
        }
        
        this.props.SetBlockActiveClick({
            "block_active_click" : block_time,
            "end_block_time" : end_block_time
        });
    }

    render() {
        let valueProp = this.props;
        let activeBlock = '';
        let classActive = '';
        if (valueProp.block_active == valueProp.block_time) {
            activeBlock = <span className="active-time">Đang diễn ra</span>;
            classActive = 'active';
        } else {
            let b_time_1 = 24 - valueProp.active_block_time;
            let b_time_2 = 24 - valueProp.block_time;
            if (b_time_2 < b_time_1) {
                activeBlock = <span className="active-time">Sắp diễn ra</span>;
            } else {
                activeBlock = <span className="active-time">Ngày mai</span>;
            }
            classActive = '';
        }

        if (typeof valueProp.block_active_click != 'undefined') {
            if (valueProp.block_active_click == valueProp.block_time) classActive = 'active';
            else classActive = '';
        }

        return (
            <div className={"block-time-item " + classActive} onClick={()=>this.blockClick()}>
                <span className="time">
                    {valueProp.block_time} : 00
                </span>
                {activeBlock}
            </div>
        )
    }
}