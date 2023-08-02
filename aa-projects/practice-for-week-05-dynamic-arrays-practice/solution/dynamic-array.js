class DynamicArray {

  constructor(defaultSize=4) {

    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {
    if (index > this.length) return;

    return this.data[index];
    // Your code here
  }

  unshift(val) {
    
    if (this.length >= this.capacity) return;
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

}

let dynamicArr = new DynamicArray();

dynamicArr.unshift(1);

console.log(dynamicArr.data[0] === 1);
console.log(dynamicArr.capacity === 4);
console.log(dynamicArr.length === 1);
module.exports = DynamicArray;
