class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
    }

    newNode.next = this.head;

    this.head = newNode;
    this.length++;

  }

  addToTail(val) {
    const newTail = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.head = newTail;
    } else {
      newTail.prev = this.tail;
      this.tail.next = newTail;
    }
    this.tail = newTail;
    this.length++;


  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
