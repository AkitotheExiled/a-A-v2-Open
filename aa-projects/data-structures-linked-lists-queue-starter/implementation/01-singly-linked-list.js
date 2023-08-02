// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {

        const newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
        // O(1)
    }

    addToTail(val) {

        // O(n) since we have to traverse n nodes


        let newNode = new SinglyLinkedNode(val);
        let head = this.head;
        this.length++;
        if (!head) {
            this.head = newNode;
            return {head: this.head, length: this.length};
        }

        let curr = head;
        while (curr) {
            if (!curr.next) {
                curr.next = newNode;
                break;
            }
            curr = curr.next;
        }


        return {head: this.head, length: this.length};
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return;

        let removedHead = this.head;
        let temp = this.head.next;
        this.head = null;
        this.length--;
        if (!temp) {
            return removedHead;
        }

        this.head = temp;

        return removedHead;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        debugger
        let tail = this.head;
        let prev = tail;

        if (!tail) return;





        while (tail) {

            if (!tail.next) {
                this.length--;
                if (this.head === tail) {
                    if (!this.head.next) {

                        this.head = null;
                        return prev;
                    }
                }
                prev.next = null;
                return tail;
            }
            prev = tail;
            tail = tail.next;

        }


        return tail;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;

        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (!this.head) return;

        let current = this.head;

        while (current) {
            console.log(`${current.value}`)
            //process.stdout.write(`${current.value}`);
            current = current.next;
        }

        //console.log("NULL");
        // O(n) -> it iterates through the n items of the linked list
    }
}

let list = new SinglyLinkedList();

list.addToTail('A');
list.addToTail('B');




result = list.removeFromTail();
console.log(result);
module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
