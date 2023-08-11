// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.queue = [];
    }

    add(data){
        this.queue.push(data);
    }

    remove(){
        return this.queue.shift()
    }

    peek(){
       if(this.queue.length > 0){ // 队列顶元素 就是 queue[0]  栈顶为 stack[this.stack.length - 1]
        return this.queue[0]
       }
       return null
    }
}

module.exports = Queue;
