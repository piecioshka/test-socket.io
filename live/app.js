var utils = require("util");
var io = require('socket.io').listen(4000);

io.sockets.on('connection', function (client) {
    client.emit("connection");

    client.on('czesc', function (response) {
        // wita sie z nowym klientem
        client.emit('czesc');
        utils.log(response.name); // piecioshka
    });

    client.on('spadaj', function () {
        client.emit("jeb sie");
        // wylacza sie
        client.disconnect();
    });
});
