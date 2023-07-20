function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    return arr.filter((val, idx) => idx % 2 !== 0);
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddReverse = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 !== 0) {
            oddReverse.push(arr[i]);
        }
    }
    return oddReverse;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let powers = [];
    arr.filter((val, idx) => (val % 2 === 0 && (val / 2) % 2 === 0) || val == 2).map((val, idx) => powers.push(arr.indexOf(val)));
    return powers;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let powers = [];
    arr.filter((val, idx) => (val % n === 0 && (val / n) % n === 0) || val == n).map((val, idx) => powers.push(arr.indexOf(val)));
    return powers;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let half = Math.round(arr.length / 2);
    return arr.slice(0,half);
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let half = Math.round(arr.length / 2);

    return arr.slice(half, arr.length);
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
