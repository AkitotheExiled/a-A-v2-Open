function linearSearch(arr, target) {

  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;
  let midpoint;
  let midValue;

  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices

    midpoint = Math.floor((high + low) / 2);
    midValue = arr[midpoint];
    // Compare the target value to the midpoint value

    if (target === midValue) return midpoint;
    // If the target equals the midpoint...
      // Return the midpoint index

    if (target > midValue) {
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      low = midpoint + 1;
    } else {
      high = midpoint - 1;
    }
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1




  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

module.exports = [linearSearch, binarySearch]
