function myMap(inputArray, callback) {
  let maped = [];

  for (let i = 0; i < inputArray.length; i++) {

    let value = inputArray[i];
    maped.push(callback(value));
    
  }

  return maped;
}

module.exports = myMap;
