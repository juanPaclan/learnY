var fs = require('fs');
const path = require('path');


console.log('lista de archivos');
fs.readdir("./", function(err, files){
  if (err){
    return console.error(err);
  }
  files.forEach(function (file){
if(file.endsWith('js') === true){
  console.log(file);
}
  });
});
