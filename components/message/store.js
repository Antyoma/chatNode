const Model = require('./model');

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

    try {
        const populated = await Model.find(filter)
        .populate('user')
        .exec();
        return populated;
    } catch (error) {
        throw new Error(error);
    }
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