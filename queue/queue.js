// class Queue {
//     constructor(){
//         this.items = [];
//         this.rear = -1;
//         this.front = -1;
//     }

//     enqueue(value){
//         this.items.push(value);
//     }

//     // let deleteValue;

//     dequeue(){
//        let  deleteValue = this.items.shift();
//        return deleteValue;
//     }

//     print(){
//         let str = '';
//         for (let i = 0; i <= this.items.length -1; i++) {
//             str += this.items[i]+' ';
//         }
//         return str;
//     }
// }


// const queue = new Queue();

// queue.enqueue(5);
// queue.enqueue(10);

// console.log(queue.print());


// class Queue {
//   constructor() {
//     this.items = {};
//     this.front = 0;
//     this.rear = 0;
//   }
//   enqueue(item) {
//     this.items[this.rear] = item;
//     this.rear++;
//   }
//   dequeue() {
//     const item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }
//   peek() {
//     return this.items[this.front];
//   }
//   get size() {
//     return this.rear - this.front;
//   }
//   isEmpty() {
//     return this.rear == 0;
//   }
// }
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log("Current queue is: ", queue);

// var removed_element = queue.dequeue();
// console.log("Removed element is: ", removed_element);

// console.log("The current queue is: ", queue);

// var top_element = queue.peek();
// console.log("The top element of the queue is: ", top_element);

// var queue_length = queue.size;
// console.log("The size or length of the queue is: ", queue_length);


class Queue {
    constructor() {
        this.queue = [];
        this.rear = 0;
        this.front = 0;
    }
    enque(item) {
        this.queue[this.rear] = item;
        this.rear++;
    }
    deque() {
        let delVal = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return delVal;
    }
    isEmpty() {
        if (this.rear === 0) {
            return "Empty queue";
        }
        return 'not empty';
    }
    peek() {
        return this.queue[this.front];
    }
    size(){
        return this.rear - this.front;
    }
    print(){

        for (let i = 0; i < this.queue.length; i++) {
          console.log(this.queue[i]);
        }
    }

}
const obj =  new Queue();
console.log(obj.isEmpty());
obj.enque(1);
obj.enque(2);
obj.enque(3);


obj.print();

console.log(obj.size());

console.log(obj.peek());

console.log(obj.isEmpty());

