// Array Splice Method

/*

1. List all arguments for array.prototype.splice

*/

// What can splice do ?

// Mutates the array

// We can use it to remove

let cats = ["whiskers", "tiger", "bear"];
let returnv = cats.splice(1,2);

console.log(returnv);
console.log(cats);


// We can also use it to insert

cats.splice(1,0, "tiger", "bear");

console.log(cats);

// We can do both at the same time!

cats.splice(1, 2, "removed", "removed");

console.log(cats);


