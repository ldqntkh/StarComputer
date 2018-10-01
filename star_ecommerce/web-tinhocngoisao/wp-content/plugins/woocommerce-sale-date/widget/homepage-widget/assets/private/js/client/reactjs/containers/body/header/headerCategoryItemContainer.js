import { connect } from 'react-redux'
import HeaderCategoryItemComponent from '../../../components/body/header/headerCategoryItemComponent';

import {
    SetCategoryActived
} from '../../../action/actionFunction';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    SetCategoryActived : category_actived => dispatch(SetCategoryActived(category_actived))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderCategoryItemComponent);