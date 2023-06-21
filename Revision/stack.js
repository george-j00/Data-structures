// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(value) {
//         this.items.push(value);
//     }

//     pop(value) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         let del = this.items.pop();
//         return del;
//     }

//     peek(){
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         this.items.length === 0;
//         return false;
//     }

//     print(){

//         console.log(this.items);
//     }
// }


// const obj = new Stack();

// obj.push(5);
// obj.push(15);
// obj.push(25);
// obj.push(35);

// obj.print();

// console.log("------------------");

// console.log(obj.pop());

// console.log("------------------");
// obj.print();


// ################################

// ***** stack using linked list ****** 



// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
// // **** For stack using linked list, push and pop operations are done at start ****
//     push(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.size++;
//     }

//     isEmpty() {
//         if (this.size === 0) {
//             return false;
//         }
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const delNode = this.head;
//         this.head = this.head.next;
//         this.size--;

//         return delNode.value;
//     }

//     peek(){
//         return this.head;
//     }

//     print(){
//         let current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }

// }


// const obj = new Stack();

// obj.push(5);
// obj.push(15);
// obj.push(25);


// obj.print();
// console.log("---------------");

// console.log(obj.pop());

// console.log("---------------");


// obj.print();




// ################################
// ***** Queueu  using array **** 

// class Queue {
//     constructor() {
//         this.queue = [];
//         // this.front = null;
//         // this.rear = null;
//     }

//     enqueue(value) {
//         this.queue.push(value);
//         // this.rear++;
//         // this.queue[this.queue.length-1]  = value;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return null;
//         }
//          let del = this.queue.shift(); //or this.queue.splice(0,1)
//         // this.front++;
//         return del;
//     }

//     peek(){
//         return this.queue[0];
//     }

//     isEmpty() {
//          if (this.queue.length == 0) {
//             return false;
//          }
//     }

//     print(){
//         console.log(this.queue);
//     }
// }

// const obj = new Queue();

// obj.enqueue(5);
// obj.enqueue(10);
// obj.enqueue(15);
// obj.enqueue(25);

// obj.print();
// console.log("--------------");
// console.log(obj.dequeue());
// console.log("--------------");

// obj.print();


// console.log(obj.peek());

// ################################
// ***** Queueu using linked list **** 
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class Queue {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     enqueue(value) {
//         const newNode = new Node(value);

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode
//         }
//         else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }

//     dequeue() {
//         if(this.isEmpty()) {
//             return null;
//         }
//         let del = this.head
//         this.head = this.head.next;
//         return del.value;
//     }

//     peek() {
//         return this.head;
//     }

//     print() {
//         let current = this.head;

//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }

//     isEmpty() {
//         if (!this.head) {
//             return false;
//         }
//     }


// }


// const obj = new Queue();

// obj.enqueue(5);
// obj.enqueue(15);
// obj.enqueue(25);
// obj.enqueue(35);

// obj.print();
// console.log("--------------");
// console.log(obj.dequeue());
// console.log("--------------");

// obj.print();


// ################################
// ***** stack into Queueu **** 

// class Stack {
//     constructor(){
//         this.stack = [];
//     }

//     push(value){
//         this.stack.push(value);
//     }

//     pop(){
//         if (this.stack.length === 0) {
//             return null;
//         }
//         let del = this.stack.pop();
//         return del;
//     }
//     print(){
//         console.log(this.stack);
//     }
// }

// class Queue {
//     constructor(){
//         this.queue = [];
//     }

//     eneque(value){
//         this.queue.push(value);
//     }

//     print(){
//         console.log(this.queue);
//     }

// }

// const obj = new Stack();

// obj.push(5);
// obj.push(10);
// obj.push(15);

// obj.print();
// console.log("------------------------------");

// const val = obj.pop();
// const val2 = obj.pop();
// console.log("------------------------------");


// const obj2 = new Queue();

// obj2.eneque(val)
// obj2.eneque(val2)

// obj.print();
// obj2.print();



// ################################
// ***** circular queueue **** 


// class CircularQueue {
//     constructor(val) {
//         this.queue = [];
//         this.front = 0;
//         this.rear = 0;
//         this.capacity = val;
//         this.size = 0;
//     }
//     enqueue(val) {
//         if (this.isFull()) {
//             console.log("Queue is full");
//             return 
//         }
//         this.rear = this.rear % this.capacity;
//         this.queue[this.rear] = val;
//         this.size++;
//         this.rear++;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return;
//         }
//         this.front = this.front % this.capacity;
//         this.queue[this.front] = 0;

//         this.size--;
//         this.front++;
//     }

//     isEmpty() {
//         if (this.size === 0) {
//             return false;
//         }
//     }

//     isFull() {
//         if (this.size === this.capacity) {
//             return true;
//         }
//     }

//     print(){
//         console.log(this.queue , this.size , this.front);
//     }
// }


// const obj = new CircularQueue(5);

// obj.enqueue(5);
// obj.enqueue(55);
// obj.enqueue(510);
// obj.enqueue(586);
// obj.enqueue(888);
// // obj.enqueue(777);
// // obj.enqueue(666);


// obj.dequeue(); // removes one items from the stack

// obj.enqueue(777);//as it removes one item from the array there is a place to insert 



// obj.print();