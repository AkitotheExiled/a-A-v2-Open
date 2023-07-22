const chai = require("chai");
const expect = chai.expect;

const reverseString = require("../problems/reverse-string");


describe("reverseString()", function() {
    it("should reverse the string passed in", function() {
        const test1 = reverseString("fun");

        expect(test1).to.equal("nuf");
    });

    it("should throw an error when given a non string value", function() {
        const test2 = function() {
            reverseString(45);
        };

        const test3 = function() {
            reverseString("meow");
        };
        expect(test2).to.throw(TypeError);
        expect(test3).to.not.throw();
    })

    it("should not throw when given a string", function() {
        const test3 = function() {
            reverseString("meow");
        };

        expect(test3).to.not.throw();
    })
})
