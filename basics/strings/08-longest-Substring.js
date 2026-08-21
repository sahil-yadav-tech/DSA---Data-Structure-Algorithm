function longestSubstring(str) {
  let left = 0;
  let maxLength = 0;
  const seen = new Set();

  for (let right = 0; right < str.length; right++) {
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }

    seen.add(str[right]);

    maxLength = Math.max(
      maxLength,
      right - left + 1
    );
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3