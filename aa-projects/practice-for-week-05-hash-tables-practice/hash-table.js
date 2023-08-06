const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  _hexToDecimal = (hexStr) => {
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

  hash(key) {
    let computedHash = sha256(key);
    let windowNeeded = computedHash.slice(0, 8);


    let result = this._hexToDecimal(windowNeeded);

    return Number(result);
  }

  hashMod(key) {
    // Your code here
    let hashValue = this.hash(key);

    return hashValue % this.capacity;
  }

  insertNoCollisions(key, value) {
    let bucketIndex = this.hashMod(key);
    let bucket = this.data[bucketIndex];

    if (bucket) {
      throw new Error("hash collision or same key/value pair already exists!");
    }

    let obj = {key: key, value: value};

    this.count++;
    this.data[bucketIndex] = obj;


  }

  insertWithHashCollisions(key, value) {
    let bucketIndex = this.hashMod(key);
    let bucket = this.data[bucketIndex];
    let obj = new KeyValuePair(key, value);

    if (bucket) {
      obj.next = bucket;

    }



    this.count++;
    this.data[bucketIndex] = obj;
  }

  insert(key, value) {
    let bucketIndex = this.hashMod(key);
    let bucket = this.data[bucketIndex];
    let obj = new KeyValuePair(key, value);

    if (bucket) {
      // if the KeyValuePair contains the same key as a pair in there... update the value
      let current = bucket;

      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }

        current = current.next;
      }
      obj.next = bucket;
    }



    this.count++;
    this.data[bucketIndex] = obj;
  }

}

module.exports = HashTable;
