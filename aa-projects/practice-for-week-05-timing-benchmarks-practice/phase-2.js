const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let increments = [];

  for (let i = 1; i <= 10; i++) {
    increments.push(addNums(increment * i));
  }

  return increments;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let increments = [];

  for (let i = 1; i <= 10; i++) {
    increments.push(addManyNums(increment * i));
  }

  return increments;

}

module.exports = [addNums10, addManyNums10];
