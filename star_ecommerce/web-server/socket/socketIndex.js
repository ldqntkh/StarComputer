const socketIO = require('socket.io');
const socketVariable = require('./socketVariable');

const socketArduino = require('./socketArduino');
const socketBrowser = require('./socketBrowser');

const socketServer = function(server) {
    var io = socketIO(server);

    io.on("connection", socket => {
        // arduino request
        console.log('------Client connect-----------')
        if (socket.handshake.headers.origin && socket.handshake.headers.origin.toLowerCase() === "arduino") {
            socketArduino(io, socket);
        } else {
            socketBrowser(io, socket);
        }
    });
}

module.exports = socketServer;