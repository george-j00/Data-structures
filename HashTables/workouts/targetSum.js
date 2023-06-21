function twoSum(nums, target) {
  var hashTable = {};
  let result;

  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];

    // if (hashTable.hasOwnProperty(complement)) {
    //   return [hashTable[complement], i];
    // }
    if (complement in hashTable) {
      result = [hashTable[complement], i];
    }
    hashTable[nums[i]] = i; //we need to create a key value pair for each element . 
                                // we are assigning value true for the key num[i]
  }
  // return [];
  return  result;
}

// Example usage
var nums = [2, 7, 11, 15];
var target = 18;
var indices = twoSum(nums, target);

console.log("Indices:", indices); // Output: Indices: [0, 1]
