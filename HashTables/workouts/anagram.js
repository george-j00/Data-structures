function isAnagram(word1, word2) {
    // Check if the lengths of the words are equal
    if (word1.length !== word2.length) {
      return false;
    }
  
    // Create hash tables to store character frequencies
    var hashTable1 = {};
    var hashTable2 = {};
  
    // Calculate frequencies for word1
    for (var char of word1) {
      hashTable1[char] = (hashTable1[char] || 0) + 1;
    }
  
    // Calculate frequencies for word2
    for (var char of word2) {
      hashTable2[char] = (hashTable2[char] || 0) + 1;
    }
  
    // Compare the frequencies of characters in both words
    for (var key in hashTable1) {
      if (hashTable1[key] !== hashTable2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  var word1 = "listen";
  var word2 = "silent";
  console.log(isAnagram(word1, word2)); // Output: true
  
  var word3 = "hello";
  var word4 = "world";
  console.log(isAnagram(word3, word4)); // Output: false
  