// ***** single linked list ******

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
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; //adds the next of tail the newnode ( chaneges the tail )
            this.tail = newNode; //makes the newnode as the tail.(become the tail)
        }
    }

    // add at the beginning of the the head
    prepend(value) {
        const newNode = new Node(value);

        // const current = this.head; //find the head
        // newNode.next = current; //making old head as the next of newnode
        newNode.next = this.head;
        this.head = newNode; //makes the new node as the head
    }

    deleteStart() {
        this.head = this.head.next;
    }
    deleteEnd() {

        let current = this.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        // current = null;
    }

    insertIndex(index, value) {
        if (index === 0) {
            this.prepend(value);
        }
        else if (index === this.tail) {
            this.append(value);
        } else {
            const newNode = new Node(value);

            let count = 0;
            let current = this.head;
            let prev = 0;

            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = newNode;
            newNode.next = current;
        }
    }

    deleteAtIndex(index) {
        if (index === 0) {
            this.deleteStart()
        } else {

            let prevNode = 0;
            let counter = 0;
            let current = this.head;

            while (counter < index) {
                prevNode = current;
                current = current.next;
                counter++;
            }

            prevNode.next = current.next;
        }

    }

    deleteWithValue(value) {

        if (this.head.value === value) {
            this.head = this.head.next;
        }

        let current = this.head;
        let prev = null;

        while (current) {
            if (current.value === value) {
                prev.next = current.next;
            }
            prev = current;
            current = current.next;
        }

    }


    removeDuplicate() {

        let current = this.head;
        // let prev = null;

        while (current.next) {

            if (current.value === current.next.value) {
                current.next = current.next.next;
            }else{
                current = current.next;
            }
        }
    }

    print() {
        let current = this.head;

        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }


}
const singllinkedlist = new Linkedlist();

// adds at the end
singllinkedlist.append(5);
singllinkedlist.append(10);
singllinkedlist.append(70);

// adds at the beginning
singllinkedlist.prepend(20);
singllinkedlist.prepend(30);
singllinkedlist.append(40);
singllinkedlist.append(40); //
singllinkedlist.append(50); //
// delete at end
// singllinkedlist.deleteEnd();
// singllinkedlist.deleteStart();

// singllinkedlist.deleteEnd();

// insert at index
// singllinkedlist.insertIndex(2, 1);

// delete at index
// singllinkedlist.deleteAtIndex(4);

// delete with value
// singllinkedlist.deleteWithValue(10);

// remove duplicate 
singllinkedlist.removeDuplicate(); 

singllinkedlist.print();


