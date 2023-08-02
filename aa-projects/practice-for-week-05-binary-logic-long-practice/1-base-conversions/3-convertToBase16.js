// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
const HEXCHARS = {10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f"};
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const decimalToBase16 = number => {
    let remainder;
    let remainders = [];

    while (number !== 0) {
      remainder = number % 16;
      number = Math.floor(number / 16);

      if (Object.keys(HEXCHARS).includes(String(remainder))) {

        remainders.unshift(HEXCHARS[remainder]);
      } else {
        remainders.unshift(remainder);
      }

    }

    return "0x" + remainders.join("");
}

const binaryToBase16 = binary => {
  const hexLibrary = {"0": "0000", "1": "0001", "2": "0010", "3": "0011", "4": "0100", "5": "0101", "6": "0110", "7": "0111",
                      "8": "1000", "9": "1001", "a": "1010", "b": "1011", "c": "1100", "d": "1101", "e": "1110", "f": "1111"};

  let binaryToWorkOn = binary.slice(2, binary.length);

  let b16 = "";

  for (let i = 0; i < binaryToWorkOn.length; i+=4) {
    let bit1 = binaryToWorkOn[i];
    let bit2 = binaryToWorkOn[i + 1];
    let bit3 = binaryToWorkOn[i + 2];
    let bit4 = binaryToWorkOn[i + 3];
    let byte = bit1 + bit2 + bit3 + bit4;
    b16 += getKeyByValue(hexLibrary, byte);
  }

  return "0x" + b16;

}

const convertToBase16 = element => {
  if (typeof element === "number") {
    return decimalToBase16(element);
  } else {
    return binaryToBase16(element);
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
