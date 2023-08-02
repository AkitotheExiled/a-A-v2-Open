const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

console.log("COMPARING ADDTOHEAD");

let n = 10000000;

let startTimeSingle = Date.now();

let singleList = new LinkedList();
for (let i = 0; i <= n; i++) {
    singleList.addToHead(n);
}

let endTimeSingle = Date.now();

let startTimeDbl = Date.now();

let dblList = new DoublyLinkedList();
for (let i = 0; i <= n; i++) {
    dblList.addToHead(n);
}

let endTimeDbl = Date.now();

console.log(`SINGLE LINKED LIST: ${endTimeSingle - startTimeSingle}ms`);
console.log(`DOUBLY LINKED LIST: ${endTimeDbl - startTimeDbl}ms`);

console.log("COMPARING ADDTOTAIL");



let startTimeSingleTail = Date.now();

let singleListTail = new LinkedList();
for (let i = 0; i <= n; i++) {
    singleListTail.addToTail(n);
}

let endTimeSingleT = Date.now();

let startTimeDblT = Date.now();

let dblListT = new DoublyLinkedList();
for (let i = 0; i <= n; i++) {
    dblListT.addToTail(n);
}

let endTimeDblT = Date.now();

console.log(`SINGLE LINKED LIST: ${endTimeSingleT - startTimeSingleTail}ms`);
console.log(`DOUBLY LINKED LIST: ${endTimeDblT - startTimeDblT}ms`);
