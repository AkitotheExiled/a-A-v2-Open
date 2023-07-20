/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.

 function getsubsets(array) {
  const subsets = [[]];

  for (const el of array) {
    const last = subsets.length - 1;
    for (let i = 0; i<= last; i++) {
      subsets.push([...subsets[i], el]);
    }
  }
  return subsets;
 }
***********************************************************************/

/*
----

1. What is the problem asking you to do?
--- Asking for all subsets of an array

2. Can you restate the problem in your own words?
--- Given an array, can you return a new array where every element is a subset of our given array.

i.e. [1] -> [[], [1]]

3. Do you understand all the words in the problem?
--- array, subset, set --- Array is an ordered collection starting at index 0, Subset is a part of a larger group of items, Set is a group of items

4. Do you have enough information to solve the problem?
--- I think so....

5. Are there any constraints or edge cases to consider?
--- Handling an empty set?

*/

/* Now lets make a plan.

1. Break down the problem into smaller steps
--- Given an array: [1], return subsets of that array.
------ Go over each element inside the array
---------- push it into each existing element in our subset - [[]]

2. Draw out the problem
3. Solve a simpler version of the problem
4. Look for patterns
5. Work backwards
6. Guess n Check

Heres our plan
----
1. Set a pointer to the last element in the array.
2. Walk through each element of the array.
3. If the element is zero, swap its position with the element at the pointer,
   then decrement the pointer.
----

*/

// Lets carry out the plan

// your code here
// my recursive case steps
// save a copy of the last value of the original array, and create a shortened copy of the array without the last value
// recursively call my function on the shortened array and store what it returns
// go through the returned array and for each inner array it has
     // put the inner array into my output array I am building
     // make a copy of the inner array and tack the last value I saved onto the end
     // put this copy + last value into the output array
// return the output array I built (edited)

// const lastValue = set[set.length - 1];
//   const shortenedCopy = set.slice(0, -1);

//   const result = subsets(shortenedCopy);

//   const output = [];
//   for (const value of result) {
//     if (Array.isArray(value)) {
//       output.push(value);
//       const innerCopy = [...value].push(lastValue);
//       output.push(innerCopy);
//     }
//   }
//   return output;


function subsets(set) {

  if (set.length === 0) {
    return [[]];
  }
  let n = [];
  let value = set[0];
  let nMinus1 = subsets(set.slice(1));

  for (let item of nMinus1) {
    const itemCopy = [...item];
    itemCopy.unshift(value);
    n.push(item);
    n.push(itemCopy);
  }

  return n;

}

console.log(subsets([1, 2, 3])); // [[], [1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
