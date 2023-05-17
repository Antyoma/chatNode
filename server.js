const express = require('express');
const app = express();
const server = require('http').Server(app);

// const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db')
const router = require('./components/network/routes');

db('mongodb+srv://user:user1234@telegram.yvofkw3.mongodb.net/?retryWrites=true&w=majority');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function() {
    console.log('La aplicación esta escuchando en http://localhost:3000');
});