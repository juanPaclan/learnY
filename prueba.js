var fs = require('fs');
const path = require('path');

 function listado (directorio, filtro, callback){

    fs.readdir(directorio, function(err, files){
      if (err){

       return callback(err, null);
      }
        function filtrados (datos){
          if (path.extname(datos) === '.'+filtro){
            return datos
          }
        }
        var datos1 = files.forEach(filtrados);
          return  callback(null, files.filter(filtrados) );

      //callback(null, files);
    });
}
listado( './' , 'md' , function (err, i){
  if (err){
    console.log(err);
  }
  console.log(i);
});
