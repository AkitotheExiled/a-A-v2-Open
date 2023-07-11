// Split and Join Methods

/*

Split to turn string into array
join to turn array into string

*/

// String.split
/*

Accepts separator string as an argument and returns an array where the substrings
are cut by the separater

!!! DOES NOT MUTATE ORIGINAL STRING !!!
*/

let example = "My cat is the best.";
let words = example.split(" ");

console.log(words);
console.log(example);

// Can we remove words using it?

let remove = example.split("is");

console.log(remove);





// Array.join

/*

Called on array => accepts 'separater' argument

*/

let worlds = ["earth", "pluto", "mars"];

let joined = worlds.join(" ");

console.log(joined);
console.log(worlds);


// We can combine both to change the wording of a string

let sentence = "Tigers are the best cat species in the world.";

let newStr = sentence.split("Tigers").join("domestic cats");

console.log(newStr);





