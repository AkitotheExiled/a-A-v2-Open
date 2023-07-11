// Function Expressions

/*

1. Identify functions as first-class objs
2. Define a function using function expression syntax

*/

// What is a first-class object??

// You can store it in a value.

let calcAvg = function(a,b) {
    return (a + b) / 2;
};

console.log(calcAvg(2,12)); // => 7


// Difference between function declaration and function expression??

// Declaration
function meow() {}

// Expression
let meow = function() {}


let myFunc = function() {
    console.log("I'm a function");
  };

  console.log(myFunc); // prints [Function: myFunc]
  myFunc(); // prints "I'm a function"
