function anagrams(str1, str2) {

  let set1 = new Set(str1);
  let set2 = new Set(str2);

  for (let char of set2) {

    if (!set1.has(char)) return false;
  }

  return true;
}



function commonElements(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let common = [];

  for (let char of set1) {
    if (set2.has(char)) common.push(char);
  }

  return common;
}


function duplicate(arr) {
  let uniquesOnly = new Set();
  let dupe = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (uniquesOnly.has(val)) return val;
    uniquesOnly.add(val);
  }


}


function twoSum(nums, target) {
  let set1 = new Set(nums);

  for (let num of nums) {
    let og = num;
    set1.delete(num);
    if (set1.has(target - og)) return true;
  }

  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  let pat = new Set(pattern);
  let str = new Set(strings);
  
  return Array.from(pat).length === Array.from(str).length;
}



module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
