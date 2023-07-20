function isFive(num) {
    return num % 5 === 0;
}

function isOdd(num) {
    if (typeof num !== "number") {
        return null;
    }
    return num % 2 !== 0;
}

function myRange(min, max, step) {
    let generated = [];

    for (let i = min; i <= max; i++) {
        generated.push(i);
    }

    return generated;
}



module.exports = {
    isFive,
    isOdd,
    myRange
 };
