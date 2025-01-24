/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function calPoints(ops) {
    const stack = [];

    for (let op of ops) {
        if (op === "C") {
            stack.pop();
        } else if (op === "D") {
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(parseInt(op));
        }
    }

    return stack.reduce((sum, score) => sum + score, 0);
}
