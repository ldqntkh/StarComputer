/**
 * create socket io connect
 */
const socketVariable = require('./socketVariable');

// require class model
const ArduinoModel = require('../models/modelClass/ArduinoModel');

// require class manager
const ArduinoManager = require('../models/modelManager/ArduinoManager');

const fetch = require('node-fetch');
const urlProduct = 'http://traucay.vn/wp-json/rest_api/v1/product/';

const socketArduino = function(io, socket) {
    socket.on(socketVariable._ON_ARDUINO_CONNECTION, async (data) => {
        console.log('arduino connect');
        /**
         * check nếu đã gán product id thì fetch data rồi trả về cho arduino
         */
        if (data.arduino_num) {
            try {
                let arduino_num = parseInt(data.arduino_num);
                let arduino = await ArduinoManager.getArduinoObjectByNum(arduino_num);
                if (arduino !== null ) {
                    if (arduino.getProductId() !== null) {
                        // fetch data
                        // trả data về cho arduino
                        let response = await fetch(urlProduct + arduino.getProductId());
                        let jsonData = await response.json();
                        if (jsonData.code === 'success') {
                            jsonData = jsonData.data;
                            let price = jsonData.salePrice !== null && jsonData.salePrice < jsonData.regularPrice ? jsonData.salePrice : jsonData.regularPrice;
                            socket.emit(socketVariable._EMIT_ARDUINO_RECEIVE_DATA, {
                                err_msg: "",
                                product_name: jsonData.name.toUpperCase(),
                                product_price: price
                            });
                        } else {
                            socket.emit(socketVariable._EMIT_ARDUINO_RECEIVE_DATA, {
                                err_msg: "can not find data",
                                product_name: "",
                                product_price: 0
                            });
                        }
                    }
                    // emit admin get list arduino
                    io.sockers.emit(socketVariable._EMIT_ARDUINO_CONNECTED, arduino);
                } else {
                    arduino = new ArduinoModel({
                        "arduino_num" : arduino_num,
                        "product_id" : ""
                    });

                    let result = await ArduinoManager.addNewArduino(arduino);
                    if (result !== null) {
                        // emit admin get list arduino
                        io.sockers.emit(socketVariable._EMIT_ARDUINO_CONNECTED, arduino);
                    }
                }
            } catch (err) {
                console.log(err);
            }
            // emit to admin to show all client arduino
            //io.sockets.emit(socketVariable._EMIT_ADMIN_REQUEST_LIST_ARDUINO, arrSocketArduinos);
        }
    });
}

module.exports = socketArduino;