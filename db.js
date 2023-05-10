const db = require('mongoose');

db.Promise = global.Promise;

// 'mongodb+srv://user:user1234@telegram.yvofkw3.mongodb.net/?retryWrites=true&w=majority'
async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'telegram'
    });
    console.log('[db] conectada con exito');
}
module.exports = connect;