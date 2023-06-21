function matchingParenthesis(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {

            if (stack.length === 0) {
                return 'not equal';
            }

            stack.pop();
        }
    }
    if (stack.length > 0) {
        return 'not equal';
    }
    return 'equal';
}
console.log(matchingParenthesis('(())'));