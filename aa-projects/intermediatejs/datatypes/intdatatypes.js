// Determining Types

/*

Figure out whether a variable is a

1. string
2 number
3. function
4. array

*/

// BONUS:  Whats a binary operator??

// = > +, =, %

// What about a Unary operator??

// => typeof

// Typeof only takes a single value

let s = "meow";
let n = 3;
let sum = function (a,b) { return (a,b) / 2; }

console.log(typeof s);
console.log(typeof n);
console.log(typeof sum);


// What about arrays??

console.log(typeof [1]);

// There is a bug that gives us an array.  Thankfully we can do the following

console.log(Array.isArray([1]));

// PRACTICAL USE IN CODE?

// Most of the times developers expect others to respect their code and not put in the wrong values
// But when they don't...

function reverseTheSentence(sentence) {
    if (typeof sentence !== 'string') {
      // Tell the developer they are using
      // the function wrong.
    }
    // ... code here ...
  }






// NULL AND UNDEFINED TYPES

// Null only has one value => null

// What does Null mean exactly??

// Null means unknown value, no value...

// Lets see it in practice

function reverseTheSentence(sentence) {
    if (typeof sentence !== 'string') {
      return null;
    }
    let parts = sentence.split(' ');
    parts.reverse();
    return parts.join(' ');
  }

  // This function returns no value if the argument provided is not a string

  // Can we do typeof null??
  console.log("Typeof Null ");
  console.log(typeof null);



  // Undefined is also the only value of its type


  // your code here

function minValue(arr) {
    if (arr.length === 0) {
        return null;
    }


    let smallestValue = arr[0];

    for (let i = 0; i < arr; i++) {
        let value = arr[i];

        if (value < smallestValue) {
            smallestValue = value;
        }
    }

    return smallestValue;
}






console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null



