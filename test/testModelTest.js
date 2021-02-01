const Quiz  = require('../app/models/quizModel')
const { Database } = require('../app/db');
var assert = require('assert');


async function savequiz(name) {
    const retMe = await new Quiz({name:name}).save()    
    return retMe;
}

async function savequizWithQ(name) {
    const retMe = await new Quiz({name:name, questions:[({text:"qname", answers:[({text:"first Answer", correct:false, metadata:"quizMetaData"})]})]}).save()    
    return retMe;
}



describe("It saves a quiz",function(){
    const quizName = "first quiz"
    before(async function(){
        var foundone = await Quiz.findOne({name:quizName});
        if(null!=foundone){
            await foundone.delete();
        }
    })

    it("saves a quiz",async function(){  
        
        var savedquiz= await savequiz(quizName)
        foundone = await Quiz.findOne({name:quizName});
        assert.notEqual(foundone, null);
        assert.equal(savedquiz.name,foundone.name);
    })

    it("saves a quiz with a question",async function(){  
        // const qname = " q11";
        var savedquiz= await savequizWithQ("first quiz")
        console.log(`SAVED quiz: ${savedquiz}, SAVED Quiz QUESTIONS TEXT: ${savedquiz.text}`)
        foundone = await Quiz.findOne({name:quizName, questions:[]});
        foundone.questions.push(({text:"qname", answers:[({text:"first Answer", correct:false, metadata:"quizMetaData"})]}))
        console.log(`FOUNDONE QUESTIONS: ${foundone.questions}`);
        foundone = await foundone.save();
        console.log(foundone);

        var foundSecond = await Quiz.findOne({name:quizName});
        console.log(foundSecond);
        assert.notEqual(foundSecond,null)

        console.log(foundSecond.questions.length)
        assert.equal(foundSecond.questions.length,1);
        console.log(foundSecond);
        assert.equal(foundSecond.questions[0].text,"qname");
    })

    after(async function(){
        foundone = await Quiz.findOne({name:quizName});
        await foundone.delete();
        Database.close();
    })
})
