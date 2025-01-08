/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    indices = {}
    for(let i = 0; i<nums.length; i++) {
        let num = nums[i]
        let diff = target - num;
        if(diff in indices){
            return [indices[diff], i]
        }
        indices[num] = i
    }
};