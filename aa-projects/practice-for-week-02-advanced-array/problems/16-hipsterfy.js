/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/
function isVowel(char) {
    return "aeiou".includes(char);
}

let removeLastVowel = function(word) {
    // Your code here
    let splitWord = word.split("")
    for (let i = splitWord.length - 1; i >= 0; i--) {
        if (isVowel(splitWord[i])) {
            splitWord[i] = "";
            return splitWord.join("");
        }
    }


};

let hipsterfy = function(sentence) {
    let splitSent = sentence.split(" ");

    return splitSent.map(word => removeLastVowel(word)).join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
