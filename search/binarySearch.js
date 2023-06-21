// const binarySearch = (arr, target) => {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low < high) {

//         const mid = Math.floor((low + high) / 2)

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] <= target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
// }


// find the first occurence 
// const firstOccurence = (arr, target) => {

//     let low = 0;
//     let high = arr.length - 1;
//     let result = 0;

//     while (low <= high) {
//         let mid = Math.floor((high + low) / 2);

//         if (arr[mid] === target) {
//             result = mid;
//             high = mid - 1;
//         } else if (arr[mid] <= target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return result;
// }


// find the last occurence

const lastOccurence = (arr ,target) => {

    let low = 0 ; 
    let high = arr.length-1;
    let result = 0;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            result = mid;
            high = mid - 1;
        }else if (arr[mid] <= target){
            low = mid + 1;
        } 
        else {
            high = mid-1;
        }
    }
    return result;
}

const arr = [1, 2,3, 3, 4, 5, 5, 6, 7, 8];
// const result = binarySearch(arr, 5);
// const result = firstOccurence(arr, 3);
const result = lastOccurence(arr, 5);


console.log(result);