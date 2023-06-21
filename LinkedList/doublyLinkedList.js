// ****** doubly linked list ******


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertAtindex(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    else if (index === this.tail) {
      this.append(value);
    } else {

      const newNode = new Node(value);
     
      let counter = 0;
      let prevNode = 0;
      let current = this.head;

      while (counter < index) {
        current = current.next;
        counter++;
      }

      prevNode = current.prev;
     

//added prev node with new node 
      prevNode.next = newNode;
      newNode.prev = prevNode;

// added newnode with next node
      newNode.next = current;
      current.prev = newNode;
    }
  }
  deleteStart() {
    this.head = this.head.next;
  }

  deleteAtIndex(index) {
    if (index === 0) {
      this.deleteStart();
    }
    else {
      let prevNode = 0;
      let counter = 0;
      let current = this.head;
      let nextNode = 0;

      while (counter < index) {
        current = current.next;
        counter++;
      }
      prevNode = current.prev;
      nextNode = current.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
  }

  // delete duplicate
  removeDuplicate() {
    let current = this.head;
    let prevNode = 0;
    let nextNode = 0;

    while (current.next) {

      prevNode = current.prev;
      nextNode = current.next;

      if (prevNode && nextNode && prevNode.value === current.value) {
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      }
      current = nextNode;
    }
  }

  // Print the values of the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Create a new doubly linked list
const doublyLinkedList = new LinkedList();

// Add nodes to the doubly linked list
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);

doublyLinkedList.prepend(6);
doublyLinkedList.append(3);
doublyLinkedList.append(3);
doublyLinkedList.append(36);

// insert at index
doublyLinkedList.insertAtindex(1, 99)

// delete at start
// doublyLinkedList.deleteStart();

// delete at index
// doublyLinkedList.deleteAtIndex(1);

// doublyLinkedList.removeDuplicate();
// Print the doubly linked list
doublyLinkedList.print();
