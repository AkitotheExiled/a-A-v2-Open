// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
    // If so, it's already sorted: return

  // Divide the array in half
  let half = arr.length / 2;
  let left = arr.slice(0, half);
  let right = arr.slice(half, arr.length);
  // Recursively sort the left half
  return merge(mergeSort(left), mergeSort(right));

  // Recursively sort the right half

  // Merge the halves together and return

}

let arr = [10, 1, 7, 2];

console.log(mergeSort(arr));
// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  
  // Create an empty return array
  let sorted = [];
  // Point to the first value of each array
  let pointA = arrA[0];
  let pointB = arrB[0];
  // While there are still values in each array...

  while (arrA.length !== 0 || arrB.length !== 0) {
    // Compare the first values of each array
      if (pointB === undefined || pointA < pointB) {
        sorted.push(pointA);
        arrA.splice(0, 1);
        pointA = arrA[0];
      } else {
        sorted.push(pointB);
        arrB.splice(0, 1);
        pointB = arrB[0];
      }
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  }
  // Return the return array
  return sorted;
}

module.exports = [merge, mergeSort];
