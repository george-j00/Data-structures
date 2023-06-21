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
// console.log(palindrome('heleh'));

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



// *** fibinoacci numbers *****

// let fibinoacci = (n) => {

//     let arr = [0,1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i-1] + arr[i-2]);
//     }
//    return arr[n];
// }

// fibinoacci(2);


// ***** fibonacci using recursion *****








// let fibinoacci = (n) => {
//     if (n <= 1) {
//         return n;
//     }
//     return fibinoacci(n - 1)+ fibinoacci(n - 2);
// };


// console.log(fibinoacci(5));



// **** anagram ****** 

// let anagram = (a, b) => {
//     let astr = a.split('').sort().join('');
//     let bstr = b.split('').sort().join('');

//     if (astr === bstr) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// console.log(anagram('car', 'rac'));


// **** sum with target  ***** 

// let sum = (arr, target) => {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return 1;
//             } 
//         }
//     }
//     return 0;

// }

// console.log(sum([2, 7, 11, 15, 27], 26));


// **** sum target with less time complexity ***** 

// let sum = (arr, target) => {

//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {

//         let n = arr[i];

//         if (obj[target - n] > 0) {
//             return 1
//         }
//         obj[n] = 1;
//     }
// }


// console.log(sum([2, 7, 11, 26], 26));


