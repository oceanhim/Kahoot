const mongoose = require('mongoose');

let Schema = mongoose.Schema

var quizShema = new Schema({
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

module.exports = mongoose.model('Quiz', quizShema)