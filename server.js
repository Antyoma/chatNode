const express = require('express');
// const bodyParser = require('body-parser'); 
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    //res.send('Hola, bienvenid@ a la lista de mensajes del chat');
    response.success(req, res, 'Lista de mensajes');
});

app.post('/message', function (req, res) {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error simulado');
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
    //res.status(201).send([{error: '', body: 'Creado correctamente'}]);
    response.success(req, res, 'Creado correctamente', 201);
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');