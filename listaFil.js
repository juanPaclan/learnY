var fs = require('fs');
const path = require('path');
module.exports = function (directorio, filtro, callback){
    fs.readdir(directorio, function(err, files){
      if (err){
       return callback(err, null);
      }
        function filtrados (datos){
          if (path.extname(datos) === '.'+filtro){
            return datos;
          }
        }
var datos1 = files.filter(filtrados)
    callback(null, datos1);
    });
}
//otra forma de realizarlo
// module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }
//
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, list)
//       })
//     }
