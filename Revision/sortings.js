//bubble sort
// function bubbleSort (array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//            if (array[i] > array[j]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//            }
//         }
//     }
//     return array
// }


// const arr = [5,1,4,7,99,43];

// console.log(bubbleSort(arr));



// ****** insertion sort ******
// function insertionSort(array) {
//     for (let i = 0; i < array.length; i++) {

//        let current = array[i];
//        let j = i -1 ;


//        while (array[j] > current) {
//         array[j+1] = array[j];
//         j--;
//        }
//         array[j+1] = current;
//     }
//     return array;
// }

// const arr = [5,1,4,7,99,43 ,2];

// console.log(insertionSort(arr));


// ****** selection sort ******
// function selectionSort(array) {
//     for (let i = 0; i < array.length - 1; i++) {

//         // let current = array[i];

//         let min = array[i];
//         let minIndex = 0;

//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < min) {
//                 min = array[j];
//                 minIndex = j
//             }
//         }

//        if (minIndex) {
//         let temp = array[i];
//         array[i] = array[minIndex];
//         array[minIndex] = temp;
//        }
//     }
//     return array;
// }

// const arr = [5, 1, 4, 7, 99, 43, 2];

// console.log(selectionSort(arr));


// ***** merge sort ****** 
function mergeSort(array){

    let mid = Math.floor(array.length / 2);
    
}
const arr = [5, 1, 4, 7, 99, 43, 2];

console.log(mergeSort(arr));