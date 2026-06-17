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


/*
====================================================
CHECK PALINDROME WITHOUT USING REVERSE()
====================================================

Steps:
1. Create an empty string.
2. Traverse the original string.
3. Add each character at the beginning.
4. Compare reversed string with original string.

Example:

Input: "lil"

Iteration 1:
reversedString = "l"

Iteration 2:
reversedString = "i" + "l"
reversedString = "il"

Iteration 3:
reversedString = "l" + "il"
reversedString = "lil"

Compare:
"lil" === "lil"

Output: true

Time Complexity: O(n)
Space Complexity: O(n)
====================================================
*/

const originalStringValue = "lil";

function checkPalindromeManually(inputString) {
  let reversedString = "";

  for (let index = 0; index < inputString.length; index++) {
    reversedString = inputString[index] + reversedString;
  }

  return inputString === reversedString;
}

console.log(checkPalindromeManually(originalStringValue)); // true