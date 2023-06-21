 function reverseString(str){

    let stack = [];
    let revStr = '';

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while (stack.length > 0) {
        revStr += stack.pop();
    }
    return revStr;
}

console.log(reverseString('hello'));
