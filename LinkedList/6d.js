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
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }









    








    deleteValue(value) {
        let current = this.head;
        let prev = null;
        let deletNode = null;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        while (current.next.value !== value) {
            prev = current;
            deletNode = current.next;
            prev.next = deletNode.next;
        }
    }
}
const singlyLinkedList = new Linkedlist();

singlyLinkedList.append(2);
singlyLinkedList.append(5);
singlyLinkedList.deleteValue(2);

singlyLinkedList.print();