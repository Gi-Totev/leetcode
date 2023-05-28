/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convertSlow(s, numRows) {
  if (s.length <= 2 || numRows == 1) return s;
  let array = [];
  let index = 0;
  let direction = 1;

  for (let i = 0; i < numRows; i++) {
    array.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    array[index].push(s.charAt(i));

    index += direction;

    if (index > numRows - 1) {
      direction = -1;
      index += 2 * direction;
    };

    if (index < 0) {
      direction = 1;
      index += 2 * direction;
    }
  }

  return array.map(innerArray => innerArray.join('')).join('');
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (s.length <= 2 || numRows == 1) return s;
  let array = [];
  let index = 0;
  let direction = 1;

  for (let i = 0; i < numRows; i++) {
    array.push('');
  }

  for (let i = 0; i < s.length; i++) {
    array[index] += (s.charAt(i));

    index += direction;

    if (index > numRows - 1) {
      direction = -1;
      index += 2 * direction;
    };

    if (index < 0) {
      direction = 1;
      index += 2 * direction;
    }
  }

  return array.join('');
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));
