// Destructuring

/*

1. Destructure an array to reference specific elements
2. Destructure an object to reference values
3. Destructure incoming parameters into a function

*/

// Destructuring data into variables

let numbers = [10, 20];

let [num1, num2] = numbers;

console.log(num1);
console.log(num2);

// Another example

let animalArray = ["tiger", "hippo"];

let animal1, animal2;

// here we are "unpacking" the array values into two separate variables
[animal1, animal2] = animalArray;

console.log(animal1); //=> "tiger"
console.log(animal2); //=> "hippo"



// Swapping variables using destructuring

let num3 = 9;
let num4 = 12;

console.log(num3, num4);

[num3, num4] = [num4, num3];

console.log(num3, num4);




// Destructuring objects into variables

let cat = {name: "Sox", age: 3, breed: "shorthair", color: "black"};

let { name, age, breed, color} = cat;

console.log(name, age, breed, color);
console.log(cat);

//  What if the variable doesn't share the same name as our key??

let obj = {apple: "red", banana: "yellow"};

let { apple: aman, banana: bman } = obj;

console.log(aman, bman);


// Becomes useful in nested objects

let object = { animal: { name: "Fiona", species: "Hippo" } };

// here we are specifying that within the animal object we want to assign the
// *species* variable to the value held by the *species* key
let {
  animal: { species }
} = object;

console.log(species); // => 'Hippo'


// Another complex example

let user = {
    userId: 1,
    favoriteAnimal: "hippo",
    fullName: {
      fname: "Rose",
      lname: "K"
    }
  };

  // accessing values *with* destructuring
  let {
    userId,
    fullName: { fname, lname }
  } = user;

  console.log(userId, fname, lname); // prints out:
  // 1 "Rose" "K"



  // Destructuring and the rest pattern

  let foods = ["pizza", "ramen", "sushi", "cookies"];

  let [firstFood, secondFood, ...otherFoods] = foods;

  console.log(firstFood);
  console.log(secondFood);
  console.log(otherFoods);





  // Destructuring parameters

  // Useful for passing objects to different functions

  let cat2 = {name: "Sox", age: 3, breed: "shorthair", color: "black", owner: "Michael"};

  function ownerName({ owner }) {
    console.log("This cat is owned by " + owner);
  }

  ownerName(cat2);


  // SUPER USEFUL FOR NESTED STUFF

  let bigCat = {
    name: "Jet",
    owner: { name: "Rose" },
    toys: ["ribbon"],
    siblings: { name: "Freyja", color: "orange", toys: ["mouse", "string"] }
  };

  // here we use *aliased* object destructuring to create a siblingToys variable
  function toyFinder({ toys, siblings: { toys: siblingToys } }) {
    let allToys = toys.concat(siblingToys);
    return allToys;
  }

  console.log(toyFinder(bigCat)); // => ["ribbon", "mouse", "string"]

  let { meow } = bigCat;

  console.log(meow);
