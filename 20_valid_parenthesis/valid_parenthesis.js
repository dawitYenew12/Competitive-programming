/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // If it's an opening bracket, push its corresponding closing bracket onto the stack.
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack.
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all the brackets were matched properly.
    return stack.length === 0;
}
