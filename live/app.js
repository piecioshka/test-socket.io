var utils = require("util");
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(80);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function (client) {
    client.emit("connection");

    client.on('czesc', function (response) {
        var name = response.name;

        // wita sie z nowym klientem
        client.emit('czesc');
        utils.log("przylaczyl sie: " + name); // piecioshka

        // client.broadcast(name + " sie przylaczyl! :)");
    });

    client.on('spadaj', function () {
        client.emit("jeb sie");
        // wylacza sie
        client.disconnect();
    });
});
