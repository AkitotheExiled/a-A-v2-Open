// Different variables in Javascript
/*

1. Identify 3 keywords to declare a variable
2. Explain the differences between them -> let, const, var
3. Identify the difference between function and block-scoped variables
4. Parapharase the concept of hoisting in regards to function and block-scoped variables

*/

// Declaring variables

// ---------- > Variables always evaluate to the value no matter how you declare it < ----------

// Different ways to declare

/*

1. let -> can be reassigned, block-scoped
2. const -> CANNOT be reassigned, block-scoped
3. var -> can be reassigned, function-scoped

*/

// Hoisting and scoping with variables

/*

        "
            Hoisting is a JavaScript mechanism
            where variables and function declarations
            are moved to the top of their scope
            before code execution
                                                        "
    Mabishi Wakio

/*

/*

variables/functions get hoisted to the top of their particular scope.

*/

// Function-scoped Variables


function test() {
    console.log(hoistedVar); // => undefined

    var hoistedVar = 10;
  }

test();


// Block-scoped variables

function blockScope() {
    let test = "upper scope";
    if (true) {
      let test = "lower scope";
      console.log(test); // "lower scope"
    }
    console.log(test); // "upper scope"
  }

  blockScope();


  // Using -> const

  /*

  block-scoped -> cannot be reassigned;

  aka constants

> const favFood = "cheeseboard pizza"; // Initializes a constant
undefined

> const favFood = "inferior food"; // Re-initialization raises an error
TypeError: Identifier 'favFood' has already been declared

> let favFood = "other inferior food"; // Re-initialization raises an error
TypeError: Identifier 'favFood' has already been declared

> favFood = "deep-dish pizza"; // Re-assignment raises an error
TypeError: Assignment to constant variable.
*/

// They can be mutable if their reference types are mutable

const animals = {};
animals.big = "beluga whale"; // This works!
animals.small = "capybara"; // This works!

// animals = { big: "beluga whale" }; // Will error because of the reassignment

// New constants of the same name can be declared within nested scopes

const favFood = "ramen";

console.log(favFood);

if (true) {
    const favFood = "macaroni";
    console.log(favFood);
}

console.log(favFood);



// Hosting with block-scoped variables

if (true) {
    // console.log(str); // => ReferenceError: Cannot access 'str' before initialization
    const str = "apple";
}

// Time before let or const is declared is called the TDZ, Temporal Dead Zone

// Let and const are not initialized until their definitions are evaluated


var str = "not apple";

if (true) {
  // console.log(str); //Uncaught ReferenceError: Cannot access 'str' before initialization
  let str = "apple";
}

// What happens above??




// Function scope vs block scope

function partyMachine() {
    var string = "party";

    if (true) {
      // since var is not block-scoped and not constant
      // this assignment sticks!
      var string = "bummer";
    }

    console.log("this is a " + string);
  }

  partyMachine(); // => "this is a bummer"





  // Global Variables

  // if we leave off, let, var, const -> it automatically defaults the variable to global
  // DO NOT DO THIS.  JS  has one global scope and that variable will be accessible to all those files/code

  function good() {
    let x = 5;
    let y = "yay";
  }

  function bad() {
    y = "Expect the unexpected (eg. globals)";
  }

  function why() {
    // console.log(y); // "Expect the unexpected (eg. globals)""
    // console.log(x); // Raises an error
  }

  why();

  const kitty = 1;

  //kitty = 3;

  console.log(kitty);
  console.log(party);
  var party = "party!";
