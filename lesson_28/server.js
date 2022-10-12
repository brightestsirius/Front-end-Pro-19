// console.log(`at the start server.js`);

// let {x, foo, name:Oleg, y=100} = require(`./variables.js`);

// console.log(x);
// console.log(foo(10));
// console.log(Oleg);
// console.log(y);

// console.log(`at the end server.js`);

const http = require(`http`);
// console.log(http);

const statik = require('node-static');
const file = new statik.Server('./contacts.html');
http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8088);