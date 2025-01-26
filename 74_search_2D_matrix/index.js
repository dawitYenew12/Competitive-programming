/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    let top = 0;
    let bottom = matrix.length - 1;

    // search for the correct row
    while (top <= bottom) {
        let midRow = top + Math.floor((bottom - top) / 2);
        if (matrix[midRow][0] === target) {
            return true;
        } else if (matrix[midRow][0] < target) {
            top = midRow + 1;
        } else {
            bottom = midRow - 1;
        }
    }

    if (bottom < 0) return false;

    let row = bottom;
    let left = 0;
    let right = matrix[row].length - 1;
    // search for target on the identified row
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};