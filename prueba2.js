var fs = require('fs');
const path = require('path');

function listaFil(directorio , filtro , callback){
  console.log(directorio +'  '+filtro);
    fs.readdir(directorio, function(err, files){
      if (err){
          // console.log(err);
       return callback(err, null);
      }


    return callback(null,
      files.forEach(function (file){
              //return callback(null, err, null);
              if(path.extname(file) === '.'+filtro){
              return  file;
              }//if
            }));
    
    });//readdir
}
listaFil('./' , 'txt', function (err, i){
  if(err){
    console.log(err);
  }
  console.log(i);
});

// function principal(str,callback){
//   console.log(str);
//   callback()
// }
// principal("hola mundo",function callback(){
//   console.log("hello world");
// })
