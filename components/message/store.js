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

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}