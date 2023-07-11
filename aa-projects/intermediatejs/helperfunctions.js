// HELPER FUNCTIONS

// Decomposition and Abstraction
// We must break down our problem into managable chunks

// What is decomposition??

// Process of breaking down a large problem into smaller ones

function yellStrings(strings) {
    let yelledStrings = [];

    for (let i = 0; i < strings.length; i++) {
        string = strings[i];
        yelledStrings.push(yellStr(string));
    }

    return yelledStrings;
}

let yell = yellStrings(['hello', 'how', 'are', 'you?']);
console.log(yell); //=> ['HELLO!', 'HOW!', 'ARE!', 'YOU?!'];

// Now it seems like a lot.  But what if we broke this problem down and did just one word.

function yellStr(string) {
    yelled = string.toUpperCase() + "!";
    return yelled;
}

console.log(yellStr("bootcamp"));


// What about a more complicated problem? function laligatSum(n)


/*

// Write a function laligatSum(n) that takes in a number and returns the
// laligatSum of that number.
// A number's laligat sum is the the sum of all the prime numbers less than or
// equal to that number.

*/

let result1 = laligatSum(10);
console.log(result1); //=> 17

let result2 = laligatSum(11);
console.log(result2); //=>  28

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {

        let doesDivide = number % i === 0;

        if (doesDivide) {
            return false;
        }
    }

    return true;
}

function findPrimes(max) {
    let foundPrimes = [];

    for (let i = 2; i <= max; i++){

        if (isPrime(i)) {

            foundPrimes.push(i);
        }
    }

    return foundPrimes;
}

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        sum += number;
    }

    return sum;
}

function laligatSum(number) {
    let primes = findPrimes(number);

    return sumArray(primes);
}


// When to use helper functions ?

// Use best judgement and keep things simple.  If a function is getting hard to understand, separate it out





// What is a modular function?

// Simple functions

// What is abstraction?

// Hiding the details

// Your code here

