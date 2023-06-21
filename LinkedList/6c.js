// ***  prepend and append *** 
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
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
           this.tail.next = newNode;
           this.tail = newNode;
        }
    }
}
const singlyLinkedList = new Linkedlist();
singlyLinkedList.prepend(1);
singlyLinkedList.append(2);
singlyLinkedList.print();