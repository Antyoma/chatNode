const express = require('express');
// const bodyParser = require('body-parser');

// const router = require('./components/message/network');
const router = require('./components/network/routes');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');