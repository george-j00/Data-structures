
// function stringToArray(str, a, b) {
//     // const newString = [...str];

//     // replacing an element from the string

//     // for (let i = 0; i < newString.length; i++) {
//     //     if (newString[i] === a) {
//     //         newString[i] = b;
//     //     }
//     // }










    // *** replace string ****

    let str = "hello"
    let myString = str.replace(/l/g," ");

console.log(myString);













//     // making reverse of the string
//     let arr = [];
//         for (let i = 0; i < str.length; i++) {
//             arr[i] = newString[str.length - 1 - i];
//         }
//         return arr;


//     return newString.reverse();
//       return  newString.join('');
// }


// console.log(stringToArray('hello', 'l', 'k'));







// ****** palindrome of strings *****
// function palindrome(str) {
  
//     let result = 1;
//     for (let i = 0; i <= str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             result = 0;
//         }
//     }
//     return result;    
// }
// console.log(palindrome('helehe'));











// **** palindrom of number *****

// function palindrome(str) {
//     let newString = String(str);
//     let result = 1;
//     for (let i = 0; i <= newString.length / 2; i++) {
//         if (newString[i] !== newString[newString.length - 1 - i]) {
//             result = 0;
//         }
//     }
//     return result;    
// }
// console.log(palindrome(121));

