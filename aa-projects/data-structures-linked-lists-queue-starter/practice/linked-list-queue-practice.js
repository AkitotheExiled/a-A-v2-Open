// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
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
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list

        // O(n)
        // let length = 0;
        // let curr = this.head;
        // while (curr) {
        //     curr = curr.next;
        //     length++;
        // }

        // return length;

        // O(1)
        return this.length;
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;

        if (!curr) return sum;

        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        let sum = this.sumOfNodes();

        return sum / this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head;
        let currN = 0;
        while(curr) {
            if (currN === n) {
                return curr;
            }
            curr = curr.next;
            currN++;
        }
        // O(n)
    }

    findMid() {
       let mid = Math.round(this.length / 2) - 1;
       let midNode = this.findNthNode(mid);

       return midNode;
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new SinglyLinkedList();
        let curr = this.head;

        while (curr) {
            reversed.addToHead(curr.value);

            if (!curr.next) {
                return reversed;
            }



            curr = curr.next;
        }
        // O(n)
    }

    deleteAfterNNodes(n) {
        let count = 1;

        let curr = this.head;

        while (curr) {
            if (count === n) {
                curr.next = null;
                break;
            }
            count++;
            curr = curr.next;
        }
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        debugger
        let curr = this.head;
        let OGLength = this.length;
        let count = 0;
        while (curr) {
            this.addToHead(curr.value);
            this.length--;
            count++;

            if (count === OGLength) {
                break;
            }
            curr = curr.next;
        }
        this.deleteAfterNNodes(count);

        // Write your hypothesis on the time complexity of this method here
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    addToHead(val) {
        const newNode = new DoublyLinkedNode(val);

        if (!this.head) {
          this.tail = newNode;
        } else {
          this.head.prev = newNode;
        }

        newNode.next = this.head;

        this.head = newNode;
        this.length++;

      }

    findMid() {
        let mid = Math.round(this.length / 2);

        let curr = this.head;
        let count = 1;
        while (curr) {

            if (count === mid) {
                return curr;
            }
            curr = curr.next;
            count++;
        }
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // O(n/2) where n is the number of nodes
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversed = new DoublyLinkedList();

        let curr = this.head;
        while( curr ) {
            reversed.addToHead(curr.value);

            curr = curr.next;
        }

        return reversed;
        // Same implementation as for a singly list

    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let head = this.head;
        let tail = this.tail;
        let mid = this.findMid();


        while (head !== mid) {
            tail.next = head.next;
            head.next.prev = tail;
            
            head.next = null;
            tail.prev.next = head;
            tail.prev = null;

            this.head = tail;
            this.tail = head;
            head = head.next;
            tail = tail.prev;

        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
