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
    if (array.length === 0) {
        return -1;
    }

    let pop = array.pop();

    if (pop === target) {
        return array.length;
    } else {
        return myIndexOf(array, target);
    }


}


console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1

function myIndexOfIterative(array, target) {

    for (let i = 0; i < array.length; i++) {
        let value = array[i];

        if (value === target) return i;
    }

    return -1;
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.random() * (max - min) + min;
}

let n = 10000;
let randomIdx = random(0, n);
let arr = new Array(n);
arr[randomIdx] = "X";


console.time("recursive");
myIndexOf(arr, "X");
console.timeEnd("recursive");

console.time("iter");
myIndexOfIterative(arr, "X");
console.timeEnd("iter");

/*

1. O(n) time and space depending on if you use iterative or recursive solution
2. Iterative is the fastest with the recursive taking 1.08ms at 10000 length array and iterative taking 0.02
3. see 2

*/

function factorArray(array, number) {

    let factors = [];

    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (number % value === 0) {
            factors.push(value);
        }
    }

    return factors;
}

console.log(factorArray([2,3,4,5,6],20)); // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)); // => [5]
console.log(factorArray([10,15,20,25],5)); // => []


/*

1. O(n) time and space because we use a for loop.
2. We could use a recursive solution with a cache but I fear it would take more time
and be the same on subsequent calls
3. See 2

*/


function oddRange(end) {
    let Oddities = [];

    for (let i = 1; i <= end; i++) {
        if (i % 2 !== 0) Oddities.push(i);
    }

    return Oddities;
}

console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

/*

1. O(n) time and space because we use a for loop
2. Perhaps trying with a cache? -> implement cache
3. See 2.

*/

function reverseHyphenString(string) {
    let reversedStr = string.split("-");

    return reversedStr.reverse().join("-");
}

console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"

/*

1. O(2n) -> O(n)
2. Less code is better ->
3. See 2

*/


function intersect(arr1, arr2) {

    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        let val1 = arr1[i];

        if (arr2.includes(val1)) commonElements.push(val1);
    }

    return commonElements;
}



console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []

/*

1. O(n^2) time complexity, and o(n) space complexity
2. Perhaps using a hash table to see the values would bring us down to O(1) and O(n) in the worst case
3. We haven't learned hash tables YET

*/

function mirrorArray(array) {
    let mirror = [...array];

    return mirror.concat(array.reverse());
}

console.log(mirrorArray([1,2,3]));
  // => [ 1, 2, 3, 3, 2, 1 ]
  console.log(mirrorArray(['a', 'b', 'c', 'd']));
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]


/*

1. O(n * n) -> O(n) for time, and O(n) for space since we use reverse and spread
2. I'm not sure at this moment.
3. See 2.

*/


// 1. Separate the sentence into words
// 2. For each word, if its length 4 or more, check each character if its a vowel, remove it, else keep it
// 3. If its length is less than 4, keep the word as is
function isVowel(char) {
    return "aeiouAEIOU".includes(char);
}

function abbreviate(sentence) {
    let words = sentence.split(" ");
    let abb = [];

    let result = words.map(function(word) {
        if (word.length >= 4) {
            word = word.split("");
            let filtered = word.filter((char) => !isVowel(char));

            return filtered.join("");
        } else {
            return word;
        }
    })

    return result.join(" ");

}

console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'

/*

1. O(n^2) -> For time and space
2. Perhaps not having nested loops?
3. Implement it -> Can't figure out solution wihtout nested loops

*/

function adults(people) {
    let legalAdults = [];

    people.forEach(function(person) {
        if (person.age >= 18) {
            legalAdults.push(person.name);
        }
    })

    return legalAdults;
}

const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]


/*
1. Time complexity -> O(n^2) , Space complexity -> O(n) since we store an array of n elements
2. Not at this time
3. See 2
*/


function countScores(people) {
    let scoreKeeper = {};

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let name = person.name;
        let score = scoreKeeper[name] || 0;

        score += person.score;
        scoreKeeper[name] = score;
    }

    return scoreKeeper;
}

const ppl2 = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
console.log(countScores(ppl2)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

/*

1. O(n) as we have to iterate over an array, space-> O(n) since we hold an object with n elements
2. Not that I can think of at this time
3. See 2.

*/


function firstNPrimes(n) {
    let primes = [];
    let i = 2;

    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }

    return primes;
}

console.log(firstNPrimes(0));  // => []
console.log(firstNPrimes(1));  // => [2]
console.log(firstNPrimes(4));  // => [2, 3, 5, 7]


/*

1. o(n^2) since we're nesting our loops, space complexity is O(1) or O(n) if our primes array gets long enough
2. Not at this time
3. See 2.

*/

function peakFinder(array) {
    // What is a peak?
    // If the element is greater than its first or last neighbor it is a peak

    let peaks = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        let nextVal = array[i + 1];
        let previousVal = array[i - 1];
        if (i === 0) {
            if (val > nextVal) peaks.push(i);
        } else if (i === array.length - 1) {
            if (val > previousVal) peaks.push(i);
        } else {
            if (val > nextVal && val > previousVal) peaks.push(i);
        }
    }

    return peaks;
}

console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

/*

1. Time complexity -> O(n), Space complexity -> O(n) if peaks gets large
2. Not as this time.
3. See 2.

*/


function divisibleByThreePairSum(array) {
    let pairsIndicies = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let nextVal = array[j];
            let sum = val + nextVal;
            if (sum % 3 === 0) pairsIndicies.push([i, j]);
        }
    }

    return pairsIndicies;
}

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); // => [[1, 3]]

/*

1. Time complexity -> O(n^2), Space complexity -> O(n) if array gets up to N length
2. I cant think of a way to iterate through two arrays(trees) in less than O(n^2) given my current knowledge
3. See 2.
*/


function zipArray(arr1, arr2) {
    let zip = [];

    for (let i = 0; i < arr1.length; i++) {
        let slot = [arr1[i], arr2[i]];
        zip.push(slot);
    }

    return zip;
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

/*

1. Time complexity -> O(n), Space complexity -> O(n)
2. Recursive would probably have too much overhead.
3. See 2.

*/
function sumArr(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}
function twoDimensionalTotal(array) {
    let sum = 0;

    array.forEach((arr) => sum += sumArr(arr));

    return sum;
}

const arr3 = [
    [5, 2, 5, 3],
    [12, 13],
  ];

console.log(twoDimensionalTotal(arr3));  // => 40

  const arr4 = [
    [2],
    [1, 9],
    [1, 1, 1]
  ]

  console.log(twoDimensionalTotal(arr4));  // => 15

  /*

  1. Time complexity -> O(n^2), Space complexity -> O(1)
  2. Not at this time.
  3. See 2.

  */


function countInnerElement(arr) {
    let innerCount = {};

    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];

        for (let j = 0; j < subArr.length; j++) {
            let key = subArr[j];
            let value = innerCount[key] || 0;

            value++;
            innerCount[key] = value;
        }
    }

    return innerCount;
}

const arr5 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
  ]

console.log(countInnerElement(arr5));  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
const arr6 = [
    ['a','b','c','d'],
    ['a','b'],
    ['a','c','d','a']
  ]

console.log(countInnerElement(arr6));  // => {a: 4, b: 2, c: 2, d: 2}

/*
1. Time Complexity -> O(n^2), Space Complexity -> O(1)
2. Perhaps having the array already be a dictionary would be faster?
Looking up keys are O(1) where as doing it in an array is O(n)
3. See 2.

*/

function twoDiff(array) {
    let pairs = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let nextVal = array[j];

            if (Math.abs(val - nextVal) === 2) pairs.push([i, j]);
        }
    }
    return pairs;
}

console.log(twoDiff([2, 3, 4, 6, 1, 7]));  // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]));  // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([]));  // => []


/*

1. Time Complexity -> O(n^2), Space Complexity -> O(1)
2. Not at this time
3. See 2.

*/
function arrayDiff2(arr1, arr2) {
    let diff = {};

    for (let i = 0; i < arr1.length; i++) {
        let val = arr1[i];

        if (!arr2.includes(val)) diff[val] = 0;
    }

    return Object.keys(diff);
}

function arrayDiff(arr1, arr2) {
    let diff = [];

    for (let i = 0; i < arr1.length; i++) {
        let val = arr1[i];

        if (!arr2.includes(val)) diff.push(val);
    }

    return diff;
}

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
console.log(arrayDiff(array1, array2));  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']

arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']


/*

1. Time Complexity -> O(n), Space Complexity -> O(1)
2. Using an object to hold the values and returning its keys gives us  0.008ms vs 0.024ms when using an array
BUT -> When N is large -> 10m, arrayDiff gives us 267ms vs 1.895s
3. See 2.

*/

function valueCounter(obj, val) {
    let count = 0;

    let values = Object.values(obj);

    for (let value of values) {
        if (val === value) count++;
    }

    return count;
}


const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
console.log(valueCounter(obj1, 'Anne'));  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
valueCounter(pairs, 'Roman')  // => 2

/*

1. Time Complexity -> O(n), Space Complexity O(1)
2. Perhaps if our object was switched where the key was the value, we could see how many times its look up returns a value
3. See 2.

*/



function elementCount(array) {
    let counted = {};

    for (let i = 0; i < array.length; i++) {
        let key = array[i];
        let count = counted[key] || 0;

        count = count + 1;

        counted[key] = count;
    }

    return counted;
}


console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

/*

1. Time Complexity -> O(n), Time Complexity -> O(1) best case, O(n) worst case for the obj
2. How to know an arrays values without looping..
3. See 2.

*/


function nextTwoPrimes(num) {
    let primes = [];

    for (let i = num + 1; primes.length < 2; i++) {
        if (isPrime(i)) primes.push(i);
    }

    return primes;
}


console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
nextTwoPrimes(3);  // => [ 5, 7 ]
nextTwoPrimes(7);  // => [ 11, 13 ]
nextTwoPrimes(8);  // => [ 11, 13 ]
nextTwoPrimes(20);  // => [ 23, 29 ]
nextTwoPrimes(97);  // => [ 101, 103 ]

/*

1. Time Complexity -> O(n^2), Space Complexity -> O(1)
2. Look up -> Sieve of Eratosthenes
3. I'm not sure if I want to do it..

*/

function pairProduct(arr, num) {

    let pairs = [];

    let count = 0;
    while (count < arr.length) {
        let innerCount = count + 1;
        let val = arr[count];

        while (innerCount < arr.length) {
            let nextVal = arr[innerCount];

            if (val * nextVal === num) pairs.push([count, innerCount]);
            innerCount++;
        }
        count++;
    }

    return pairs;
}


console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]

/*

1. Time complexity - O(n^2), Space complexity - O(1) or O(n) if pairs gets N elements
2. Running two loops back to back instead of nested
3. See 2.

*/



const sumSize = function(a, b) {
    a = a.length || a;
    b = b.length || b;

    return a + b;
}
function twoDimensionalSize(arr) {
    return arr.reduce(sumSize);
}

const arr7 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
console.log(twoDimensionalSize(arr7));  // => 9

  const arr8 = [
    ['a'],
    ['b', 'c', 'd', 'e']
  ];
console.log(twoDimensionalSize(arr8));  // => 5

/*

1. Time Complexity -> O(n), Space Complexity -> O(1)
2. Using for/while loops, but I believe reduce is faster
3. See 2.

*/


function longWordCount(string) {
    if (string.length === 0) return 0;

    let words = string.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 7) count++;

    }


    return count;
}

console.log(longWordCount(""));  // => 0
longWordCount("short words only");  // => 0
longWordCount("one reallylong word");  // => 1
longWordCount("two reallylong words inthisstring");  // => 2
console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
longWordCount("seventy schfifty five");  // => 1


/*

1. Time complexity -> O(n), Space Complexity -> O(1)
2.  If we didn't use a for loop... It could be faster
3. See 2.

*/


function factorial(n) {
    let fact = 1;

    for (let i = n; i > 0; i--) {
        fact *= i;
    }

    return fact;
}

console.log(factorial(1));  // => 1
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
console.log(factorial(10));  // => 3628800

/*

1. Time Complexity -> O(n), Space Complexity -> O(1)
2. Yes.  There exists a Fast Factorial Function that uses bits to calculate the factorial
http://www.luschny.de/math/factorial/FastFactorialFunctions.htm
3. I'd rather not.  We haven't covered bits yet.

*/

function lcm(num1, num2) {
    for (let i = 1; i <= 20; i++) {
        let lcm = i * num2;

        if (lcm % num1 === 0) {
            return lcm;
        }
    }
}

console.log(lcm(2, 3));  // => 6
console.log(lcm(6, 10));  // => 30
console.log(lcm(24, 26));  // => 312

function isVowel(char) {
    return "aeiouAEIOU".includes(char);
}

function removeFirstVowel(string) {
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (isVowel(char)) {
            string[i] = "";
            break;
        }
    }

    return string;
}
function hipsterfyWord(word) {
    let reverse = word.split("").reverse();

    let forward = removeFirstVowel(reverse).reverse().join("");

    return forward;
}

/*

1. Time Complexity -> o(n) since we have nested loops. Spec Complexity -> O(1)
2. Besides making things into bits?  I suppose we could store an object with all words and their last vowels removed
so if a sentence has a word that we already used we just pull the value at O(1)
3. Hmmm

*/

console.log(hipsterfyWord('proper')); // => 'propr'
console.log(hipsterfyWord('tonic')); // => 'tonc'
console.log(hipsterfyWord('PANTHER')); // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')); // => 'BACKWRDS'


function hipsterfy(sentence) {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        let hippy = hipsterfyWord(word);

        words[i] = hippy;
    }

    return words.join(" ");
}


/*

1. Time Complexity -> o(n^2) since we have nested loops. Spec Complexity -> O(1)
2. Besides making things into bits?  I suppose we could store an object with all words and their last vowels removed
so if a sentence has a word that we already used we just pull the value at O(1)
3. Hmmm

*/


console.log(hipsterfy("proper"));;  // => "propr"
hipsterfy("proper tonic panther");  // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
hipsterfy("runner anaconda");  // => "runnr anacond"
hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

function repeatChar(char, repeat) {
    let repeated = "";

    if (repeat <= 1) return char;

    repeated += char;

    repeated += repeatChar(char, repeat - 1);

    return repeated;
}


function objectToString(obj) {
    let str = "";

    for (let [key, value] of Object.entries(obj)) {
        str += repeatChar(key, value);
    }

    return str;
}

console.log(objectToString({ a : 2, b: 4, c: 1 })); // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // => 'boot'

/*

1. Time Complexity -> O(n^2), Space Complexity -> O(1)
2. Perhaps by changing repeat char into using bits we could make it faster.  But,
would our decode/encode+repeat function of bits be faster than our current setup?
3. See 2.

*/


function shortestWord(sentence) {
    return sentence.split(" ").sort((a, b) => a.length - b.length)[0];
}

console.log(shortestWord('app academy is cool')); // => 'is'
console.log(shortestWord('programming bootcamp')); // => 'bootcamp'


/*

1. Time complexity -> O(n), Space Complexity -> O(1)
2. We could compare bits instead of characters... Need to figure out how to convert chars to bits
3. See 2.

*/

let binaryTable = {"a": 0b01100001, "b": 0b01100010, "c": 0b01100011, "d": 0b01100100, "e": 0b01100101,
"f": 0b01100110, "g": 0b01100111, "h": 0b01101000, "i": 0b01101001, "j": 0b01101010, "k": 0b01101011,
"l": 0b01101100, "m": 0b01101101, "n": 0b01101110, "o": 0b01101111, "p": 0b01110000, "q": 0b01110001,
"r": 0b01110010, "s": 0b01110011, "t": 0b01110100, "u": 0b01110101, "v": 0b01110110, "w": 0b01110111,
"x": 0b01111000, "y": 0b01111001, "z": 0b01111010, " ": 0b10000001};


function greatestCommonFactor(num1, num2) {
    let gcm = 1;

    for (let i = 2; i < num1; i++) {
        let div1 = num1 % i === 0;
        let div2 = num2 % i === 0;

        if (div1 && div2) gcm = i;
    }

    return gcm;
}

console.log(greatestCommonFactor(15, 25)); // => 5
greatestCommonFactor(16, 24) // => 8
greatestCommonFactor(7, 11) // => 1


/*

1. Time complexity -> O(m) m < n, Space complexity = O(1)
2. Euclidean algorithm and is an order of magnitudes faster
3. See 2.

*/

// Euclidean algorithm

function gcd(num1, num2) {
    if (num1 === 0) return num2;
    if (num2 === 0) return num1;

    let remainder = num1 % num2;
    return gcd(num2, remainder);
}

console.log(gcd(15, 25));

let x = 15000000;
let y = 17500000;
console.time("gcd");
greatestCommonFactor(x, y);
console.timeEnd("gcd");

console.time("gcd");
gcd(x, y);
console.timeEnd("gcd");

function isPassing(assessments) {
    let avgPassing = 70;

    let avg = 0;

    for (let i = 0; i < assessments.length; i++) {
        let score = assessments[i].score;
        avg += score;
    }

    return (avg / assessments.length) >= avgPassing;
}


const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
  ];

console.log(isPassing(assessments1)); // => true
  const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
  ];

console.log(isPassing(assessments2)); // => false

/*

1. Time Complexity -> O(n), Space complexity -> O(1)
2. I still haven't figured out how to iterate in less than O(n) time
3. See 2.

*/

function valueConcat(arr, obj) {
    let concat = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let otherVal = obj[value] || "";
        value = value + otherVal;
        // if (Object.keys(obj).includes(value)) {
        //     concat.push(value + obj[value]);
        //     continue;
        // }
        concat.push(value);
    }

    return concat;
}


const arr9 = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
console.log(valueConcat(arr9, obj)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })); // => [ 'a', 'b2', 'c3' ]

/*

1. Time complexity -> O(n), Space complexity -> O(n)
2. Already done
3. See 2.

*/


function threeInARow(arr) {
    if (arr.length < 3) return false;

    for (let i = 1; i <= arr.length - 2; i += 2) {
        let prev = arr[i - 1];
        let curr = arr[i];
        let next = arr[i + 1];

        if ((prev === curr) && (prev === next)) return true;
    }

    return false;
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

/*

1. Time complexity -> O(n) , Time complexity -> O(1)
2. I would need an algorithm that checks for equality between integers,
using bits instead of decimals would be quicker but we're still iterating through an array
3. See 2.

*/

console.time("tr");
threeInARow([4, 3, 7, 7, 7, 13, 8]);
console.timeEnd("tr");

console.time("tr");
threeInARow([0b00110100, 0b00110011, 0b00110111, 0b00110111, 0b00110111, 0b01000100, 0b00111000]);
console.timeEnd("tr");

function toCapital(string) {
    return string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();
}
function variableNameify(words) {
    let varible = "";
    varible += words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        varible += toCapital(words[i]);
    }

    return varible;
}

console.log(variableNameify(['is', 'prime'])); // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])); // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])); // => 'maxValue'

/*

1. Time complexity -> O(n^2), Space complexity -> O(1)
2. Reduce the amount of toUppercase and LowerCase we're doing
3. See 2.

*/

function threeIncreasing(arr) {
    if (arr.length < 3) return false;

    for (let i = 1; i <= arr.length - 2; i += 2) {
        let prev = arr[i - 1];
        let curr = arr[i];
        let next = arr[i + 1];

        if ((curr - prev === 1) && (next - curr === 1)) return true;
    }

    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false


function reverse2D(array) {
    let twoD = [];

    for (let i = array.length - 1; i >= 0; i--) {
        twoD = twoD.concat(array[i].reverse());
    }

    return twoD.join("");
}

const arr10 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
  ];

console.log(reverse2D(arr10)); // => 'ihgfedcba'
  const arr11 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
  ];
console.log(reverse2D(arr11)); // => 'PatrickOscarMikeMattJulian'

/*

1. Time complexity -> O(n^2), Space Complexity -> O(3n) -> O(n)
2. I need to find a way to reduce one of my loops and that would give me O(n)
3. See 2.

*/

function reverb(word) {

    let vowelIdx = word.length;
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];

        if (isVowel(char)) {
            vowelIdx = i;
            break;
        }

    }

    return word + word.slice(vowelIdx, word.length);
}

console.log(reverb('running'));  // => 'runninging'
console.log(reverb('wild'));  // => 'wildild'
console.log(reverb('debugged'));  // => 'debuggeded'
console.log(reverb('my'));  // => 'my'


/*

1. Time complexity -> O(n^2) , Space complexity -> O(1)
2. Not at this time...
3. See 2.

*/

function countRepeats(string) {
    let repeats = {};

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        let otherRepeats = string.substring(i + 1, string.length).indexOf(char) !== -1;

        if (otherRepeats) repeats[char] = 1;
    }

    return Object.keys(repeats).length;
}

console.log(countRepeats('calvin')); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1
countRepeats('mississippi'); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4

/*
1. Time complexity -> O(n), Space complexity -> O(m) where m is the repeats we're holding
2. If it were bits we were finding the repeats of, it would be faster
3. See 2.

*/

function pairsToString(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i][0];
        let amt =  arr[i][1];

        word += char.repeat(amt);
    }

    return word;
}


const array12 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
  ];
console.log(pairsToString(array12));  // => 'aaabcc'

  const array14 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
  ];
console.log(pairsToString(array14));  // => 'food!'

/*

1. Time complexity => O(n^2), space complexity -> O(n)
2.  Yes, a SO recommended a algorthim by wnrph that is faster than repeat..
3. See 2.

3a. SO answer is .100ms faster when n = 10million
*/

function repeat(pattern, count) {
    if (count < 1) return '';

    let result = '';

    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }

    return result + pattern;
}

function pairsToString2(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i][0];
        let amt =  arr[i][1];

        word += repeat(char, amt);
    }

    return word;
}




// [ ] that contains n elements,
// [character, random int] <- n element
n = 10000000;
let testArray = new Array(n).fill(["a", 2]);


console.time("repeat");
pairsToString(testArray);  // => 'aaabcc'
console.timeEnd("repeat");

console.time("Stackoverflow: repeat");
pairsToString2(testArray);  // => 'aaabcc'
console.timeEnd("Stackoverflow: repeat");


function countAdjacentSums(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextVal = arr[j];

            if (val + nextVal === n) count++;
        }
    }
    return count;
}


console.log(countAdjacentSums([1, 5, 1], 6)); // => 2
countAdjacentSums([7, 2, 4, 6], 7) // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // => 3

/*

1. Time complexity -> O(n^2), Space complexity -> O(1)
2. Reducing the amount of loops down to 1 would increase the speed greatly
3. See 2.

*/

function isNeg(num) {
    return num <= 0;
}



function signFlipCount(nums) {
    let flipCount = 0;

    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i - 1];
        let curr = nums[i];
        let prevSign = isNeg(prev);
        let currSign = isNeg(curr);

        if ((prevSign && !currSign) || (!prevSign && currSign)) flipCount++;

    }

    return flipCount;
}
console.log("SIGNFLIP");
console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

/*

1. Time complexity -> O(n), Space complexity -> O(1)
2. Not at this time
3. See 2.

*/

function powerSequence(base, length) {
    let arr = [];
    let power = 1;
    while (arr.length < length) {
        arr.push(base ** power)
        power++;
    }

    return arr;
}


console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]


/*
1. Time complexity -> O(n) as length increases, Space complexity -> O(N)
2. Not at this time
3. See 2.

*/


function collapseString(str) {
    let string = {};

    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        let uniqueLetters = string[key] || 0;
        if (uniqueLetters !== 0) continue;

        string[key] = 1;
    }

    return Object.keys(string).join("");
}

console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello   app academy')); // => 'helo ap academy'


/*

1. Time complexity -> O(n), Space Complexity -> O(n)
2. Faster than the alternative which is two arrays or one array one string
3. See 2.

*/

function oddWordsOut(sentence) {
    let words = sentence.split(" ");

    let result = words.filter(word => word.length % 2 === 0);
    return result.join(" ");
}


console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'


/*

1. Time complexity -> O(n), Space complexity -> O(n)
2. If we can do it without using a loop
3. See 2.

*/

function mindPsAndQs(string) {
    let curStreak = 0;
    let longestStreak = 0;

    for (let i = 0; i < string.length; i++) {
        let curVal = string[i];
        let nextVal = string[i + 1];


        if ((curVal === "P" || curVal === "Q")) {
            curStreak++;
            if (longestStreak < curStreak) longestStreak = curStreak;
            continue;
        }
        curStreak = 0;
    }

    return longestStreak;
}


console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5


/*

1. Time complexity -> O(n), space complexity - O(1)
2. Perhaps if we can reduce our if/else statements
3. See 2.

*/


function commonFactors(num1, num2) {
    let cf = [1];

    for (let i = 2; i <= num2 / 2; i++) {
        let div1 = num1 % i === 0;
        let div2 = num2 % i === 0;

        if (div1 && div2) cf.push(i);
    }

    return cf;
}


console.log(commonFactors(12, 50));  // => [ 1, 2 ]
console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22));  // => [ 1, 11 ]
console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]
/*

1.
2. Sigh... We can use Euclidean to find the GCD, then we must factor that into a product of powers
then generate the common factors by iterating over the incremented exponents...

https://math.stackexchange.com/questions/2576881/find-common-factors-of-any-two-numbers

I don't know enough Math to attempt this one

*/


function commonPrimeFactors(num1, num2) {
    let cf = commonFactors(num1, num2);
    let filtered = cf.filter(factor => isPrime(factor) && factor !== 1);

    return filtered;
}


console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
console.log(commonPrimeFactors(11,22));  // => [ 11 ]
console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]


/*

1. Time -> O(n^2), Space -> O(n)
2. See above.  It may be easier to find the commonPrimeFactors
3. No

*/

function splitHalfArray(array) {
    if (array.length % 2 !== 0) {
        let half = Math.floor(array.length / 2);

        return [array.slice(0, half), array.slice(half + 1, array.length)];
    }
    let half = Math.floor(array.length / 2);

    return [array.slice(0, half), array.slice(half, array.length)];
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
  // => [ [ 1, 2 ], [ 4, 5 ] ]

 console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]


/*
1. Time complexity -> O(n), Space complexity -> O(1)
2. Unless we can reduce the slice portion...
3. See 2.

*/


function threeUniqueVowels(str) {
    let foundVowels = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (isVowel(char)) {
            foundVowels[char] = 1;
        }
    }

    return Object.keys(foundVowels).length >= 3;
}

console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dog'));  // => false
console.log(threeUniqueVowels('go home'));  // => false


/*

1. Time complexity -> O(n^2), Space Complexity -> O(n) n = primes in word
2. If we can reduce it down to one for loop
3. See 2.

*/

function vowelShift(str) {
    let VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let shifted = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isV = VOWELS.includes(char);

        if (isV) {
            let vowelIdx = VOWELS.findIndex(ele => ele === char);

            vowelIdx++;
            if (vowelIdx > 4) vowelIdx = 0;

            shifted += VOWELS[vowelIdx];
            continue;
        }

        shifted += char;
    }

    return shifted;
}
console.log(vowelShift('bootcamp'));  // => 'buutcemp'
console.log(vowelShift('hello world'));  // => 'hillu wurld'
console.log(vowelShift('on the hunt'));  // => 'un thi hant'

/*

1. Time complexity -> O(n^2), Space complexity -> O(1)
2. None at this time.  Perhaps using bits
3. See 2.

*/

function hasSymmetry(array) {
    let halves = splitHalfArray(array);
    let firstHalf = halves[0];
    let secondHalf = halves[1];

    for (let i = 0; i < firstHalf.length; i++) {
        let end = firstHalf.length - 1;
        let endIndex = end - i;
        let val = firstHalf[i];
        let otherVal = secondHalf[endIndex];

        if (val !== otherVal) return false;
    }

    return true;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // => false


/*

1. Time complexity -> O(n), space complexity -> O(n)
2. Not at this time
3. See 2.

*/


function evenSumArray(arr) {
    let sums = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let val  = arr[i];
        for (let j = 1; j <= val; j++) {
            if (j % 2 === 0) sum += j;
        }
        sums.push(sum);
    }
    return sums;
}

console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]

/*

1. Time C -> O(n^2), Space C -> O(n)
2. If we can reduce the inner nested loop
3. See 2.

*/

function numsToWords(numString) {
    let nums = {"0": "Zero", "1": "One", "2": "Two", "3": "Three",
                "4": "Four", "5": "Five", "6": "Six", "7": "Seven",
                "8": "Eight", "9": "Nine"};

    let string = "";
    for (let i = 0; i < numString.length; i++) {
        string += nums[numString[i]];
    }

    return string;
}

console.log(numsToWords('42')); // => 'FourTwo'
console.log(numsToWords('123')); // => 'OneTwoThree'
console.log(numsToWords('159598')); // => 'OneFiveNineFiveNineEight'

/*

1. T O(n), S O(1)
2. If we could somehow remove the for loop
3. See 2.

*/

function moreDotLessDash(sentence) {
    let obj = {".": 0, "-": 0};

    for (let i = 0; i < sentence.length; i++) {
        let value = obj[sentence[i]] || 0;
        value++;
        obj[sentence[i]] = value;
    }

    return obj["."] > obj["-"];
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false

/*

1. T -> O(n), S O(n)
2. Filter vs our for loop
3. See 2.

*/
