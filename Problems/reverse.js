
function strrev(str) {

  let newstr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    newstr.push(str[str.length - 1 - i]);
  }
  return newstr.join('');
}

let str = "george"

console.log(strrev(str));
