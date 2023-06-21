// Use Case: Insertion Sort is efficient for small datasets or 
// nearly sorted arrays. It's also used in practice for sorting small parts 
// of larger algorithms.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

const insrtSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];
        let j = i - 1;

        while (arr[j] > current ) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = current;
    }

    return arr ;
}

let newArray = [5, 6, 3, 11, 9, 7];

console.log(insrtSort(newArray));
