var http = require('http');
var url = require('url');


function hora () {
     var d = new Date()
     return d.getHours() + d.getMinutes() + d.getSecond();
   }

var server = http.createServer(function(req, res){
  if (req.method !== 'GET') {
      return res.end('send me a GET\n')
    }
  url.parse('/api/parsetime', true);
  var myJson = JSON.stringify(hora());
  res.writeHead(200, {'content-type' : 'application/json'});
  res.end(myJson);

});

 server.listen(Number(process.argv[2]));
