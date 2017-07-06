var http = require('http')
var bl = require('bl')

callback = function(response) {
response.pipe(bl(function(err, data){
  if(err){
    return console.log(error);
  }
  dato = data.toString();
  console.log(dato);
}));
}

var datos = [process.argv[2] , process.argv[3] , process.argv[4] ];
datos.forEach(function(element){
http.get(element, callback);
});
