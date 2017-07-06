var http = require('http')
var bl = require('bl')

callback = function(response) {
response.pipe(bl(function(err, data){
  if(err){
    return console.log(error);
  }
  dato = data.toString();
  console.log(dato);
}));
}

var datos = [process.argv[2] , process.argv[3] , process.argv[4] ];
datos.forEach(function(element){
http.get(element, callback);
});
// otra solucon
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
