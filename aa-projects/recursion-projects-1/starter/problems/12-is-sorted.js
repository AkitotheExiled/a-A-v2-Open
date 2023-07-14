/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(array) {
  if (array.length === 0) {
    return true;
  }
  let firstEle = array.shift();
  let secondEle = array.shift();
  if (firstEle > secondEle) {
    return false;
  }
  return isSorted(array);
}

console.log(isSorted([5, 4, 3, 2, 1])); // true
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
