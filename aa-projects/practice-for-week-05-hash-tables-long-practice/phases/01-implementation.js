class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let obj = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    let bucket = this.data[index];

    if (bucket) {
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
    this.data[index] = obj;
  }


  read(key) {
   let index = this.hashMod(key);
   let bucket = this.data[index];

   while(bucket) {
    if (bucket.key === key) return bucket.value;
    bucket = bucket.next;
   }

  }


  resize() {
    // Your code here
    let newSize = this.capacity * 2;
    let newEmptyData = new Array(newSize).fill(null);
    let oldData = this.data;
    this.count = 0;
    this.capacity = newSize;
    this.data = newEmptyData;

    for (let i = 0; i < oldData.length; i++) {
      let bucket = oldData[i];

      if (bucket) {
        while (bucket) {
          let key = bucket.key;
          let value = bucket.value;
          this.insert(key, value);

          bucket = bucket.next;
        }
      }
    }




  }


  delete(key) {
    debugger
    let index = this.hashMod(key);
    let bucket = this.data[index];
    let previous = null;

    while (bucket) {
      if (bucket.key === key) {
        if (previous) {
          previous.next = bucket.next;
        } else {
          previous = bucket.next;
        }

        this.count--;
        this.data[index] = previous;
        break;
      }
      previous = bucket;
      bucket = bucket.next;
    }


    return 'Key not found';

  }
}




module.exports = HashTable;
