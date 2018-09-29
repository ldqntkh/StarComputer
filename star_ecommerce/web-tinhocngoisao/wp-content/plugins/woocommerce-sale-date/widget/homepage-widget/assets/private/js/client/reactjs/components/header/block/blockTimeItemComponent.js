import React, {Component} from 'react';


export default class BlockTimeItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    blockClick = ()=> {
        this.props.SetBlockActiveClick(this.props.block_time);
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