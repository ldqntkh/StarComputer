/**
 * create socket io connect
 */
const socketVariable = require('./socketVariable');

// require class manager
const ArduinoManager = require('../models/modelManager/ArduinoManager');

const socketBrowser = function(io, socket) {
    // check session
    
    socket.on(socketVariable._EMIT_ADMIN_REQUEST_LIST_ARDUINO, async () => {
        console.log('-----Admin request-----');
        try {
            let listArduino = await ArduinoManager.getAllArduinoObject();
            if (listArduino !== null && listArduino.length > 0) {
                socket.emit(
                    socketVariable._ON_ADMIN_RECEIVE_LIST_ARDUINO,
                    listArduino
                );
            } else {
                socket.emit(
                    socketVariable._ON_ADMIN_RECEIVE_LIST_ARDUINO,
                    {
                        "errMsg" : "Empty data"
                    }
                );
            }
        } catch (err) {
            console.log(err);
        }
        
    });

    socket.on(socketVariable._EMIT_ADMIN_UPDATE_PRICE, function() {
        //console.log(arrSocketArduinos);
        // yêu cầu tất cả các arduino hiện đang kết nối cập nhật lại giá trị
        console.log('_EMIT_ADMIN_UPDATE_PRICE');
        io.sockets.emit(socketVariable._EMIT_ARDUINO_UPDATE_PRICE, {});
    });

    socket.on(socketVariable._EMIT_ADMIN_UPDATE_ARDUINO_PRODUCTID, (data)=> {
        console.log(data);
        ArduinoManager.updateArduinoProductId(data); 
    });
}

module.exports = socketBrowser;