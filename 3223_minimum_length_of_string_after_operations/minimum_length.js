/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const charFrequency = Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        charFrequency[s.charCodeAt(i) - 97]++;
    }
    
    let totalLength = 0;
    
    for (let frequency of charFrequency) {
        if (frequency > 0) {
            totalLength += frequency % 2 === 0 ? 2 : 1;
        }
    }
    
    return totalLength;
};
