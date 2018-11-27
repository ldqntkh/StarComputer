import React, {Component} from 'react';

class SaveImageConfigBuildPcComponent extends Component {
    constructor(props) {
        super(props);
    }
    handleSaveImages = ()=> {
        // check require product build pc
        if (localStorage.getItem('computer_building_data')) {
            let computer_building_data = JSON.parse(localStorage.getItem('computer_building_data'));
            let flagRequire = false;
            for(let index in computer_building_data) {
                if (computer_building_data[index].require && computer_building_data[index].product === null) {
                    //flagRequire = true;
                    break;
                }
            }

            if (flagRequire) {
                alert("Vui lòng chọn những sản phẩm bắt buộc phải có (*) trong cấu hình máy tính trước khi thực hiện chức năng này!");
            } else {
                this.saveImages();
            }
        }
    }

    saveImages = () => {
        var canvas = document.createElement('canvas');
        canvas.id = 'save-image-canvas';
        canvas.width = 1024;
        canvas.height = 768;
        canvas.style.border = "1px solid #000";
        document.getElementById('save-image-popup').appendChild(canvas);
        var ctx = canvas.getContext("2d");
        var logoImg = new Image;
        logoImg.src = "http://traucay.vn/wp-content/uploads/2018/08/cropped-cropped-logo-star-01-1.png";
        ctx.textAlign = "center";
        ctx.fillStyle = "#dfdfdf";
        ctx.fillRect(0,0, canvas.width, canvas.height / 7);
        ctx.fillStyle = "red";
        ctx.font = "30px arial";
        ctx.fillText("Tin học ngôi sao".toUpperCase(), canvas.width / 2, 50);
        logoImg.onload = function(){
            ctx.drawImage(logoImg, canvas.width / 3.2, 18, 45, 40);
        };
        ctx.fillStyle = "#2d3877";
        ctx.fillText("Xây dựng cấu hình PC".toUpperCase(), canvas.width / 2 , 90);
        var computerBuildingData = JSON.parse(localStorage.getItem('computer_building_data'));
        var dumpDatas = this.props.data_product_type;
        var totalPrice = 0;
        for( var index in dumpDatas ) {
            var item = computerBuildingData[dumpDatas[index].value];
            var product = item.product;
            if (product === null) {
                continue;
            }
            
            var productPrice = (product.sale_price !== "0" && product.sale_price !== "") ? parseInt(product.sale_price) : parseInt(product.regular_price);
            var productQty = parseInt(item.quantity);
            var productPosition = parseInt(index) === 0 ? 1 : parseInt(index) + 1;
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "16px arial";
            ctx.fillText(product.name + ' ' + '[' + product.id + ']', canvas.width / 5, productPosition * 150);
            ctx.fillStyle = "grey";
            ctx.fillText(productPrice +' đ', canvas.width / 5, productPosition * 150 + 30);
            ctx.fillText('x', canvas.width / 3.3, productPosition * 150 + 30);
            ctx.fillText(productQty, canvas.width / 3, productPosition * 150 + 30);
            ctx.fillStyle = "red";
            ctx.fillText( '= ' + productQty * productPrice + ' đ', canvas.width / 1.2, productPosition * 150 + 30);
            totalPrice += (productQty * productPrice);
        }
        ctx.textAlign = "center";
        ctx.fillStyle = "red";
        ctx.font = "bold 16px arial";
        ctx.fillText('Tổng chi phí: ' + totalPrice + ' đ', canvas.width / 2, canvas.height - 300);
        loadImages(dumpDatas, function(images) {
            for (var index in images) {
                var imagePosition = parseInt(index) === 0 ? 1 : parseInt(index) + 1;
                ctx.drawImage(images[index], 40, imagePosition * 130, 120, 120);
            }
        });

        function loadImages(sources, callback) {
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            // get num of sources
            for(var index in sources) {
                images[index] = new Image();
                images[index].onload = function() {
                    if(++loadedImages >= numImages) {
                        callback(images);
                    }
                };
                images[index].src = sources[index].image_url;
                numImages++;
            }
        }

        var downloadButton = document.createElement('a');
        downloadButton.id = 'download-button';
        document.getElementById('save-image-canvas').appendChild(downloadButton);
        download_img(canvas, downloadButton);
        function download_img(canvas, el) {
            var image = canvas.toDataURL("image/png");
            var currentDate = new Date();
            el.href = image;
            el.download = 'buildPC_' + currentDate.getDate() + '-' + currentDate.getMonth() + '-' + currentDate.getHours() + '-' + currentDate.getMinutes() + '-' + currentDate.getSeconds() + '.png';
            el.click();
            $('#save-image-popup').hide();
        };
    }
    render() {
        return(
            <div className="btn-item">
                <button type="button" className="btn btn-saveimg" onClick={this.handleSaveImages}>
                    <i className="fa fa-file-image-o" />
                    Tải ảnh cấu hình
                </button>
            </div>
        );
    }
}

// create container
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    data_product_type : state.ProductTypeReducer
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveImageConfigBuildPcComponent);
