const reverseString = (string) => {
  let checkPalindrome = "";
  for (let i = 0; i < string.length; i++) {
    checkPalindrome = string[i] + checkPalindrome;
  }
  
  return string === checkPalindrome
};

console.log(reverseString("lilil")); // "erehT yeh"