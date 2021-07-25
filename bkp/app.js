const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', (req, res) => {
  res.send('Minha pagina sobre');
});

app.get('/blog', (req, res) => {
  res.send('Meu blog');
});

app.get('/ola/:name', (req, res) => {
  res.send('Olárr ' + req.params.name);
});

app.listen(8081, function () {
  console.log('liss...');
});

console.log(__dirname);
console.log(__filename);