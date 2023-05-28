/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  if (x < 10) return true;

  let copy = x;
  let reverse = 0;

  while(copy > 0) {
    reverse = reverse * 10 + (copy % 10)
    copy = Math.floor(copy / 10);
  }

  return x == reverse;
}

/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindromeWithArray(x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  if (x < 10) return true;

  let arr = [];
  let left = 0;
  let right = 0;

  while(x) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  right = arr.length - 1;

  while(left < right) {
    if(arr[left] !== arr[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome(1001));
console.log(isPalindrome(10101));
console.log(isPalindrome(0));
console.log(isPalindrome(8));
console.log(isPalindrome(10));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1213));
