var http = require('http');
var url = require('url');

var server = http.createServer( function(req, res){
  if (req.method !== 'GET') {
      return res.end('send me a GET\n')
    }
  var a =  url.parse(req.url, true);

  if(a.pathname == '/api/parsetime'){

  var dato2 = a.search.toString().split('=');
  var dato3 =  new Date(dato2[1])
    var hora = {
      "hour" : dato3.getHours(),
      "minute" : dato3.getMinutes(),
      "second" : dato3.getSeconds()
    }
    var myJson = JSON.stringify(hora);
    res.end(myJson);
  }
  if(a.pathname == '/api/unixtime'){
    var dato2 = a.search.toString().split('=');
    var dato3 =  new Date(dato2[1])

    var hora2 = {
      "unixtime" : dato3.getTime()
    }
    var myJson2 = JSON.stringify(hora2);
    res.end(myJson2);
  }
  res.end()

});

 server.listen(Number(process.argv[2]), function(){
   console.log('tu sevidor esta listo en: '+this.address().port)
 });
//otra solucion
// var http = require('http')
//     var url = require('url')
//
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
//
//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }
//
//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
//
//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }
//
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
