// Closures

// FREQUENT INTERVIEW QUESTION!!!!!!!!!!!!!!! iq

// An inner function uses, or changes, variables in an outer function

/*

BASIC RULES

1. Closures have access to any variables within its own, as well as any outer functions, scope when they are declared. < - Lexical environment
2. Closure keeps reference to all variables when it was defined even if the outer function has returned..

*/


function walkRoute(routeType) {
    let walkStr = "You walked an ";

    function sayWalkRoute() {
        return walkStr + routeType + " route.";
    }

    return sayWalkRoute();
}


let walk = walkRoute("apartment");

console.log(walk);


// example

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  const add5 = makeAdder(5);

  console.log(add5(2)); // prints 7


// Practical applications of closures

// private state
/*

Hiding state is important in the programming world..

*/

function createCounter() {
    let count = 0;

    return function() {
      count++;
      return count;
    };
  }

  let counter = createCounter();
  console.log(counter()); // => 1
  console.log(counter()); // => 2

  //we cannot reach the count variable!
  counter.count; // undefined
  let counter2 = createCounter();
  console.log(counter2()); // => 1
