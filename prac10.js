var net = require('net');
var server = net.createServer(function (socket) {
  socket.end('goodbye\n');
  });

server.listen(function listener(socket){
  console.log('opened server on',)
});
function listener(socket) {

}

server.listen(process.argv[2]);
// solucion
// var net = require('net')
// 
//    function zeroFill (i) {
//      return (i < 10 ? '0' : '') + i
//    }
//
//    function now () {
//      var d = new Date()
//      return d.getFullYear() + '-' +
//        zeroFill(d.getMonth() + 1) + '-' +
//        zeroFill(d.getDate()) + ' ' +
//        zeroFill(d.getHours()) + ':' +
//        zeroFill(d.getMinutes())
//    }
//
//    var server = net.createServer(function (socket) {
//      socket.end(now() + '\n')
//    })
//
//    server.listen(Number(process.argv[2]))
