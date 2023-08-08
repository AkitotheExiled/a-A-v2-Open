function ageSort(users) {

  function compareAge(a, b) {
    return a.age - b.age;
  }

  return users.sort(compareAge);
}

function oddEvenSort(arr) {
  // Your code here
  function compareNum(a, b) {
    if (a % 2 === 0 && b % 2 === 1) return 1;
    if (a % 2 === 1 && b % 2 === 0) return -1;


    return a - b;
  }

  return arr.sort(compareNum);
}

oddEvenSort([ 5, 4, 7, 2, 9, 8, 1, 6, 3 ]);

function validAnagrams(s, t) {
  let sSort = s.split("").sort();
  let tSort = t.split("").sort();

  return tSort.join("") === sSort.join("");
}

function reverseBaseSort(arr) {
  // Your code here
  function compareBase(a, b) {
    let strA = a.toString().length;
    let strB = b.toString().length;

    if (strA === strB) return a - b;
    return strB - strA;
  }
  return arr.sort(compareBase);
}

function frequencySort(arr) {
  // Your code here
  debugger
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    let freqVal = freq[value] || 0;
    freqVal++;
    freq[value] = freqVal;
  }

  function sortByFrequency(a, b) {
    let aFreq = freq[a];

    let bFreq = freq[b];

    if (aFreq === bFreq) return b - a;

    return aFreq - bFreq;
  }

  return arr.sort(sortByFrequency);
}


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
