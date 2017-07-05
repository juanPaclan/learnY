var http = require('http')
var bl = require('bl')

callback = function(response) {
response.pipe(bl(function(err, data){
  if(err){
    return console.log(error);
  }
  dato = data.toString();
  console.log(dato.length);
  console.log(dato);
}));
}
http.get(process.argv[2], callback);


//otra forma :
// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//         if (err)
//             return console.log(err);
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }));
// });
