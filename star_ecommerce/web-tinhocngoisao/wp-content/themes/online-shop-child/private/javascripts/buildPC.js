'use strict';
var buildPCPage = {
    handleSaveImage: function () {
        $('.btn-saveimg').on('click', function() {
            var saveImagePopup = $('#save-image-popup');
            saveImagePopup.show('fast', function() {
                saveImagePopup.find('.cancel').off('click').on('click', function() {
                    saveImagePopup.hide();
                });
                saveImagePopup.find('.confirm').off('click').on('click', function() {
                    buildPCPage.handleDownloadImage($(this).parent());
                });
            });
        });
    },
    handleDownloadImage: function(element) {
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
        var dumpData = `
        [
            {
                "id": "1",
                "name": "B450M DS3H (rev. 1.0)",
                "image_url": "http://traucay.vn/wp-content/uploads/2018/11/AX370M-DS3H-1-300x300.png",
                "quantity": "1",
                "price": "2300000"
            },
            {
                "id": "2",
                "name": "Intel® Core™ i3-8100 Box Chính hãng",
                "image_url": "http://traucay.vn/wp-content/uploads/2018/11/z370-aor5-1-300x300.png",
                "quantity": "3",
                "price": "3050000"
            }
        ]`;
        var dumpDatas = JSON.parse(dumpData);
        var totalPrice = 0;
        for( var index in dumpDatas ) {
            var product = dumpDatas[index];
            var productPrice = parseInt(product.price);
            var productQty = parseInt(product.quantity);
            var productPosition = parseInt(index) === 0 ? 1 : parseInt(index) + 1;
            ctx.fillStyle = "black";
            ctx.textAlign = "left";
            ctx.font = "16px arial";
            ctx.fillText(product.name + ' ' + '[' + product.id + ']', canvas.width / 5, productPosition * 150);
            ctx.fillStyle = "grey";
            ctx.fillText(product.price +' đ', canvas.width / 5, productPosition * 150 + 30);
            ctx.fillText('x', canvas.width / 3.3, productPosition * 150 + 30);
            ctx.fillText(product.quantity, canvas.width / 3, productPosition * 150 + 30);
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
    },
    init: function() {
        let that = this;
        that.handleSaveImage();
    }
}
module.exports = buildPCPage;
