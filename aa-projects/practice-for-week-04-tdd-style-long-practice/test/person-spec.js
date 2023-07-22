// Your code here]
const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
const Person = require("../problems/person");
chai.use(spies);


describe("Person() class", function() {
    let person;
    beforeEach(() => {
            person = new Person("Michael", 29);
    });

    it("should have name and age properties", function() {

        expect(person).to.have.all.keys("name", "age");
    });

    it("should take a name and age and set them as properties", function() {

        expect(person.name).to.equal("Michael");
        expect(person.age).to.equal(29);
    });

    context("sayHello()", function() {
        it("should have an instance method named sayHello()", function() {

            expect(person.sayHello).to.exist;
        });

        it("should return a string with the persons name in it", function() {

            expect(person.sayHello()).to.equal("Hi there, I'm Michael.");
        });
    });

    context("visit(person)", function() {

        it("should have an instance method named visit", function() {

            expect(person.visit).to.exist;
        });

        it("should return a string with the persons name in it", function() {

            let person2 = new Person("Milk", 25);

            let result = person.visit(person2);

            expect(result).to.equal("Michael visited Milk.");
        });
    });

    context("switchVisit(otherPerson)", function() {
        let person2;

        beforeEach(() => {
            person2 = new Person("Milk", 25)
        })

        it("should have an instance method named switchVisit", function() {

            expect(person.switchVisit).to.exist;
        });

        it("should call the other person visit method", function() {


            chai.spy.on(person2, "visit");
            person.switchVisit(person2);
            expect(person2.visit).to.have.been.called();
        });
        it("should return a string with the persons name in it", function() {


            let result = person.switchVisit(person2);
            expect(result).to.equal("Milk visited Michael.");
        });
    });

    context("update(obj)", function() {
        context("valid object", function() {
            it("should have age and name properties", function() {
                let obj = {};
                let validObj = { name: "Sox", age: 3};

                let result = function () {person.update(obj);};
                person.update(validObj);



                expect(result).to.throw();
                expect(person.name).to.equal("Sox");
                expect(person.age).to.equal(3);
            });
        });

        context("invalid object", function() {
            it("should be a valid object", function() {
                let invalidObj = 42;

                let result = function() {person.update(invalidObj);};
                expect(result).to.throw(TypeError);
            });
        });
    });

    context("tryUpdate(obj)", function() {
        context("successful", function() {
            it("should return true", function() {

                let validObj = { name: "Sox", age: 3};


                let result = person.tryUpdate(validObj);



                expect(result).to.equal(true);
                expect(person.name).to.equal("Sox");
                expect(person.age).to.equal(3);
            });
        });

        context("unsuccessful", function() {
            it("should return false and not throw an error", function() {
                let invalidObj = 42;

                let result = function() {person.tryUpdate(invalidObj);};

                let triedResult = person.tryUpdate(invalidObj);
                expect(result).to.not.throw(TypeError);
                expect(triedResult).to.equal(false);
            });
        });
    });

    context("static greetAll(obj)", function() {

        let person2;
        let person3;
        let person4;
        let people;
        let trueRes;
        beforeEach(() => {
            person2 = new Person("Sox", 3);
            person3 = new Person("Charles", 3);
            person4 = new Person("Bido", 3);
            people = [person2, person3, person4];

            trueRes = ["Hi there, I'm Sox.", "Hi there, I'm Charles.", "Hi there, I'm Bido."]
        });

        it("should return an array", function() {
            let result = Person.greetAll(people);


            expect(Array.isArray(result)).to.equal(true);
        });

        it("should call sayHello() on each person instance given", function() {

            chai.spy.on(person2, "sayHello");
            chai.spy.on(person3, "sayHello");
            chai.spy.on(person4, "sayHello");
            Person.greetAll(people);


            expect(person2.sayHello).to.have.been.called(1);
            expect(person3.sayHello).to.have.been.called(1);
            expect(person4.sayHello).to.have.been.called(1);
        });

        it("should return a string containing all the greets", function() {
            let result = Person.greetAll(people);


            expect(result.length).to.equal(3);
            expect(result).to.deep.equal(trueRes);
        });
    });

})
