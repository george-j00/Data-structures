function findDuplicates(arr) {
    var hashTable = {};
    var duplicates = [];

    for (var i = 0; i < arr.length - 1; i++) {
        var currentElement = arr[i];

        if (currentElement in hashTable) {
            duplicates.push(currentElement);
        } else {
            hashTable[currentElement] = true;
        }
    }

    // return duplicates;
    return hashTable;
}

var numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1, 3];
var duplicates = findDuplicates(numbers);

console.log(duplicates);
