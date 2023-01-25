function sortedSquares(nums) {
  let start = 0;
  let end = nums.length - 1;
  let idx = end;
  let result = [];

  while (idx > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result[idx] = nums[start] * nums[start];
      idx--;
      start++;
    } else {
      result[idx] = nums[end] * nums[end];
      idx--;
      end--;
    }
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
