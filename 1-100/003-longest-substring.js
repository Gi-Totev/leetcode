/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let charSet = new Set();
  let size = 0;

  while (left <= s.length - 1 && right <= s.length - 1) {
    if (!charSet.has(s.charCodeAt(right))) {
      charSet.add(s.charCodeAt(right));
      right++;

      if (charSet.size > size) size = charSet.size;
      continue;
    }

    charSet.delete(s.charCodeAt(left));
    left++;
  }

  return size;
};

console.log(lengthOfLongestSubstring('abcaabcdba'))
