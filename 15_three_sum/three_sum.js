/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    let n = nums.length;
    let answer = [];

    for (let i = 0; i < n; i++) {
        // Skip numbers greater than 0 since no triplet can sum to 0
        if (nums[i] > 0) {
            break;
        }
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let lo = i + 1, hi = n - 1;

        while (lo < hi) {
            let summ = nums[i] + nums[lo] + nums[hi];
            
            if (summ === 0) {
                answer.push([nums[i], nums[lo], nums[hi]]);
                lo++;
                hi--;

                // Skip duplicates for lo
                while (lo < hi && nums[lo] === nums[lo - 1]) {
                    lo++;
                }
                // Skip duplicates for hi
                while (lo < hi && nums[hi] === nums[hi + 1]) {
                    hi--;
                }
            } else if (summ < 0) {
                lo++;
            } else {
                hi--;
            }
        }
    }

    return answer;
}

