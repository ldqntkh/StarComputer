import React, {Component} from 'react';
import HeaderComponent from './header/headerComponent';
import DisplayOptionOneComponent from './body/display/displayOptionOneComponent';
import DisplayOptionTwoComponent from './body/display/DisplayOptionTwoComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        product_widget_custom[this.props.id]['id'] = this.props.id;
        console.log(product_widget_custom[this.props.id])
    }

    render() {
        let {
            title, description,
            display_option, display_data
        } = product_widget_custom[this.props.id];
        let displayBody = null;
        switch(display_option) {
            case 1:
                displayBody = <DisplayOptionOneComponent {...product_widget_custom[this.props.id]}/>;
                break;
            case 2:
                displayBody = <DisplayOptionTwoComponent {...product_widget_custom[this.props.id]}/>;
                break;
        }
        return(
            <React.Fragment>
                <HeaderComponent title={title} description={description} display_option={display_option}/>
                {displayBody}
            </React.Fragment>
        )
    }
}

export default MainComponent;