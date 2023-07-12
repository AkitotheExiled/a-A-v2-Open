/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(array, test1, test2) {
  let passed = [];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    let bool1 = test1(el);
    let bool2 = test2(el);

    if ((bool1 || bool2) && (!bool1 || !bool2)) {
      passed.push(el);
    }
  }

  return passed;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
