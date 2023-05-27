/**
 * @param {Number[]} nums1
 * @param {Number[]} nums2
 * @return {Number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  let mergedArray = new Array(Math.floor(totalLength / 2) + 1);
  let i1 = 0;
  let i2 = 0;

  while (i1 + i2 <= totalLength / 2) {
    if (nums1[i1] <= nums2[i2] || nums2[i2] == undefined) {
      mergedArray.push(nums1[i1]);
      i1++;
    } else {
      mergedArray.push(nums2[i2]);
      i2++;
    }
  }

  if (totalLength % 2 == 0) {
    return (mergedArray[mergedArray.length - 1] + mergedArray[mergedArray.length - 2]) / 2;
  } else {
    return mergedArray[mergedArray.length - 1];
  }
};

/**
 *
 * @param {Number[]} nums1
 * @param {Number[]} nums2
 * @returns {Number}
 */
function findMedianSortedArrays2(nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    let mid = Math.floor(arr.length / 2);
    return ((arr[mid] + arr[mid - 1]) / 2);
  }
  else {
    return arr[Math.floor(arr.length / 2)];
  }
}

console.log(findMedianSortedArrays([], [2, 3]));
console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));
console.log(findMedianSortedArrays([1], []));
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
