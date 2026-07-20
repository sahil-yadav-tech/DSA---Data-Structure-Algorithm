const reverseString = (string) => {
  let ReverseStringValue = "";
  for (let i = 0; i < string.length; i++) {
    ReverseStringValue = string[i] + ReverseStringValue;
  }
  return ReverseStringValue;
};

console.log(reverseString("hey There")); // "erehT yeh"