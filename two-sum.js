var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (nums[i] + nums[j] !== target) {
    if (nums[i] + nums[j] !== target) {
      j--;
    }
    if (i === j) {
      j = nums.length - 1;
      i++;
    }
  }

  return [i, j];
};

console.log(twoSum([3, 2, 4], 6));
