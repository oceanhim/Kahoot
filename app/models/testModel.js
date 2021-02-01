const mongoose = require('mongoose');

let Schema = mongoose.Schema

var testShema = new Schema({
    name : {
        type : String
    },
    questions: [{
        text : {
            type : String
        },
        answers:  [{
            text : {
                type : String
            },
            correct : {
                type : Boolean
            },
            metadata : {
                type : String
            }
        }]
    }]
})

module.exports = mongoose.model('Test', testShema)