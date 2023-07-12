// What is a first class object??

/*

type supports same basic operations as other types.

i.e.  numbers, strings, booleans

Here are the basic operations,

1. Can be assigned to variables
2. Can be passed as arguments
3. can be return values


*/


// Functions are first class objects

// Whats an higher order function?
// Accept a func as an argument or return a function as a return value

let superAdd = function(num1, num2, cb) {
    let sum = num1 + num2;
    let result = cb(sum)
    return result;
}

let doubler = function(n) {
    return n * 2;
}

let squarer = function(n) {
    return n * n;
}

console.log(superAdd(3, 3, doubler));


// Multiple callbacks

let lesserResult = function(num, cb1, cb2) {
    let result1 = cb1(num);
    let result2 = cb2(num);

    if (result1 > result2) {
        return result2;
    }
    return result1;
}

console.log(lesserResult(5, doubler, squarer)); // 10

console.log(lesserResult(1, doubler, squarer));  // 1


// forEach method

let cats = ["sox", "charles"];

let myForEach = function (array, cb) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        cb(el, i, array);
    }
};

myForEach(cats, function(el, i, array) {
    console.log(el + ' is at index ' + i);

})


// Map Demo

let myMap = function(array, cb) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        newArr.push(cb(el, i, array));
    }

    return newArr;
}

let newCats = myMap(cats, function(el) {
    return el + "!!!";
})

console.log(newCats);


// Filter Demo

let myFilter = function(array, cb) {
    let newArr = [];

    for(let i = 0; i < array.length; i++) {
        let el = array[i];
        if (cb(el, i, array)) {
            newArr.push(el);
        }
    }

    return newArr;
}


let divTwo = function(el) {
    return el % 2 === 0;
}

let nums = [2, 6, 5, 8, 9, 11];
console.log(myFilter(nums, divTwo));


// Every Demo

let foods = ["fries", "burgers", "ramen", "apples"];

function containsE(ele) {
    return ele.includes("e");
}

let res = foods.every( function(ele) {
    return ele.includes("e");
})

let res2 = foods.every(containsE);

console.log(res);

let myEvery = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let el = array[i];

        if (cb(el, i, array) === false) {
            return false;
        }
    }

    return true;
}

let res3 = myEvery(foods, containsE);

console.log(res3);

let meow = function() {
    console.log("meow");
}

meow;
