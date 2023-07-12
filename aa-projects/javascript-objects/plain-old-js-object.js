// The Object Type

// What is an object??

/*

An object is a data structure that stores data

*/

/*

1. Create objects
2. Identify that an object is a unordered collection
3. Key using bracket and dot notation
4. Set a ket using bracket notation
5. Checking if a key already exists
6. Understand how object precendence fits in with dot notation

*/

// The object of my affections

//  How are objects different from arrays??

/*

1. Objects are indexed using keys not numbers
2. Order is not guaranteed with an object

*/

// How do we define an object?

/*

Curly braces => { }

*/

let car = { };

// FUN FACT: POJO -> Plain Old Javascript Object





// Setting Keys and Values

car["color"] = "Black";
car["seats"] = 4;

console.log(car);


// Keys without values??

console.log(car["type"]);

/*

We get undefined -> aka unassigned variables

*/

// How do we check if a key exists in an object??

console.log("color" in car);
console.log("weight" in car);

/*

Using the in keyword

*/

// Using variables as keys

let variable = "color";

console.log(variable);

console.log(car[variable]);

/*

Variables always evaluate to the value we assigned it



*/


// Why is this important??

/*

Variables can change, thus we can use keys for our object that can be changed

*/

variable = "weight";
console.log(car[variable]);


// We can now use it to set a new variable

car[variable] = 1000;





// Using different notations

let dog = {};
dog.speak = "bowowowow";

console.log(dog.speak);

console.log(dog);



// Bracket Vs Dot Notation

/*

Dot

1. Easier to read
2. Easier to write
3. **CANNOT use variables as keys**
4. keys cannot use a number as first character.. dog.1bark NO!

Bracket

1. Can use variables as keys
2. Can do dog['1bark']

*/

// We can keep both in our tool belt

dog.name = 'bido';

let myKey = 'name';

console.log(dog);
console.log(dog[myKey]);

// we cannot do dog.myKey as it won't recognize it :(

console.log(dog.myKey); // => undefined :/

dog.myKey = "???";

console.log(dog);

console.log(dog.myKey);





// Putting it all together

let myCat = {
    name: "Charles",
    type: "Feline",
    age: "2",
    favoriteToys: ["ball", "string", "brother"]
}

console.log(myCat);

console.log(myCat.type);




// Operator Precedence revisted < ---------------------------------------------

// Right-associativity

a = b = 1;

/*

1. Variable b assigned as 1
2. Variable a assigned as b = 1
3. b = 1 returns the 1 value, so now a is assigned as 1

*/


// left-associativity

/*

left id = "header";
let element = document.getElementById(id).values;

1. Resolves document variable to be document object.
2. Dot notation to get getElementById function
3. Attempt to call it... We evaluate id first
4. Resolve id => "header"
5. getElementById returns an HTMLElement object then uses dot to access value
6. finally we do assignment which is the lowest precendence and take the value on the right and assign it to the left


*/





// Iterating through Objects

/*

1. Iterate through objects keys and values -> for..in loop
2. Use Object.keys and Object.values to iterate

*/

// A new kind of for loop

for (let key in myCat) {
    console.log(myCat[key]);
}

// Iterating through keys and values ;)

function printObject(obj) {
    for (let key in obj) {
      let value = obj[key];
      console.log(key + ' - ' + value);
    }
  }


// Methods vs Functions

/*

method is a function that belongs to an object

myFunc -> function

myObject.myFunc -> method of object
myObject["myFunc"] -> method of object


*/
myCat.sound = "REOOOOOOOW";
myCat.speak = function() {
    console.log(myCat.sound);
}

myCat.speak();



// Useful Object Methods

//// Iterating thorugh keys using Object.keys

console.log(Object.keys(myCat));

//// Iterating thorugh keys using Object.values

console.log(Object.values(myCat));


//// Iterating through both using Object.entries

console.log(Object.entries(myCat));
