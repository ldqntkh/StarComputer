import React, {Component} from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            title, description, display_option
        } = this.props;
        return(
            <div className="at-cat-color-wrap-15">
                <div className="at-title-action-wrapper clearfix">
                    <h2 className="widgettitle">
                        {title}
                        { display_option !== 1 && <span className="at-action-wrapper">
                            <a href="#" className="all-link">Xem thêm</a>
                        </span>
                        }
                        <span className="wg-description">{description}</span>
                    </h2>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;