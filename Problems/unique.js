// let arr = [1, 2, 2, 3, 4, 5, 5, 9, 10, 10 ,15,15,3,2];

// const unique = () => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//            if (arr[i] !== arr[j]) {

//            }
//         }
//     }
// }


// console.log(unique(arr));


//unique elements in array 

// const uniqueArray = new Set(arr);

// console.log(uniqueArray);




// *** prime in array *** 

let primeArray = (num) => {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = [];

arr.forEach((item) => {
    let isprime = primeArray(item);
    if (isprime) {
        newarr.push(item);
    }
})
console.log(newarr);


// ***** unique elements ******

// let arr = [1, 2, 3, 4, 5, 5, 2, 3, 6, 79, 10];
// const isUnique = (arr) => {

//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false ;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                isDuplicate = true;
//             } 
//         }
//         if (!isDuplicate) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }

// console.log(isUnique(arr));


