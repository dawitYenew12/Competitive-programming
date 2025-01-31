/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n === 0) return [0];
    
    let result = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        const highestBit = 1 << (i - 1);
        const reflected = result.slice().reverse();
        for (let num of reflected) {
            result.push(highestBit | num);
        }
    }
    
    return result;
};