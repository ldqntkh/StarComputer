import React, {Component} from 'react';

export default class SaveImageConfigBuildPcComponent extends Component {

    render() {
        return(
            <div className="btn-item">
                <button type="button" className="btn btn-saveimg">
                    <i className="fa fa-file-image-o" />
                    Tải ảnh cấu hình
                </button>
            </div>
        );
    }
}