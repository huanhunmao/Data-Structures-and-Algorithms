// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = []
    }

    //  push 添加
    add(data){
        this.children.push(new Node(data));
    }

    // 删除数据  默认 filter 是 没有返回的 需要 手动赋值
    remove(data){
        this.children  =  this.children.filter(node => node.data !== data)
    }
}
 
class Tree {
    constructor(){
        // 树的根节点
        this.root = null
    }

    // traverseBF 广度优先遍历
    // 它从树的根节点开始，逐层遍历树的节点，先访问当前层的所有节点，然后再依次访问下一层的节点。BFS使用队列数据结构来存储待访问的节点
    // BFS：广度优先遍历在寻找最短路径、社交网络中的人际关系搜索、解决迷宫问题等问题中非常有用。
    traverseBF(fn){
        const queue = [this.root] // 用根节点 初始化队列
        while(queue.length){ // 队列不为空 就继续 
            const node = queue.shift() // 取出第一个
            fn(node) // 允许 fn 函数对 node 节点做一些操作 
            queue.push(...node.children)
        }
    }

    // traverseDF 深度优先遍历
        // 深度优先遍历是一种递归的遍历方法，它从树的根节点开始，沿着一个分支遍历到最深层的节点，
    // 然后再返回到上层节点，继续遍历其它分支。DFS可以进一步分为前序、中序和后序遍历
    // DFS：深度优先遍历在搜索路径、查找特定节点、计算树的高度、判断树的结构等问题上有广泛的应用。
    traverseDF(fn){
        const stack = [this.root]
        while(stack.length){
            const node = stack.shift()
            fn(node)
            stack.unshift(...node.children)
        }
    }
}

module.exports = { Tree, Node };
