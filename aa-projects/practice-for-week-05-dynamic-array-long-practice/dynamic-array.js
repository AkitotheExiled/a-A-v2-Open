class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
    this.lastEleIndex = null;
  }

  read(index) {
    if (index > this.length) return;

    return this.data[index];
  }

  push(val) {
    if (this.length >= this.capacity) this.resize();
    let last = this.data.length - 1;
    for (let i = 0; i < this.data.length; i++) {
      let item = this.data[i];

      if (item === undefined) {
        this.data[i] = val;
        this.lastEleIndex = i;
        break;
      }
    }
    this.length++;
  }


  pop() {
    debugger;
    if (this.length <= 0) return;
    let temp = this.data[this.lastEleIndex];
    this.data[this.lastEleIndex] = undefined;
    this.lastEleIndex--;
    this.length--;
    return temp;
  }

  shift() {
    if (this.length <= 0) return;
    let valueToRemove;
    for (let i = 0; i < this.data.length; i++) {
      let value = this.data[i];
      if (value !== undefined) {
        if (valueToRemove === undefined) {
          valueToRemove = value;

        } else {
          this.data[i - 1] = value;
        }
        this.data[i] = undefined;

      }
    }
    this.length--;
    return valueToRemove;
  }

  unshift(val) {

    if (this.length >= this.capacity) this.resize();
    if (this.data[0] !== undefined) {
      for (let i = this.data.length - 1; i >= 0; i--) {
        let item = this.data[i];

        if (item !== undefined) {
          this.data[i + 1] = item;
          this.data[i] = undefined;
        }
      }
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity *= 2;
    let temp = this.data;
    this.data = new Array(this.capacity);

    for (let i = 0; i < temp.length; i++) {
      this.data[i] = temp[i];
    }
    // Your code here
  }

}

let ex = new DynamicArray();
ex.push(1);
ex.push(2);
ex.push(3);

console.log(ex.pop());

module.exports = DynamicArray;
