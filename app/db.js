const mongoose = require('mongoose');
var util = require('./utils')

class Database{
    constructor(){
        mongoose.connect(util.DBConnectionString(),()=>{console.log("connected!!!!!")});
    }

    close = function() {
        console.log("closing");
        mongoose.connection.close();
    }
    
}

module.exports.Database = new Database();