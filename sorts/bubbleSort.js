// Use Case: Bubble Sort is not suitable for large datasets or
//  performance-critical applications. It's mostly used for
//  educational purposes or when the input size is small and simplicity is preferred.
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const bubbleSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
let array = [5, 3, 12, 6, 88, 7, 45];
console.log(bubbleSort(array));



