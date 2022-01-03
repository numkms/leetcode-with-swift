/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        
        var result: ListNode? = ListNode();
        
        // linking to result 
        var current = result 
        
        // mutable
        var ln1 = l1;
        var ln2 = l2;
        
        // for "in mind" values
        var carry = 0;
        
        // while we have something to calculate 
        while (ln1 != nil || ln2 != nil || carry > 0) {
            // collecting values
            let v1 = ln1 != nil ? ln1!.val : 0
            let v2 = ln2 != nil ? ln2!.val : 0
            // calculating sum
            let sum = v1 + v2 + carry
            
            // create node  
            current!.next = ListNode(sum % 10)
            // set reminder
            carry = sum / 10
            
            // change loop elements to next
            ln1 = ln1 != nil ? ln1!.next : nil
            ln2 = ln2 != nil ? ln2!.next : nil
            
            // set current to curent next
            current = current!.next
        }
        
        // return needed value
        return result!.next
    }
    
}
