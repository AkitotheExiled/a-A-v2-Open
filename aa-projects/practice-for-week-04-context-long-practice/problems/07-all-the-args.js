function allTheArgs(func, ...args) {
  let previousCalls = [].concat(args);
  return function(...additionalArgs) {
    previousCalls = previousCalls.concat(additionalArgs);
    return func(...previousCalls);
}}

const adder = (...nums) => nums.reduce((num, sum) => sum + num);
let addFive = allTheArgs(adder, 5);
console.log(addFive());
console.log(addFive(10));
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
