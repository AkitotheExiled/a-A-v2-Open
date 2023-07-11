// Array Loop Methods

/*

1. Know what forEach, map, and filter do/accept
2. Convert a for loop to a forEach, map, filter, etc

*/


/* Developers will write a helper function to reduce loop complexity

*/

// Function to do stuff with an array element
const myFunction = function(item, index) {
    // Do something with 'item'
    // Use the 'index' as needed - e.g. special thing for first and/or last item
 }

 // Assume you've populated a variable named 'myArray' with a bunch of stuff
 const myArray = [1, 2, 3, 4, 5];

 // Now loop through the entire array
 for (let i=0; i<myArray.length; i++) {
     myFunction(myArray[i], i);
 }




 // How would forEach shorten this down??
 // (element, index)

// The initial value for total sales is zero
let totalSales = 0;

// Function to add a value to the total sales
const addToTotalSales = function (value) {
   totalSales += value;
}

// Some sales numbers to experiment with
const monthlySales = [1234, 2345, 3456, 4567, 5678];

// Loop through all sales numbers to add them to the total
for (let i=0; i<monthlySales.length; i++) {
    addToTotalSales(monthlySales[i]);
}

// Output the total to the console
console.log('Total Sales are', totalSales);
// Expected result: Total Sales are 17280



// This is also acceptable as well but not efficient(hint: see Array.reduce())

/*

// Loop through all sales numbers to add them to the total
monthlySales.forEach(function (value) {
    totalSales += value;
});

*/





// Introducing Map

// What is map? -> acts on every element within array and expects a return value to put into a new array
// (element, index)

const lifePhases = function(age) {
    if (age < 4) {
        return "Toddler";
    }
    if (age < 13) {
        return "Kid";
    }
    if (age < 18) {
        return "Teenager";
    }
    if (age < 64) {
        return "Adult";
    }

    return "Elder";
}


const ages = [1,4,9,16,18,44,99,125];

const phases = [];
for (let i = 0; i < ages.length; i++) {
    const age = ages[i];
    phases[i] = lifePhases(age);
}


console.log(phases);


const mapPhases = ages.map(lifePhases);


console.log(mapPhases);





// Intoducing Filter
// When do we use it?
// What if we wanted to find products that had a red color?

const products = [
    "T Shirt (black, red, white)",
    "505 Jeans (blue, light-blue)",
    "Collab Sweater (white, yellow, red)",
    "Low-top Shoes (black, red, white, green, etc)",
    "Socks (black, white)",
    "Hats (red, yellow, green, blue, black, etc)",
]

const redProducts = [];

for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if (product.indexOf("red") !== -1) {
        redProducts.push(product);
    }
}

console.log(redProducts);

// How would we filter red products using the filter method??

let isRed = function(product) {
    return product.indexOf("red") !== -1;
}


let redProd = products.filter(isRed);

console.log(redProd);


// TEST TIME!  Review the 3 loops and determine what they do

// A list of friends stored as an array of objects
const myFriends = [
    { firstname: 'Isma', lastname: 'Kirby', age: 27 },
    { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
    { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
    { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
    { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
    { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
    { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
    { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
    { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
    { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];

// Loop 1
let total = 0
myFriends.forEach(function (person) {
    const firstInitial = person.firstname.substring(0,1);
    const lastInitial = person.lastname.substring(0,1);
    person.initials = firstInitial + lastInitial;
    total += person.age;
});
// Updates the object to include persons initials, then totals ages of all the friends

// Loop 2
const average = total / myFriends.length;
const myOlderFriends = myFriends.filter(function(person) {
    return person.age > average;
});

// returns a new array that contains all people older than the average of friend group(aka oldies)


// Loop 3
const report = myOlderFriends.map(function(person) {
    return person.initials + ': ' + person.age;
});

// Output to log
console.log(report);

// Its going to return all the oldies initials + their age in a new array






// Array Reduce

/*

1. List the accepted arguments.
2. Explain accumulator and initialValue and their differences.
3. Use reduce to change an array into a single value.

*/

// What arguments does Reduce accept?
/*

1. A callback fn
2. An initialValue (optional)

*/

// a/A recommends including the initialValue to get consistent results & practice


// Example 1 -> Reusable parameter function

const sum = function (accumulator, currentValue) {
    return accumulator + currentValue;
}

let numbers = [0,4,2,4,-2];

let theSum = numbers.reduce(sum, 0);

console.log(theSum);

// Example 2 -> In-line parameter function
// You can also define the function within reduce
let number2 = [0, 3, 5, 2, -2];
let initialValue = 0;

let aSum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, initialValue);

console.log(aSum);


// Example 3 -> Wrapper Function
//  Useful pattern -> Enclose array.reduce inside another function
// Why?  -> You can pass the array and get the result throughout your program without having to worry about using reduce

const sumArr = function(array) {
    let initialValue = 0;

    return array.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, initialValue);
}

console.log(sumArr(number2));


/* Breaking down the callback function

1. accumulator
2. currentValue
3. index (optional)
4. value (optional)

1st ran reduce calls callback fn -> initialValue = accumulator, currentValue = array[0]
2nd iteration -> accumulator = accumulator + currentValue, currentValue = array[1]
etc

What if initialValue isn't provided??

It uses the arrays first element as the initial value.  currentValue then becomes the arrays second element.

IF WE CALL ON EMPTY ARRAY WITHOUT INITIALVALUE THIS CAN GIVE US UNDEFINED RESULT

*/

// TypeError - Reduce empty array with no initial value

let emptyNumbers = [];

let emptyArrSum = function(array) {
    return array.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })
}

/*
        console.log(emptyArrSum(emptyNumbers)); ==>     c:\Users\Michael Guest\Desktop\Coding\exercises\aao2\aa-projects\intarrays\advancedarraymethods.js:287
                                                            return array.reduce(function(accumulator, currentValue) {
                 ^

                                                            TypeError: Reduce of empty array with no initial value
                                                                at Array.reduce (<anonymous>)
                                                                at emptyArrSum (c:\Users\Michael Guest\Desktop\Coding\exercises\aao2\aa-projects\intarrays\advancedarraymethods.js:287:18)
                                                                at Object.<anonymous> (c:\Users\Michael Guest\Desktop\Coding\exercises\aao2\aa-projects\intarrays\advancedarraymethods.js:292:13)
                                                                at Module._compile (node:internal/modules/cjs/loader:1105:14)
                                                                at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
                                                                at Module.load (node:internal/modules/cjs/loader:981:32)
                                                                at Function.Module._load (node:internal/modules/cjs/loader:822:12)
                                                                at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
                                                                at node:internal/main/run_main_module:17:47

*/

// how do we prevent this??

let emptyArrSumFixed = function(array) {
    let initialValue = 0;
    
    return array.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, initialValue)
}

console.log(emptyArrSumFixed(emptyNumbers));
