/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Array.every() checks if all elements in the given array satisfy the condition
    return cleanedStr.split("").every((char, index) => {
        return char === cleanedStr[cleanedStr.length - 1 - index];
    });
};