var net = require('net');
var server = net.createServer(function (socket) {
  socket.end('goodbye\n');
  });
server.listen(process.argv[2]);
