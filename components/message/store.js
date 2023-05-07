const db = require('mongoose');
const Model = require('./model');


db.Promise = global.Promise;
//--------------------------------------Conexión con la BD-------------------------------------------------
db.connect('mongodb+srv://user:user1234@telegram.yvofkw3.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'telegram'
});

console.log('[db] conectada con exito');

//---------------------------------------------------------------------------------------------------------

function addMessage(message) {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}