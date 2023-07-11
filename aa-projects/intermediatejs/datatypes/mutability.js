// Mutability

/*

1. Explain what mutability is
2. Identify datatypes as mutable or immutable

*/

// What is mutability??

// Mutability => Can be changed
// Immutable => unchanging and permanent

let arr = ["m", "e", "o", "w"];
arr[0] = "b";
console.log(arr);


let str = "meow";
str[0] = "b";
console.log(str);


/*

Mutable          Immutable
--------|------|--------
Array   |      | Number
Object  |      | String
        |      | Boolean

*/

// Your code here
function alternatingWords(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isEven = i % 2 === 0;
        let word = arr[i];

        if (isEven) {
            arr[i] = word.toUpperCase();
        } else {
            arr[i] = word.toLowerCase();
        }
    }

    return arr;
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
