const findMinimum = arr => {

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < min) {

      min = arr[i];
    }
  }

  return min;

};

const runningSum = arr => {
  let run = [];
  let sum = 0;

  for (let i = 0; i <  arr.length; i++) {
    sum += arr[i];
    run.push(sum);
  }

  return run;
};

const evenNumOfChars = arr => {

  let isEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      isEven++;
    }

  }

  return isEven;
};

const smallerThanCurr = arr => {

  let smallerthanCur = [];

  for (let i = 0; i < arr.length; i++) {
    let curAmt = 0;

    let num = arr[i];

    for (let j = 0; j < arr.length; j++) {
      let nextNum = arr[j];
      if (nextNum < num) {

        curAmt++;
      }
    }

    smallerthanCur.push(curAmt);
  }
  return smallerthanCur;
};

const twoSum = (arr, target) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
};

const secondLargest = arr => {
  if (arr.length <= 1) { return undefined; }
  // fuck it
  arr.sort();
  return arr[arr.length - 2];


};

const shuffle = (arr) => {

  const shuffleSpot = [];

  function _random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

  let choices = [shuffleSpot.push, shuffleSpot.unshift];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    let chosenChoice = choices[_random(0, 2)];

    chosenChoice.bind(shuffleSpot, value)();

  }

  return shuffleSpot;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
