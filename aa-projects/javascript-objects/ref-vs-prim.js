// References vs Primitives

/*

1. Identify a datatype to be primitive or reference

*/

/*

five primitive types -> immutable

1. Boolean
2. Null
3. Undefined
4. Number
5. String

*/

/*

One reference type -> mutable

1. Object

*/

// Immutability

let num1 = 5;

let num2 = num1;

num1 = num1 + 3;

console.log(num1);
console.log(num2);

// What happened here??

/*

num1 gets pointed to place where 5 is held in computer memory.

When we do num2 to num1;  num2 points to a copy of value 5 in computer memory.

So, when we update num1, num1's 5 value doesn't change, but the pointer does.  It points from the 5 in computer memory to the 8 in computer memory.

*/


// Mutability
/*

References are mutable -> value is copied into the location of the second variable

*/

let cat1 = {name: "Sox", breed: "shorthair"};

let cat2 = cat1;

cat1.name = "Charles";

console.log(cat1);
console.log(cat2);


