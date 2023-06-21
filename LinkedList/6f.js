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
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
    
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    
        this.head = prev; // Update the head to the new first node
    
        let reversedValues = [];
        current = this.head;
    
        while (current) {
            reversedValues.push(current.value);
            current = current.next;
        }
    
        console.log(reversedValues.join(" -> "));
    }
    

}
const singlyLinkedList = new Linkedlist();

singlyLinkedList.append(2);
singlyLinkedList.append(5);
// singlyLinkedList.deleteValue(2);

singlyLinkedList.reverse();

singlyLinkedList.print();