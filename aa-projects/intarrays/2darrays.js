// Two Dimensional Arrays

/*

1. Index into inner 2D array
2. Use nested loops to go through a 2D array

*/

// Multidimensional Arrays

let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

console.log(twoDimensional[1]); // [ 'd', 'e' ]
console.log(twoDimensional[1][0]); // 'd'

let subArr = twoDimensional[1];
console.log(subArr[0]); // 'd'

/*
let twoDimensional = [
    ["a", "b", "c"],
    ["d", "e"],
    ["f", "g", "h"]];

// We can interpret [1][0] as [row][column] = > 'd'

*/


// How do we loop through a 2D Array??

for (let i = 0; i < twoDimensional.length; i++) {
    let subArr = twoDimensional[i];
    console.log(subArr);

    for (let j = 0; j < subArr.length; j++) {
        console.log(subArr[j]);
    }
}


// When would we use a 2D Array??

/*

1. Tic-tac-toe (3x3 grid)
2. Chess (8x8 grid)
3. Sudoku (9x9 grid)
4. Excel (sheets are 2d grids)

*/


