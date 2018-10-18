import React, {Component} from 'react';

export default class ProductTimeDownComponent extends Component {

    // component nhan tham so dau vao la blocktime
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setTimeDown();
    }

    componentDidMount() {
        this.interval  = setInterval(this.timerTick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setTimeDown = () => {
        var currentTime = new Date();
        let block_time_data = this.props.sale_end_time - 1;
        let hours = block_time_data - currentTime.getHours();
        let minutes = 59 - currentTime.getMinutes();
        let seconds = 59 - currentTime.getSeconds();

        this.setState({
            timeNow : {
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            }
        });
    }

    timerTick = ()=> {
        var timeNow = this.state.timeNow;
        if (timeNow !== null) {
            var seconds = timeNow.seconds - 1,
            minutes = timeNow.minutes,
            hours = timeNow.hours;
            if (seconds < 0) {
                seconds = 59;
                minutes = minutes - 1;
                if (minutes < 0) {
                    minutes = 59;
                    hours = hours - 1;
                    if (hours < 0) {
                        clearInterval(this.interval);
                    }
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
                <i className="fa fa-clock-o"></i>
                <span className="hours">{ timeNow.hours >= 10 ? '' : '0' }{timeNow.hours}</span>
                <span>:</span>
                <span className="minutes">{ timeNow.minutes >= 10 ? '' : '0' }{timeNow.minutes}</span>
                <span>:</span>
                <span className="seconds">{ timeNow.seconds >= 10 ? '' : '0' }{timeNow.seconds}</span>
            </div>
        );
    }
}