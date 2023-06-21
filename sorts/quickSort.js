// Use Case: Quick Sort is widely used due to its efficient average-case performance. 
// It's often considered one of the fastest sorting algorithms.
// Time Complexity: O(n log n) (average case), O(n^2) (worst case)
// Space Complexity: O(log n) (average case), O(n) (worst case)

const quickSort = (array) => {

    if (array.length <= 1) {
        return array;
    }
    const leftArray = [];
    const rightArray = [];
    const pivot = array[array.length - 1];

    for (let i = 0; i < array.length -1 ; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

const array = [5, 1, 22, 77, 9,55,3,12];
console.log(quickSort(array));



