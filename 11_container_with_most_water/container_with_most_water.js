/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maximum = 0;
    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        let newArea = (Math.min(height[r], height[l])) * (r - l);
        maximum = Math.max(maximum, newArea);
        height[r] > height[l] ? l++ : r--;
    }
    return maximum;
};