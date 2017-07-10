var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
  var map = require('through2-map');
  inStream.pipe(map(function(chunk){
    return chunk.toString().split('').reverse().join('');
  })).pipe(outStream);

  });
 server.listen(Number(process.argv[2]));

// //solucion
// var http = require('http')
// var map = require('through2-map')
// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })
// server.listen(Number(process.argv[2]))
