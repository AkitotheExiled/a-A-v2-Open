/*

1. Understand the problem
2. Devise a plan
3. Carry out the plan
4. Look back and refactor if necessary

---1. Determine and explain -> time and space complexity
---2. Discuss potential for an optimal solution
---3. If an optimal solution is discussed, implement that solution

*/

function logBetween(lowNum, highNum) {
    if (lowNum > highNum) return;

    let arr = [];

    for (let i = lowNum; i <= highNum; i++) {
        arr.push(i);
    }

    return arr;

}

console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]

/*

1. T - > O(n)
   S ->  O(n)

2. The other solution is recursive, it takes up O(n^2) time complexity
that comes down to O(n) with O(m*n) space.
3. No

*/

function logBetweenStepper(min, max, step) {
    if (min > max) return;

    let arr = [];

    for (let i = min; i <= max; i+=step) {
        arr.push(i);
    }

    return arr;
}


console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]

/*

1. T -> O(x steps between m-n)
   S -> O(n) since we're using a for loop to hold n items of an array

2. Optimal solution could be to try using a cache.  For subsequent calls the cache
would be quicker because it already has the items it needs
3. Ok...

*/
function logBetweenStepperRecursive(min, max, step) {
    if (min > max) return [];

    let arr = [min];

    arr = arr.concat(logBetweenStepperRecursive(min + 1, max, step));

    return arr;

}

console.log(logBetweenStepperRecursive(5, 9, 1));

// function logBetweenStepperOptimal(min, max, step, cache = {}) {
//     if (step in cache) return cache[step];

//     cache[step] = logBetweenStepperRecursive(min, max);
// }

function printReverse(min, max) {
    if (min > max) return;

    let arr = [];

    for (let i = max - 1; i > min; i--) {
        arr.push(i);
    }

    return arr;
}

console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]

/*

1. O(n) for n elements
2. You COULD use a cache.  But one would need to figure out how to obtain a slice
out of the cache without using slice. -> Perhaps Hashing would be better?  Although I
haven't learned it at this stage in the course
3. See 2.

*/

function fizzBuzz(max) {

    let fizzed = [];

    for (let i = 3; i < max; i++) {
        let divBy3 = i % 3 === 0;  // Check if I is divisble by 3
        let divBy5 = i % 5 === 0; // check if I is divisble by 5

        if ((divBy3 || divBy5) && !(divBy3 && divBy5)) { // Divisible by 3 or 5 but not both
            fizzed.push(i); // put into array
        }
    }

    return fizzed;
}


console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

/*

1. O(n) because we use a for loop
2. If we were going to call fizzbuzz multiple times, we would consider a cache.
3. :/

I.E. fizzBuzz(20)

Can be calculated by doing
fizzBuzz(19) + fizzBuzz(18), etc
Then we hold the results of those fizz buzzes in a cache

Then if we need t ocall fizzBuzz(5) -> immediately pulls [3, 5]

*/

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true


/*

1. O(n) worse case scenario, best case scenario is if n is 2 and it returns true immediately
2. I don't think so
3. see 2.

*/


function  maxValue(arr) {
    if (arr.length === 0) return null;

    let potMax = arr.pop();
    let remainingValues = maxValue(arr);
    if (potMax < remainingValues) {
        potMax = remainingValues;
    }

    return potMax;

}

console.log(maxValue([12, 6, 43, 2]));  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43

/*

1. O(m * n) for space complexity and O(n) for time
2. Not at this time.
3. see 2

*/

function myIndexOf(array, target) {
    if (array.length === 1) {
        
    }
}
