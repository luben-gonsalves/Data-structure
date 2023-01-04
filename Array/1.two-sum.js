function twoSum(nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let requiredNum = target - nums[i];
    if (requiredNum in hashMap) {
      return [hashMap[requiredNum], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
