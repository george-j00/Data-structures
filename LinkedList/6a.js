// *** construction of singkly linked list **** 

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
}

const singlyLinkedList = new Linkedlist();











// **** construction of doubly linked list ****

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}
const doublyLinkedlist = new Linkedlist();
