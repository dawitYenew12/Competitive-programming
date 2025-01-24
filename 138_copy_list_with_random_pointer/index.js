/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // clone nodes and interlieve them with original nodes
    let current = head;
    while (current) {
        let clone = new _Node(current.val);
        clone.next = current.next;
        current.next = clone;
        current = clone.next;
    }

    // assign random pointers to the cloned nodes
    current = head;
    while (current) {
       if (current.random) {
            current.next.random = current.random.next; 
       }
       current = current.next.next;
    }

    // detach cloned list from original list
    let original = head;
    let cloned_head = head.next;
    let clone = cloned_head;
    while (original) {
        original.next = original.next.next;
        if (clone.next) {
            clone.next = clone.next.next;
        }
        original = original.next
        clone = clone.next;
    }

    return cloned_head;
};