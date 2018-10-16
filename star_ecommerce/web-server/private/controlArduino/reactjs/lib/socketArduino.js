import openSocket from 'socket.io-client';
const  socket = openSocket('http://192.168.1.61:3000');

function _Emit_AdminRequestListArduino () {
    console.log('request list arduino');
    socket.emit('_EMIT_ADMIN_REQUEST_LIST_ARDUINO');
}

function _On_ServerReceiveListArduino (callbacl) {
    // callback is a function set state in component
    console.log('receive list arduino');
    socket.on('_ON_ADMIN_RECEIVE_LIST_ARDUINO', data => callbacl(null, data));
}

function _On_ServerReceiveArduinoItem(callback) {
    console.log('receive arduino item connected');
    socket.on('_EMIT_ARDUINO_CONNECTED', data => callbacl(null, data));
}

function _Emit_ServerUpdate_Price () {
    console.log('update price');
    socket.emit('_EMIT_ADMIN_UPDATE_PRICE');
}

function _Emit_ServerUpdateArduinoId(arduino_num, product_id) {
    socket.emit('_EMIT_ADMIN_UPDATE_ARDUINO_PRODUCTID', {
        "arduino_num" : arduino_num,
        "product_id" : product_id
    });
}

export {
    _Emit_AdminRequestListArduino,
    _On_ServerReceiveListArduino,
    _Emit_ServerUpdateArduinoId,
    _Emit_ServerUpdate_Price,
    _On_ServerReceiveArduinoItem
}