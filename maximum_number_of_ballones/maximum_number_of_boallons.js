/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let count = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    textCount = {}
    for (let char of text){
        if(char in count){
            count[char]++
        }
    }

    count['l'] = Math.floor(count['l'] / 2);
    count['o'] = Math.floor(count['o'] / 2);
    return Math.min(count['b'], count['a'], count['l'], count['o'], count['n']);
};