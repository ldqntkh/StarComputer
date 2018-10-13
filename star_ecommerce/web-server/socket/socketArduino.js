/**
 * create socket io connect
 */
const socketVariable = require('./socketVariable');
var arrSocketArduinos = [];
arrSocketArduinos[0] = {
    id_product: 100
}

const socketArduino = function(io, socket) {
    socket.on(socketVariable._ON_ARDUINO_CONNECTION, (data) => {
        let address = socket.client.conn.remoteAddress.toString();
        // check exists
        // save to arrSocketArduinos
        // nên dùng arduino_id
        if (!arrSocketArduinos[data.arduino_id]) {
            arrSocketArduinos[data.arduino_id] = {
                id_product : null
            }
        } else {
            // call api get product price if exists productId
        }
        console.log(arrSocketArduinos);
        // emit to admin to show all client arduino
        io.sockets.emit(socketVariable._EMIT_ADMIN_REQUEST_LIST_ARDUINO, arrSocketArduinos);
    });
    io.sockets.emit(socketVariable._EMIT_ADMIN_REQUEST_LIST_ARDUINO, arrSocketArduinos);
}

module.exports = socketArduino;