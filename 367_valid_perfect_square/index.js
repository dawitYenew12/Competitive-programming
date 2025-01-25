/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let sqr = mid * mid;
        if (sqr === num) {
            return true;
        } else if (sqr < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};