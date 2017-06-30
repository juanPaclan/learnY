//var contador = 0;
//require('fs').createReadStream(process.argv[2])
//.on('data', function(chunk){
//  for (var i = 0; i < chunk.length; ++i)
//  if (chunk[i] == 10) contador++;
//})
//.on('end', function() {
//  console.log(contador);
//});

// otra forma de realizar el programa es esta
var fs = require('fs')
var file = process.argv[2]
fs.readFile(file , function(error, contents){
  if (error){
    return console.log(error)
    }
// fs.readFile(file, 'utf8', callback) // se puede usar
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
