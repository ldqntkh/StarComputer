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
        let canvas = document.createElement('canvas');
        canvas.id = 'save-image-canvas';
        canvas.width = 1024;
        canvas.height = 768;
        canvas.style.border = "1px solid #000";
        let buildPCFunction = document.getElementById('build-pc-function');
        buildPCFunction.appendChild(canvas);
        let ctx = canvas.getContext("2d");
        ctx.textAlign = "center";
        ctx.fillStyle = "#dfdfdf";
        ctx.fillRect(0,0, canvas.width, canvas.height / 7);
        ctx.fillStyle = "red";
        ctx.font = "30px arial";
        ctx.fillText("Tin học ngôi sao".toUpperCase(), canvas.width / 2, 50);
        let logoImg = new Image;
        logoImg.onload = () => {
            ctx.drawImage(logoImg, canvas.width / 3.2, 18, 45, 40);
        };
        logoImg.src = "http://traucay.vn/wp-content/uploads/2018/08/cropped-cropped-logo-star-01-1.png";
        ctx.fillStyle = "#2d3877";
        ctx.fillText("Xây dựng cấu hình PC".toUpperCase(), canvas.width / 2 , 90);
        let computerBuildingData = JSON.parse(localStorage.getItem('computer_building_data'));
        let dataProductType = this.props.data_product_type;
        let totalPrice = 0;
        for( let index in dataProductType ) {
            let item = computerBuildingData[dataProductType[index].value];
            let product = item.product;
            if (product === null) {
                continue;
            }

            let productPrice = (product.sale_price !== "0" && product.sale_price !== "") ? parseInt(product.sale_price) : parseInt(product.regular_price);
            let productQty = parseInt(item.quantity);
            let productPosition = parseInt(index) === 0 ? 1 : parseInt(index) + 1;
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "16px arial";
            ctx.fillText(product.name + ' ' + '[' + product.id + ']', canvas.width / 5, productPosition * 150);
            ctx.fillStyle = "grey";
            ctx.fillText(this.formatPrice(productPrice) +' đ', canvas.width / 5, productPosition * 150 + 30);
            ctx.fillText('x', canvas.width / 3.3, productPosition * 150 + 30);
            ctx.fillText(productQty, canvas.width / 3, productPosition * 150 + 30);
            ctx.fillStyle = "red";
            ctx.fillText( '= ' + this.formatPrice(productQty * productPrice) + ' đ', canvas.width / 1.2, productPosition * 150 + 30);
            totalPrice += (productQty * productPrice);
        }
        ctx.textAlign = "center";
        ctx.fillStyle = "red";
        ctx.font = "bold 16px arial";
        ctx.fillText('Tổng chi phí: ' + this.formatPrice(totalPrice) + ' đ', canvas.width / 2, canvas.height - 300);
        this.loadImages(dataProductType, function(images) {
            for (let index in images) {
                let imagePosition = parseInt(index) === 0 ? 1 : parseInt(index) + 1;
                ctx.drawImage(images[index], 40, imagePosition * 130, 120, 120);
            }
        });

        let downloadButton = document.createElement('a');
        downloadButton.id = 'download-button';
        document.getElementById('save-image-canvas').appendChild(downloadButton);
        this.downloadImage(canvas, downloadButton);
        // remove canvas after download image success
        buildPCFunction.removeChild(buildPCFunction.lastChild);
    }

    loadImages = (sources, callback) => {
        let images = {};
        let loadedImages = 0;
        let numImages = 0;
        // get num of sources
        for(let index in sources) {
            images[index] = new Image();
            images[index].onload = () => {
                if(++loadedImages >= numImages) {
                    callback(images);
                }
            };
            images[index].src = sources[index].image_url;
            numImages++;
        }
    }

    downloadImage = (canvas, el) => {
        let currentDate = new Date();
        el.href = canvas.toDataURL("image/png");
        el.download = 'buildPC_' + currentDate.getDate() + '-' + currentDate.getMonth() + '-' + currentDate.getHours() + '-' + currentDate.getMinutes() + '-' + currentDate.getSeconds() + '.png';
        el.click();
    }

    formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
