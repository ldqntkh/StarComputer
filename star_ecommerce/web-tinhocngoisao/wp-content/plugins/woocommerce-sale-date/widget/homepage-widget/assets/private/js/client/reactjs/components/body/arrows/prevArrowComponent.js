import React, {Component} from 'react';

export default class PrevArrowComponent extends Component {
    render() {
        return (
            <i
                className={this.props.className + ' fa fa-angle-left'}
                onClick={this.props.onClick}
            />
        );
    }
}