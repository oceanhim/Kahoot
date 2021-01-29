const env = require('dotenv');

env.config();

module.exports.DBConnectionString = function() {
    return process.env.DBConnectionString
};

