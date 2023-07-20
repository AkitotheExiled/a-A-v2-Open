/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


/*

if (array.length === 1) {
  return array[0] === 12;
}

for (let i = 0; i < array.length; i++) {
  let ele = array[i];
  let nextEle = array[i + 1];

  if (ele + nextEle === 12) {
    return true;
  }
}

return false

*/;
// your code here
function addToTwelve(array, prevVal = 0) {
  debugger
  if (array.length === 1) {
    return array[array.length - 1] + prevVal === 12;
  }

  if (array[0] + prevVal === 12) {
    return true;
  }

  return addToTwelve(array, array.shift());;
}


console.log(addToTwelve([1, 11, 4, 7, 6]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
