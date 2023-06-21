// const anagram = function (first , second) {

//     let obj1 = {};
//     let obj2 = {};

//     if (first.length !== second.length) {
//         return false;
//     }

//     for (let i = 0; i < first.length; i++) {
//        obj1[first[i]] = (obj1[first[i]] || 0) + 1;
//        obj2[second[i]] = (obj2[second[i]] || 0) + 1; 
//     }

//     for (const key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
// return true;
// }

// console.log(anagram("cat" , "tac"));


// * ***** find the target with sum ****** 

const findTwoNumbers  = function (array, target) {

    let obj = {};
    for (let i = 0; i < array.length; i++) {

        let curr = array[i];
        let nextNum = target - curr;
       

        if (nextNum in obj) {
            return [nextNum, curr];
        }
         obj[curr] = i;
    }
   
}


console.log(findTwoNumbers ([ 15,13,3, 7, 11], 26));

// const frequncyCounter = function (array) {

//     let frequency = {};
//     // let newstr = array.split('');
//     let newstr = [...array]

//     for (let i = 0; i < newstr.length; i++) {
//         let curr = newstr[i];
//         frequency[curr] = frequency[curr] ? frequency[curr] + 1 : 1;
//     }

//     // // for (let i = 0; i < newstr.length; i++) {
//     // //     let curr = newstr[i];
//     // //     if (frequency[curr] === 1) {
//     // //         return curr;
//     // //     }
//     // // }
//     return frequency;
//     // return newstr;
   
   
   
   
// }

// let arr = "ahilash";
// console.log(frequncyCounter(arr));