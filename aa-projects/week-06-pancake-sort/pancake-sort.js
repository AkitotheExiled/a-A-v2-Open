function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curVal = arr[i];
        let prevVal = arr[i + 1];

        if (curVal < prevVal) {
            return false;
        }
    }

    return true;
}

function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var pancakeSort = function(arr) {

    let flips = [];

    while (!isSorted(arr)) {
        let k = randomIndex(1, arr.length + 1);
        let roundedK = Math.ceil(k);

        for (let i = 0; i < roundedK; i++) {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
        }
        flips.push(k);
    }

    return flips;
};

let arr = [3, 2, 4, 1];
console.log(pancakeSort(arr));
console.log(arr);
