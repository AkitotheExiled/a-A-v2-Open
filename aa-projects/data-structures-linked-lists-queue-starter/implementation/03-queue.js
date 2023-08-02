const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }


        this.length++;

        return this.length;
        // O(1) we use a linked list so insertion should be the same as addToTail
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) return null;


        let value = this.head.value;

        if (this.tail) {
            let next = this.head.next;
            this.head = next;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return value;
        // O(1) as we remove from the front
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
