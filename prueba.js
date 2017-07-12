var http = require('http');
var url = require('url');


function hora () {
     var d = new Date()
     var fecha = {
       "hour" : d.getHours(),
       "minute" :d.getMinutes(),
       "second" :d.getSeconds()
     }
     return fecha;
   }
   function hora2 () {
        var d = new Date();
        var fecha = {
          "unixtime" : d.getTime()
        }
        return fecha;
      }

var server = http.createServer( function(req, res){
  if (req.method !== 'GET') {
      return res.end('send me a GET\n')
    }
  var a =  url.parse('/api/parsetime?q=1', true);
  var b = url.parse('/api/unixtime?q=1', true);
  var myJson = JSON.stringify(hora());
  var myJson2 = JSON.stringify(hora2());
  if(req.url === a){
    res.writeHead(200, {'content-type' : 'application/json'});
    res.end(myJson);
  }
  if(req.url === b){
    res.writeHead(200, {'content-type' : 'application/json'});
    res.end(myJson2);

  }
  res.end('hola')
  // res.writeHead(200, {'content-type' : 'application/json'});
  // res.end(myJson);
  console.log(req.url)
});

 server.listen(Number(process.argv[2]), function(){
   console.log('tu sevidor esta listo en: '+this.address().port)
 });
//split(sinbolo a fracmentar)
//subString(pocicion de inicio y final de la cadena)
