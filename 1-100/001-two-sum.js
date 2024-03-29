/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  const map = new Map();
  const result = [0, 0];

  let current = undefined;

  for (let i = 0; i < nums.length; i++) {
    current = map.get(target - nums[i]);

    if (current != undefined) {
      result[0] = current;
      result[1] = i;
    }

    map.set(nums[i], i);
  }

  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
