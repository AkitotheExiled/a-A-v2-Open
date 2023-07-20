const Employee = require("./employee");
const Manager = require("./manager");

const founder = new Manager("Hobbes", 1000000, "Founder");
const director = new Manager("Calvin", 130000, "Director", founder);
const taManager = new Manager("Susie", 100000, "TA Manager", director);

const ta1 = new Employee("Lily", 90000, "TA", taManager);
const ta2 = new Employee("Clifford", 90000, "TA", taManager);


console.log(founder.calculateBonus(.05));
console.log(director.calculateBonus(.05));
console.log(taManager.calculateBonus(.05));
console.log(ta1.calculateBonus(.05));
console.log(ta2.calculateBonus(.05));
