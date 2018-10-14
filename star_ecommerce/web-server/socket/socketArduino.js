/**
 * create socket io connect
 */
const socketVariable = require('./socketVariable');

// require class model
const ArduinoModel = require('../models/modelClass/ArduinoModel');

// require class manager
const ArduinoManager = require('../models/modelManager/ArduinoManager');


const socketArduino = function(io, socket) {
    socket.on(socketVariable._ON_ARDUINO_CONNECTION, async (data) => {
        /**
         * check nếu đã gán product id thì fetch data rồi trả về cho arduino
         */
        if (data.arduino_num) {
            try {
                let arduino = await ArduinoManager.getArduinoObjectByNum(data.arduino_num);
                if (arduino !== null) {
                    if (arduino.getProductId() !== null) {
                        // fetch data
                        // trả data về cho arduino
                    }
                } else {
                    arduino = new ArduinoModel({
                        "arduino_num" : data.arduino_num,
                        "product_id" : null
                    });

                    let result = await ArduinoManager.addNewArduino(arduino);
                    if (result !== null) {
                        
                    }
                }

                // emit server update list arduino
            } catch (err) {
                console.log(err);
            }
            // let address = socket.client.conn.remoteAddress.toString();
            // check exists
            // save to arrSocketArduinos
            // nên dùng arduino_id
            if (!arrSocketArduinos[data.arduino_num]) {
                arrSocketArduinos[data.arduino_num] = {
                    id_product : null
                }
            } else {
                // call api get product price if exists productId
            }
            console.log(arrSocketArduinos);
            // emit to admin to show all client arduino
            //io.sockets.emit(socketVariable._EMIT_ADMIN_REQUEST_LIST_ARDUINO, arrSocketArduinos);
        }
    });
}

module.exports = socketArduino;