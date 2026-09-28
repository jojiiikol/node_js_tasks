const http = require('http');
const router = require('./routes/router');

http.createServer(function(request, response){
     
    response.setHeader(
      "Content-Type", "text/html; charset=utf-8;");
     
    router(request, response);
    response.end();
}).listen(3000, function(){ console.log("Server running at http://localhost:3000")});