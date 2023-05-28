/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  let result = 0;
  let sign = null;
  let digits = [];
  let currentCharCode = null;
  let firstCharCode = null;
  let index = null;
  let hasExplicitSign = false;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) == 32) continue;
    firstCharCode = s.charCodeAt(i);
    index = i;
    break;
  }

  if (!firstCharCode) return 0;
  if (firstCharCode == 43) {
    sign = 1;
    hasExplicitSign = true;
  }
  if (firstCharCode == 48 || firstCharCode == 43) sign = 1;
  if (firstCharCode == 45) {
    sign = -1;
    hasExplicitSign = true;
  }
  if (firstCharCode > 48 && firstCharCode <= 57) {
    digits.push(firstCharCode - 48);
    sign = 1;
  }

  if (sign == null) return 0;

  for (let i = index + 1; i < s.length; i++) {
    currentCharCode = s.charCodeAt(i);

    if ((s.charCodeAt(i - 1) == 48 || digits.length || hasExplicitSign) && currentCharCode == 32) break;
    if (currentCharCode == 32) continue;
    if (!digits.length && currentCharCode == 48) continue;
    if (currentCharCode < 48 || currentCharCode > 57) break;

    digits.push(currentCharCode - 48);
  }

  for (let i = 0; i < digits.length; i++) {
    result += digits[digits.length - i - 1] * Math.pow(10, i);
  }

  result *= sign;

  if (result > MAX) return MAX;
  if (result < MIN) return MIN;

  return result;
};

/**
 * @param {string} s
 * @return {number}
 */

function myAtoiFast(s) {
  var val = parseInt(s, 10);
  if (!isNaN(val)) {
    var limitUp = Math.pow(2, 31);
    var limitDown = Math.pow(-2, 31);
    if (val >= limitUp) {
      return limitUp - 1;
    } else if (val < limitDown) {
      return limitDown;
    } else {
      return val;
    }
  } else {
    return 0;
  }
};

// Ascii table => 0 == charCode: 48, 9 == charCode: 57, + == charCode: 43, - == charCode: 45
// ' ' == charCode: 32
console.log(myAtoi(' +0 123')); // 0
// console.log(myAtoi('++42')); // 0
// console.log(myAtoi('-+42')); // 0
// console.log(myAtoi('42f53')); // 42
// console.log(myAtoi('42')); // 42
// console.log(myAtoi('   -42')); // -42
// console.log(myAtoi('4193 with words')); // 4193
