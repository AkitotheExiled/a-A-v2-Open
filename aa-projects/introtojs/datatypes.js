// Number Data Type

// Numbers can be 42, -5, 3.1432423423, 7.0, etc

/* We can perform basic operations using the following operators,

+ add
- subtract
* multiply
/ divide
% modulo

*/

console.log(2 + 3); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125

// REMEMBER COMPLEX OPERATIONS FOLLOW PEMDAS

console.log((2 + 3) * 5); // => 25

// What is the modulo operator do?

// Gives us the remainder from the divison

console.log(7 % 2); // => 1





// Comparison Operators

/* The following are operators used for comparison,

> greater than
< less than
>= greater than or equal to
<= less than or equal to
=== equal to
!== not equal to

*/

console.log(10 > 5); // => true
console.log(10 < 5); // => false
console.log(1 < 7); // => true
console.log(7 <= 7); // => true
console.log(5 === 6); // => false
console.log(5 !== 6); // => true
console.log("a" !== "A"); // => true
console.log(false === false); // => true


// Can you compare letters? 

// YES.  JS compares them lexicographically aka by dictionary order

console.log("a" < "b"); // => true

// What is the difference between === and ==?

//  === uses strict equality and checks for type
// == loosely checks for equality and converts values into types unpredictably

console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(0 === false); // false
console.log(0 == false); //true





// Boolean Data Type //
// Only two values -> true - false

// Here are the logical operators used with boolean data types
/*

! not
&& and
|| or

*/

console.log(!true); // => false

// Logical Order of Operations => ! -> && -> ||

console.log(false && !(false || true));

// A || B && C is equivalent to A || (B && C) where A, B, C are booleans.


// What is De Morgan's Law?

/*

!(A || B) is equivalent to !A && !B
!(A && B) is equivalent to !A || !B

*/





// Variables Data Type

// How to initialize a variable?
let bc = "a/A";
console.log(bc);

// Variables can contain any alphanumeric chars, underscore, or $.  THEY CANNOT BEGIN WITH A NUMBER i.e. let E33hd = "bc"

// What is declaring a variable?

let bct;
console.log(bct);


// What is assigning a variable?

let bcte;
bcte = "a/A";
console.log(bcte);

// How do we reassign a variable?

let kittens = 2;

console.log(kittens);

kittens += 1;

console.log(kittens);

// Notice the shorthand +=?

// What is NaN?

let num;

console.log(num + 1);




// String Data Type

// What is a 'Valid' string?

"valid";

'also valid';
// 'invali'd';

// What about finding the length?
console.log("mycatsoxlovesme".length);

//  Can we index a string?  How?

console.log("MEOOW"[3]);

// Be careful for the one off error.  Indexs start at 0

console.log("cat".length);
console.log("cat"[1]);
console.log("cat"[3]);

// How do we find the index of a character?

console.log("cat".indexOf("c"));

// What if the character doesn't exist?

console.log("cat".indexOf("e"));

// What about substring?

console.log("My cat loves me".indexOf("cat"));

// Returns where the substring begins ^


// How do we add strings together?

console.log("hello" + "world");





// Interpolation in Javascript

// What is a template literal?

let catName = "Charles";

console.log(`Hey ${catName}, you cute kitty!`);

// What about long lines?

console.log(`HAHAHAHH
HAHHAHAHA
HAHAHAHHA
HAHAHAH`);

