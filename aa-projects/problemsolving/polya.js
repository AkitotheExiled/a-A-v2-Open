// HOW TO SOLVE ANY PROBLEM?

// What are the steps?

/*

1. Understand the problem
2. Make a plan
3. Carry out the plan
4. Look back and improve the solution

*/


// Whats the most important step?  Understanding the problem...

/* Lets say you're given this problem to solve:

----
Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Input: [0,1,0,3,12] Output: [1,3,12,0,0]

* You must do this in-place without making a copy of the array.
* Minimize the total number of operations.
----

1. What is the problem asking you to do?
2. Can you restate the problem in your own words?
3. Do you understand all the words in the problem?
4. Do you have enough information to solve the problem?
5. Are there any constraints or edge cases to consider?

*/

/* Now lets make a plan.

1. Break down the problem into smaller steps
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

// EASIEST STEP OF THEM ALL

function moveZeros(nums) {
    // 1. Set a pointer to the last element in the array.
    let last = nums.length - 1;
    //2. Walk through each element of the array
    for (let i = 0; i < last ; i++) {
        if (nums[i] == 0) {
            // 3. If the element is zero, swap its position with the element at the pointer
            [nums[i], nums[last]] = [nums[last], nums[i]];

            last--;
        }
    }
    return nums;
}

function moveZeros(nums) {
    // 1. Set a pointer to the last element in the array.
    let last = nums.length - 1;
    nums.sort()
    //2. Walk through each element of the array
    for (let i = 0; i < last ; i++) {
        if (nums[i] == 0) {
            // 3. If the element is zero, swap its position with the element at the pointer
            [nums[i], nums[last]] = [nums[last], nums[i]];

            last--;
        }
    }
    return nums;
}


// PSUEDOWOODO Code

/*

1. What is this?
2. How to use it?
3. Additional tips/tricks

*/

// What is it?

/* Say we get the following:

Define a function isPrime(number) that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself.
*/

/*

1st Understand the problem

What is a prime number? Number divisble by 1 and itself

Goal -> return true if number is prime false if not
input -> number(integer)
output -> true or false (boolean)

edge cases? Negative numbers?

*/


/* Make a plan!

Check if number is greater than 2
Loop through numbers less than our given value
if it divides into our value evenly return false
if we don't find a number that does divide evenly then return true

*/

/* Carry out the plan */

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i ===0) {
            return false;
        }
    }
    return true;
}


// PITFALLS OF PSUEDO CODE

// 1. Removing the PSUEDOISM

// if number > 2


// 2. Overdoing it..

/*

// A number is prime if it has only two factors, itself and 1.
// So I will need to check all of the integers between the number and zero to see if the integer is a factor of my given number.
// But 0 might be problematic, because it doesn't have any factors. And 1 is definitely not prime.

// So first, I'll check to see if the number is greater than 2, and if it is....

*/




// COMMENTING YOUR CODE

/*

1. How to use comments -> Walkthrough, debug, optimize
2. Decide which to keep and which to remove
3. Explain code to teammates
*/

function isPrime(number) {          // number = 5
    if (number < 2) {                 // false
      return false;
    }

    let i = 2;                        // i = 2
    while (i < number) {              // true
      if (number % i === 0) {         // 5 % 2 === 0   false
        return false;
      }
      i++;                            // i = 3
    }

    return true;
  }

  //Cleaned up code..

  function isPrime(number) {
    // Base case: any numbers less than 2 are not prime
    if (number < 2) {
      return false;
    }

    let i = 2;  // start from base case
    while (i < number) {   // do not include the number itself
      if (number % i === 0) {   // check if i is a factor of the number
        return false;
      }
      i++;
    }

    // number must be prime if it has not met any of the above conditions
    return true;
  }




  // DEBUGGING BASICS
  /*

  1. Read the error message
  2. Use log statements to debug code
  3. Write tests to cover code and edge cases

  */

  // Heres an example

  /*

  function numSmallerThanTen(num) {
    if (number < 10) {
        return true;
    }
    return false;
  }

  /tmp/file.js:2
  if (num < 10) {
  ^

ReferenceError: num is not defined
    at numberSmallerThanTen (/tmp/file.js:2:3)

    */

    function longestName(names) {

        // Set the first name to be the longest
        let currentLongest = names[0];

        // Check each other name in the array starting from the second
        for (let i = 2 ; i < names.length ; i++) {

            // If the name we're checking is longer than our
            // current longest, set that name to be the new longest
            if (names[i].length > currentLongest.length) {
                currentLongest = names[i];
            }

        }

        return currentLongest;
    }

    testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
                 "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
                 "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

    console.log(longestName(testNames)); // "Christopher"
