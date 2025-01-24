/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = [];

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res.push(nums[left] ** 2);
            left++;
        } else {
            res.push(nums[right] ** 2);
            right--;
        }
    }

    return res.reverse();
};