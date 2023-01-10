function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // condition <= for single element;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentElement = nums[mid];
    if (currentElement === target) {
      return mid;
    } else if (currentElement < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
