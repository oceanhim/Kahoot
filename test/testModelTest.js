const Test  = require('../app/models/testModel')
const Question  = require('../app/models/testModel')
const { Database } = require('../app/db');
var assert = require('assert');


async function saveTest(name) {
    const retMe = await new Test({name:name}).save()    
    return retMe;
}

async function saveTestWithQ(name) {
    const retMe = await new Test({name:name, questions:[new Question({text:"qname"})]}).save()    
    return retMe;
}



describe("It saves a test",function(){
    const testName = "first test"
    before(async function(){
        var foundone = await Test.findOne({name:testName});
        if(null!=foundone){
            await foundone.delete();
        }
    })

    it("saves a test",async function(){  
        
        var savedTest= await saveTest(testName)
        foundone = await Test.findOne({name:testName});
        assert.notEqual(foundone, null);
        assert.equal(savedTest.name,foundone.name);
    })

    it("saves a test with a question",async function(){  
        // const qname = " q11";
        var savedTest= await saveTestWithQ("boo")
        foundone = await Test.findOne({name:testName, questions:[]});
        foundone.questions.push()
        console.log(foundone);
        foundone = await foundone.save();
        console.log(foundone);

        var foundSecond = await Test.findOne({name:testName});
        console.log(foundSecond);
        assert.notEqual(foundSecond,null)

        assert.equal(foundSecond.questions.length,1);
        console.log(foundSecond);
        assert.equal(foundSecond.questions[0].text,qname);
    })

    after(async function(){
        foundone = await Test.findOne({name:testName});
        await foundone.delete();
        Database.close();
    })
})
