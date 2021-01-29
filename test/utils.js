let u= require('../app/utils');
var assert = require('assert');


describe("it gets env variables",function(){
    it("getd db connection string",function(){
        assert.notEqual(u.DBConnectionString(),null)
    })
})