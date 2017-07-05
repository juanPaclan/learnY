var Listar = require('./listaFil');
var direc = process.argv[2];
var regla = process.argv[3];
Listar( direc , regla , function (err, i){
  if (err){
    console.log(err);
  }
  i.forEach(function(element){
    console.log(element);
  });
});
