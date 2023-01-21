function majorityElement(nums) {
  let majorityElement = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (majorityElement === nums[i]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      majorityElement = nums[i];
      count++;
    }
  }
  return majorityElement;
}

console.log(majorityElement([3, 2, 3]));
