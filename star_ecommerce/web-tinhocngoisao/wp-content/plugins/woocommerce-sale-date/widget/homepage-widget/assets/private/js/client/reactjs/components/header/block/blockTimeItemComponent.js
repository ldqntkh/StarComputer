import React, {Component} from 'react';


export default class BlockTimeItemComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let valueProp = this.props;
        let activeBlock = '';
        let classActive = 'active';
        if (valueProp.active) {
            activeBlock = <span className="active-time">Đang diễn ra</span>;
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

        return (
            <div className={"block-time-item " + classActive}>
                <span className="time">
                    {valueProp.block_time} : 00
                </span>
                {activeBlock}
            </div>
        )
    }
}