// Convert the integers in the console.logs below to base 10:
const addZeros = require("../utils/addZeros");

/******************************************************************************/
const binaryToDecimal = (str) => {
    let result = 0;
    let binaryTable = [1, 2, 4, 8, 16, 32, 64, 128];
    let workableStr = str.split("").reverse();

    for (let i = 0; i < workableStr.length; i++) {
      if (workableStr[i] === "1") {
        result += binaryTable[i];
      }
    }

    return result;
}

const hexToDecimal = (hexStr) => {
  const hexLibrary = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7,
                      "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15};

  let arrToWorkOn = hexStr.split("");
  let result = arrToWorkOn.map(function(ele) {
    return hexLibrary[ele];
  });

  let finalResult = 0;
  let end = result.length - 1;

  for (let i = 0; i < result.length; i++) {
    finalResult += (16 ** i) * result[end - i];
  };

  return finalResult;
}
const convertToBase10 = str => {
  let type = str[1];
  let usableStr = str.slice(2, str.length);
  if (type === "b") {
    return binaryToDecimal(usableStr);
  } else {
    return hexToDecimal(usableStr);
  }
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
