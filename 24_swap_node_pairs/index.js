/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let prev = dummy;
    let current = head;
    
    while (current && current.next) {
        let first = current;
        let second = current.next;
        
        first.next = second.next;
        second.next = first;
        prev.next = second;
        
        prev = first;
        current = first.next;
    }
    
    return dummy.next;
}
