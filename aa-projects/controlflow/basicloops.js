// Basic Loops

/*
1. What are they? -> While loop and For loop

2. Where does the index start at?

3. What is an Iterable?

*/


// There must be a end condition, executing an action, until our condition is met, rechecking our condition before our next run


// What is the simplest loop? a While loop

let dirtyCats = 2;

while (dirtyCats !== 0) {
    console.log("Cleaned cat!");
    dirtyCats--;
}


// What would happen if our variable was less than 0?  Infinite loop!

/*
// INFINITE LOOP BELOW
let dirtyDogs = 3;

while (dirtyDogs !== 0) {
    console.log("Cleaned dog");
    dirtyDogs-=2;
}

*/


// What is the next loop? A for loop

/*

1. Initial expression - ran once
2. condition - checked every time loop is ran
3. loopEnd - ran at end of loop

*/

for (let i = 0; i < 5; i++){
    console.log(i);
}
