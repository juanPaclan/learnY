var fs = require('fs');
var txt = process.argv[2]
var datos = fs.readFileSync(txt).toString()
//var numeroD = datos.split('\n')
//console.log(numeroD)
fs.writeFile('./archivo.txt', datos , function(error){
  if(error){
    console.log(error);
  }
  else {
      console.log('el archivo fue creado');
  }
});
