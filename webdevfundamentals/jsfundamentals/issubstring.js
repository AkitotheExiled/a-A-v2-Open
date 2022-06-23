function isSubstring(searchString, subString) {
    // your code here...
    if (searchString.toLowerCase().indexOf(subString) != -1) return true;
    return false;
  }

  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
