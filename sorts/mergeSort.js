// Use Case: Merge Sort is efficient for large datasets and offers consistent performance. 
// It's widely used in practice and serves as a basis for other sorting algorithms.
// Time Complexity: O(n log n)
// Space Complexity: O(n)


const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    let leftsort = mergeSort(left);
    let rightsort = mergeSort(right);
    return merge(leftsort, rightsort);
}
const merge = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let mergedArr = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            mergedArr.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            mergedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return mergedArr
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}
const array = [5, 1, 23, 57, 43, 8, 33];
console.log(mergeSort(array));