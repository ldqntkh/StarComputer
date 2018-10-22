import React, {Component} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#build-pc-function')
export default class ChooseProductComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // fetch data dựa vào value_product_type
        // trước đó kiểm tra xem đã fetch data cho type này chưa
    }
    
    afterOpenModal = () => {
        
    }
    
    closeModal = () => {
        this.props.ToogleModalChooseProduct(false);
    }

    render() {
        let {action_data} = this.props;
        console.log(action_data)
        return(
        <Modal
            isOpen={action_data.toogle_modal_choose_product}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={false}
        >
            <div className="modal-header">
                <h2 className="header-title">Chọn linh kiện</h2>
                <div className="input-group">
                    <input type="text" placeholder="Tìm kiếm sản phẩm" />
                </div>
                <i className="fa fa-close" onClick={this.closeModal}></i>
            </div>
        </Modal>
        );
    }
}