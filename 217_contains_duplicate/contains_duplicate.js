/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // dict = {}
    // for (i in nums){
    //     if(nums[i] in dict){
    //         return true
    //     } else {
    //         if(i >= (nums.length - 1)){
    //             return false
    //         }
    //         dict[nums[i]] = 1
    //     }
    // }
    numSet = new Set(nums);
    return [...numSet].length < nums.length ? true : false;
};