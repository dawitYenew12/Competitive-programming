/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 [1,    2,  3,  4,  5]

 */
 var removeNthFromEnd = function(head, n) {
    let current = head;
    let count = 0;
    
    while (current !== null) {
        current = current.next;
        count += 1;
    }
    
    // If we need to remove the head (n == count)
    if (n === count) {
        return head.next;
    }

    let targetIndex = count - n;
    
    current = head;
    let ct = 1;
    
    // Traverse to the node just before the target node
    while (ct < targetIndex) {
        current = current.next;
        ct += 1;
    }
    
    current.next = current.next.next;
    return head;
};
