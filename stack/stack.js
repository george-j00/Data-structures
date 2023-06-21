// class Stack {
//     constructor() {
//         this.items = [];
//         // this.size = 0;
//     }

//     isEmpty() {
//         if (this.items.length === 0) {
//             console.log('Empty Stack');
//         }
//     }

//     push(data) {
//         this.items.push(data);
//     }

//     pop() {
//         if (this.items.length === 0) {
//             return 'underflow';
//         }

//         let deleted = this.items.pop();
//         return deleted;
//     }

//     print() {

//         let str = '';
//         for (let i = 0; i <= this.items.length - 1; i++) {
//             str += this.items[i] + ' ';
//         }
//         return str;
//     }
// }


// const stack = new Stack();

// stack.push(5);
// stack.push(10);
// stack.push(15);
// stack.push(20);


// console.log(stack.print());


// console.log(stack.pop());
// console.log(stack.print());


// console.log(stack.delete());




// program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }

//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }

//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }

//     // the size of the stack
//     size(){
//         return this.items.length;
//     }

//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);


class Stack {
    constructor() {
        this.stack = [];
    }
    isEmty() {
        if (this.stack.length <= 0) {
            return true;
        }
    }
    push(item) {

        this.stack.push(item);
    }
    pop() {
        if (this.isEmty()) {
            return "empty stack";
        }
        let delVal = this.stack.pop();
        return delVal;
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    print(){
        for (let i = 0; i < this.stack.length; i++) {
           console.log(this.stack[i]);
        }
    }
}
const obj =  new Stack();
console.log("***"+obj.pop()+"***");

obj.push(5);
obj.push(10);
obj.push(15);

obj.print();
console.log("***"+obj.pop()+"***");
console.log('*************');

obj.print();

console.log(obj.peek());