var fs = require('fs');
var txt = process.argv[2];
var datos = fs.readFileSync(txt).toString();
var numeroD = datos.split('\n');
var result = numeroD.length - 1;
console.log(result);
// otra forma de realizar el ejercicio
//var contents = fs.readFileSync(process.argv[2])
//var lines = contents.toString.split('\n').length - 1
//console.log(lines)
