function moveZeroes(nums) {
  let lastNonZeroElementAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroElementAt] = nums[i];
      lastNonZeroElementAt++;
    }
  }

  for (let i = lastNonZeroElementAt; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
