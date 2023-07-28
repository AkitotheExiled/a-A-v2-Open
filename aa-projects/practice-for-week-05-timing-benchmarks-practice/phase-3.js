const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.time("Add10Nums");
  let increments = [];

  for (let i = 1; i <= 10; i++) {
    increments.push(addNums(increment * i));
  }
  console.timeEnd("Add10Nums");
  return increments;

}


function addManyNums10Timing(increment) {
  console.time("AddMany10Nums");
  let increments = [];

  for (let i = 1; i <= 10; i++) {
    increments.push(addManyNums(increment * i));
  }
  console.timeEnd("AddMany10Nums");
  return increments;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);


console.log(`MANY RUNS: Addnums`);
let increment = 1000000;
for (let n = increment ; n <= 10 * increment ; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`Runtime: ${endTime - startTime}ms`);
}

increment = 1000;
console.log(`MANY RUNS: AddManynums`);
for (let n = increment ; n <= 10 * increment ; n += increment) {
  startTime = Date.now();
  addManyNums(n);
  endTime = Date.now();

  console.log(`Runtime: ${endTime - startTime}ms`);
}
