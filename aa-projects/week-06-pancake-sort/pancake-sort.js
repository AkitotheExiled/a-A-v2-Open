function isSorted(arr) {

    for (let i = 0; i < arr.length; i++) {
        let curVal = arr[i];
        let nextVal = arr[i + 1];

        if (curVal > nextVal) {
            return false;
        }
    }

    return true;
}

function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
var pancakeSort = function(arr) {

    let flips = [];
    let endIndex = arr.length - 1;
    let k;
    let halvedK;
    while (!isSorted(arr)) {

        k = randomIndex(1, arr.length);
        flips.push(k);
        k = clamp(k, 1, endIndex);
        halvedK = Math.ceil(k / 2);

        for (let i = 0; i < halvedK; i++) {
            let tmp = arr[i];
            arr[i] = arr[k - i];
            arr[k - i] = tmp;
        }

    }

    return flips;
};

let arr = [3, 2, 4, 1];
console.log(pancakeSort(arr));
console.log(arr);

function reverseArr(arr) {
    let k = arr.length - 1;
    let halvedK = Math.ceil(k / 2);

    for (let i = 0; i < halvedK; i++) {
        let tmp = arr[i];
        arr[i] = arr[k - i];
        arr[k - i] = tmp;
    }

    return arr;
}


console.log(reverseArr([1, 2, 3, 4]));
console.log(reverseArr([3, 4]));
console.log(reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));
