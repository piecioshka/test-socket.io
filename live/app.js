var io = require('socket.io').listen(4000);

io.sockets.on('connection', function (socket) {
    socket.emit("witaj!");

    socket.on('czesc', function () {
        socket.emit('czesc');
    });

    socket.on('spadaj', function () {
        socket.emit("jeb sie");
        socket.close();
    });
});
