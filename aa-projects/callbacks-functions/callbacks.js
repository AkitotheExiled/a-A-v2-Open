// Callbacks Reading

// Looking into -> Array.forEach, Array.map

// What is a callback??

// Naming a function as a parameter - EASY!

function foobar(callback) {
    console.log("foo");
    callback();
    console.log("bar");
}

function meowKitty() {
    console.log("MEOOOOOOOOOOOOOOOOOOOOOOOOW");
}

foobar(meowKitty);

// Callback always a function, callback is the function being passed.  i.e. meowKitty is the callback

// Spy callback??

let foobar2 = function(callback) {
    console.log("foo");
    callback();
    console.log("bar");
  };

  foobar2(function() {
    console.log("hello");
  }); // prints
  // foo
  // hello
  // bar


  // more interesting example...
   let add = function(num1, num2, cb) {
        let sum = num1 + num2;
        let result = cb(sum);

        return result;
   }

let negate = function(num) {
    return num * -1;
}

let multiplyItself = function(num) {
    return num * num;
}

console.log(add(2, 2, negate));

console.log(add(3, 5, multiplyItself));

console.log(add(30, 6, Math.sqrt));

// Refactoring for an optional callback

// Do we always have to pass a function??
// What if we just wanted to add two numbers?

// console.log(add(2,2)); => TypeError: cb is not a function

let addFixed = function(num1, num2, cb) {
    if (cb === undefined) {
        return num1 + num2;
    }

    return cb(num1 + num2);
}

console.log(addFixed(2, 2));
console.log(addFixed(2, 2, Math.sqrt));
