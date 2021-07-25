const http = require('http');

var server = http.createServer((req, res) => { 
  res.statusCode = 200;

  res.end('<H1>OLÁ</H1>');
});

server.listen(8080, function () {
  console.log('listening...')
})