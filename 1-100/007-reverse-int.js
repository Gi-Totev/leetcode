// MAX = 2147483647 ( 2^31 - 1 )
// MIN = -2147483648 ( -2^31 )

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  if (x > MAX || x < MIN) return 0;
  if ((x < 10 && x >= 0) || (x > -10 && x <= 0)) return x;

  let abs = Math.abs(x);
  let sign = Math.sign(x);
  let current = 0;
  let decimal = 0;
  let currentDecimal = 0;

  while(abs > Math.pow(10, decimal)) {
    decimal++;
    if(abs == Math.pow(10, decimal)) return 1 * sign;
  }


  while (decimal >= 0) {
    decimal--;

    current += Math.floor((abs / Math.pow(10, decimal))) * Math.pow(10, currentDecimal);
    abs %= Math.pow(10, decimal);

    currentDecimal++;
  }

  current *= sign;

  if (current > MAX || current < MIN) return 0;

  return current;
};

/**
 * @param {number} x
 * @return {number}
 */
function reverseWithString(x) {
  const MAX = 2147483647;
  const MIN = -2147483648;

  if (x > MAX || x < MIN) return 0;
  if ((x < 10 && x >= 0) || (x > -10 && x <= 0)) return x;

  const sign = Math.sign(x);
  const abs = Math.abs(x);
  let result = Number(`${abs}`.split('').reverse().join(''));
  result *= sign;

  if(result > MAX || result < MIN) return 0;
  return result;
}

console.log(reverse(12));
console.log(reverse(10));
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
