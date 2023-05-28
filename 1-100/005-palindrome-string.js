/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  let palindrome = s.charAt(0);
  let current = null;

  /**
   * @param {String} string
   * @returns {Boolean}
   */
  function isPalindrome(string) {
    for (let i = Math.floor(string.length / 2); i--;) {
      if(string[i] != string[string.length - 1 - i]) return false;
    }

    return true;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      current = s.slice(i, j);
      if(isPalindrome(current) && current.length > palindrome.length) {
        palindrome = current;
      }
    }
  }

  return palindrome;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bb'));
