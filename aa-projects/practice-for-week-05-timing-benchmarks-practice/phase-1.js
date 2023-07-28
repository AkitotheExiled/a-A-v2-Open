// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let manySums = 0;
  
  for (let i = 1; i <= n; i++) {
    manySums += addNums(i);
  }

  return manySums;
}



module.exports = [addNums, addManyNums];
