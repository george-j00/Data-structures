
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

    addNode(value, before, after) {
        const newNode1 = new Node(before);
        const newNode2 = new Node(after);
    
        if (!this.head) {
            return; // No nodes in the list, cannot perform insertion
        }
    
        let current = this.head;
        let prev = null;
    
        while (current) {
            if (current.value === value) {
                if (prev) {
                    prev.next = newNode1;
                    newNode1.next = current;
                    newNode2.next = current.next;
                    current.next = newNode2;
                } else {
                    newNode1.next = current;
                    newNode2.next = current.next;
                    current.next = newNode2;
                    this.head = newNode1;
                }
                return; // Insertion completed, exit the method
            }
            prev = current;
            current = current.next;
        }
    
        console.log("Value not found in the list."); // Value not found in the list
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }


}
const singlyLinkedList = new Linkedlist();

singlyLinkedList.append(2);
singlyLinkedList.append(50);
// singlyLinkedList.append(20);
// singlyLinkedList.deleteValue(2);
// singlyLinkedList.deleteValue(2);

singlyLinkedList.addNode(2, 10, 20);

singlyLinkedList.print();