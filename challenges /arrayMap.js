const hasSubarrayWithTargetSum = (arr, target) => {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > target && start <= end) {
      currentSum -= arr[start++];
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
};

const arr7 = [4, 2, 7, 1, 9, 5];
const target7 = 17;
console.log(hasSubarrayWithTargetSum(arr7, target7));
