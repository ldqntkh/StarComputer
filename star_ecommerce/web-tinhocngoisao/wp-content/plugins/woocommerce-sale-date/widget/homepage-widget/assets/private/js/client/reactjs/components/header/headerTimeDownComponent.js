import React, {Component} from 'react';
import { Minimatch } from 'minimatch';


export default class HeaderTimeDownComponent extends Component {

    // component nhan tham so dau vao la blocktime
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var currentTime = new Date();
        let block_time_data = this.props.time_down_data;
        let hours = currentTime.getHours();
        let minutes = 59 - currentTime.getMinutes();
        let seconds = 59 - currentTime.getSeconds();
        if (block_time_data.block_time> 24) {
            if (hours < block_time_data.current_block_time) {
                hours = block_time_data.block_time - 24 - hours - 1;
            } else {
                hours = block_time_data.block_time - hours - 1;
            }
        }
        else hours = block_time_data.block_time - hours - 1;

        this.setState({
            timeNow : {
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            }
        });
    }

    componentDidMount() {
        this.interval  = setInterval(this.timerTick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timerTick = ()=> {
        var timeNow = this.state.timeNow;
        if (timeNow !== null) {
            var seconds = timeNow.seconds - 1,
            minutes = timeNow.minutes,
            hours = timeNow.hours;
            // if (seconds == 0 ) {
            //     this.props.SetBlockTimeActive({
            //         "block_active" : this.props.next_block_active,
            //         "next_block_active" : null,
            //         "time_down_data" : null
            //     });
            // }
            if (seconds < 0) {
                seconds = 59;
                minutes = minutes - 1;
                if (minutes < 0) {
                    minutes = 59;
                    hours = hours - 1;
                    if (hours < 0) hours = 23;
                }
            }
            let data = {
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            };
            this.setState({
                timeNow : data
            });
        }
    }

    render() {
        var timeNow = this.state.timeNow;
        if (timeNow == null) return null;
        return(
            <div className="block-time-down">
                <span className="hours">{ timeNow.hours >= 10 ? '' : '0' }{timeNow.hours}</span>
                <span className="minutes">{ timeNow.minutes >= 10 ? '' : '0' }{timeNow.minutes}</span>
                <span className="seconds">{ timeNow.seconds >= 10 ? '' : '0' }{timeNow.seconds}</span>
            </div>
        );
    }
}