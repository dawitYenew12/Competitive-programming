/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1;
    let leftMaxSofar = 0;
    let rightMaxSofar = 0;
    let totTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMaxSofar = Math.max(leftMaxSofar, height[left]);
            //this calculates if the current position is able to trap water
            totTrapped += leftMaxSofar - height[left];
            left++;
        } else {
            rightMaxSofar = Math.max(rightMaxSofar, height[right]);
            totTrapped += rightMaxSofar - height[right];
            right--;
        }
    }

    return totTrapped;
};