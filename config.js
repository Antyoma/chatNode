const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://user:user1234@telegram.yvofkw3.mongodb.net/?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;