

var searchRange = function (arr, tar) {
    let low = 0;
    let high = arr.length - 1;

    let res1 = -1;
    let res2 = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === tar) {
            res1 = mid;
            high = mid - 1;
        } else if (arr[mid] < tar) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    low = 0;
    high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === tar) {
            res2 = mid;
            low = mid + 1;
        } else if (arr[mid] < tar) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }


    return [res1, res2];
};

const res = searchRange([5,7,7,8,8,10], 8);

console.log(res);