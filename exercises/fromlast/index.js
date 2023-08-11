// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// 双指针 有点迷糊
function fromLast(list, n) {
    let slow  = list.getFirst();
    let fast = list.getFirst();

    // Move the fast pointer n steps ahead 将快指针向前移动 n 步 关键就在这个地方 
    for (let i = 0; i < n; i++) {
        if(!fast.next){
            throw new Error('Not enough nodes in the list')
        }
        fast = fast.next
    }

     // Move both pointers until the fast pointer reaches the end 直到快指针到达末尾
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }

    return slow
}   

module.exports = fromLast;
