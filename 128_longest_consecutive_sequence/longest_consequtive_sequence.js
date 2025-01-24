/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let maxLength = 0;

    for (let num of nums) {
        if (numSet.has(num)) { 
            numSet.delete(num);
            let low = num - 1;
            while (numSet.has(low)) {
                numSet.delete(low);
                low--;
            }
            let high = num + 1;
            while (numSet.has(high)) {
                numSet.delete(high);
                high++;
            }
            //we use h - l - 1 because high is one step higer than the highest number and low is one step lower than the lowest number
            maxLength = Math.max(maxLength, high - low - 1);
        }
    }
    return maxLength;
};
