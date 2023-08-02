class LinkedListNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
    this.tail;
  }

  addToHead(val) {
    let node = new LinkedListNode(val);

    node.next = this.head;

    this.head = node;
    if (!this.tail) this.tail = this.head;
    this.length++;
  }

  addToTail(val) {
    debugger;
    let node = new LinkedListNode(val);
    let head = this.head;

    if (head === null) {
      this.head = node;
      this.tail = node;

    } else {
      this.tail.next = node;
      this.tail = node;

    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
let list = new LinkedList();

list.addToTail(1);
list.addToTail(2);
module.exports = LinkedList;
