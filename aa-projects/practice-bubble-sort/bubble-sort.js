
function bubbleSort(arr) {

    // Iterate through the array
  let hasSwap = false;
  for (let i = 0; i < arr.length; i++) {
    // If the current value is greater than its neighbor to the right
        // Swap those values
    let current = arr[i];
    let neighbor = arr[i + 1];


    if (current > neighbor) {
      let tmp = current;
      arr[i] = neighbor;
      arr[i + 1] = tmp;
      hasSwap = true;
      console.log(arr.join(","));
    }
  }

    // Do not move this console.log


    // If you get to the end of the array and no swaps have occurred, return
    if (!hasSwap) return arr;

    return bubbleSort(arr);
    // Otherwise, repeat from the beginning

}
let arr = [2,4,6,8,1,3,5,7,9];

bubbleSort(arr);

module.exports = bubbleSort;
