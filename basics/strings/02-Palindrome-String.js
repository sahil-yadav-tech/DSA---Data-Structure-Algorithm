/*
====================================================
CHECK PALINDROME USING BUILT-IN METHODS
====================================================

A palindrome is a word, phrase, or number that
reads the same forward and backward.

Examples:
"madam"  -> true
"level"  -> true
"hello"  -> false

Steps:
1. Reverse the original string.
2. Compare the reversed string with the original string.
3. If both are equal, it's a palindrome.

Time Complexity: O(n)
Space Complexity: O(n)
====================================================
*/

const originalString = "level";

function isPalindrome(inputString) {
  const reversedString = inputString
    .split("")
    .reverse()
    .join("");

  return inputString === reversedString;
}

console.log(isPalindrome(originalString)); // true

