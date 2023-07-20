/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
function isVowel(char) {
    return "aeiou".includes(char);
}

function onlyThreeVowels (accumulator, value) {
    if (!accumulator.includes(value) &&  isVowel(value)) {
        return accumulator + value;
    }
    return accumulator;
}
let hasThreeVowels = function(string) {
    // Your code here

    let splitStr = string.split("");

    return splitStr.reduce(onlyThreeVowels, "").length >= 3;
};



// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
