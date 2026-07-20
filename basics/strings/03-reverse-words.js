// Challenge: Reverse the words in a string
// Input: "hey There" → Output: "yeh erehT"
// Input: "Hello World" → Output: "olleH dlroW"

const reverseWords = (string) => {
  // Split the string into an array of words
  const words = string.split(" ");
  
  // Reverse each word individually
  const reversedWords = words.map(word => {
    return word.split("").reverse().join("");
  });
  
  // Join the reversed words back together with spaces
  return reversedWords.join(" ");
};

console.log(reverseWords("hey There")); // "yeh erehT"
console.log(reverseWords("Hello World")); // "olleH dlroW"
console.log(reverseWords("JavaScript is awesome")); // "tpircSavaJ si emosewa"