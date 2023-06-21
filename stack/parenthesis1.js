class Stack {
    constructor() {
        this.stack = [];
    }
    checkParanthesis(str) {
        for (let i = 0; i < str.length; i++) {
            let curr = str[i];
            if (curr === "(" || curr === "{" || curr === "[") {
                this.stack.push(curr);
            } else if (curr === ")" || curr === "}" || curr === "]") {
                if (this.stack.length === 0) {
                    return false;
                }
                let top = this.stack.pop();
                if (
                    curr === ")" && top !== "(" ||
                    curr === "]" && top !== "[" ||
                    curr === "}" && top !== "{"
                ) {
                    return false;
                }
            }
        }
        if (this.stack.length === 0) {
            return true;
        } 
    }
}
const obj = new Stack();
console.log(obj.checkParanthesis("([([])])"));