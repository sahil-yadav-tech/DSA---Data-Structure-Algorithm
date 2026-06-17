/*
====================================================
METHOD 1: Using Built-in Methods
====================================================

Steps:
1. Convert string into an array using split("")
2. Reverse the array using reverse()
3. Convert array back to string using join("")

Time Complexity: O(n)
Space Complexity: O(n)
====================================================
*/

const originalString = "reversethisstring";

const reversedUsingBuiltInMethods = originalString
  .split("")
  .reverse()
  .join("");

console.log("Built-in Method:", reversedUsingBuiltInMethods);


/*
====================================================
METHOD 2: Without Using Built-in Reverse Methods
====================================================

Steps:
1. Create an empty string to store the result.
2. Loop through each character of the original string.
3. Add the current character to the beginning of the result string.
4. Return the final reversed string.

Example:

Input: "abc"

Iteration 1:
reversedString = "a"

Iteration 2:
reversedString = "b" + "a"
reversedString = "ba"

Iteration 3:
reversedString = "c" + "ba"
reversedString = "cba"

Output: "cba"

Time Complexity: O(n)
Space Complexity: O(n)
====================================================
*/

const originalStringValue = "reversethisstring";

function reverseStringManually(inputString) {
  // Store reversed result
  let reversedString = "";

  // Loop through every character
  for (let index = 0; index < inputString.length; index++) {
    // Add current character at the beginning
    reversedString = inputString[index] + reversedString;
  }

  return reversedString;
}

const manuallyReversedString =
  reverseStringManually(originalStringValue);

console.log("Manual Method:", manuallyReversedString);