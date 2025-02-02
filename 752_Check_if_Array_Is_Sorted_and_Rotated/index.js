/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let dropCount = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // Compare current element with the next, wrapping around using modulo
        if (nums[i] > nums[(i + 1) % n]) {
            dropCount++;
        }
        // If more than one drop, it's not a rotated sorted array
        if (dropCount > 1) {
            return false;
        }
    }
    return true;
};