import React, {Component} from 'react';


class ListAttributeComponent extends Component {
    render() {
        return(
            <div className="list-attris">
                
            </div>
        );
    }
}


// create container
import { connect } from 'react-redux';

// import {
//     ToogleModalChooseProduct
// } from '../../../reactjs/action/actionFunction';

const mapStateToProps = state => ({
    //action_value : state.ActionReducer
});

const mapDispatchToProps = dispatch => ({
    //ToogleModalChooseProduct        : modal_toogle_value => dispatch(ToogleModalChooseProduct(modal_toogle_value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListAttributeComponent);