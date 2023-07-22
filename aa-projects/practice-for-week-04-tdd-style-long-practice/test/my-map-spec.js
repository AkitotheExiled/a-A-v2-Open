const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;

const myMap = require("../problems/my-map");
chai.use(spies);


// Ensure that myMap does not mutate the passed-in array argument
// Ensure that myMap does not call the built-in Array.map
// Ensure that the passed-in callback is invoked once for each element in the passed-in array argument.
describe("MyMap()", function() {
    let arr;

    beforeEach(() => {
        arr = [];

    })

    it("should return a new array", function() {
        let test1 = myMap(arr);
        expect(Array.isArray(test1)).to.equal(true);
        expect(test1).to.not.equal(arr);
    })
    before(function() {

    })

    it("should not call Array.map", function() {
        let test1 = myMap(arr);
        chai.spy.on(arr, "map");
        expect(arr.map).to.have.not.been.called();
    })

    it("should call the callback function", function() {
        arr = [1,2,3]
        let callback = function(num) {  return num * 2; };
        let spiedCb = chai.spy(callback);
        let result = myMap(arr, spiedCb);

        expect(spiedCb).to.have.been.called();
        expect(result).to.deep.equal([2, 4, 6]);
    })

})
