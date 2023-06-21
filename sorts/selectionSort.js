// Use Case: Similar to Bubble Sort,
// Selection Sort is not recommended for large datasets or 
// performance-critical applications. It's useful for small lists or
//  when memory write is a costly operation.

// Time Complexity: O(n^2)
// Space Complexity: O(1)
let selectinSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {

        let current = arr[i]; //same as for finding the min from an array 
        let currentMin = 0;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (current > arr[j]) { //finding the min element from an array
                current = arr[j];
                currentMin = j;     // finding the index of the min element 
            }
        }
        if (currentMin) { // swapping
            let temp = arr[i];
            arr[i] = arr[currentMin]
            arr[currentMin] = temp;
        }
    }
    return arr;
}
const arr = [4, 1, 3, 6, 8, 5];

console.log(selectinSort(arr));