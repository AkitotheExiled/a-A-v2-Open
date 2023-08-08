

function selectionSort(arr) {

  // Copy the original array
  let ogCopy = [...arr];
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while (ogCopy.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));
    let min = ogCopy[0];
    let minIdx = 0;
    for (let i = 1; i < ogCopy.length; i++) {
      let value = ogCopy[i];
    // Find the index of the minimum value in the unsorted half
      if (value < min) {
        min = value;
        minIdx = i;
      }
    }

    ogCopy.splice(minIdx, 1);
    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array
    sorted.push(min);
  }

  return sorted;
}



function selectionSortInPlace(arr) {
  debugger
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while (divider !== arr.length - 1) {
    // Do not move this console.log
    console.log(arr.join(","));
    let min = arr[divider];
    let minIdx = divider;

    for (let i = divider; i < arr.length; i++) {
      let value = arr[i];
    // Find the index of the minimum value in the unsorted half
      if (value < min) {
        min = value;
        minIdx = i;
      }
    }

    // Shift every unsorted value to the left of the min value to the right by 1

    for (let i = minIdx - 1; i > divider; i--) {
      let left = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = left;
    }

    let tmp = arr[divider];
    // Put the min value at the divider
    arr[divider] = min;
    arr[minIdx] = tmp;
    // Increment the divider and repeat
    divider++;
  }
  console.log(arr.join(","));
}

let arr = [3, 2, 0, 4, 1];

selectionSortInPlace(arr);


module.exports = [selectionSort, selectionSortInPlace];
