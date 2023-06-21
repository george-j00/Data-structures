// reverse the string 


class Stack {
    constructor() {
        this.stack = [];
    }

    reverseString(str) {
        let newStr = str.split(' ');

        

        for (let i = 0; i < newStr.length; i++) {
            newStr[i].trim();
            this.stack.push(newStr[i]);
        }

        let final = "";

        for (let i = 0; i < newStr.length; i++) {
            let del = this.stack.pop();

            final += del+" ";
        }
        let last = final.trim();
        return last;
    }
}

let str = "a good   example";
const stackObj = new Stack();

console.log(stackObj.reverseString(str));

