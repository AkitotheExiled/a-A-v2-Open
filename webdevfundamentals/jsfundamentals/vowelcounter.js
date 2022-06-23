function countVowels(word) {
    // your code here...
    let vowels = ["a", "e", "i", "o", "u"];
    let vCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          vCount++;
        }
    }
    return vCount;
  };

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2
