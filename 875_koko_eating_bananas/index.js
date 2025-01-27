/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let totalHours = piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0);

        if (totalHours <= h) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};