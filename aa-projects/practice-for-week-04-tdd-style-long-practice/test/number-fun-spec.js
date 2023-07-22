const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree()", function() {
    it("should return the number 3", function() {
        let test1 = returnsThree();

        expect(test1).to.equal(3);
    })
})
describe("reciprocal()", function() {
    context("Valid arguments" , function() {
        it("Should return the reciprocal of our number", function() {
            let test1 = reciprocal(1/3);
            let test2 = reciprocal(3);

            expect(test1).to.equal(3);
            expect(test2).to.equal(1/3);
        });
    });
    context("Invalid Arguments", function() {
        it("should only accept arguments greater than 1", function() {
            let test1 = function () { reciprocal(-1) };
            let test2 = function () { reciprocal(0) };

            expect(test1).to.throw(TypeError);
            expect(test2).to.throw(TypeError);
        });

        it("should only accept arguments less than 1000000", function() {
            let test1 = function () { reciprocal(1000001) };
            let test2 = function () { reciprocal(10000044) };

            expect(test1).to.throw(TypeError);
            expect(test2).to.throw(TypeError);
        });
    });


})
