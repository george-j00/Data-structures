class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class linkedListNode {
    constructor() {
        this.head = null;
        this.tail = null; 
    }
    
    arrayToLinkedList(arr) {

         this.head = new Node(arr[0]);

        let current = this.head;

        for (let i = 1; i < arr.length; i++) {
            const newNode = new Node(arr[i]);
            current.next = newNode;
            current = newNode;
        }
        // return head;
    }

    print(){
       let current = this.head;

        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

const arrLinkedLst = new linkedListNode();

arrLinkedLst.arrayToLinkedList([5,1,2,44,68,9])
arrLinkedLst.print();

//     arrayToLinkedList(10);

// console.log(obj.arrayToLinkedList([1,2,3,4]));


// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   function arrayToLinkedList(arr) {
//     if (arr.length === 0) {
//       return null;
//     }
  
//     const head = new Node(arr[0]);
//     let current = head;
  
//     for (let i = 1; i < arr.length; i++) {
//       const newNode = new Node(arr[i]);
//       current.next = newNode;
//       current = newNode;
//     }
  
//     return head;
//   }
  
//   // Example usage:
//   const arr = [1, 2, 3, 4, 5];
//   const linkedList = arrayToLinkedList(arr);
  
//   console.log(linkedList);
  