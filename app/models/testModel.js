const mongoose = require('mongoose');

let Schema = mongoose.Schema

var answerShema = new Schema({
    text : {
        type : String
    },
    correct : {
        type : Boolean
    },
    metadata : {
        type : String
    }
})



var questionSchema = new Schema({
    text : {
        type : String
    },
    answers:  [answerShema]
})


var testShema = new Schema({
    name : {
        type : String
    },
    questions: [questionSchema]
})

// module.exports =  mongoose.model('Answer', answerShema);
// module.exports =  mongoose.model('Question', questionSchema);
module.exports = mongoose.model('Test', testShema)