// Your code here

const { Employee } = require("./employee");

const john = new Employee("John Wick", "Dog Lover");

setTimeout(john.sayName, 2000);

const name = john.sayName.bind(john);

setTimeout(name, 2000);

setTimeout(john.sayOccupation, 3000);

const occupation = john.sayOccupation.bind(john);

setTimeout(occupation, 3000);
