// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
   /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */
  // Copy the original array
  let copy = [...arr];

  // Create an array to store the sorted values

  let sorted = [null];

  // While the array is not empty:
  while (copy.length > 1) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','));
    // X Pop a value from the array
    let removedValue = copy.pop();

    // X Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);
    let index = sorted.length - 2;
    // X Walk through the sorted array in reverse order
    for (let i = sorted.length - 2; i >= 0; i--) {
      let leftValue = sorted[i - 1];

      if (leftValue > removedValue) {
        let tmp = leftValue;
        sorted[i] = removedValue;

      }
    }
  }

}

let arr = [2,4,6,8,1,3,5,7,9];



insertionSort(arr);
// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
}


module.exports = [insertionSort, insertionSortInPlace];
