const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function (req, res) {
    res.send('Hola, bienvenid@ a la lista de mensajes del chat');
});

router.delete('/message', function (req, res) {
    res.send('Mensajes añadidos del chat');
});

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');