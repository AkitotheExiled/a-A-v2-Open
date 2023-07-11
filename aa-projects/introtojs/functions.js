// Writing functions - Why?

// Imagine we wanted to get the average of two numbers instead of

(5 + 5) / 2;

function avgoftwo(a, b) {
    return (a + b) / 2;
}

console.log(avgoftwo(5,5));


// What is a function declaration?

// A function is defined and saved so that we can reuse it later

// How do we use a function?

// Calling it or invoking a function - aka function call.

/* a function definition consists of the function keyword, followed by three things:

1. name of the function
2. List of parameters within ()
3. Code to be ran withn { }

*/

function average(number1, number2) {
    return (number1 + number2) / 2;
}

// How do we invoke or call this function?

// We invoke/call a function and pass arguments to the function

average(10, 16);


// Lets look at how the order of code is ran

console.log("First!");
console.log("Second");

// As expected...

console.log("First!");

function callMe() {
  console.log("Second!");
  console.log("Third!");
}

console.log("Fourth");

// Second and third didn't show... Why?  Because we didn't call the function so the program didn't evalute the code within it.

function callMe() {
    console.log("Second!");
    console.log("Third!");
  }

  console.log("First!");
  callMe();
  console.log("Fourth!");




// How do we return a value from a function?  and does a function have a default return value?

function sayNumber(number) {
    console.log(number);
}

sayNumber(5);

console.log(sayNumber(3));

/*
1. Every function call evalutes to its return value
2. Every function in JS returns undefined unless a return is specified
3. Once a return statement is evaluated, the function immediately exits ignoring any code below the return
*/

// NAMING IS IMPORTANT

// Great code reads like English and explains itself

// use camelCase for naming functions/variables and be descriptive






// PARAMETERS AND ARGUMENTS

// What is the difference between the two?

// Parameters are variables inside the function declaration
// Arguments are values passed to the function

function add(firstParameter, secondParameter) {
    console.log(firstParameter + secondParameter);
  }

  // the add function declares two parameters
add(1, 2); //=> 3


// What if we add additional arguments?

add(2,4,6,3,3);

// Ignores the additional and uses the first two

// What about fewer arguments??

// In the above if we did add(5) it would do 5 + undefined >> NaN

console.log("cat"*3);
