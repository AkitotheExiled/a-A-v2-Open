const addZeros = require('../utils/addZeros');
const ASCII = require('../utils/ascii.json');
// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {

  let bitString = "";
  let ASCI = ASCII["ASCII"];
  for (let i = 0; i < str.length; i++) {

    let foundChar = ASCI.find(array => array[3] === str[i])[3];

    bitString += foundChar;
  }

  return bitString;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
