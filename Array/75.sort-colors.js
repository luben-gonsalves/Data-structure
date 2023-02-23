function sortColors(nums) {
  let start = 0;
  let end = nums.length - 1;
  let curr = 0;

  while (curr <= end) {
    if (nums[curr] === 0) {
      [nums[start], nums[curr]] = [nums[curr], nums[start]];
      start++;
      curr++;
    } else if (nums[curr] === 2) {
      // dont increase current because swapping end might contain 0
      [nums[end], nums[curr]] = [nums[curr], nums[end]];
      end--;
    } else {
      curr++;
    }
  }

  return nums;
}
