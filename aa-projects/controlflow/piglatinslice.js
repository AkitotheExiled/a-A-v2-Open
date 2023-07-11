// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'
function isVowel(char) {
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}
function pigLatinWord(word) {
  // your code here...
  let firstChar = word[0];
  if (isVowel(firstChar)) {
      return word + "yay";
  }


  for (let i = 0; i < word.length; i++) {
      if (isVowel(word[i])) {
          let firstP = word.slice(i);
          let secondP = word.slice(0, i);
          return firstP + secondP + "ay";

      }
  }


};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"


// your code here
function abbreviate(word) {
    let wordAbb = word.toLowerCase().split("")
    let vowels = "aeiou";

    let result = wordAbb.filter(char => !vowels.includes(char));

    return result.join("");
}






console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
