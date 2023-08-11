// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// 这个整体 逻辑 太好理解了 
class Node {
    constructor(data){
        this.data = data;
        this.left = null
        this.right = null
    }

    // 插入一个 data
    insert(data){
        if(data < this.data){
            if(this.left == null){
                this.left = new Node(data)
            }else{
                this.left.insert(data)
            }
        }else if(data > this.data){
            if(this.right == null){
                this.right = new Node(data)
            }else{
                this.right.insert(data)
            }
        }
    }

    // 树中是否存在 data
    contains(data){
        if(data === this.data){
            return this
        }

        if(data < this.data){ // 在左边找 
            if(this.left == null){
                return null
            }else{
                return this.left.contains(data)
            }
        }else if( data > this.data){ // 在右边找 
            if(this.right == null){
                return null
            }else{
                return this.right.contains(data)
            }
        }
    }
}

module.exports = Node;
