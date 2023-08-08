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
  debugger
  let ogCopy = [...arr];

  // Create an array to store the sorted values

  let sorted = [];

  // While the array is not empty:
  while (ogCopy.length > 0) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','));
    // X Pop a value from the array
    let removedValue = ogCopy.pop();

    // X Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);

    // X Walk through the sorted array in reverse order
    let index = sorted.length - 1;
    while (removedValue) {
      if (sorted.length === 1) {
        sorted[index] = removedValue;
        removedValue = null;
      } else {

        let currentValue = sorted[index];
        let valueToLeft = sorted[index - 1];

        if (valueToLeft < removedValue || valueToLeft === undefined) {
          sorted[index] = removedValue;
          removedValue = null;

        } else {
          let tmp = valueToLeft;
          sorted[index - 1] = currentValue;
          sorted[index] = tmp;
        }
        index--;
      }

    }

  }

  return sorted;
}


// for (let i = sorted.length - 1; i > 0; i--) {

    //   let currentValue = sorted[i];
    //   let valueToLeft = sorted[i - 1];

    //   if (valueToLeft < removedValue) {
    //     sorted[i] = removedValue;
    //     break;

    //   } else {
    //     let tmp = valueToLeft;
    //     sorted[i - 1] = currentValue;
    //     sorted[i] = tmp;
    //   }
    // }



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

  let divider = 1;
  let end = arr.length - 1;
  let index = 0;

  while (divider !== end) {
    console.log(arr.join(','));
    let tmp = arr[divider];

    while (index < divider) {
      let nextVal = arr[index];

      if (nextVal > tmp) {
        let placeholder = arr[index];
        arr[index] = tmp;
        tmp = placeholder;

      }
      index++;
    }
    arr[divider] = tmp;
    index = 0;
    divider++;
  }
  console.log(arr.join(","));
}

let arr = [2,4,6,8,1,3,5,7,9];

insertionSortInPlace(arr);


module.exports = [insertionSort, insertionSortInPlace];
