const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
// const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db')
const router = require('./components/network/routes');

db(config.dbUrl);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(config.port, function() {
    console.log('La aplicación esta escuchando en ' + config.host +' : '+ config.port);
});