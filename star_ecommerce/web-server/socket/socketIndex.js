const socketIO = require('socket.io');
const socketVariable = require('./socketVariable');

const socketArduino = require('./socketArduino')

const socketServer = function(server) {
    var io = socketIO(server);

    io.on("connection", socket => {
        // arduino request
        if (socket.handshake.headers.origin && socket.handshake.headers.origin.toLowerCase() === "arduino") {
            socketArduino(io, socket);
        } else {
            socketArduino(io, socket);
        }
    });


}

module.exports = socketServer;