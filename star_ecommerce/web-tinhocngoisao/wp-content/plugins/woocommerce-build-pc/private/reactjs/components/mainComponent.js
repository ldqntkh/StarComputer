import React, {Component} from 'react';

// import container
import MainBodyContainer from '../containers/body/mainBodyContainer';
import HeaderContainer from '../containers/header/headerContainer';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (typeof product_types !== 'undefined') {
            this.props.InitDataProductType(product_types);
            
            if (localStorage.getItem('computer_building_data')) {
                this.props.InitComputerbuildingData(JSON.parse(localStorage.getItem('computer_building_data')));
            } else {
                let result = [];
                for(let index in product_types) {
                    switch(product_types[index].value) {
                    case "main":
                        result['main'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "cpu":
                        result['cpu'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "require-field" : product_types[index]["require-field"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "ram":
                        result['ram'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "require-field" : product_types[index]["require-field"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "ssd":
                        result['ssd'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "require-field" : product_types[index]["require-field"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "hdd":
                        result['hdd'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "optane":
                        result['optane'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "vga":
                        result['vga'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "power":
                        result['power'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "case":
                        result['case'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "radiator":
                        result['radiator'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "screen":
                        result['screen'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "keyboard":
                        result['keyboard'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "mouse":
                        result['mouse'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "headphone":
                        result['headphone'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    case "soundcase":
                        result['soundcase'] = {
                            "product" : null,
                            "quantity" : 1,
                            "require" : product_types[index].require,
                            "require-by" : product_types[index]["require-by"],
                            "link" : product_types[index].link
                        };
                        break;
                    }
                }
                this.props.InitComputerbuildingData(result);
            }
        }
    }

    render() {
        return(
            <React.Fragment>
                <HeaderContainer />
                <MainBodyContainer />
            </React.Fragment>
        );
    }
}