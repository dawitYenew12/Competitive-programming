/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsSet = new Set(jewels);
    return stones.split('').reduce((acc, stone) => {
        return acc + (jewelsSet.has(stone) ? 1 : 0);
    }, 0)
}