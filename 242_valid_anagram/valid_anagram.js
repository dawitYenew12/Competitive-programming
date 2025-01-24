/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    charCount = {}
    for (let ch of s) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    for (let ch of t) {
        if(!charCount[ch]) return false;
        charCount[ch]--;
    }

    return true;
};

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// };