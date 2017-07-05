var http = require('http');
callback = function(response) {
  var str = '';
  response.setEncoding('utf8')
  response.on("data", function (data) {
    console.log(data);
  });
}
http.get(process.argv[2], callback);
//otra forma es:
// var http = require('http')
//
//  http.get(process.argv[2], function (response) {
//    response.setEncoding('utf8')
//    response.on('data', console.log)
//    response.on('error', console.error)
//  }).on('error', console.error)
