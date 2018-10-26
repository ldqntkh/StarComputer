import { connect } from 'react-redux'
import AttributeItemDetailComponent from '../../../../../components/body/productModal/body/attribute/attributeItemDetailComponent';

import {
    SetValueProductSearchAttribute,
} from '../../../../../action/actionFunction';

const mapStateToProps = state => ({
    action_data : state.ActionReducer
});

const mapDispatchToProps = dispatch => ({
    SetValueProductSearchAttribute : product_search_attribute => dispatch(SetValueProductSearchAttribute(product_search_attribute))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeItemDetailComponent);