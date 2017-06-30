var fs = require('fs');
const path = require('path');


//console.log('lista de archivos');
fs.readdir(process.argv[2], function(err, files){
  if (err){
    return console.error(err);
  }
  else {
    files.forEach(function (file){
      //if(file.endsWith('js') )
      if(path.extname(file) === '.'+process.argv[3]){
      //  console.log(path.extname(file));
        console.log(file);
      }
    });
  }
});
