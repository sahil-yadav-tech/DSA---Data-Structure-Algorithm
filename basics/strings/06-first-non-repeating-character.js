function firstNonRepeatedChar(str) {
  const count = {};

  // Count each character
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (const char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatedChar("aabbcdd")); // c
console.log(firstNonRepeatedChar("swiss"));   // w
console.log(firstNonRepeatedChar("aabb"));    // null