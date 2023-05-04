const express = require('express');

var app = express();

app.use('/', function (req, res) {
    res.send('Hola, bienvenid@ a la creación de un chat con NodeJS');
});

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');