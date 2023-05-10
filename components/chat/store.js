const Model = require('./model');

function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

async function listChats(UserId) {
    let filter = {};

    if (UserId) {
        filter = { users: UserId };
    }

    try {
        const populated = await Model.find(filter)
        .populate('users')
        .exec();
        return populated;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    add: addChat,
    list: listChats,
}