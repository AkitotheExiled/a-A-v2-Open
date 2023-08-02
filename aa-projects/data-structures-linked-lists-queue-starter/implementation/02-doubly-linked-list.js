// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // O(1)

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        debugger;
        // Add node of val to tail of linked list
        let newTail = new DoublyLinkedNode(val);
        let oldTail = this.tail;
        this.length++;
        if (!oldTail) {
            this.tail = newTail;
            this.head = newTail;
            return;
        }


        newTail.prev = oldTail;
        oldTail.next = newTail;
        this.tail = newTail;


        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return;

        let newHead = this.head.next;
        if (newHead) {
            newHead.prev = null;
        }

        let oldHead = this.head;


        this.head = newHead;

        this.length--;
        return oldHead.value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) return;

        this.length--;
        let newTail = this.tail.prev;
        let oldTail = this.tail;

        this.tail = newTail;

        return oldTail.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;

        return this.head.value
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) return;

        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

let list = new DoublyLinkedList();
list.addToTail('A');
list.addToTail('B');
list.addToTail('C');

const tail = list.tail;
console.log(tail.prev);
module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
