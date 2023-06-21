// *** array to linked list *** 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Linkedlist {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    arrtoLinkedList(arr) {

        this.head = new Node(arr[0]);
        let current = this.head;

        for (let i = 1; i < arr.length; i++) {
            const newNode = new Node(arr[i]);
            current.next = newNode;
            current = newNode;
        }
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const singlyLinkedList = new Linkedlist();
singlyLinkedList.arrtoLinkedList(arr);
singlyLinkedList.print();