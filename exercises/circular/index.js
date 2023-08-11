// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// 1 快慢指针 非常好理解 
function circular(list) {
    let slow = list.getFirst()
    let fast = list.getFirst()

    while(slow && slow.next && fast && fast.next && fast.next){
        slow = slow.next 
        fast = fast.next.next

        if(slow === fast){ // 只要能找到一样的 就   说明有环
            return true
        }
    }

    return false
}

module.exports = circular;
