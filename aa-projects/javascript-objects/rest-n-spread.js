// Rest and Spread

/*

1. Use rest to accept a number of arguments inside a function
2. Use spread with Objects and Arrays

*/

// Accepting Arguments

// Fewer Arguments?

function test(arg) {
    return arg;
}

console.log(test());
console.log(test(5));

// More Arguments?

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(5, 5));
console.log(add(5,2,4,3,3));

// Ignores the additional args ;)




// Utilizing Rest Parameters

// Rest parameter -> captures additional args in an array

function tester(...allArgs) {
    console.log(allArgs);
}

tester(4,23,2,45,3);

function adder(num1, ...others) {
    let sum = num1;
    console.log("The first number is: ", num1);

    others.forEach(function(num) {
        sum += num;
    })

    console.log("The sum is: ", sum);
}

adder(5, 3,2,3,4);




// Spread Syntax

/*

Two basic behaviors
1. Take a data type and spread its values where elements are expected.
2. Take an iterable and spread its elements where arguments are expected.

*/

//// Spreading Elements

let numArr = [0, 1, 2, 3];

let moreNums = [...numArr, 4, 5];

console.log(moreNums);


//// We can also do it using objects!

let colors = {red: "scarlet", blue: "aqua"};

let newColors = { ...colors };

console.log(newColors);

// We can also merge using this same technique

let colors2 = { green: "forest", yellow: "sunflower" };

let moreColors = { ...colors, ...colors2 };

console.log(moreColors);



//// Spreading arguments

//// Iterables mean -> arrays and string NOT OBJECTS

function speak(verb, noun) {
    return "I like to go " + verb + " with " + noun + ".";
  }

  const words = ["running", "Jet"];

  console.log(speak("running", "Jet")); // => I like to go running with Jet.
  console.log(speak(...words)); // => I like to go running with Jet.


