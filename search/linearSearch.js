const linearSearch = (arr,target) => {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

let array = [2,5,6,11,3,54,77];

let result = linearSearch(array,77);

console.log(result);
