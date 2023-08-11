// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    // 添加第一个
    insertFirst(data){
        const newNode = new Node(data, this.head);
        this.head = newNode
    }

    // 长度 size 
    size(){
        let count = 0
        let current = this.head
        while(current){
            count ++ 
            current = current.next
        }

        return count
    }

    // 拿到第一个 
    getFirst(){
        return this.head
    }

    // 拿到最后一个
    getLast(){
        if(!this.head){
            return null
        }

        let current = this.head
        while(current.next){
            current = current.next
        }

        return current
    }

    // 清除操作
    clear(){
        this.head = null
    }

    // 删除第一个指向下一个 
    removeFirst(){
        if(!this.head){
            return 
        }

        this.head = this.head.next
    }

    // 删除最后一个 
    removeLast(){
        if(!this.head){ // 一项都么有
            return 
        }

        if(!this.head.next){ // 只有一项
            this.head = null 
            return 
        }

        let previous = this.head 
        let current =  this.head.next 

        while(current.next){
            previous = current 
            current = current.next
        }

        previous.next  = null
    }

    // 向尾端 插入 
    insertLast(data){
        const newNode = new Node(data)

        if(!this.head){ // 空链表添加直接指向它 就可 
            this.head = newNode
            return 
        }

        let current = this.head
        while(current.next){ // 不断向后走  把 最后的指针指向 新的
            current = current.next
        }
        current.next = newNode
    }

    // 传入 index 获得当前链表值
    getAt(index){
        let counter = 0
        let current = this.head 
        while(current){
            if(counter === index){ // 找了直接 return 结果 
                return current
            }

            counter ++ 
            current = current.next // 继续往下拉
        }

        return null // 找不到 return null
    }

    // 删除某个 index 
    removeAt(index){
        if(!this.head){ // 空直接返回
            return 
        }

        if(index === 0){ // 删除第一个 直接指针指向下一个
            this,head = this.head.next 
            return 
        }

        const previous = this.getAt(index - 1) // 拿到要删除的前一个
        if(!previous || !previous.next){
            return 
        }
        previous.next = previous.next.next // 将前一个直接指向 要删除的下一个
    }

    // 随机插入
    insertAt(data, index){
        if(!this.head || index === 0){ // 插入在第一个位置
            this.insertFirst()
            return 
        }

        const previous = this.getAt(index - 1) || this.getLast() // 拿到要插入的前一个 
        const newNode  = new Node(data, previous.next) // 将前一个指向 这个插入的 index 上
        previous.next = newNode
    }
}

module.exports = { Node, LinkedList };
