import React, {Component} from 'react';

export default class HeaderTitleComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var propsValue = this.props;
        return(
            <div className="header-title">
                <h2>{propsValue.title}</h2>
            </div>
        );
    }
}