function firstStep(input) {
  return String(input).split("&");
}

function secondStep(input) {

  return input.map(innerStr => innerStr.split("="));
}

function thirdStep(input) {
  console.log(input);
  return input.map(ele => ele.map(str => str.replace("+", " ")));
}

function fourthStep(input) {
  return input.map(ele => ele.map(str => decodeURIComponent(str)));
}

function reduceIntoObj(a, b) {
  let obj = {};
  obj[a[0]] = a[1];
  obj[b[0]] = b[1];

  return obj;
}
function fifthStep(input) {

  return input.reduce(reduceIntoObj);

}

function parseBody(str) {
  let first = firstStep(str);
  let sec = secondStep(first);
  let third = thirdStep(sec);
  let fourth = fourthStep(third);
  let fifth = fifthStep(fourth);

  return fifth;
}

let input = [["username", "azure green"], ["password", "password!"]];
let initialValue = {};
input.reduce((acc, cv) => console.log(acc), initialValue);
console.log(initialValue);

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
