// GOAL -> Readable and easily understood


// Indentation
// Indent on every control level(if, else, for, while, function)

// GOOD

function skip3() {
    for (let i = 1; i < 10; i++) {
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
}

// BAD
function skip3() {
for (let i = 1; i < 10; i++) {
if (i === 3) {
continue;
}
console.log(i);
}
}


// What about white space??

// GOOD

let num1 = 3;
let num2 = 4;
if (num1 + num2 === 7) {
    console.log("Sum is 7");
}

// BAD


let num3=3;
let num4=4;
if (num3+num4===7) {
    console.log("Sum is 7");
}

// GOOD
num3++;

// BAD
num4 ++;

// Single space after ; and ,

// Good style:
let names = ['alvin', 'chase', 'phi', 'eliot'];
for (let i = 0; i < names.length; i++) {
  // ...
}

// Bad style:
let names2 = ['alvin','chase','phi','eliot'];
for (let i = 0;i < names2.length;i++) {
  // ...
}


// What about long arrays?

// Good Style
let names3 = [
    'alvin',
    'chase',
    'phi',
    'eliot'
];


// What about vertical space in code??

// Good Style
function sumArr(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        sum += ele;
    }

    return sum;
}

// NOT SO Bad Style
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let ele = arr[i];
      sum += ele;
    }
    return sum;
  }


  // What about temporary variables??

  // Good style:
function printStudents(arr) {
    for (let i = 0; i < arr.length; i++) {
      let name = arr[i];
      console.log(name.toUpperCase());
      console.log(name.toLowerCase());
    }
  }

  // Not as good style:
  function printStudents(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].toUpperCase());
      console.log(arr[i].toLowerCase());
    }
  }

  // Nice and readable:
let num = 15;
let isDivByEither = (num % 5 === 0 || num % 3 === 0);
console.log(isDivByEither);


// Not as readable:
let num7 = 15;
console.log(num % 5 === 0 || num % 3 === 0);


// ALWAYS END LINES WITH SEMICOLONS!


