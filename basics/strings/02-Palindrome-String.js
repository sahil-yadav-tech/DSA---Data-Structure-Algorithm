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


/*
====================================================
CHECK PALINDROME USING TWO POINTERS
====================================================

Steps:
1. Place one pointer at the start.
2. Place another pointer at the end.
3. Compare characters.
4. If any mismatch occurs, return false.
5. If all characters match, return true.

Example:

"level"

l === l
e === e

Pointers meet in the middle.

Output: true

Time Complexity: O(n)
Space Complexity: O(1)
====================================================
*/

const wordToCheck = "level";

function isPalindromeUsingTwoPointers(inputString) {
  let leftPointer = 0;
  let rightPointer = inputString.length - 1;

  while (leftPointer < rightPointer) {
    if (inputString[leftPointer] !== inputString[rightPointer]) {
      return false;
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
}

console.log(isPalindromeUsingTwoPointers(wordToCheck)); // true