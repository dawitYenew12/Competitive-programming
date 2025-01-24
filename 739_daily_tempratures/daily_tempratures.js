/**
 * @param {number[]} temperatures
 * @return {number[]}
 [73, 74, 75, 71, 69, 72, 76, 73]
   
 */
 var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return result;
};