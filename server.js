const express = require('express');
// const bodyParser = require('body-parser'); 
const router = express.Router();

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.get('/message', function (req, res) {
    res.send('Hola, bienvenid@ a la lista de mensajes del chat');
});

app.delete('/message', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje ' + req.body.text + ' añadidos del chat');
});

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');