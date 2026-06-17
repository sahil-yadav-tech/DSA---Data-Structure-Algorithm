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