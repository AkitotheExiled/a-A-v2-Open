function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];
  // Orient the pivot so that...

  for (let i = 1; i < arr.length; i++) {
    let number = arr[i];
    // every number smaller than the pivot is to the left
    if (number < pivot) {
      left.push(number);
      continue;
    }
    // every number larger (or equal) than the pivot is to the right
    right.push(number);
  }

  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}


module.exports = [quicksort];
